/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next';

import type common from '../public/locales/en/common.json';
import type menu from '../public/locales/en/menu.json';
import type methodology from '../public/locales/en/methodology.json';
import type services from '../public/locales/en/services.json';

interface I18nNamespaces {
  common: typeof common;
  menu: typeof menu;
  methodology: typeof methodology;
  services: typeof services;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: I18nNamespaces;
    returnNull: false;
    returnEmptyStrig: false;
  }
}
