import { MythData } from "./types";

export const technologyMyths: MythData[] = [
  {
    id: "technology-1",
    title: "Scalability Limitations",
    category: "Technology",
    claim: "Kaspa cannot scale effectively.",
    facts: [
      "Kaspa's GHOSTDAG protocol is specifically designed for high scalability.",
      "The blockDAG structure allows for parallel block processing, enabling significant throughput.",
      "Network throughput increases with more participants, unlike traditional blockchain designs.",
      "The architecture supports future scaling solutions and improvements.",
      "Current performance metrics demonstrate substantial scalability advantages.",
      "The design allows for continued scaling without compromising decentralization."
    ]
  },
  {
    id: "technology-2",
    title: "Network Security",
    category: "Technology",
    claim: "Kaspa's 10-second finalization is outdated and uncompetitive compared to faster blockchains.",
    facts: [
      "Kaspa's current 10-second finalization is optimized for true, Nakamoto-style probabilistic finality.",
      "Claims of 'faster finality' in other systems often come with weaker security assumptions.",
      "The DagKnight (DK) protocol is under development to enable near-instant confirmations.",
      "Kaspa prioritizes strong, provable security over misleadingly fast 'finality' in its base layer.",
      "The future DagKnight (DK) protocol will deliver near-instant confirmations while maintaining security.",
      "The current finalization time represents a careful balance of security and speed."
    ]
  },
  {
    id: "technology-3",
    title: "Development Progress",
    category: "Technology",
    claim: "Kaspa offers nothing truly new or groundbreaking, simply repackaging existing ideas.",
    facts: [
      "Kaspa represents a major leap forward in blockchain technology.",
      "The GHOSTDAG protocol and BlockDAG architecture are groundbreaking innovations.",
      "Planned advancements for MEV resistance and secure oracles push technical boundaries.",
      "Kaspa directly tackles and solves critical limitations of existing blockchains.",
      "The combination of scalability, speed, and security achievements is unprecedented.",
      "Continuous development brings new technical breakthroughs and improvements."
    ]
  }
];