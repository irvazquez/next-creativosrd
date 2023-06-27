import React from 'react';

import Head from 'next/head';
// import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '@/components/Layout';
import { Service } from '@/components/Service';
import { IService } from '@/interfaces';
import { StaticProps } from 'types/common';

import ServicesData from '../../data/Services.json';

export default function Metodology() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('metadata.services.title')}</title>
        <meta name="description" content={t('metadata.services.description')} />
      </Head>
      <Layout>
        <section className="my-16 w-full">
          {ServicesData &&
            ServicesData.map(({ icon, text, title }: IService, idx) => (
              <Service
                key={title}
                title={title}
                icon={icon}
                text={text}
                idx={idx}
              />
            ))}
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }: StaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'es', [
        'common',
        'menu',
        'services',
      ])),
    },
  };
};
