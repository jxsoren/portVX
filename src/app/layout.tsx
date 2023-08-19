import { Providers } from "./providers";

export const metadata = {
  title: "Josh Sorensen | Software Developer",
  description: "Josh Sorensen's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ overflowX: "hidden" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
