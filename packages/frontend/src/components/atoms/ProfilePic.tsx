import { FC } from 'react';
import Image from 'next/image';

const ProfilePic: FC<IProfilePicProps> = ({ isLogged, profilePic }) => {
  const DEFAULT_USER_IMAGE = '/images/user.svg';
  return (
    <>
      {isLogged ? (
        <Image src={profilePic} width={30} height={30} />
      ) : (
        <Image src={DEFAULT_USER_IMAGE} width={30} height={30} />
      )}
    </>
  );
};

interface IProfilePicProps {
  isLogged: boolean;
  profilePic: string;
}

export default ProfilePic;
