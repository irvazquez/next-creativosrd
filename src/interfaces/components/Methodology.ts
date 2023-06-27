import { useTranslation } from 'next-i18next';

export interface IMethodology {
  key: React.Key;
  color: string;
  title: ReturnType<typeof useTranslation>['t'];
  text: ReturnType<typeof useTranslation>['t'];
  icon: Icon;
}

interface Icon {
  src: string;
  alt: string;
}
