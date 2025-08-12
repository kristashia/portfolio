import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
