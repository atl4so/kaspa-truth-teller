import { MythData } from "./types";

export const ledgerMyths: MythData[] = [
  {
    id: "kaspa-ledger-history",
    title: "Gaps in Kaspa's ledger history imply security or transparency issues",
    category: "Ledger",
    claim: "Missing ledger history data means the current state of Kaspa cannot be verified from genesis, potentially hiding a pre-mine or other malicious activities, thus compromising security and transparency.",
    facts: [
      "Ledger pruning is essential for Kaspa's long-term decentralization and sustainability. At full capacity (10 BPS), the ledger grows by approximately 30TB per year, making archival nodes impractical for widespread decentralization without pruning.",
      "The genesis block is hardcoded directly into the Kaspa node software. This hardcoded genesis block contains an empty UTXO set, verifiably demonstrating that there was no pre-mine.",
      "Kaspa nodes store a \"proof-of-genesis.\" This cryptographic proof verifies that the current state of the ledger is derived from the hardcoded genesis block, without requiring the entire historical ledger data.",
      "Forging the proof-of-genesis would require computational work equivalent to creating the entire ledger history, ensuring its security and authenticity.",
      "The data available to each Kaspa node, including the proof-of-genesis, is sufficient to verify the current state back to genesis, ensuring transparency and security even without a complete historical ledger."
    ]
  }
];