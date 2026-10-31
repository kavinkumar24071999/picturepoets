"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/data/site";

export function StoryFrames({ title, photos }: { title: string; photos: Photo[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const active = index === null ? null : photos[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
  }, [active]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setIndex((current) => (current === null ? current : (current + 1) % photos.length));
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) =>
          current === null ? current : (current - 1 + photos.length) % photos.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, photos.length]);

  function close() {
    dialogRef.current?.close();
    setIndex(null);
  }

  function step(delta: number) {
    setIndex((current) => (current === null ? current : (current + delta + photos.length) % photos.length));
  }

  return (
    <>
      <ol className="frame-list">
        {photos.map((photo, photoIndex) => (
          <li key={photo.src}>
            <button
              className="shot"
              type="button"
              onClick={() => setIndex(photoIndex)}
              aria-label={`Open frame ${photoIndex + 1} of ${photos.length}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 800px) 100vw, 920px"
                style={{ width: "100%", height: "auto" }}
              />
            </button>
          </li>
        ))}
      </ol>

      <dialog
        className="lightbox"
        ref={dialogRef}
        aria-label={title}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        {active && index !== null ? (
          <figure className="lightbox-figure">
            <div className="lightbox-tools">
              <button type="button" onClick={() => step(-1)}>
                Previous
              </button>
              <button type="button" onClick={() => step(1)}>
                Next
              </button>
              <button type="button" onClick={close}>
                Close
              </button>
            </div>
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="94vw"
              style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "78vh" }}
            />
            <figcaption>
              {title}
              <span>
                {index + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
        ) : null}
      </dialog>
    </>
  );
}
