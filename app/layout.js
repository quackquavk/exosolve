import "./globals.css";
import { Geologica } from "next/font/google";

const geologica = Geologica({ subsets: ["latin"] });

export const metadata = {
  title: "Exosolve",
  description:
    "We speed up AI adoption and ramp up engineering and design teams to help you lead your industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={geologica.className}>{children}</body>
    </html>
  );
}
