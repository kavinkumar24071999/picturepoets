import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { offerings, steps, stories, storyMeta, studio } from "@/data/site";

export default function Home() {
  const featured = stories[0];

  return (
    <>
      <section className="hero-full" id="top">
        <div className="hero-media">
          <Image
            src={featured.cover.src}
            alt={featured.cover.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 28%" }}
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-caption">
          <p className="eyebrow">{storyMeta(featured)}</p>
          <h1>{featured.title}</h1>
          <p className="hero-lead">{studio.tagline}</p>
          <div className="hero-actions">
            <Link className="button button-light" href={`/stories/${featured.slug}`}>
              View this wedding
            </Link>
            <a className="button button-ghost" href="#work">
              All stories
            </a>
          </div>
        </div>
      </section>

      <section className="manifesto" aria-label="Studio note">
        <p>
          We photograph the wedding as it is lived: the look across a room, the gold in a palm, the laugh
          that breaks the pose. Then we edit it until it reads straight through.
        </p>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-head">
          <p className="eyebrow">Work</p>
          <h2 id="work-title">Three weddings</h2>
          <p>Open a name to read that day from the first frame to the last.</p>
        </div>
        <ul className="story-index">
          {stories.map((story) => (
            <li key={story.slug}>
              <Link className="story-card" href={`/stories/${story.slug}`}>
                <span className="story-card-photo">
                  <Image
                    src={story.cover.src}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
                  />
                </span>
                <h3>{story.title}</h3>
                <p>{storyMeta(story)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="band sessions" aria-labelledby="sessions-title">
        <div className="section-head">
          <p className="eyebrow">Sessions</p>
          <h2 id="sessions-title">What we photograph</h2>
        </div>
        <div className="offerings">
          {offerings.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="approach" aria-labelledby="approach-title">
        <div className="section-head">
          <p className="eyebrow">Approach</p>
          <h2 id="approach-title">How a wedding day goes</h2>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step.n}>
              <span className="step-n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="book" id="book" aria-labelledby="book-title">
        <div className="book-intro">
          <p className="eyebrow">Book</p>
          <h2 id="book-title">Begin with a date</h2>
          <p>Tell us the day, the place, and who will be in the pictures. We reply personally.</p>
        </div>
        <InquiryForm />
      </section>
    </>
  );
}
