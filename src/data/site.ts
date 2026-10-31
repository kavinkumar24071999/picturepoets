export const studio = {
  name: "Picture Poets",
  email: "hello@picturepoets.com",
  tagline: "Wedding photographs, kept like a poem.",
  description:
    "Picture Poets photographs weddings, engagements, and the people around them. The edit is short enough to read from the first frame to the last.",
};

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Story = {
  slug: string;
  title: string;
  place: string;
  when: string;
  line: string;
  cover: Photo;
  photos: Photo[];
};

export function storyMeta(story: Story) {
  return [story.place, story.when].filter(Boolean).join(" · ");
}

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export const stories: Story[] = [
  {
    slug: "praveen-rivetha",
    title: "Praveen & Rivetha",
    place: "Emmanuel Church",
    when: "September 2026",
    line: "The evening before, then the morning at the church.",
    cover: {
      src: "/photos/pr-gaze.jpg",
      alt: "A bride in a white saree looks up at the groom under a pavilion.",
      width: 1567,
      height: 1800,
    },
    photos: [
      {
        src: "/photos/pr-jewels.jpg",
        alt: "Close view of a bride's bangles and necklace as she holds the groom's arm.",
        width: 1200,
        height: 1800,
      },
      {
        src: "/photos/pr-rings.jpg",
        alt: "A couple holds their rings toward the camera.",
        width: 1200,
        height: 1800,
      },
      {
        src: "/photos/pr-gaze.jpg",
        alt: "A bride in a white saree looks up at the groom under a pavilion.",
        width: 1567,
        height: 1800,
      },
      {
        src: "/photos/pr-veil.jpg",
        alt: "A groom lifts a bride's veil as she smiles.",
        width: 1200,
        height: 1800,
      },
      {
        src: "/photos/pr-door.jpg",
        alt: "A couple walks out of a doorway, the bride holding yellow flowers.",
        width: 1200,
        height: 1800,
      },
      {
        src: "/photos/pr-walk.jpg",
        alt: "A couple in wedding clothes walks in front of Emmanuel Church.",
        width: 1084,
        height: 1800,
      },
      {
        src: "/photos/pr-gold.jpg",
        alt: "A gold heart pendant rests in an open palm above henna-stained hands.",
        width: 1480,
        height: 1800,
      },
    ],
  },
  {
    slug: "sree-srija",
    title: "Sree & Srija",
    place: "Temple",
    when: "September 2026",
    line: "They stood in front of the temple and let the stone stay in the frame.",
    cover: {
      src: "/photos/ss-hold.jpg",
      alt: "A couple in wedding clothes holds each other in front of a temple.",
      width: 1200,
      height: 1800,
    },
    photos: [
      {
        src: "/photos/ss-bride.jpg",
        alt: "A bride in a turquoise saree stands before a carved temple tower.",
        width: 1200,
        height: 1800,
      },
      {
        src: "/photos/ss-hands.jpg",
        alt: "Two henna-stained hands clasped, a temple tower soft behind them.",
        width: 1451,
        height: 1800,
      },
      {
        src: "/photos/ss-hold.jpg",
        alt: "A couple in wedding clothes holds each other in front of a temple.",
        width: 1200,
        height: 1800,
      },
      {
        src: "/photos/ss-back.jpg",
        alt: "A couple seen from behind, holding hands, with a temple ahead of them.",
        width: 1200,
        height: 1800,
      },
    ],
  },
  {
    slug: "sid-gayu",
    title: "Sid & Gayu",
    place: "",
    when: "May 2025",
    line: "Garlands first. Then the laugh that would not sit still.",
    cover: {
      src: "/photos/sg-seat.jpg",
      alt: "A couple seated in jasmine garlands at their wedding.",
      width: 1800,
      height: 1200,
    },
    photos: [
      {
        src: "/photos/sg-seat.jpg",
        alt: "A couple seated in jasmine garlands at their wedding.",
        width: 1800,
        height: 1200,
      },
      {
        src: "/photos/sg-hands.jpg",
        alt: "A couple's henna-covered hands held together.",
        width: 1351,
        height: 1800,
      },
      {
        src: "/photos/sg-play.jpg",
        alt: "A bride and groom laugh and gesture during a wedding ritual.",
        width: 1800,
        height: 1200,
      },
    ],
  },
];

export const offerings = [
  {
    title: "Weddings",
    text: "The ceremony, the portraits, and the hour after. We stay for the parts people usually miss.",
  },
  {
    title: "Engagements",
    text: "A shorter sitting for two. Enough time for clothes, hands, and one true picture of the pair.",
  },
  {
    title: "Families",
    text: "Parents, siblings, and the child who will not be posed. They belong in the same poem.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Write",
    text: "Tell us the date, the place, and the people you want remembered.",
  },
  {
    n: "02",
    title: "Wander",
    text: "We photograph the day as it happens. Most weddings are a full day. Portraits are one to two hours.",
  },
  {
    n: "03",
    title: "Keep",
    text: "You receive a short edit, ordered so it can be read from the first frame to the last.",
  },
];

export const occasions = [
  { id: "wedding", label: "A wedding" },
  { id: "engagement", label: "An engagement" },
  { id: "family", label: "A family portrait" },
  { id: "other", label: "Something else" },
] as const;

export type OccasionId = (typeof occasions)[number]["id"];
