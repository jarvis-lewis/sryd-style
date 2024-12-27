import { theme } from 'sryd';

import { AntdToken } from '@/types';

export const useAntdToken = (): AntdToken => {
  const { token } = theme.useToken();

  return token;
};
