import type { ReactNode } from "react";

import { Badge } from "../ui/Badge";

type SectionIntroProps = {
  badge: string;
  title: string;
  children: ReactNode;
};

export function SectionIntro({ badge, title, children }: SectionIntroProps) {
  return (
    <div>
      <Badge>{badge}</Badge>
      <h2 className="font-heading mt-5 text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-7 text-black md:text-lg md:leading-8">
        {children}
      </div>
    </div>
  );
}
