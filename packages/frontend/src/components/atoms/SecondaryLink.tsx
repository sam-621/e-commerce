import Link from 'next/link';
import { FC } from 'react';

const SecondaryLink: FC<ISecondaryLinkProps> = ({ text, url }) => {
  return (
    <Link href={url}>
      <a href={url} className="SecondaryLink">
        {text}
      </a>
    </Link>
  );
};

interface ISecondaryLinkProps {
  text: string;
  url: string;
}

export default SecondaryLink;
