import "./globals.css";

export const metadata = {
  title: "Simanto - Marketing Agency",
  description: "Premium Marketing Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}