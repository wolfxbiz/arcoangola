import "./globals.css";

// [locale]/layout.tsx owns <html> and <body> — this root layout just passes through
// children so Next.js can find a layout file and import global CSS.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
