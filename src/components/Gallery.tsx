"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { stories, type Photo } from "@/data/site";

type Active = { photo: Photo; title: string };

export function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Active | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
  }, [active]);

  function close() {
    dialogRef.current?.close();
    setActive(null);
  }

  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="section-head">
        <p className="eyebrow">Work</p>
        <h2 id="work-title">Stories</h2>
        <p>Each wedding is edited down to the frames that still read when the day is over.</p>
      </div>

      {stories.map((story, index) => (
        <article className="story-block" key={story.title} aria-labelledby={`story-${index}`}>
          <header className="story-head">
            <p className="story-index">{String(index + 1).padStart(2, "0")}</p>
            <div>
              <h3 id={`story-${index}`}>{story.title}</h3>
              <p>{story.line}</p>
            </div>
          </header>
          <div className="mosaic">
            {story.photos.map((photo) => (
              <button
                className="shot"
                type="button"
                key={photo.src}
                onClick={() => setActive({ photo, title: story.title })}
                aria-label={`Open photograph from ${story.title}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 700px) 100vw, 46vw"
                />
              </button>
            ))}
          </div>
        </article>
      ))}

      <dialog
        className="lightbox"
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        {active ? (
          <figure className="lightbox-figure">
            <button className="lightbox-close" type="button" onClick={close}>
              Close
            </button>
            <Image
              src={active.photo.src}
              alt={active.photo.alt}
              width={active.photo.width}
              height={active.photo.height}
              sizes="94vw"
              style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "78vh" }}
            />
            <figcaption>{active.title}</figcaption>
          </figure>
        ) : null}
      </dialog>
    </section>
  );
}
