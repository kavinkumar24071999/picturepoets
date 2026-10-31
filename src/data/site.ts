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

export const hero: Photo = {
  src: "/photos/pr-gaze.jpg",
  alt: "A bride in a white saree looks up at the groom under a pavilion.",
  width: 1567,
  height: 1800,
};

export type Story = {
  title: string;
  line: string;
  photos: Photo[];
};

export const stories: Story[] = [
  {
    title: "Praveen & Rivetha",
    line: "A veil, a church door, and gold resting in an open hand.",
    photos: [
      {
        src: "/photos/pr-veil.jpg",
        alt: "A groom lifts a bride's veil as she smiles.",
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
        src: "/photos/pr-door.jpg",
        alt: "A couple walks out of a doorway, the bride holding yellow flowers.",
        width: 1200,
        height: 1800,
      },
      {
        src: "/photos/pr-gold.jpg",
        alt: "A gold heart pendant rests in an open palm above henna-stained hands.",
        width: 1480,
        height: 1800,
      },
      {
        src: "/photos/pr-rings.jpg",
        alt: "A couple holds their rings toward the camera.",
        width: 1200,
        height: 1800,
      },
      {
        src: "/photos/pr-jewels.jpg",
        alt: "Close view of a bride's bangles and necklace as she holds the groom's arm.",
        width: 1200,
        height: 1800,
      },
    ],
  },
  {
    title: "Sree & Srija",
    line: "They stood in front of the temple and let the stone stay in the frame.",
    photos: [
      {
        src: "/photos/ss-bride.jpg",
        alt: "A bride in a turquoise saree stands before a carved temple tower.",
        width: 1200,
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
      {
        src: "/photos/ss-hands.jpg",
        alt: "Two henna-stained hands clasped, a temple tower soft behind them.",
        width: 1451,
        height: 1800,
      },
    ],
  },
  {
    title: "Sid & Gayu",
    line: "Garlands first. Then the laugh that would not sit still.",
    photos: [
      {
        src: "/photos/sg-seat.jpg",
        alt: "A couple seated in jasmine garlands at their wedding.",
        width: 1800,
        height: 1200,
      },
      {
        src: "/photos/sg-play.jpg",
        alt: "A bride and groom laugh and gesture during a wedding ritual.",
        width: 1800,
        height: 1200,
      },
      {
        src: "/photos/sg-hands.jpg",
        alt: "A couple's henna-covered hands held together.",
        width: 1351,
        height: 1800,
      },
    ],
  },
  {
    title: "Before the arrival",
    line: "Color on the skin, and a portrait made while everyone waited.",
    photos: [
      {
        src: "/photos/bless-portrait.jpg",
        alt: "A woman in a purple saree stands with her hands on her hips.",
        width: 1351,
        height: 1800,
      },
      {
        src: "/photos/bless-color.jpg",
        alt: "A woman with turmeric and kumkum on her face rests against the person beside her.",
        width: 1351,
        height: 1800,
      },
      {
        src: "/photos/bless-hands.jpg",
        alt: "Two pairs of hands rest together, stained with turmeric.",
        width: 1800,
        height: 1351,
      },
    ],
  },
  {
    title: "Kept close",
    line: "The frames that hold the day when the wide picture is finished.",
    photos: [
      {
        src: "/photos/mehendi.jpg",
        alt: "A bride surrounded by henna-painted hands raised around her face.",
        width: 1800,
        height: 1547,
      },
      {
        src: "/photos/mirror.jpg",
        alt: "A bride looks at her reflection in a mirror.",
        width: 1662,
        height: 1800,
      },
      {
        src: "/photos/jewels.jpg",
        alt: "A close portrait of a bride's diamond necklace and bangles.",
        width: 1164,
        height: 1800,
      },
      {
        src: "/photos/garland.jpg",
        alt: "A bride rests her head on the groom's shoulder beneath red and yellow garlands.",
        width: 1415,
        height: 1800,
      },
      {
        src: "/photos/reception.jpg",
        alt: "A couple holds hands at a reception, she in a lilac gown and he in a maroon suit.",
        width: 1486,
        height: 1800,
      },
      {
        src: "/photos/monogram.jpg",
        alt: "Two hands meet in front of a gold monogram.",
        width: 1200,
        height: 1800,
      },
      {
        src: "/photos/child.jpg",
        alt: "A small child is held during a wedding, looking toward the camera.",
        width: 1800,
        height: 1351,
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
