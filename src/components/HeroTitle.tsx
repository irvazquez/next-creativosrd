import Image from 'next/image';

import { IHeroTitle } from '@/interfaces';

export const HeroTitle = ({ title }: IHeroTitle) => (
  <section className="relative h-64 w-full">
    <Image
      src="/images/background/bg_internal_pages.png"
      className="object-cover"
      fill
      alt="Image Background"
    />
    <div className="container relative z-10 mx-auto h-64">
      <h2 className="py-20 text-center font-anna text-5xl uppercase text-gray-brand md:text-7xl">
        {title}
      </h2>
    </div>
  </section>
);
