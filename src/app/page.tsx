import Image from "next/image";
import { Gallery } from "@/components/Gallery";
import { InquiryForm } from "@/components/InquiryForm";
import { Logo } from "@/components/Logo";
import { hero, offerings, steps, studio } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-brand">
          <p className="eyebrow">Wedding photography</p>
          <h1>
            <Logo size="hero" />
          </h1>
          <p className="hero-lead">{studio.tagline}</p>
          <div className="hero-actions">
            <a className="button button-ink" href="#work">
              View the work
            </a>
            <a className="button button-line" href="#book">
              Book a date
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="(max-width: 860px) 100vw, 56vw"
            style={{ objectFit: "cover", objectPosition: "center 28%" }}
          />
        </div>
      </section>

      <section className="manifesto" aria-label="Studio note">
        <p>
          We photograph the wedding as it is lived: the look across a room, the gold in a palm, the laugh
          that breaks the pose. Then we edit it until it reads straight through.
        </p>
      </section>

      <Gallery />

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
