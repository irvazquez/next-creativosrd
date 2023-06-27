import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { IMethodology } from '@/interfaces';

export const Methodology = (methodology: IMethodology) => {
  const { t } = useTranslation('methodology');
  return (
    <>
      <div className="flex w-1/2 items-center justify-end gap-x-10 text-right">
        <div
          className="h-7 min-w-full"
          style={{
            backgroundColor: methodology.color,
          }}
        ></div>
        <p className="w-full max-w-fit font-gotham text-5xl font-normal text-gray-brand">
          {t(methodology.title)}
        </p>
        <Image
          src={methodology.icon.src}
          className="w-14"
          width={50}
          height={50}
          alt={methodology.icon.alt}
        />
      </div>
      <div className="flex w-1/2 items-center">
        <p
          className="px-10 text-3xl"
          dangerouslySetInnerHTML={{ __html: t(methodology.text) }}
        ></p>
      </div>
    </>
  );
};
