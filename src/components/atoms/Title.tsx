import { useRouter } from 'next/router';
import { OPTIONAL_TITLES } from '@Helpers/title';

const Title = () => {
  const router = useRouter();
  const title: string = OPTIONAL_TITLES[router.pathname];

  return (
    <>
      <h1 className="Title" role="heading">
        {title}
      </h1>
    </>
  );
};

export default Title;
