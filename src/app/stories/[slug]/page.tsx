import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryFrames } from "@/components/StoryFrames";
import { getStory, stories, storyMeta } from "@/data/site";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return {
    title: story.title,
    description: `${story.title}. ${storyMeta(story)}. ${story.line}`,
    openGraph: {
      images: [{ url: story.cover.src, alt: story.cover.alt }],
    },
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const index = stories.findIndex((item) => item.slug === story.slug);
  const next = stories[(index + 1) % stories.length];

  return (
    <article className="story-page">
      <header className="story-page-head">
        <p className="eyebrow">{storyMeta(story)}</p>
        <h1>{story.title}</h1>
        <p>{story.line}</p>
      </header>
      <StoryFrames title={story.title} photos={story.photos} />
      <footer className="story-end">
        <Link href={`/stories/${next.slug}`}>Next story · {next.title}</Link>
        <Link href="/#book">Book a date</Link>
      </footer>
    </article>
  );
}
