import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

const IconLink: FC<IIconLinkProps> = ({ alt, href, title, src, width = 30, height = 30 }) => {
  return (
    <Link href={href}>
      <a href="">
        <Image title={title} alt={alt} src={src} width={width} height={height} />
      </a>
    </Link>
  );
};

interface IIconLinkProps {
  href: string;
  title: string;
  alt: string;
  src: string;
  width?: number;
  height?: number;
}

export default IconLink;
