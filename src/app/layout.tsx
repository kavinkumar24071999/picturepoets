import type { Metadata } from "next";
import { Fraunces, Great_Vibes, Outfit } from "next/font/google";
import { Header } from "@/components/Header";
import { studio } from "@/data/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Picture Poets",
    template: "%s · Picture Poets",
  },
  description: studio.description,
  openGraph: {
    title: "Picture Poets",
    description: studio.description,
    images: [{ url: "/photos/pr-gaze.jpg", alt: "A bride looks up at the groom." }],
  },
};

export const viewport = {
  themeColor: "#ffb400",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <footer className="site-footer">
          <p>{studio.name}</p>
          <p>
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
