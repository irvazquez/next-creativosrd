import React, { FC } from 'react';

import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { IService } from '@/interfaces';

export const Service: FC<Props> = ({
  icon,
  text,
  title,
  idx,
}: IService) => {
  const { t } = useTranslation('services');
  const handleStyles = (idx: number): string => {
    if (idx === 6) {
      return 'justify-center items-center text-center max-w-5xl mx-auto grow';
    }
    if (idx % 2 === 0) {
      return 'w-1/2 text-left';
    }

    return 'justify-end items-end text-right w-1/2';
  }

  return (
    <div className={`flex flex-col flex-wrap gap-y-5 p-10 ${handleStyles(idx)}`}>
      <div className={`relative flex ${handleStyles(idx)}`}>
        <Image
          src={icon.src}
          className="content-end"
          width={150}
          height={150}
          alt={icon.alt}
        />
      </div>
      <h4
        className="
          pb-5
          border-b-2
          border-gray-brand
          border-dashed
          font-anna
          font-normal
          uppercase
          text-6xl
          text-orange-brand
          w-3/4
        "
        dangerouslySetInnerHTML={{ __html: t(`${title}`) }}
      ></h4>
      <p
        className="text-3xl"
        dangerouslySetInnerHTML={{ __html: t(text) }}
      ></p>
    </div>
  );
};
