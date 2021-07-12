import { NextRouter } from 'next/router';

export const redirect = (router: NextRouter, path: string = '/') => {
  router.push(path);
};
