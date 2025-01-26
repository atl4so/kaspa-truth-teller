export interface MythData {
  id: string;
  title: string;
  category: string;
  claim: string;
  facts: string[];
}

export const myths: MythData[] = [
  {
    id: "myth-1",
    title: "Kaspa was unfairly launched and is secretly controlled by DAGLabs",
    category: "Fair Launch and DAGLabs",
    claim: "Kaspa's launch was rigged, and it remains under the hidden control of DAGLabs, who enriched themselves with a pre-mine. THIS IS FALSE.",
    facts: [
      "DAGLabs, founded in 2018 by Yonatan Sompolinsky, was initially funded to research and develop the GhostDAG protocol and explore optical ASIC mining for a cryptocurrency. Investment totaled $8M, primarily from Polychain.",
      "By mid-2021, recognizing the limitations of optical ASIC technology and shifting crypto market sentiment away from PoW, DAGLabs and Polychain made a deliberate decision to transition Kaspa into a community-owned, open-source project, explicitly relinquishing any intellectual property rights. This directly contradicts the notion of continued secret control.",
      "At the mainnet launch in November 2021, DAGLabs was in a transitional phase, providing minimal support to developers during the network's initial phase.",
      "Post-launch, DAGLabs mined Kaspa openly and transparently, using publicly available rented cloud hardware (Amazon initially, then GPUs). This mining was funded by the remaining portion of their initial investment, demonstrating no secret or privileged mining operation.",
      "DAGLabs' mining activity lasted only about five months, ceasing entirely when their limited remaining funds were depleted.",
      "The total amount of Kaspa mined by DAGLabs was less than 3% of the total supply (estimated at 2.5%, under 850M Kas). This modest amount invalidates the claim of a massive pre-mine for enrichment.",
      "The mined coins were distributed proportionally to investors and former DAGLabs contributors as part of their wind-down process, a transparent distribution, not hidden accumulation.",
      "DAGLabs officially ceased operations and dissolved after this period, definitively ending any operational control or involvement with Kaspa. DAGLabs does not control Kaspa.",
      "Kaspa's history demonstrates a clear and documented transition to a community-driven project, directly refuting the myth of unfair launch and ongoing DAGLabs control."
    ]
  },
  // ... Add all other myths following the same structure
];

export const categories = [
  "Fair Launch and DAGLabs",
  "Proof-of-Work (PoW)",
  "Smart Contracts",
  "Technology",
  "Utility",
  "Innovation",
  "Layer 2"
];