import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BsStarFill } from 'react-icons/bs';

import { Card } from '@/components/Card';
import Layout from '@/components/Layout';
import { Partners } from '@/components/Partners';
import { StaticProps } from 'types/common';

export default function HomePage() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('metadata.home.title')}</title>
        <meta name="description" content={t('metadata.home.description')} />
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
              <div className="relative z-10 flex h-full flex-1 items-center">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/logos/logo_full_dark.svg"
                    className="object-fill"
                    fill
                    alt="Logo Creativos RD"
                  />
                </div>
              </div>
              <div className="relative z-10 flex h-full flex-1 items-center">
                <h3 className="text-left font-anna text-8xl uppercase text-white">
                  Create revamp
                  <br />& disrupt
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-10 text-center">
          <div className="mx-auto max-w-screen-2xl">
            <h3 className="text-5xlwin font-gotham font-black uppercase text-gray-text md:text-8xl">
              We don&apos;t seek innovation,
              <br />
              it&apos;s in our dna.
              <br />
              <span className="text-orange-brand">
                Pure creativity runs through our veins
              </span>{' '}
              and design beats in
              <br />
              our hearts.
            </h3>
          </div>
        </section>

        <section className="my-16 h-screen w-full">
          <div className="relative h-full w-full">
            <Image
              src="/images/background/na_line.png"
              className="bg-left object-cover opacity-75"
              fill
              alt="Image of North America"
            />
            <div className="container relative mx-auto flex flex-wrap justify-end p-20">
              <div className="relative my-10 flex h-5 w-3/4 items-end">
                <Image
                  src="/images/background/plus.png"
                  className="object-cover"
                  fill
                  alt="Plus pattern"
                />
              </div>
              <p className="text-right font-gotham text-5xl font-black text-gray-text">
                Rankeados por CLUTCH, la plataforma
                <br />
                más importante de valoraciones y comentarios en
                <br />
                Estados Unidos, nos ubican en el{' '}
                <span className="text-orange-brand">
                  Top de las mejores
                  <br />
                  agencias
                </span>{' '}
                de México y LatAm.
              </p>
            </div>
            <div className="mt-20 bg-gray-light py-10 lg:mt-36">
              <div className="justify-arround container relative mx-auto flex flex-wrap lg:flex-row ">
                <div className="flex w-1/2 justify-center">
                  <Card extraStyles="border-dotted border-4">
                    <div className="flex items-start justify-center">
                      <h3 className="text-7xl font-bold text-gray-brand">
                        4.8
                      </h3>
                      <span className="text-xl font-bold text-orange-brand">
                        &#40;14&#41;
                      </span>
                    </div>
                    <div className="flex min-w-full justify-center">
                      <BsStarFill className="px-1 text-4xl text-orange-brand" />
                      <BsStarFill className="px-1 text-4xl text-orange-brand" />
                      <BsStarFill className="px-1 text-4xl text-orange-brand" />
                      <BsStarFill className="px-1 text-4xl text-orange-brand" />
                      <BsStarFill className="px-1 text-4xl text-orange-brand" />
                    </div>
                    <Image
                      src="/images/logos/clutch-co-vector-logo.svg"
                      className="mx-auto mt-2 w-32"
                      width={500}
                      height={700}
                      alt="Clutch logo"
                    />
                  </Card>
                </div>
                <div className="flex w-1/2 justify-center">
                  <Image
                    src="/images/logos/clutch-awards.png"
                    className="absolute hidden lg:block lg:max-w-sm lg:translate-y-[-10%] xl:max-w-full xl:translate-y-[-19%]"
                    alt="Clutch awards"
                    width={500}
                    height={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Partners />
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
