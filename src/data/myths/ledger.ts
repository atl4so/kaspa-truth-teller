import { MythData } from "./types";

export const ledgerMyths: MythData[] = [
  {
    id: "ledger-1",
    title: "Ledger History Status",
    category: "Ledger",
    claim: "Missing ledger history data means the current state of Kaspa cannot be verified from genesis.",
    facts: [
      "Ledger pruning is essential for Kaspa's long-term decentralization and sustainability.",
      "The genesis block is hardcoded directly into the Kaspa node software with an empty UTXO set.",
      "Kaspa nodes store a 'proof-of-genesis' verifying the current state derives from the genesis block.",
      "Forging the proof-of-genesis would require computational work equivalent to creating the entire ledger history.",
      "Chain integrity can be verified through checkpoint blocks growing by one header per day.",
      "The MLS protocol uses NiPoPoW to succinctly prove chain weight, inherently prohibiting pre-mining attacks."
    ]
  },
  {
    id: "ledger-2",
    title: "Hardware Wallet Security",
    category: "Ledger",
    claim: "The missing ledger data is intentionally hidden to conceal evidence of wrongdoing.",
    facts: [
      "It's impossible to definitively prove non-possession of coins in any permissionless cryptocurrency.",
      "Even with a complete ledger, hidden coin holdings are virtually impossible to disprove.",
      "The current ledger reconstruction process relies on data from various users.",
      "No single entity controls which parts of the history are available.",
      "The argument about missing data hiding wrongdoing relies on statistically improbable assumptions.",
      "The ledger gaps are a result of practical scaling considerations, not intentional concealment."
    ]
  }
];