import React from 'react';

import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '@/components/Layout';
import { Methodology } from '@/components/Methodology';
import MethodologyData from '@/data/Methodology.json';
import { StaticProps } from 'types/common';

export default function Metodology() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('metadata.metodology.title')}</title>
        <meta
          name="description"
          content={t('metadata.metodology.description')}
        />
      </Head>
      <Layout>
        <section className="my-16 h-screen w-full">
          <div className="relative h-full w-full">
            <Image
              src="/images/background/brush.png"
              className="bg-right object-cover"
              fill
              alt="Image of brush"
            />
            <div className="flex h-full flex-wrap justify-center">
              <div className="relative z-10 flex h-full flex-1 items-center justify-center">
                <h3 className="text-left font-anna text-8xl font-extrabold uppercase text-gray-brand">
                  Metodologia
                  <br />
                  de trabajo
                </h3>
              </div>
              <div className="relative z-10 flex h-full flex-1 items-center">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/logos/crd.svg"
                    className="object-fill"
                    style={{
                      filter: 'contrast(200%) opacity(55%) hue-rotate(115deg)',
                    }}
                    fill
                    alt="Logo Creativos RD"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-32 mt-16">
          <div className="flex flex-wrap gap-y-20">
            {MethodologyData?.map((method) => {
              return (
                <Methodology
                  key={method.name}
                  color={method.color}
                  name={method.name}
                  title={method.title}
                  text={method.text}
                  icon={method.icon}
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
        'methodology',
      ])),
    },
  };
};
