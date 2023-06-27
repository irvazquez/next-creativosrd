import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FaBars } from 'react-icons/fa';

import Menu from '@/data/Menu.json';
import { IMenuItem } from '@/interfaces';

export const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation('menu');
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="bg-indigo-50 relative flex flex-wrap items-center justify-between border-b-2 border-b-orange-brand bg-gray-light p-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <Link
              className="text-zinc-900 mr-4 inline-block whitespace-nowrap py-1 text-sm font-bold uppercase leading-relaxed"
              href="/"
              hrefLang={router.locale}
            >
              <Image
                src="/images/logos/logo_crd_menu.svg"
                className="w-20"
                alt="Creativos RD Logo"
                width={500}
                height={700}
              />
            </Link>
            <button
              className="text-zinc-900 bg-transparent block cursor-pointer px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              'flex-grow items-center lg:flex' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
              {Menu.length &&
                Menu.map((item: IMenuItem, idx: number) => {
                  if (idx === Menu.length - 1) {
                    return (
                      <li key={item.path} className="nav-item relative">
                        <Link
                          className="text-zinc-900 flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug hover:opacity-75"
                          href={item.path}
                          hrefLang={router.locale}
                        >
                          {t(item.title)}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={item.path} className="nav-item relative pr-4">
                      <a
                        className="text-zinc-900 flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug hover:opacity-75"
                        href={item.path}
                      >
                        {t(item.title)}
                      </a>
                      <div className="absolute right-0 top-1/2 w-4 -rotate-45 border-b-2 border-b-orange-brand"></div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
