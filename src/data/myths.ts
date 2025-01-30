export interface MythData {
  id: string;
  title: string;
  category: typeof categories[number] | typeof categories[number][];
  claim: string;
  facts: string[];
  references?: string[];
}

export const categories = [
  "Fair Launch",
  "PoW",
  "SC/L2",
  "Tech",
  "Ledger"
] as const;

export const myths: MythData[] = [
  {
    id: "fud-1",
    title: "Kaspa was unfairly launched and is secretly controlled by DAGLabs",
    category: "Fair Launch",
    claim: "Kaspa's launch was rigged, and it remains under the hidden control of DAGLabs, who enriched themselves with a pre-mine.",
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
    ],
    references: [
      "https://wiki.kaspa.org/en/prehistory",
      "https://x.com/DesheShai/status/1680899017708912640?t=JZWXtwwc3yVkdCdY69rTBQ&s=19",
      "https://chatgpt.com/share/679b8e8a-1cd8-800e-8e2a-4c74bcd637b4"
    ]
  },
  {
    id: "fud-2",
    title: "PoS > PoW?",
    category: "PoW",
    claim: "Many argue that PoS is more secure, more efficient, and less wasteful than PoW. However, PoS introduces economic centralization risks, validator cartels, and weak security guarantees. Kaspa's PoW model ensures true decentralization and resilience against long-range attacks, which PoS cannot achieve.",
    facts: [
      "The supposed 'superiority' of PoS is not a universally accepted fact but a heavily debated topic, deeply influenced by complex and unpredictable economic factors, not just theoretical mathematical models. There is no definitive proof of PoS superiority.",
      "Claims that 'PoS is factually better' lack objective, universally agreed-upon evidence and often ignore critical security and decentralization trade-offs. These claims are not based on settled science.",
      "PoW and PoS represent fundamentally different approaches with distinct security, decentralization, and economic characteristics. The 'best' choice is context-dependent and not universally determined. To declare one definitively superior is inaccurate and ignores crucial nuances.",
      "Research advancements like \"Mining in Logarithmic Space\" and NiPoPoW demonstrate that Proof-of-Work protocols can achieve near-logarithmic storage requirements through secure pruning of consensus data. In contrast, Proof-of-Stake protocols, lacking a mining mechanism, are limited to linear storage growth, making them significantly less scalable and more storage intensive over time.",
      "Focusing solely on the operational costs of PoW and ignoring its security benefits presents a distorted economic comparison. PoW's costs are investments in robust, decentralized security.",
      "Both PoW and PoS require economic incentives to secure the network. PoW uses mining rewards and fees, while PoS uses staking rewards and minting. The economic mechanisms are comparable in function, not inherently superior or inferior in design. To claim PoS is economically 'superior' solely due to lower operational costs is superficial and ignores the value of PoW security.",
      "Comparing attack costs based only on token acquisition price for PoS versus hardware costs for PoW is a grossly oversimplified and often misleading way to evaluate network security. Real-world attack costs are far more complex.",
      "The actual cost of a successful attack on both PoW and PoS networks is dynamic and significantly influenced by market conditions, token liquidity, and the specific type of attack considered. There is no simple, static 'cost' to compare.",
      "Security vulnerabilities and attack vectors are fundamentally different between PoW and PoS. PoS may be more susceptible to censorship attacks with lower stake control, while PoW requires massive resource domination for sustained censorship. They have different security profiles, not simply different 'costs'.",
      "Long-term centralization risks differ. PoS can exhibit 'rich-get-richer' dynamics, potentially concentrating stake and influence. PoW faces ongoing operational and technological challenges to maintain dominance, creating different, but not necessarily weaker, security dynamics. Neither is inherently immune to centralization risks. To claim PoS is always more secure based on a simplistic cost comparison is factually inaccurate."
    ],
    references: [
      "https://kasmedia.com/article/understanding-ghostdag-intro",
      "https://medium.com/@danhedl/pow-is-efficient-aa3d442754d3",
      "https://x.com/DesheShai/status/1883191027869065654",
      "https://eprint.iacr.org/2021/623.pdf",
      "https://chatgpt.com/share/679b8f7d-b810-800e-af56-92ea3af8c824"
    ]
  },
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
      "https://x.com/DesheShai/status/1773663596607652043?t=e8qJxhSySH9d1cF5vikXUA&s=19",
      "https://x.com/DesheShai/status/1797666923469037944",
      "https://x.com/DesheShai/status/1883191027869065654?t=u7MUoJdpISqZ0vwCG4Xv1A&s=19",
      "https://github.com/kaspanet/kips/blob/master/kip-0009.md",
      "https://eprint.iacr.org/2021/623.pdf",
      "https://chatgpt.com/share/679b9139-4e88-800e-bb1a-59de34e83ff8"
    ]
  },
  {
    id: "fud-4",
    title: "Gaps in Kaspa's ledger history imply security or transparency issues",
    category: "Ledger",
    claim: "Missing ledger history data means the current state of Kaspa cannot be verified from genesis, potentially hiding a pre-mine or other malicious activities, thus compromising security and transparency.",
    facts: [
      "Ledger pruning is essential for Kaspa's long-term decentralization and sustainability. At full capacity (10 BPS), the ledger grows by approximately 30TB per year, making archival nodes impractical for widespread decentralization without pruning.",
      "The genesis block is hardcoded directly into the Kaspa node software. This hardcoded genesis block contains an empty UTXO set, verifiably demonstrating that there was no pre-mine.",
      "Kaspa nodes store a \"proof-of-genesis.\" This cryptographic proof verifies that the current state of the ledger is derived from the hardcoded genesis block, without requiring the entire historical ledger data.",
      "Forging the proof-of-genesis would require computational work equivalent to creating the entire ledger history, ensuring its security and authenticity.",
      "The data available to each Kaspa node, including the proof-of-genesis, is sufficient to verify the current state back to genesis, ensuring transparency and security even without a complete historical ledger.",
      "Kaspa employs techniques to provide proof of chain integrity without the entire ledger history. For example, a chain of checkpoint blocks (growing by one header per day) can be verified all the way back to genesis.",
      "These checkpoint blocks, combined with UTXO commitments, cryptographically prove that the current state evolved from a genesis block with an empty UTXO set, thus demonstrating no pre-mine.",
      "The MLS protocol, relevant to Kaspa, uses a special type of Non-Interactive Proofs of Proof-of-Work (NiPoPoW) to succinctly prove chain weight, which inherently prohibits pre-mining attacks.",
      "The lack of archival nodes from the beginning was a matter of prioritization post-launch, not a security risk, as it was understood that ledger gaps do not compromise network integrity.",
      "This approach provides a security level comparable to Nakamoto Consensus, offering a robust chain integrity proof that is more practical than requiring a full \"proof-of-history\" (which is considered unreasonably stringent for scalability)."
    ],
    references: [
      "https://hashdag.medium.com/kaspa-black-tuesday-8c7f4fa35834",
      "https://x.com/DesheShai/status/1808177677674684772",
      "https://github.com/kaspangang/kaspad-py-explorer/blob/main/src/genesis_proof.ipynb",
      "https://discord.com/channels/599153230659846165/844142778232864809/912831900287131649",
      "https://chatgpt.com/share/679b9654-4f24-800e-893f-b603779bf36c"
    ]
  },
  {
    id: "fud-5",
    title: "PoW is Unsustainable, Centralized, and Inaccessible",
    category: "PoW",
    claim: "Some claim PoW mining is too expensive for average users, harms the environment, and leads to mining centralization. However, PoW enables fair participation, prevents validator cartels (unlike PoS), and can use renewable energy sources. Mining pools exist, but individual miners can still participate without giving up control.",
    facts: [
      "PoW mining is actually more decentralized than many think! Anyone can start mining with basic hardware, and there are miners all around the world. This global spread helps keep the network secure and fair.",
      "Mining costs vary a lot depending on where you are. In many places, especially where there's extra electricity that would go to waste, mining can be very profitable even for smaller miners.",
      "The idea that only big companies can mine successfully isn't true. Many individual miners do well by finding good locations and keeping their costs low. It's all about being smart with your setup.",
      "PoW mining predominantly uses excess, stranded, or renewable energy that would otherwise be wasted. It can actually incentivize and fund renewable energy development.",
      "Mining operations are highly mobile and can be strategically located where energy is abundant and cheap, often utilizing energy that would otherwise be wasted.",
      "The environmental impact must be weighed against the critical service PoW provides: securing a decentralized, permissionless monetary network. This security mechanism is essential for a truly independent financial system.",
      "Mining pools are voluntary associations that miners can freely join or leave. This dynamic nature prevents any single pool from gaining too much control.",
      "Kaspa's high blockrate and GHOSTDAG protocol naturally discourage pool centralization by reducing variance in mining rewards, making solo mining more viable.",
      "The ability to easily switch between pools or mine independently creates market pressure that keeps pools competitive and honest."
    ],
    references: [
      "https://medium.com/@danhedl/pow-is-efficient-aa3d442754d3",
      "https://medium.com/@danhedl/pow-is-efficient-aa3d442754d3",
      "https://x.com/DesheShai/status/1883191027869065654",
      "https://chatgpt.com/share/679b91ea-6950-800e-aac5-bdd8b8805b96"
    ]
  },
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
      "https://x.com/DesheShai/status/1883191027869065654"
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
      "https://x.com/DesheShai/status/1883191027869065654"
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
      "https://youtu.be/MugsziO0OYY?si=P5X4ULsQbEEI3Fsj"
    ]
  }
];
