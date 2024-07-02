import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollDown from "../../components/animation/scrollDown/scrollDown";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Introduction",
  description: "My Introduction",
};

export default function IntroductionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="bg-neutral-950">
      <div className={`${inter.className} `}>
        {children}

        <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-transparent z-50'>
          <ScrollDown />
        </div>


      </div>
    </div>
  );
}
