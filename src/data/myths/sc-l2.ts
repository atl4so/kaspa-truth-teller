import { MythData } from "./types";

export const scL2Myths: MythData[] = [
  {
    id: "fud-9",
    title: "Kaspa Can't Support Smart Contracts",
    category: "SC/L2",
    claim: "Some claim Kaspa's lack of native smart contracts makes it less valuable or useful compared to chains like Ethereum. However, this ignores Kaspa's intentional design as a fast, secure base layer that can support smart contracts through L2 solutions.",
    facts: [
      "Kaspa's design philosophy prioritizes security, speed, and scalability at the base layer.",
      "Smart contract functionality can be added through Layer 2 solutions without compromising the base layer's performance.",
      "This approach allows Kaspa to maintain its core strengths while enabling advanced functionality through purpose-built layers.",
      "Many successful blockchain projects use a similar layered approach, separating base layer security from smart contract execution.",
      "The focus on base layer optimization creates a more robust foundation for future smart contract implementations."
    ],
    references: [
      "https://medium.com/@kaspanet/kaspa-the-fastest-and-most-scalable-layer-1-blockchain-70a42e3af6e5",
      "https://chatgpt.com/share/679c810d-bd84-800e-b181-76ff3c6e7a9a"
    ]
  }
];