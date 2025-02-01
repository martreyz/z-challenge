import "../styles/main.css";

import Image from "next/image";

export const metadata = {
  title: "MBST",
  description: "Mobile Store",
};

const Header = () => {
  return (
    <header>
      <Image src="/assets/logo.svg" alt="Logo" width={77} height={30} />
      <Image
        src="/assets/bagIcon_mobile.svg"
        alt="Bag"
        width={18}
        height={18}
      />
    </header>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
