import { MythData } from "./types";
import { categories } from "./categories";
import { fairLaunchMyths } from "./fair-launch";
import { powMyths } from "./pow";
import { smartContractsMyths } from "./smart-contracts";
import { technologyMyths } from "./technology";
import { layer2Myths } from "./layer2";
import { ledgerMyths } from "./ledger";

export { categories } from "./categories";
export type { MythData } from "./types";

export const myths: MythData[] = [
  ...fairLaunchMyths,
  ...powMyths,
  ...smartContractsMyths,
  ...technologyMyths,
  ...layer2Myths,
  ...ledgerMyths
];