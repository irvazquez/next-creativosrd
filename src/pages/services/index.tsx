import React from 'react';

import Head from 'next/head';
import Image from 'next/image';
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
        <section>
          <div className="">
            <Image src="/images/background/bgServices.svg" width={200} height={200} alt="Background Service" className="w-1/2 mx-auto h-96" />
          </div>
        </section>
        <section className="container mx-auto mb-16 mt-[-120px] w-full">
          <div className="flex flex-wrap gap-y-10">
            {ServicesData && ServicesData.map((service: IService, idx) => {
                return (
                  <Service
                    key={service.title}
                    title={service.title}
                    icon={service.icon}
                    text={service.text}
                    idx={idx}
                  />
                );
              })}
          </div>
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
