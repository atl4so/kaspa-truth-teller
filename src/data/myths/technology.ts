import { MythData } from "./types";

export const technologyMyths: MythData[] = [
  {
    id: "kaspa-finalization-speed",
    title: "Kaspa's 10-second finalization is too slow for practical use",
    category: "Technology",
    claim: "Kaspa's 10-second finalization is outdated and uncompetitive compared to faster blockchains. THIS IS A MISUNDERSTANDING OF KASPA'S FINALITY MODEL AND FUTURE PLANS.",
    facts: [
      "Kaspa's current 10-second finalization is optimized to achieve true, Nakamoto-style probabilistic finality within the inherent constraints of network latency. This provides robust and secure finality now, not slow finality.",
      "Claims of 'faster finality' in other systems often come at the cost of weaker security assumptions, relying on less robust forms of finality or introducing trust dependencies. Kaspa prioritizes strong, provable security over misleadingly fast 'finality' in its base layer.",
      "Kaspa's roadmap includes the DagKnight (DK) protocol. DK is not yet implemented but is under development.",
      "The DagKnight (DK) protocol is specifically designed to enable near-instant confirmations on Kaspa in the future. This future upgrade aims to significantly improve confirmation speed while maintaining Kaspa's strong security guarantees.",
      "Therefore, while Kaspa currently has a 10-second finalization optimized for robust security, the future DagKnight (DK) protocol is intended to deliver near-instant confirmations, addressing concerns about speed while upholding Kaspa's core principles. Kaspa is actively evolving to offer both strong security and faster confirmations."
    ]
  }
];