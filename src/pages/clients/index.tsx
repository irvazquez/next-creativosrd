import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Card } from '@/components/Card';
import { HeroTitle } from '@/components/HeroTitle';
import Layout from '@/components/Layout';
import Clients from '@/data/Clients.json';
import { Client } from '@/interface/Client';
import { StaticProps } from 'types/common';

export default function ArtGalleryPage() {
  const [currentClient, setCurrentClient] = useState<Client>({
    logo: '',
    name: '',
    information: {
      location: {
        place: '',
        map: '',
      },
      service: '',
      challenge: '',
    },
    infoCards: [
      {
        icon: '',
        title: '',
        text: '',
        width: 0,
        height: 0,
      },
    ],
    infoTexts: {},
  });
  const { t } = useTranslation('common');

  useEffect(() => {
    if (Clients.length) {
      setCurrentClient(Clients[0]);
    }
  }, []);

  console.log({ currentClient });

  return (
    <>
      <Head>
        <title>{t('metadata.clients.title')}</title>
        <meta name="description" content={t('metadata.clients.description')} />
      </Head>
      <Layout>
        <HeroTitle title={t('clients.title')} />
        <section className="mx-auto my-16">
          <div className="relative m-auto h-[200px] w-auto overflow-hidden">
            <ul
              className={`animate-scroll flex w-[calc(500px*${Clients.length})]`}
            >
              {Clients.map((client) => {
                return (
                  <li
                    key={client.name}
                    className="flex justify-center"
                    onClick={() => setCurrentClient(client)}
                  >
                    <Card
                      extraStyles={
                        client.name === currentClient.name
                          ? 'border-dotted border-4'
                          : ''
                      }
                    >
                      <Image
                        src={client.logo}
                        alt={`Logo ${client.name}`}
                        className={`max-h-24 object-contain ${
                          client.name !== currentClient.name ? 'grayscale' : ''
                        }`}
                        width={500}
                        height={500}
                      />
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="container mx-auto my-16">
          <div className="flex flex-wrap items-center justify-center">
            <div className="relative flex w-5/12 p-20">
              <Image
                src={currentClient.information.location.map}
                alt={`Map of ${currentClient.name}`}
                width={300}
                height={300}
                className="mx-auto max-w-full"
              />
            </div>
            <div className="relative flex w-5/12 flex-col p-20">
              {currentClient.information.location.flag && (
                <Image
                  className="my-5"
                  src={currentClient.information.location.flag}
                  alt={`Flag of ${currentClient.information.location.place}`}
                  width={100}
                  height={69}
                />
              )}
              <p className="text-xl">
                <span className="font-bold">{t('clients.location')}: </span>
                {currentClient.information.location.place}
              </p>
              <p className="text-xl">
                <span className="font-bold">{t('clients.service')}: </span>
                {currentClient.information.service}
              </p>
              <p className="text-xl">
                <span className="font-bold">{t('clients.challenge')}: </span>
                {currentClient.information.challenge}
              </p>
            </div>
            {currentClient.infoCards.length &&
              currentClient.infoCards.map(
                ({ icon, width, height, title, text }, idx) => (
                  <div
                    key={`infoCard-${idx}`}
                    className="relative flex h-full w-5/12 p-20"
                  >
                    <Card extraStyles="bg-gray-light min-h-fit h-[341px] w-full text-center">
                      <Image
                        src={icon}
                        className="mx-auto p-5"
                        alt="icon"
                        width={width}
                        height={height}
                      />
                      <p className="my-5 font-gotham text-5xl font-extrabold text-orange-brand">
                        {title}
                      </p>
                      <p className="text-2xl text-gray-brand">{text}</p>
                    </Card>
                  </div>
                ),
              )}
            {currentClient.infoTexts && (
              <div className="w-full text-center text-gray-brand">
                {currentClient.infoTexts?.title && (
                  <h3 className="font-gotham text-8xl font-extrabold">
                    {currentClient.infoTexts.title}
                  </h3>
                )}
                {currentClient.infoTexts?.subtitle && (
                  <h5 className="font-gotham text-5xl font-extrabold">
                    {currentClient.infoTexts.subtitle}
                  </h5>
                )}
                {currentClient.infoTexts?.p && (
                  <p className="font-gotham text-3xl font-extrabold">
                    {currentClient.infoTexts.p}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
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
