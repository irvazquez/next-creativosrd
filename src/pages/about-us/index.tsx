import React from 'react';

import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '@/components/Layout';

export default function AboutPage() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('metadata.about-us.title')}</title>
        <meta name="description" content={t('metadata.about-us.description')} />
      </Head>
      <Layout>About</Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }: StaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', ['common', 'menu'])),
    },
  };
};
