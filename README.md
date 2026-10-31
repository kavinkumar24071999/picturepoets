# Picture Poets

A one-page wedding photography site. The visit opens on the Picture Poets mark, then moves through real wedding stories. Booking is the only task we ask of a visitor.

Built with Next.js so it deploys on Vercel with no extra build settings.

## The idea

Galleries make people hunt. This template asks them to read.

1. Land on the marigold mark and one wedding photograph.
2. Scroll the stories: a couple, a line, then their frames.
3. See weddings, engagements, and families.
4. Read how a day goes: write, wander, keep.
5. Send a date, or open the note in a mail app.

The mark is a script wordmark with a camera whose lens is a heart. Swap pictures in `public/photos` and the story titles in `src/data/site.ts`. Change the studio email in that same file.

## Deploy on Vercel

1. Import `kavinkumar24071999/picturepoets` as a new Vercel project.
2. Leave the framework preset on Next.js. Build command `next build`, output handled by Vercel.
3. After the first deploy, set `NEXT_PUBLIC_SITE_URL` to the production URL.
4. To deliver booking notes by email, add `RESEND_API_KEY`, `INQUIRY_TO`, and `INQUIRY_FROM`. `INQUIRY_FROM` must be a sender Resend has verified. Until those are set, the form explains that mail is not connected and offers a mailto link.

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000.
