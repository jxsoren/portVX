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
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
