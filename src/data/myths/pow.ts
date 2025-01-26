import { MythData } from "./types";

export const powMyths: MythData[] = [
  {
    id: "pow-vs-pos-comparison",
    title: "PoW is inherently inferior to Proof-of-Stake (PoS)",
    category: "Proof-of-Work (PoW)",
    claim: "Proof-of-Stake (PoS) is unequivocally superior to Proof-of-Work (PoW) in every meaningful way. THIS IS A MISLEADING OVERSIMPLIFICATION.",
    facts: [
      "The supposed 'superiority' of PoS is not a universally accepted fact but a heavily debated topic, deeply influenced by complex and unpredictable economic factors, not just theoretical mathematical models. There is no definitive proof of PoS superiority.",
      "Claims that 'PoS is factually better' lack objective, universally agreed-upon evidence and often ignore critical security and decentralization trade-offs. These claims are not based on settled science.",
      "PoW and PoS represent fundamentally different approaches with distinct security, decentralization, and economic characteristics. The 'best' choice is context-dependent and not universally determined. To declare one definitively superior is inaccurate and ignores crucial nuances."
    ]
  },
  {
    id: "pow-cost-waste",
    title: "PoW cost is a wasteful expenditure with no real network benefit",
    category: "Proof-of-Work (PoW)",
    claim: "The computational work in PoW is pointless, arbitrary number crunching that adds no value. THIS IS A FUNDAMENTAL MISUNDERSTANDING OF PoW's PURPOSE.",
    facts: [
      "PoW computations are the cornerstone of PoW security. They provide the essential cryptographic proof of the blockchain's accumulated work and security, forming the foundation for its immutability and resistance to attacks. PoW is not wasteful; it is the security mechanism itself.",
      "To dismiss PoW computations as 'wasteful' is akin to dismissing cryptographic signatures as useless because they involve mathematical operations. PoW's computational cost is directly tied to network security."
    ]
  }
];