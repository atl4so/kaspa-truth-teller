export interface MythData {
  myth: string;
  fact: string;
  category: string;
}

export const myths: MythData[] = [
  {
    category: "Fair Launch and DAGLabs",
    myth: "Kaspa was unfairly launched and is secretly controlled by DAGLabs.",
    fact: "Kaspa had a fair launch with no pre-mine. DAGLabs openly mined less than 3% of total supply (estimated 2.5%, under 850M KAS) and has ceased operations, with complete transition to community ownership. The mined coins were transparently distributed to investors and contributors during wind-down.",
  },
  {
    category: "Proof-of-Work",
    myth: "PoW is inherently inferior to Proof-of-Stake (PoS).",
    fact: "This is a misleading oversimplification. Both systems have distinct security and decentralization trade-offs. The choice between PoW and PoS depends on specific use cases and requirements, with neither being universally superior.",
  },
  {
    category: "Proof-of-Work",
    myth: "PoW cost is a wasteful expenditure with no real network benefit.",
    fact: "PoW computations are the cornerstone of network security, providing essential cryptographic proof of the blockchain's accumulated work and security. The computational cost is directly tied to network security and immutability.",
  },
  {
    category: "Smart Contracts",
    myth: "Kaspa has no smart contracts, making it uncompetitive.",
    fact: "Smart contract functionality is actively under development, building upon Kaspa's superior foundation of unparalleled scalability and security. This is a strategic choice to ensure a robust base layer before implementing smart contracts.",
  },
  {
    category: "Technology",
    myth: "Kaspa's 10-second finalization is too slow for practical use.",
    fact: "Kaspa's current 10-second finalization is optimized for true Nakamoto-style probabilistic finality. The upcoming DagKnight (DK) protocol will enable near-instant confirmations while maintaining strong security guarantees.",
  },
  {
    category: "Utility",
    myth: "Without DeFi, Kaspa has no real utility or adoption potential.",
    fact: "Kaspa's utility extends beyond DeFi, with its exceptional transaction speed and throughput making it ideal for microtransactions and high-volume data processing. Smart contracts and DeFi capabilities are part of the planned roadmap.",
  },
  {
    category: "Innovation",
    myth: "Kaspa is just another scalable PoW L1, lacking genuine innovation.",
    fact: "Kaspa represents a major leap forward with innovations like GHOSTDAG protocol, BlockDAG architecture, and planned advancements for MEV resistance. These are fundamental advancements in blockchain technology.",
  },
  {
    category: "Layer 2",
    myth: "L2 scaling is a flawed concept and won't work for smart contracts on Kaspa.",
    fact: "Kaspa's L2 strategy uses cutting-edge 'based rollups' that address earlier L2 limitations. The entire architecture is engineered to support efficient and secure L2 solutions while maintaining L1 security.",
  }
];