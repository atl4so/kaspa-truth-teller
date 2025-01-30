import { MythData } from './types';

export const techMyths: MythData[] = [
  {
    id: "fud-6",
    title: "Kaspa's Speed & PoW Costs Make It Inefficient",
    category: ["Tech", "PoW"],
    claim: "Some argue Kaspa's 10-second finality is too slow and that PoW costs are wasteful. However, Kaspa's GhostDAG ensures rapid block propagation, enabling parallel transaction processing. Additionally, PoW cost secures the network, making it more robust against attacks compared to cost-efficient but weaker security models like PoS.",
    facts: [
      "Kaspa's GhostDAG protocol is a breakthrough that allows for parallel processing of transactions, making it much faster than traditional blockchains.",
      "The 10-second finality is actually incredibly fast compared to most other cryptocurrencies, which can take minutes or even hours for true finality.",
      "Kaspa's design allows it to handle many more transactions per second than older blockchain designs, making it highly efficient.",
      "The energy used in mining Kaspa isn't wasted – it's what makes the network secure and trustworthy.",
      "Kaspa's mining efficiency comes from its ability to process multiple blocks simultaneously, maximizing the utility of the energy spent on mining.",
      "The energy expenditure in PoW directly contributes to network security by making attacks economically unfeasible. This is not waste, but rather a crucial feature that enables trustless consensus.",
      "PoW's energy cost creates a real-world anchor for digital scarcity, something that cannot be achieved through purely digital means. The physical cost of mining gives fundamental value to the network.",
      "The competitive nature of PoW mining drives innovation in energy efficiency and utilization of otherwise wasted energy sources, contributing to broader technological advancement."
    ],
    references: [
      "https://medium.com/@danhedl/pow-is-efficient-aa3d442754d3",
      "https://x.com/DesheShai/status/1883191027869065654",
      "https://chatgpt.com/share/679b9253-ff50-800e-b4a6-8a78338f3252"
    ]
  },
  {
    id: "fud-8",
    title: "Kaspa is just another scalable PoW L1, lacking genuine innovation",
    category: ["Tech", "PoW"],
    claim: "Kaspa offers nothing truly new or groundbreaking, simply repackaging existing ideas.",
    facts: [
      "Kaspa represents a major leap forward in blockchain technology, achieving an unprecedented combination of scalability, speed, and security within a Proof-of-Work framework. Kaspa is demonstrably innovative.",
      "Kaspa incorporates groundbreaking innovations like the GHOSTDAG protocol, BlockDAG architecture, and planned advancements for MEV resistance and secure oracles. These are not just incremental changes, but fundamental advancements.",
      "Kaspa directly tackles and solves critical limitations of existing blockchains, such as state bloat and slow transaction finality, with novel and sophisticated technical solutions. Kaspa is pushing the boundaries of blockchain technology. To claim it lacks innovation is to ignore the substantial technical breakthroughs it represents."
    ],
    references: [
      "https://youtu.be/MugsziO0OYY?si=P5X4ULsQbEEI3Fsj",
      "https://chatgpt.com/share/679b9324-c478-800e-bff8-e930222fa096"
    ]
  },
  {
    id: "fud-9",
    title: "Kaspa is not quantum-secure and will be obsolete when quantum computers arrive",
    category: "Tech",
    claim: "Blockchains that rely on elliptic curve (EC) cryptography will be broken once quantum computers become powerful enough. Without immediate adoption of post-quantum cryptography (PQC), these networks are ignoring the threat and will eventually become obsolete.",
    facts: [
      "Quantum computers capable of breaking EC cryptography are still far from being practical. While advancements are being made, large-scale quantum machines with millions of stable qubits—needed to break EC encryption—do not yet exist. Even optimistic projections suggest this is decades away.",
      "The Boneh-Lipton attack on EC cryptography is a well-known theoretical threat, but mitigations exist. Increasing key sizes or shifting to larger elliptic curves can provide additional security for years before a full transition to PQC is necessary.",
      "Post-quantum cryptography (PQC) is not yet ready for large-scale blockchain adoption. Many PQC schemes have significant trade-offs, including larger key and signature sizes that increase data storage and transaction costs, higher computational requirements that slow down transaction processing, and limited real-world testing compared to the decades of security validation that EC cryptography has undergone.",
      "Kaspa's blockDAG architecture makes it better suited for a future transition to PQC compared to traditional blockchain designs. Since blockDAG technology enables high throughput and efficient transaction processing, it can better accommodate the larger signature sizes required by post-quantum cryptography. While many blockchains struggle with scalability limitations, Kaspa's ability to handle high transaction volumes without bottlenecks allows for a smoother adoption of quantum-safe cryptographic solutions when the technology is mature.",
      "Quantum mining, not just cryptographic breaking, presents a unique challenge. Unlike classical mining, quantum miners could attempt strategies that increase orphan rates and disrupt network stability. Protocols designed to manage high orphan rates and network adaptability may have an advantage if quantum mining ever becomes viable.",
      "The timeline for quantum threats is long, allowing gradual transitions. Even if quantum advancements accelerate, blockchain protocols can adopt quantum-safe cryptographic methods when they are sufficiently tested and optimized, rather than rushing into unproven solutions."
    ],
    references: [
      "https://eprint.iacr.org/2021/772",
      "https://eprint.iacr.org/2023/362",
      "https://arxiv.org/abs/1804.08118",
      "https://x.com/DesheShai/status/1681696299358343169?t=2RH2OE-cc3RZjcixfWkgMA&s=19",
      "https://t.co/J3RaAGxcG6"
    ]
  }
];