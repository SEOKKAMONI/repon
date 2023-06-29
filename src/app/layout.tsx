import Provider from "@/components/common/Provider";
import { ReactNode } from "react";

export const metadata = {
  title: "레펀",
  description: "레퍼런스를 공유하다, 레펀",
};

interface PropsType {
  children: ReactNode;
}

const RootLayout = ({ children }: PropsType) => {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
