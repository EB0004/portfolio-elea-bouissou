"use client";

import { useState } from "react";

type GalleryItem = {
  src?: string;
  alt?: string;
  label?: string;
  detail?: string;
};

type GalleryRevealProps = {
  projectId: string;
  projectTitle: string;
  items: GalleryItem[];
};

export default function GalleryReveal({
  projectId,
  projectTitle,
  items,
}: GalleryRevealProps) {
  const [open, setOpen] = useState(false);
  const galleryId = `${projectId}-gallery`;

  return (
    <div className={`project-gallery ${open ? "is-open" : ""}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={galleryId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Refermer les coulisses" : "Voir les coulisses"} <span>↻</span>
      </button>
      {open && (
        <div
          className={`gallery-back gallery-${projectId}`}
          id={galleryId}
          aria-label={`Coulisses du projet ${projectTitle}`}
        >
          {items.map((item, index) => (
            <figure
              className={item.src ? "gallery-photo" : "gallery-insight"}
              key={item.src ?? `${item.label}-${index}`}
            >
              {item.src ? (
                <img src={item.src} alt={item.alt ?? ""} />
              ) : (
                <>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <strong>{item.label}</strong>
                  <span>{item.detail}</span>
                </>
              )}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
