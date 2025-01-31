import { MythData } from "./types";

export const powMyths: MythData[] = [
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
      "https://chatgpt.com/share/679b91ea-6950-800e-aac5-bdd8b8805b96",
      "https://x.com/coinathlete/status/1639989498384732160?t=P5lsgxgUo5yz7JJ5k9ht2w&s=19"
    ]
  }
];