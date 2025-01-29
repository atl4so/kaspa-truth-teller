export interface MythData {
  id: string;
  title: string;
  category: string;
  claim: string;
  facts: string[];
  references?: string[];
}

export const categories = [
  "Fair Launch",
  "PoW",
  "Smart Contracts",
  "Technology",
  "Layer 2",
  "Ledger"
];

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
      "https://chatgpt.com/share/6799af28-08fc-800e-b254-e8964b9a2348"
    ]
  },
  {
    id: "fud-2",
    title: "PoW is inherently inferior to Proof-of-Stake (PoS)",
    category: "PoW",
    claim: "Proof-of-Stake (PoS) is unequivocally superior to Proof-of-Work (PoW) in every meaningful way.",
    facts: [
      "The supposed 'superiority' of PoS is not a universally accepted fact but a heavily debated topic, deeply influenced by complex and unpredictable economic factors, not just theoretical mathematical models. There is no definitive proof of PoS superiority.",
      "Claims that 'PoS is factually better' lack objective, universally agreed-upon evidence and often ignore critical security and decentralization trade-offs. These claims are not based on settled science.",
      "PoW and PoS represent fundamentally different approaches with distinct security, decentralization, and economic characteristics. The 'best' choice is context-dependent and not universally determined. To declare one definitively superior is inaccurate and ignores crucial nuances.",
      "Research advancements like \"Mining in Logarithmic Space\" and NiPoPoW demonstrate that Proof-of-Work protocols can achieve near-logarithmic storage requirements through secure pruning of consensus data. In contrast, Proof-of-Stake protocols, lacking a mining mechanism, are limited to linear storage growth, making them significantly less scalable and more storage intensive over time."
    ],
    references: [
      "https://kasmedia.com/article/understanding-ghostdag-intro",
      "https://x.com/DesheShai/status/1883191027869065654",
      "https://chatgpt.com/share/679a1527-d7f8-800e-99ef-a2f55532dd52"
    ]
  },
  {
    id: "fud-3",
    title: "Kaspa can't scale because its ledger will get too big (state bloat)",
    category: "Technology",
    claim: "Kaspa can't scale. Its system for managing transactions will cause its blockchain to grow too large, making it slow and unusable over time. It will get \"clogged up\" and unable to handle more users, meaning Kaspa can't grow to be used by everyone.",
    facts: [
      "That's wrong! Kaspa developers have created a smart solution called KIP-9 specifically to prevent the ledger from getting too big and to make sure Kaspa can keep scaling up for many, many users.",
      "KIP-9 adds a \"storage cost\" to transactions. Think of it like a small fee for using storage space on the Kaspa network. Transactions that take up more space (like creating lots of tiny coin pieces) pay a bit more, which stops the ledger from ballooning.",
      "This \"storage cost\" system is designed to automatically control ledger size. The cost to make the ledger bigger increases very quickly, making it too expensive for anyone to try and overload the system and cause problems. Kaspa is designed to stay efficient as it grows.",
      "KIP-9 is not just an idea – it's already part of Kaspa's software and is actively working behind the scenes to keep the ledger size in check. This is a real, working solution for long-term growth.",
      "Experts have tested KIP-9 and confirmed it works. They've shown that it stops ledger bloat attacks and keeps the ledger growth manageable, even if Kaspa becomes incredibly popular. Kaspa is designed to scale, and KIP-9 is a key reason why."
    ],
    references: [
      "https://x.com/DesheShai/status/1773663596607652043?t=e8qJxhSySH9d1cF5vikXUA&s=19",
      "https://x.com/DesheShai/status/1797666923469037944",
      "https://chatgpt.com/share/679a25d8-ee54-800e-9cac-4cec2514ed93",
      "https://github.com/kaspanet/kips/blob/master/kip-0009.md",
      "https://eprint.iacr.org/2021/623.pdf"
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
      "https://github.com/kaspagang/kaspad-py-explorer/blob/main/src/genesis_proof.ipynb",
      "https://discord.com/channels/599153230659846165/844142778232864809/912831900287131649"
    ]
  },
  {
    id: "fud-5",
    title: "PoS is economically superior because it avoids 'wasteful' PoW costs",
    category: "PoW",
    claim: "PoS tokenomics are automatically better because they eliminate the energy expenditure of PoW.",
    facts: [
      "Focusing solely on the operational costs of PoW and ignoring its security benefits presents a distorted economic comparison. PoW's costs are investments in robust, decentralized security.",
      "Both PoW and PoS require economic incentives to secure the network. PoW uses mining rewards and fees, while PoS uses staking rewards and minting. The economic mechanisms are comparable in function, not inherently superior or inferior in design. To claim PoS is economically 'superior' solely due to lower operational costs is superficial and ignores the value of PoW security."
    ],
    references: [
      "https://medium.com/@danhedl/pow-is-efficient-aa3d442754d3"
    ]
  },
  {
    id: "fud-6",
    title: "PoS is more secure because attacking it is more expensive",
    category: "PoW",
    claim: "Attacking a PoS network is always more expensive, making it inherently more secure.",
    facts: [
      "Comparing attack costs based only on token acquisition price for PoS versus hardware costs for PoW is a grossly oversimplified and often misleading way to evaluate network security. Real-world attack costs are far more complex.",
      "The actual cost of a successful attack on both PoW and PoS networks is dynamic and significantly influenced by market conditions, token liquidity, and the specific type of attack considered. There is no simple, static 'cost' to compare.",
      "Security vulnerabilities and attack vectors are fundamentally different between PoW and PoS. PoS may be more susceptible to censorship attacks with lower stake control, while PoW requires massive resource domination for sustained censorship. They have different security profiles, not simply different 'costs'.",
      "Long-term centralization risks differ. PoS can exhibit 'rich-get-richer' dynamics, potentially concentrating stake and influence. PoW faces ongoing operational and technological challenges to maintain dominance, creating different, but not necessarily weaker, security dynamics. Neither is inherently immune to centralization risks. To claim PoS is always more secure based on a simplistic cost comparison is factually inaccurate."
    ]
  },
  {
    id: "fud-7",
    title: "Average people are excluded from PoW mining due to prohibitive costs",
    category: "PoW",
    claim: "PoW mining is only for wealthy corporations and specialized entities, excluding ordinary individuals.",
    facts: [
      "Kaspa's innovative high Block Per Second (BPS) design specifically enables broader mining participation, making it viable and even profitable for home miners and smaller operators. Kaspa is designed to be more inclusive.",
      "The initial investment required to start mining Kaspa can be surprisingly low, making it accessible to individuals and fostering a more decentralized mining community. Entry into Kaspa mining is not limited to the wealthy.",
      "Kaspa's architecture is designed to promote a more distributed and egalitarian mining ecosystem, directly contradicting the myth of PoW being inherently exclusive."
    ],
    references: [
      "https://x.com/DesheShai/status/1806438453225377802",
      "https://x.com/DesheShai/status/1622320826975457281"
    ]
  },
  {
    id: "fud-8",
    title: "PoW is inherently environmentally damaging and unsustainable",
    category: "PoW",
    claim: "PoW mining is a major environmental threat due to its excessive energy consumption.",
    facts: [
      "PoW mining predominantly uses excess, stranded, or renewable energy that would otherwise be wasted. It can actually incentivize and fund renewable energy development.",
      "Mining operations are highly mobile and can be strategically located where energy is abundant and cheap, often utilizing energy that would otherwise be wasted.",
      "The environmental impact must be weighed against the critical service PoW provides: securing a decentralized, permissionless monetary network. This security mechanism is essential for a truly independent financial system."
    ],
    references: [
      "https://qitmeer.medium.com/pow-mining-and-the-environment-global-perspectives-and-sustainability-025918cfa0bc",
      "https://medium.com/@danhedl/pow-is-efficient-aa3d442754d3"
    ]
  },
  {
    id: "fud-9",
    title: "PoW mining is inherently centralized and controlled by mining pools",
    category: "PoW",
    claim: "PoW mining pools concentrate power, leading to unacceptable centralization.",
    facts: [
      "Mining pools are voluntary associations that miners can freely join or leave. This dynamic nature prevents any single pool from gaining too much control.",
      "Kaspa's high blockrate and GHOSTDAG protocol naturally discourage pool centralization by reducing variance in mining rewards, making solo mining more viable.",
      "The ability to easily switch between pools or mine independently creates market pressure that keeps pools competitive and honest."
    ],
    references: [
      "https://x.com/DesheShai/status/1622320826975457281"
    ]
  },
  {
    id: "fud-10",
    title: "Kaspa's 10-second finalization is too slow for practical use",
    category: "Technology",
    claim: "Kaspa's 10-second finalization is outdated and uncompetitive compared to faster blockchains.",
    facts: [
      "Kaspa's current 10-second finalization is optimized to achieve true, Nakamoto-style probabilistic finality within the inherent constraints of network latency. This provides robust and secure finality now, not slow finality.",
      "Claims of 'faster finality' in other systems often come at the cost of weaker security assumptions, relying on less robust forms of finality or introducing trust dependencies. Kaspa prioritizes strong, provable security over misleadingly fast 'finality' in its base layer.",
      "Kaspa's roadmap includes the DagKnight (DK) protocol. DK is not yet implemented but is under development.",
      "The DagKnight (DK) protocol is specifically designed to enable near-instant confirmations on Kaspa in the future. This future upgrade aims to significantly improve confirmation speed while maintaining Kaspa's strong security guarantees.",
      "Therefore, while Kaspa currently has a 10-second finalization optimized for robust security, the future DagKnight (DK) protocol is intended to deliver near-instant confirmations, addressing concerns about speed while upholding Kaspa's core principles. Kaspa is actively evolving to offer both strong security and faster confirmations."
    ]
  },
  {
    id: "fud-11",
    title: "Kaspa has no smart contracts, making it uncompetitive and obsolete",
    category: "Smart Contracts",
    claim: "The current lack of smart contracts on Kaspa makes it irrelevant and incapable of competing in the modern crypto landscape.",
    facts: [
      "Smart contract functionality is a top priority and actively under development for Kaspa. The Kaspa team is committed to bringing robust smart contract capabilities to the network. Smart contracts are coming to Kaspa.",
      "The current absence of deployed smart contracts is a temporary phase in Kaspa's planned development trajectory, not a permanent limitation. Kaspa is strategically building a strong foundation before deploying smart contracts.",
      "Kaspa's existing strengths in unparalleled scalability, blazing-fast transaction speeds, and robust PoW security provide a uniquely powerful and secure foundation upon which to build a thriving smart contract ecosystem. Kaspa is building a superior platform for future smart contracts.",
      "Kaspa is not 'obsolete'; it is strategically focusing on building a superior base layer first. The planned integration of smart contracts will unlock vast new potential for Kaspa, making it highly competitive and innovative."
    ]
  },
  {
    id: "fud-12",
    title: "Without DeFi, Kaspa has no real utility or adoption potential",
    category: "Smart Contracts",
    claim: "Kaspa's lack of a Decentralized Finance (DeFi) ecosystem means it has no practical use cases and will fail to gain adoption.",
    facts: [
      "While DeFi is undeniably important, Kaspa's utility extends far beyond just DeFi. Its exceptional transaction speed and throughput make it ideal for a wide range of applications, including microtransactions, high-volume data processing, and more. Kaspa's utility is not limited to DeFi.",
      "The planned integration of smart contracts is specifically intended to enable a vibrant DeFi ecosystem on Kaspa, recognizing DeFi as a crucial component of a comprehensive crypto platform. DeFi is part of Kaspa's future.",
      "Kaspa's deliberate focus on foundational scaling and infrastructure improvements is building a stronger and more resilient foundation for a future DeFi ecosystem that can leverage its unique technical advantages. Kaspa is building a superior DeFi platform, not ignoring DeFi."
    ]
  },
  {
    id: "fud-13",
    title: "Kaspa is just another scalable PoW L1, lacking genuine innovation",
    category: "Technology",
    claim: "Kaspa offers nothing truly new or groundbreaking, simply repackaging existing ideas.",
    facts: [
      "Kaspa represents a major leap forward in blockchain technology, achieving an unprecedented combination of scalability, speed, and security within a Proof-of-Work framework. Kaspa is demonstrably innovative.",
      "Kaspa incorporates groundbreaking innovations like the GHOSTDAG protocol, BlockDAG architecture, and planned advancements for MEV resistance and secure oracles. These are not just incremental changes, but fundamental advancements.",
      "Kaspa directly tackles and solves critical limitations of existing blockchains, such as state bloat and slow transaction finality, with novel and sophisticated technical solutions. Kaspa is pushing the boundaries of blockchain technology. To claim it lacks innovation is to ignore the substantial technical breakthroughs it represents."
    ],
    references: [
      "https://chatgpt.com/share/6799b98b-7e90-800e-a185-f2a42274b3a0",
      "https://youtu.be/MugsziO0OYY?si=P5X4ULsQbEEI3Fsj"
    ]
  },
  {
    id: "fud-14",
    title: "L2 scaling is a flawed concept and won't work for smart contracts on Kaspa",
    category: "Layer 2",
    claim: "Layer-2 (L2) scaling is fundamentally broken and cannot provide a viable scaling solution for smart contracts on Kaspa.",
    facts: [
      "Kaspa's L2 strategy is built upon 'based rollups,' a cutting-edge L2 design that directly addresses the shortcomings of earlier L2 architectures and offers a highly secure and scalable solution. Kaspa is using advanced L2 technology.",
      "Based rollups on Kaspa inherit the uncompromising security and censorship resistance of the Kaspa L1, as L1 sequencing is deeply integrated into their design. Kaspa L2s are fundamentally secure.",
      "Based rollups on Kaspa are designed to enhance user experience, streamline interoperability between different L2s within the Kaspa ecosystem, and ensure that L2 activity contributes to the economic robustness of the Kaspa L1. Kaspa L2s are designed for usability and economic alignment.",
      "Kaspa's entire architecture is being meticulously engineered from the ground up to seamlessly support efficient and secure L2 solutions, recognizing L2s as an essential component of truly scalable smart contract platforms. L2 scaling is a core design principle of Kaspa. To dismiss L2 scaling for Kaspa is to ignore its fundamental architectural approach."
    ],
    references: [
      "https://x.com/DesheShai/status/1883191027869065654?t=u7MUoJdpISqZ0vwCG4Xv1A&s=19"
    ]
  },
  {
    id: "fud-15",
    title: "Ledger history gaps are evidence of \"speedmining\" or hidden wrongdoing",
    category: "Ledger",
    claim: "The missing ledger data is intentionally hidden to conceal evidence of \"speedmining,\" pre-mines, or other illicit activities by the Kaspa team.",
    facts: [
      "It is fundamentally impossible for anyone in a permissionless cryptocurrency to definitively prove they don't possess more coins than they publicly claim. Someone intending to hide coins could always use separate, secret addresses.",
      "Even with a complete ledger, hidden coin holdings by individuals are virtually impossible to disprove, especially for mined coins, as miners can direct rewards to any address without linking it to their public identity.",
      "The current ledger reconstruction process relies on data voluntarily provided by various users. No single entity controls which parts of the history are available, making intentional concealment of specific data segments by developers statistically improbable and illogical.",
      "The argument that missing data hides wrongdoing relies on the absurd assumption that incriminating evidence exists in the ledger data and that the developers are relying on \"blind luck\" that the particular portion containing this hypothetical evidence will never surface during ledger reconstruction efforts.",
      "Ironically, proponents of privacy coins, where the entire ledger is designed to be opaque and untraceable, are sometimes making these \"transparency\" accusations, highlighting the illogical and often politically motivated nature of such criticisms."
    ],
    references: [
      "https://github.com/kaspagang/kaspad-py-explorer/blob/main/src/genesis_proof.ipynb"
    ]
  },
  {
    id: "fud-16",
    title: "PoW cost is a wasteful expenditure with no real network benefit",
    category: "PoW",
    claim: "The computational work in PoW is pointless, arbitrary number crunching that adds no value.",
    facts: [
      "The energy expenditure in PoW directly contributes to network security by making attacks economically unfeasible. This is not waste, but rather a crucial feature that enables trustless consensus.",
      "PoW's energy cost creates a real-world anchor for digital scarcity, something that cannot be achieved through purely digital means. The physical cost of mining gives fundamental value to the network.",
      "The competitive nature of PoW mining drives innovation in energy efficiency and utilization of otherwise wasted energy sources, contributing to broader technological advancement."
    ],
    references: [
      "https://medium.com/@danhedl/pow-is-efficient-aa3d442754d3",
      "https://chatgpt.com/share/679a5163-c264-800e-a14b-04d118566505"
    ]
  }
];
