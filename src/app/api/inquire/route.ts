import { occasions, type OccasionId } from "@/data/site";

type Payload = {
  name?: string;
  email?: string;
  occasion?: string;
  when?: string;
  note?: string;
  company?: string;
};

const occasionIds = new Set<string>(occasions.map((item) => item.id));

function clean(value: unknown, max: number) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false, message: "Send the form as JSON." }, { status: 400 });
  }

  if (clean(payload.company, 80)) {
    return Response.json({ ok: true, delivered: true });
  }

  const name = clean(payload.name, 80);
  const email = clean(payload.email, 120);
  const occasion = clean(payload.occasion, 40);
  const when = clean(payload.when, 80);
  const note = String(payload.note || "").trim().slice(0, 800);
  const fields: Record<string, string> = {};

  if (name.length < 2) fields.name = "Add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fields.email = "Add an email we can reply to.";
  if (!occasionIds.has(occasion)) fields.occasion = "Choose a session.";
  if (note.length > 800) fields.note = "Keep the note under 800 characters.";

  if (Object.keys(fields).length) {
    return Response.json({ ok: false, message: "Check the highlighted fields.", fields }, { status: 400 });
  }

  const label = occasions.find((item) => item.id === (occasion as OccasionId))?.label || occasion;
  const key = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO;
  const from = process.env.INQUIRY_FROM;

  if (!key || !to || !from) {
    return Response.json({ ok: true, delivered: false });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Session inquiry from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Session: ${label}`, `When: ${when || "Flexible"}`, "", note].join(
        "\n",
      ),
    }),
  });

  if (!response.ok) {
    return Response.json(
      { ok: false, message: "The mail service did not accept the note." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true, delivered: true });
}
