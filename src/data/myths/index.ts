import { MythData, categories } from './types';
import { fairLaunchMyths } from './fair-launch';
import { powMyths } from './pow';
import { scL2Myths } from './sc-l2';
import { techMyths } from './tech';
import { ledgerMyths } from './ledger';

export { categories } from './types';
export type { MythData } from './types';

export const myths: MythData[] = [
  ...fairLaunchMyths,
  ...powMyths,
  ...scL2Myths,
  ...techMyths,
  ...ledgerMyths
];