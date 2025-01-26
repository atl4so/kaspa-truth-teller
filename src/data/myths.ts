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
      "Post-launch, DAGLabs mined Kaspa openly and transparently, using publicly available rented cloud hardware.",
      "DAGLabs' mining activity lasted only about five months, ceasing entirely when their limited remaining funds were depleted.",
      "The total amount of Kaspa mined by DAGLabs was less than 3% of the total supply (estimated at 2.5%, under 850M Kas).",
      "The mined coins were distributed proportionally to investors and former DAGLabs contributors as part of their wind-down process.",
      "DAGLabs officially ceased operations and dissolved after this period.",
      "Kaspa's history demonstrates a clear and documented transition to a community-driven project."
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
    title: "PoW cost is a wasteful expenditure",
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
    title: "PoS is economically superior because it avoids 'wasteful' PoW costs",
    category: "Proof-of-Work (PoW)",
    claim: "PoS tokenomics are automatically better because they eliminate the energy expenditure of PoW. THIS IS A NARROW AND INCOMPLETE ECONOMIC VIEW.",
    facts: [
      "Focusing solely on the operational costs of PoW and ignoring its security benefits presents a distorted economic comparison.",
      "Both PoW and PoS require economic incentives to secure the network.",
      "The economic mechanisms are comparable in function, not inherently superior or inferior in design."
    ]
  },
  {
    id: "myth-5",
    title: "PoS is more secure because attacking it is more expensive",
    category: "Proof-of-Work (PoW)",
    claim: "Attacking a PoS network is always more expensive, making it inherently more secure. THIS IS A SIMPLISTIC AND OFTEN INCORRECT SECURITY ASSESSMENT.",
    facts: [
      "Comparing attack costs based only on token acquisition price for PoS versus hardware costs for PoW is oversimplified.",
      "The actual cost of a successful attack on both PoW and PoS networks is dynamic.",
      "Security vulnerabilities and attack vectors are fundamentally different between PoW and PoS.",
      "Long-term centralization risks differ between PoW and PoS systems."
    ]
  },
  {
    id: "myth-6",
    title: "Average people are excluded from PoW mining",
    category: "Proof-of-Work (PoW)",
    claim: "PoW mining is only for wealthy corporations and specialized entities, excluding ordinary individuals. THIS IS NOT TRUE FOR KASPA.",
    facts: [
      "Kaspa's innovative high Block Per Second (BPS) design specifically enables broader mining participation.",
      "The initial investment required to start mining Kaspa can be surprisingly low.",
      "Kaspa's architecture is designed to promote a more distributed and egalitarian mining ecosystem."
    ]
  },
  {
    id: "myth-7",
    title: "PoW is inherently environmentally damaging",
    category: "Proof-of-Work (PoW)",
    claim: "PoW mining is a major environmental threat due to its excessive energy consumption. THIS IS AN OVERBLOWN AND INCOMPLETE PICTURE.",
    facts: [
      "While PoW mining does consume energy, the environmental impact can be significantly mitigated.",
      "The energy used in PoW mining secures a decentralized, permissionless financial network.",
      "Ongoing technological advancements are reducing the energy intensity of PoW over time."
    ]
  },
  {
    id: "myth-8",
    title: "PoW pools inevitably centralize mining power",
    category: "Proof-of-Work (PoW)",
    claim: "PoW mining pools concentrate power, leading to unacceptable centralization. THIS IS A GENERALIZATION THAT DOES NOT FULLY APPLY TO KASPA.",
    facts: [
      "Kaspa's unique design and high block rate make solo mining more feasible and potentially profitable.",
      "The sheer volume of blocks produced by Kaspa allows for a significantly larger number of mining pools to operate effectively."
    ]
  },
  {
    id: "myth-9",
    title: "Kaspa's 10-second finalization is too slow",
    category: "Technology",
    claim: "Kaspa's 10-second finalization is outdated and uncompetitive compared to faster blockchains. THIS IS A MISUNDERSTANDING OF KASPA'S FINALITY MODEL AND FUTURE PLANS.",
    facts: [
      "Kaspa's current 10-second finalization is optimized to achieve true, Nakamoto-style probabilistic finality.",
      "Claims of 'faster finality' in other systems often come at the cost of weaker security assumptions.",
      "Kaspa's roadmap includes the DagKnight (DK) protocol for near-instant confirmations.",
      "The DagKnight (DK) protocol will maintain Kaspa's strong security guarantees.",
      "Kaspa is actively evolving to offer both strong security and faster confirmations."
    ]
  },
  {
    id: "myth-10",
    title: "Kaspa has no smart contracts",
    category: "Smart Contracts",
    claim: "The current lack of smart contracts on Kaspa makes it irrelevant and incapable of competing in the modern crypto landscape. THIS IS A SHORT-SIGHTED AND INACCURATE ASSESSMENT.",
    facts: [
      "Smart contract functionality is a top priority and actively under development for Kaspa.",
      "The current absence of deployed smart contracts is a temporary phase in Kaspa's planned development trajectory.",
      "Kaspa's existing strengths provide a uniquely powerful and secure foundation for smart contracts.",
      "Kaspa is strategically focusing on building a superior base layer first."
    ]
  },
  {
    id: "myth-11",
    title: "Without DeFi, Kaspa has no real utility",
    category: "Smart Contracts",
    claim: "Kaspa's lack of a Decentralized Finance (DeFi) ecosystem means it has no practical use cases and will fail to gain adoption. THIS IS A RESTRICTIVE VIEW OF CRYPTO UTILITY.",
    facts: [
      "Kaspa's utility extends far beyond just DeFi, including microtransactions and high-volume data processing.",
      "The planned integration of smart contracts will enable a vibrant DeFi ecosystem.",
      "Kaspa is building a stronger and more resilient foundation for future DeFi applications."
    ]
  },
  {
    id: "myth-12",
    title: "Kaspa lacks genuine innovation",
    category: "Technology",
    claim: "Kaspa offers nothing truly new or groundbreaking, simply repackaging existing ideas. THIS IS A PROFOUNDLY IGNORANT STATEMENT.",
    facts: [
      "Kaspa represents a major leap forward in blockchain technology.",
      "Kaspa incorporates groundbreaking innovations like the GHOSTDAG protocol and BlockDAG architecture.",
      "Kaspa directly tackles and solves critical limitations of existing blockchains."
    ]
  },
  {
    id: "myth-13",
    title: "L2 scaling won't work for Kaspa",
    category: "Layer 2",
    claim: "Layer-2 (L2) scaling is fundamentally broken and cannot provide a viable scaling solution for smart contracts on Kaspa. THIS IS BASED ON OUTDATED AND INCOMPLETE INFORMATION.",
    facts: [
      "Kaspa's L2 strategy is built upon 'based rollups,' a cutting-edge L2 design.",
      "Based rollups on Kaspa inherit the uncompromising security and censorship resistance of the Kaspa L1.",
      "Based rollups are designed to enhance user experience and streamline interoperability.",
      "Kaspa's architecture is engineered from the ground up to support efficient L2 solutions."
    ]
  }
];