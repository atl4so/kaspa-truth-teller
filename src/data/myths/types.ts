export const categories = [
  "Fair Launch",
  "PoW",
  "SC/L2",
  "Tech",
  "Ledger"
] as const;

export interface MythData {
  id: string;
  title: string;
  category: typeof categories[number] | typeof categories[number][];
  claim: string;
  facts: string[];
  references?: string[];
}