import React from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { HeroTitle } from '@/components/HeroTitle';
import Layout from '@/components/Layout';
import ArtGallery from '@/data/ArtGallery.json';
import { StaticProps } from 'types/common';

export default function ArtGalleryPage() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('metadata.art-gallery.title')}</title>
        <meta
          name="description"
          content={t('metadata.art-gallery.description')}
        />
      </Head>
      <Layout>
        <HeroTitle title={t('art-gallery.title')} />
        <div className="container mx-auto my-20">
          <div className="flex flex-wrap items-center">
            {ArtGallery.map((art) => {
              return (
                <div
                  key={art.alt}
                  className="flex w-full flex-col items-center p-10 md:w-1/2"
                >
                  <Image
                    src={art.src}
                    alt={art.alt}
                    className="w-full"
                    width={500}
                    height={700}
                  />
                  <Link
                    href={art.download}
                    download={art.download}
                    target="_blank"
                  >
                    <Image
                      src="/images/icons/download.svg"
                      className="w-12"
                      width={500}
                      height={700}
                      alt="Download icon"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
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
