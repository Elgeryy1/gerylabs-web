import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { identity, contact, skills } from "@/content/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SITE_URL = "https://gerylabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${identity.name} | Técnico de Sistemas, Virtualización y Soporte IT`,
    template: `%s | ${identity.name}`,
  },
  description:
    "Portfolio de Gerard Alvear, técnico de sistemas especializado en soporte IT, redes, virtualización, automatización y desarrollo de proyectos tecnológicos.",
  applicationName: "gerylabs",
  authors: [{ name: identity.name, url: SITE_URL }],
  creator: identity.name,
  keywords: [
    identity.name,
    "técnico de sistemas",
    "soporte IT",
    "helpdesk",
    "infraestructura",
    "redes",
    "virtualización",
    "Hyper-V",
    "QEMU/KVM",
    "Docker",
    "Linux",
    "Windows Server",
    "automatización",
    "portfolio",
    "Barcelona",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "gerylabs — Gerard Alvear",
    title: `${identity.name} | Técnico de Sistemas, Virtualización y Soporte IT`,
    description:
      "Técnico de sistemas especializado en soporte IT, redes, virtualización, automatización y desarrollo de proyectos.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${identity.name} | Técnico de Sistemas y Soporte IT`,
    description:
      "Técnico de sistemas: soporte IT, redes, virtualización, automatización y proyectos propios.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0b0c14",
  colorScheme: "dark",
};

function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: identity.name,
    jobTitle: "Técnico de sistemas y soporte IT",
    description: identity.tagline,
    url: SITE_URL,
    email: `mailto:${contact.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ripollet",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
    sameAs: [contact.github, contact.linkedin],
    knowsAbout: skills.flatMap((g) => g.items).slice(0, 30),
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "gerylabs — Gerard Alvear",
    url: SITE_URL,
    inLanguage: "es-ES",
    author: { "@type": "Person", name: identity.name },
  };
  const json = JSON.stringify([person, website]).replace(/</g, "\\u003c");
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground" suppressHydrationWarning>
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              "<style>[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}</style>",
          }}
        />
        <a
          href="#contenido"
          className="sr-only rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
        >
          Saltar al contenido
        </a>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
