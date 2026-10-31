"use client";

import { useState, type FormEvent } from "react";
import { occasions, studio, type OccasionId } from "@/data/site";

type Fields = {
  name?: string;
  email?: string;
  occasion?: string;
  note?: string;
};

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "preview"; mailto: string }
  | { kind: "error"; message: string; fields?: Fields };

export function InquiryForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      occasion: String(data.get("occasion") || "") as OccasionId,
      when: String(data.get("when") || ""),
      note: String(data.get("note") || ""),
      company: String(data.get("company") || ""),
    };

    setStatus({ kind: "sending" });

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await response.json()) as {
        ok?: boolean;
        delivered?: boolean;
        message?: string;
        fields?: Fields;
      };

      if (!response.ok || !body.ok) {
        setStatus({
          kind: "error",
          message: body.message || "Check the form and try again.",
          fields: body.fields,
        });
        return;
      }

      if (body.delivered) {
        setStatus({ kind: "sent" });
        form.reset();
        return;
      }

      const occasion =
        occasions.find((item) => item.id === payload.occasion)?.label || payload.occasion;
      const text = [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Session: ${occasion}`,
        `When: ${payload.when || "Flexible"}`,
        "",
        payload.note,
      ].join("\n");
      const mailto = `mailto:${studio.email}?subject=${encodeURIComponent(
        `Session inquiry from ${payload.name}`,
      )}&body=${encodeURIComponent(text)}`;
      setStatus({ kind: "preview", mailto });
    } catch {
      setStatus({
        kind: "error",
        message: "The note could not be sent. You can email us directly.",
      });
    }
  }

  const fields = status.kind === "error" ? status.fields : undefined;

  return (
    <form className="inquiry" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">
          <span>Name</span>
        </label>
        <input id="name" name="name" autoComplete="name" required aria-invalid={Boolean(fields?.name)} />
        {fields?.name ? <p className="field-error">{fields.name}</p> : null}
      </div>
      <div className="field">
        <label htmlFor="email">
          <span>Email</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(fields?.email)}
        />
        {fields?.email ? <p className="field-error">{fields.email}</p> : null}
      </div>
      <div className="field">
        <label htmlFor="occasion">
          <span>What should we photograph?</span>
        </label>
        <select id="occasion" name="occasion" defaultValue="couples" required>
          {occasions.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="when">
          <span>When feels right?</span>
        </label>
        <input id="when" name="when" autoComplete="off" placeholder="A weekend in December, or flexible" />
      </div>
      <div className="field">
        <label htmlFor="note">
          <span>A few words</span>
        </label>
        <textarea id="note" name="note" aria-invalid={Boolean(fields?.note)} />
        {fields?.note ? <p className="field-error">{fields.note}</p> : null}
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="button button-ink" type="submit" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending" : "Send the note"}
      </button>
      <p className="fine">We use this only to reply about your session.</p>
      {status.kind === "sent" ? (
        <p className="notice" role="status">
          Sent. We will write back soon.
        </p>
      ) : null}
      {status.kind === "preview" ? (
        <p className="notice" role="status">
          Email delivery is not connected on this deploy yet.{" "}
          <a href={status.mailto}>Open this note in your mail app</a>, or add Resend keys on Vercel.
        </p>
      ) : null}
      {status.kind === "error" ? (
        <p className="notice" role="alert">
          {status.message}{" "}
          <a href={`mailto:${studio.email}`}>Email {studio.email}</a>
        </p>
      ) : null}
    </form>
  );
}
