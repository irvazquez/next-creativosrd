import React, { FC } from 'react';

import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { IService } from '@/interfaces';

export const Service: FC<Props> = ({
  icon,
  text,
  title,
  idx = 0,
}: IService) => {
  const { t } = useTranslation('services');
  return (
    <>
      <div className="flex w-1/2 items-center justify-end gap-x-10 text-right">
        <h4
          className={`w-full max-w-fit font-anna text-5xl font-normal uppercase text-orange-brand ${
            idx / 2 === 0 ? 'text-left' : 'text-right'
          }`}
          dangerouslySetInnerHTML={{ __html: t(title) }}
        ></h4>
        <Image
          src={icon.src}
          className="w-14"
          width={50}
          height={50}
          alt={icon.alt}
        />
      </div>
      <div className="flex w-1/2 items-center">
        <p
          className="px-10 text-3xl"
          dangerouslySetInnerHTML={{ __html: t(text) }}
        ></p>
      </div>
    </>
  );
};
