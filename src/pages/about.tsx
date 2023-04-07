import React from 'react'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Navbar } from '@/components/Navbar'

import Menu from '@/data/Menu.json'

export default function AboutPage(props: any) {
  console.log({ props });
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar Menu={Menu} />
    </>
  )
}

export const getStaticProps = async ({ locale }: any) => {
  console.log({ locale });
  return ({
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'menu'
      ])),
    },
  })
}
