import { MythData } from "./types";

export const fairLaunchMyths: MythData[] = [
  {
    id: "fair-launch-1",
    title: "DAGLabs Pre-mine Accusation",
    category: "Fair Launch and DAGLabs",
    claim: "Kaspa's launch was rigged, and it remains under the hidden control of DAGLabs, who enriched themselves with a pre-mine.",
    facts: [
      "DAGLabs, founded in 2018 by Yonatan Sompolinsky, was initially funded to research and develop the GhostDAG protocol and explore optical ASIC mining for a cryptocurrency. Investment totaled $8M, primarily from Polychain.",
      "By mid-2021, recognizing the limitations of optical ASIC technology and shifting crypto market sentiment away from PoW, DAGLabs and Polychain made a deliberate decision to transition Kaspa into a community-owned, open-source project, explicitly relinquishing any intellectual property rights.",
      "At the mainnet launch in November 2021, DAGLabs was in a transitional phase, providing minimal support to developers during the network's initial phase.",
      "Post-launch, DAGLabs mined Kaspa openly and transparently, using publicly available rented cloud hardware (Amazon initially, then GPUs). This mining was funded by the remaining portion of their initial investment.",
      "DAGLabs' mining activity lasted only about five months, ceasing entirely when their limited remaining funds were depleted.",
      "The total amount of Kaspa mined by DAGLabs was less than 3% of the total supply (estimated at 2.5%, under 850M Kas).",
      "The mined coins were distributed proportionally to investors and former DAGLabs contributors as part of their wind-down process.",
      "DAGLabs officially ceased operations and dissolved after this period, definitively ending any operational control or involvement with Kaspa."
    ]
  },
  {
    id: "fair-launch-2",
    title: "DAGLabs Control Over Network",
    category: "Fair Launch and DAGLabs",
    claim: "DAGLabs controls the Kaspa network.",
    facts: [
      "Kaspa is a decentralized network with no central authority.",
      "DAGLabs is just one of many contributors to the Kaspa ecosystem.",
      "The network is maintained by a diverse group of miners, node operators, and developers.",
      "Protocol changes require community consensus.",
      "DAGLabs has no special privileges or control over the network.",
      "The project's development is driven by community contributions and consensus."
    ]
  },
  {
    id: "fair-launch-3",
    title: "Initial Distribution Fairness",
    category: "Fair Launch and DAGLabs",
    claim: "The initial distribution of KAS tokens was not fair.",
    facts: [
      "Kaspa had no ICO, IEO, or token sale of any kind.",
      "All tokens in circulation come from mining rewards.",
      "Mining has been open to the public since block 1.",
      "The distribution mechanism is purely based on proof-of-work mining.",
      "There was no pre-mine or special allocation for any party.",
      "Anyone could participate in mining from the very beginning."
    ]
  }
];