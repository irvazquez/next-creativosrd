import { useTranslation } from 'next-i18next';

export interface IMenuItem {
  title: ReturnType<typeof useTranslation>['t'];
  path: string;
}

export interface IMenu {
  menu: IMenuItem[];
}
