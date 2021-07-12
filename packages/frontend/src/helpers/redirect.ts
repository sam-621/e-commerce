import { NextRouter } from 'next/router';

export const redirect = (router: NextRouter, path: string = '/'): void => {
  router.push(path);
};
