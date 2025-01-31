import { MythData } from "./types";

export const ledgerMyths: MythData[] = [
  {
    id: "fud-4",
    title: "Gaps in Kaspa's ledger history imply security or transparency issues",
    category: "Ledger",
    claim: "Missing ledger history data means the current state of Kaspa cannot be verified from genesis, potentially hiding a pre-mine or other malicious activities, thus compromising security and transparency.",
    facts: [
      "Ledger pruning is essential for Kaspa's long-term decentralization and sustainability. At full capacity (10 BPS), the ledger grows by approximately 30TB per year, making archival nodes impractical for widespread decentralization without pruning.",
      "The genesis block is hardcoded directly into the Kaspa node software. This hardcoded genesis block contains an empty UTXO set, verifiably demonstrating that there was no pre-mine.",
      "Kaspa nodes store a \"proof-of-genesis.\" This cryptographic proof verifies that the current state of the ledger is derived from the hardcoded genesis block, without requiring the entire historical ledger data.",
      "Forging the proof-of-genesis would require computational work equivalent to creating the entire ledger history, ensuring its security and authenticity.",
      "The data available to each Kaspa node, including the proof-of-genesis, is sufficient to verify the current state back to genesis, ensuring transparency and security even without a complete historical ledger.",
      "Kaspa employs techniques to provide proof of chain integrity without the entire ledger history. For example, a chain of checkpoint blocks (growing by one header per day) can be verified all the way back to genesis.",
      "These checkpoint blocks, combined with UTXO commitments, cryptographically prove that the current state evolved from a genesis block with an empty UTXO set, thus demonstrating no pre-mine.",
      "The MLS protocol, relevant to Kaspa, uses a special type of Non-Interactive Proofs of Proof-of-Work (NiPoPoW) to succinctly prove chain weight, which inherently prohibits pre-mining attacks.",
      "The lack of archival nodes from the beginning was a matter of prioritization post-launch, not a security risk, as it was understood that ledger gaps do not compromise network integrity.",
      "This approach provides a security level comparable to Nakamoto Consensus, offering a robust chain integrity proof that is more practical than requiring a full \"proof-of-history\" (which is considered unreasonably stringent for scalability)."
    ],
    references: [
      "https://hashdag.medium.com/kaspa-black-tuesday-8c7f4fa35834",
      "https://x.com/DesheShai/status/1808177677674684772",
      "https://github.com/kaspangang/kaspad-py-explorer/blob/main/src/genesis_proof.ipynb",
      "https://discord.com/channels/599153230659846165/844142778232864809/912831900287131649",
      "https://chatgpt.com/share/679b9742-c9d0-800e-98dd-a428d85e50e5"
    ]
  }
];