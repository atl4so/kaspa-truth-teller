export interface MythData {
  id: string;
  title: string;
  category: string;
  claim: string;
  facts: string[];
}

export const categories = [
  "Fair Launch and DAGLabs",
  "Proof-of-Work (PoW)",
  "Smart Contracts",
  "Technology",
  "Layer 2"
];

export const myths: MythData[] = [
  {
    id: "myth-1",
    title: "Kaspa was unfairly launched and is secretly controlled by DAGLabs",
    category: "Fair Launch and DAGLabs",
    claim: "Kaspa's launch was rigged, and it remains under the hidden control of DAGLabs, who enriched themselves with a pre-mine. THIS IS FALSE.",
    facts: [
      "DAGLabs, founded in 2018 by Yonatan Sompolinsky, was initially funded to research and develop the GhostDAG protocol and explore optical ASIC mining for a cryptocurrency. Investment totaled $8M, primarily from Polychain.",
      "By mid-2021, recognizing the limitations of optical ASIC technology and shifting crypto market sentiment away from PoW, DAGLabs and Polychain made a deliberate decision to transition Kaspa into a community-owned, open-source project.",
      "At the mainnet launch in November 2021, DAGLabs was in a transitional phase, providing minimal support to developers during the network's initial phase.",
      "The total amount of Kaspa mined by DAGLabs was less than 3% of the total supply (estimated at 2.5%, under 850M Kas).",
      "DAGLabs officially ceased operations and dissolved after this period, definitively ending any operational control or involvement with Kaspa."
    ]
  },
  {
    id: "myth-2",
    title: "PoW is inherently inferior to Proof-of-Stake (PoS)",
    category: "Proof-of-Work (PoW)",
    claim: "Proof-of-Stake (PoS) is unequivocally superior to Proof-of-Work (PoW) in every meaningful way. THIS IS A MISLEADING OVERSIMPLIFICATION.",
    facts: [
      "The supposed 'superiority' of PoS is not a universally accepted fact but a heavily debated topic.",
      "Claims that 'PoS is factually better' lack objective, universally agreed-upon evidence.",
      "PoW and PoS represent fundamentally different approaches with distinct security, decentralization, and economic characteristics."
    ]
  },
  {
    id: "myth-3",
    title: "PoW cost is wasteful expenditure",
    category: "Proof-of-Work (PoW)",
    claim: "The computational work in PoW is pointless, arbitrary number crunching that adds no value. THIS IS A FUNDAMENTAL MISUNDERSTANDING OF PoW's PURPOSE.",
    facts: [
      "PoW computations are the cornerstone of PoW security.",
      "To dismiss PoW computations as 'wasteful' is akin to dismissing cryptographic signatures as useless.",
      "PoW's computational cost is directly tied to network security."
    ]
  },
  {
    id: "myth-4",
    title: "Kaspa has no smart contracts",
    category: "Smart Contracts",
    claim: "The current lack of smart contracts on Kaspa makes it irrelevant and incapable of competing in the modern crypto landscape. THIS IS A SHORT-SIGHTED AND INACCURATE ASSESSMENT.",
    facts: [
      "Smart contract functionality is a top priority and actively under development for Kaspa.",
      "The current absence of deployed smart contracts is a temporary phase in Kaspa's planned development trajectory.",
      "Kaspa's existing strengths provide a uniquely powerful and secure foundation upon which to build a thriving smart contract ecosystem."
    ]
  },
  {
    id: "myth-5",
    title: "Kaspa's 10-second finalization is too slow",
    category: "Technology",
    claim: "Kaspa's 10-second finalization is outdated and uncompetitive compared to faster blockchains. THIS IS A MISUNDERSTANDING OF KASPA'S FINALITY MODEL AND FUTURE PLANS.",
    facts: [
      "Kaspa's current 10-second finalization is optimized to achieve true, Nakamoto-style probabilistic finality.",
      "Claims of 'faster finality' in other systems often come at the cost of weaker security assumptions.",
      "The DagKnight (DK) protocol is specifically designed to enable near-instant confirmations on Kaspa in the future."
    ]
  },
  {
    id: "myth-6",
    title: "L2 scaling won't work for Kaspa",
    category: "Layer 2",
    claim: "Layer-2 (L2) scaling is fundamentally broken and cannot provide a viable scaling solution for smart contracts on Kaspa. THIS IS BASED ON OUTDATED AND INCOMPLETE INFORMATION.",
    facts: [
      "Kaspa's L2 strategy is built upon 'based rollups,' a cutting-edge L2 design.",
      "Based rollups on Kaspa inherit the uncompromising security and censorship resistance of the Kaspa L1.",
      "Kaspa's entire architecture is being meticulously engineered from the ground up to seamlessly support efficient and secure L2 solutions."
    ]
  }
];