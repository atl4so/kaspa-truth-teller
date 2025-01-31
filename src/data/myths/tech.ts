import { MythData } from "./types";

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
  }
];