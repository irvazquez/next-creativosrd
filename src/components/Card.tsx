import React from 'react';

import { ICard } from '@/interfaces';

export const Card = ({ children, extraStyles = '' }: ICard) => {
  return (
    <div
      className={`px-8 py-10 ${
        extraStyles || ''
      } rounded-2xl border-gray-brand`}
    >
      {children}
    </div>
  );
};
