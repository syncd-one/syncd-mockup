import "@/app/globals.css";

export const metadata = {
  title: "Mauv",
  description: "Minimize your time in the inbox",
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
