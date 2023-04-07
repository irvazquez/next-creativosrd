import { useState } from 'react'
import { useRouter } from 'next/router'

import { useTranslation, Trans } from 'next-i18next'

import { FaBars } from 'react-icons/fa'
// import { MenuItemInterface } from '../interface/components/Navbar'

// import logoMenu from '../resources/images/logo_crd.svg'

export const Navbar = (props: any) => {
  const { Menu } = props;
  const router = useRouter();
  // @ts-ignore
  const { t } = useTranslation('menu')
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between p-2 bg-indigo-50 border-b-2 border-b-orange-brand">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-zinc-900"
              href="#pablo"
            >
              {/* <img className="h-8" src={logoMenu} alt="Logo Creativos RD" /> */}
            </a>
            <button
              className="text-zinc-900 cursor-pointer text-xl leading-none px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {Menu.length && Menu.map((item: any, idx: any) => {
                if (idx === Menu.length - 1) {
                  return (
                    <li key={item.path} className="relative nav-item">
                      <a
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-900 hover:opacity-75"
                        href={item.path}
                      >
                        {t(item.title)}
                      </a>
                    </li>
                  )
                }
                return (
                <li key={item.path} className="relative nav-item pr-4">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-zinc-900 hover:opacity-75"
                    href={item.path}
                  >
                    {t(item.title)}
                  </a>
                  <div className="absolute border-b-2 border-b-orange-brand -rotate-45 w-4 right-0 top-1/2"></div>
                </li>  
              )})}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
