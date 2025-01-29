export const metadata = {
  title: "MBST",
  description: "Mobile Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
