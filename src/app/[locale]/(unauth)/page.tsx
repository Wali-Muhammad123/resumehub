import dynamic from 'next/dynamic';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Navbar } from '@/templates/Navbar';

const ResumeGenerator = dynamic(() => import('@/components/ResumeGenerator'), {
  ssr: false,
});

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function IndexPage(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Navbar />
      <Hero />
      {/* <Features /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      {/* <CTA /> */}
      <ResumeGenerator />
      <Footer />
    </>
  );
}
