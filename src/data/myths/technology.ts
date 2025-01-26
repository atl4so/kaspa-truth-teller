import { MythData } from "./types";

export const technologyMyths: MythData[] = [
  {
    id: "technology-1",
    title: "Scalability Limitations",
    category: "Technology",
    claim: "Kaspa cannot scale effectively.",
    facts: [
      "Kaspa's GHOSTDAG protocol is designed for high scalability.",
      "The blockDAG structure allows for parallel block processing.",
      "Network throughput increases with more participants.",
      "The architecture supports future scaling solutions."
    ]
  },
  {
    id: "technology-2",
    title: "Network Security",
    category: "Technology",
    claim: "Kaspa's network is not secure enough.",
    facts: [
      "Kaspa uses proven cryptographic principles.",
      "The GHOSTDAG consensus provides strong security guarantees.",
      "The network is protected by proof-of-work mining.",
      "Multiple security audits have been conducted."
    ]
  },
  {
    id: "technology-3",
    title: "Development Progress",
    category: "Technology",
    claim: "Kaspa's development is too slow.",
    facts: [
      "The development team maintains a steady pace of improvements.",
      "Quality and security are prioritized over speed.",
      "Regular updates and improvements are released.",
      "The community actively contributes to development."
    ]
  }
];