import { useTranslation } from 'next-i18next';

export interface IService {
  title: ReturnType<typeof useTranslation>['t'];
  text: ReturnType<typeof useTranslation>['t'];
  icon: Icon;
  idx: number;
}

interface Icon {
  src: string;
  alt: string;
}
