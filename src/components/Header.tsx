"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={open ? "site-header is-open" : "site-header"}>
      <Link className="logo-link" href="/#top" onClick={close} aria-label="Picture Poets, home">
        <Logo />
      </Link>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-nav" className="nav-links" aria-label="Primary">
        <Link href="/#work" onClick={close}>
          Work
        </Link>
        <Link href="/#approach" onClick={close}>
          Approach
        </Link>
        <Link className="book-link" href="/#book" onClick={close}>
          Book
        </Link>
      </nav>
    </header>
  );
}
