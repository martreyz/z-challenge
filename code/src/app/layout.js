export const metadata = {
  title: "Z Challenge",
  description: "Phone catalog and shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
