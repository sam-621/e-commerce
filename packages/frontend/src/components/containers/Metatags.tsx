import Head from 'next/head';
import { FC } from 'react';

const Metatags: FC<MetatagsProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="Rogelio Samuel Moreno Corrales" />
      <meta name="keywords" content={keywords} />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href="/images/logo.svg" />
    </Head>
  );
};

interface MetatagsProps {
  title: string;
  description: string;
  keywords: string;
}

export default Metatags;
