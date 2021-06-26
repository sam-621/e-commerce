import Link from 'next/link';
import { FC } from 'react';

const PrimaryLink: FC<IPrimaryLinkProps> = ({ text, url }) => {
  return (
    <Link href={url}>
      <a href="" className="PrimaryButton PrimaryLink">
        {text}
      </a>
    </Link>
  );
};

interface IPrimaryLinkProps {
  text: string;
  url: string;
}

export default PrimaryLink;
