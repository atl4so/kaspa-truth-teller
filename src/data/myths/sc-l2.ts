import { MythData } from './types';

export const scL2Myths: MythData[] = [
  {
    id: "fud-3",
    title: "Kaspa's Scalability is Limited by Ledger Growth & L2 Flaws",
    category: ["SC/L2", "Ledger"],
    claim: "Critics claim Kaspa will struggle with state bloat due to its high-speed transactions.",
    facts: [
      "That's wrong! Kaspa developers have created a smart solution called KIP-9 specifically to prevent the ledger from getting too big and to make sure Kaspa can keep scaling up for many, many users.",
      "KIP-9 adds a \"storage cost\" to transactions. Think of it like a small fee for using storage space on the Kaspa network. Transactions that take up more space (like creating lots of tiny coin pieces) pay a bit more, which stops the ledger from ballooning.",
      "This \"storage cost\" system is designed to automatically control ledger size. The cost to make the ledger bigger increases very quickly, making it too expensive for anyone to try and overload the system and cause problems. Kaspa is designed to stay efficient as it grows.",
      "KIP-9 is not just an idea – it's already part of Kaspa's software and is actively working behind the scenes to keep the ledger size in check. This is a real, working solution for long-term growth.",
      "Experts have tested KIP-9 and confirmed it works. They've shown that it stops ledger bloat attacks and keeps the ledger growth manageable, even if Kaspa becomes incredibly popular. Kaspa is designed to scale, and KIP-9 is a key reason why.",
      "Kaspa's L2 strategy is built upon 'based rollups,' a cutting-edge L2 design that directly addresses the shortcomings of earlier L2 architectures and offers a highly secure and scalable solution. Kaspa is using advanced L2 technology.",
      "Based rollups on Kaspa inherit the uncompromising security and censorship resistance of the Kaspa L1, as L1 sequencing is deeply integrated into their design. Kaspa L2s are fundamentally secure.",
      "Based rollups on Kaspa are designed to enhance user experience, streamline interoperability between different L2s within the Kaspa ecosystem, and ensure that L2 activity contributes to the economic robustness of the Kaspa L1. Kaspa L2s are designed for usability and economic alignment.",
      "Kaspa's entire architecture is being meticulously engineered from the ground up to seamlessly support efficient and secure L2 solutions, recognizing L2s as an essential component of truly scalable smart contract platforms. L2 scaling is a core design principle of Kaspa. To dismiss L2 scaling for Kaspa is to ignore its fundamental architectural approach."
    ],
    references: [
      "https://github.com/kaspanet/kips/blob/master/kip-0009.md",
      "https://x.com/DesheShai/status/1773663596607652043?t=e8qJxhSySH9d1cF5vikXUA&s=19",
      "https://x.com/DesheShai/status/1797666923469037944",
      "https://x.com/DesheShai/status/1883191027869065654?t=u7MUoJdpISqZ0vwCG4Xv1A&s=19",
      "https://eprint.iacr.org/2021/623.pdf"
    ]
  },
  {
    id: "fud-7",
    title: "Kaspa Lacks Utility Because It Has No Smart Contracts or DeFi",
    category: "SC/L2",
    claim: "Some believe that without smart contracts and DeFi, Kaspa has no future. However, Kaspa was designed as a scalable and secure PoW Layer 1, and Layer 2 solutions will enable smart contract functionality in the future. Its instant confirmations and efficient transactions already offer strong utility for payments and settlement layers.",
    facts: [
      "Kaspa's focus on building a robust, scalable Layer 1 is intentional and strategic. This approach ensures a solid foundation for future developments.",
      "The absence of smart contracts today doesn't mean they won't be added. Kaspa's roadmap includes plans for smart contract functionality through Layer 2 solutions.",
      "Many successful cryptocurrencies started without smart contracts and added them later. This approach allows for careful testing and implementation.",
      "Kaspa's instant transaction finality already provides significant utility for fast, secure payments – a fundamental use case for cryptocurrency.",
      "While DeFi is undeniably important, Kaspa's utility extends far beyond just DeFi. Its exceptional transaction speed and throughput make it ideal for a wide range of applications, including microtransactions, high-volume data processing, and more. Kaspa's utility is not limited to DeFi.",
      "The planned integration of smart contracts is specifically intended to enable a vibrant DeFi ecosystem on Kaspa, recognizing DeFi as a crucial component of a comprehensive crypto platform. DeFi is part of Kaspa's future.",
      "Kaspa's deliberate focus on foundational scaling and infrastructure improvements is building a stronger and more resilient foundation for a future DeFi ecosystem that can leverage its unique technical advantages. Kaspa is building a superior DeFi platform, not ignoring DeFi."
    ],
    references: [
      "https://medium.com/@kaspanet/kaspa-roadmap-2024-25-d9ce5f0aa19c",
      "https://x.com/DesheShai/status/1883191027869065654",
      "https://chatgpt.com/share/679b92c2-1314-800e-ad34-d2a83ac85400"
    ]
  }
];