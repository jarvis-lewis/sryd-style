import { ResponsiveKey } from '@/types';
import { convertBreakpointToResponsive } from '@/utils/responsive';
import { useMemo } from 'react';
import { Grid } from 'sryd';

export const useResponsive = (): Partial<Record<ResponsiveKey, boolean>> => {
  const breakpoints = Grid.useBreakpoint();

  return useMemo(() => convertBreakpointToResponsive(breakpoints), [breakpoints]);
};
