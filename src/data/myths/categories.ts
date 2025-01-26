export const categories = [
  "Fair Launch and DAGLabs",
  "Proof-of-Work (PoW)",
  "Smart Contracts",
  "Technology",
  "Layer 2",
  "Ledger"
] as const;

export type Category = typeof categories[number];