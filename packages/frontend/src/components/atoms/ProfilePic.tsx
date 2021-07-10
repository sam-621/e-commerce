import { FC } from 'react';

const ProfilePic: FC<IProfilePicProps> = ({ isLogged, profilePic }) => {
  const DEFAULT_USER_IMAGE = '/images/user.svg';
  return (
    <>
      {isLogged ? (
        <img src={profilePic} width={30} height={30} />
      ) : (
        <img src={DEFAULT_USER_IMAGE} width={30} height={30} />
      )}
    </>
  );
};

interface IProfilePicProps {
  isLogged: boolean;
  profilePic: string;
}

export default ProfilePic;
