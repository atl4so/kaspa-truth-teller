interface ArticleMeta {
  title: string;
  description: string;
}

interface MetaContent {
  [key: string]: ArticleMeta;
}

export const metaContent: MetaContent = {
  '1': {
    title: 'KaspArchive #1: Understanding DAGLabs\' Role',
    description: 'Learn the truth about DAGLabs and Kaspa\'s fair launch. Discover how DAGLabs transitioned from initial development to community ownership, with transparent documentation of their $8M funding and mining activities.',
  },
  '2': {
    title: 'KaspArchive #2: Understanding PoW Security',
    description: 'Explore why Proof of Work remains crucial for true decentralization. Learn how PoW provides unique security benefits through physical backing and its proven track record of securing high-value networks.',
  },
  '3': {
    title: 'KaspArchive #3: Kaspa\'s Scalability Solutions',
    description: 'Discover how Kaspa solves scalability challenges through innovative solutions like KIP-9 and based rollups. Learn about Kaspa\'s approach to ledger management and L2 scaling.',
  },
  '4': {
    title: 'KaspArchive #4: Understanding Ledger History',
    description: 'Learn how Kaspa maintains security and transparency through cryptographic proofs, even with pruned ledger history. Understand the role of proof-of-genesis in verifying the network\'s state.',
  },
  '5': {
    title: 'KaspArchive #5: PoW Mining Accessibility',
    description: 'Explore how Kaspa\'s PoW mining enables fair participation and prevents centralization. Learn about mining pools, individual mining opportunities, and sustainable energy usage.',
  },
  '6': {
    title: 'KaspArchive #6: Speed & Efficiency',
    description: 'Understand how Kaspa achieves high performance through GhostDAG protocol. Learn about the balance between speed, security, and energy efficiency in Kaspa\'s design.',
  },
  '7': {
    title: 'KaspArchive #7: Smart Contract Strategy',
    description: 'Discover Kaspa\'s strategic approach to smart contracts and DeFi. Learn how Layer 2 solutions will enable advanced functionality while maintaining Layer 1 security.',
  },
  '8': {
    title: 'KaspArchive #8: Kaspa\'s Innovations',
    description: 'Explore the groundbreaking technologies behind Kaspa, including GHOSTDAG protocol and BlockDAG architecture. Learn how these innovations solve critical blockchain limitations.',
  },
  '9': {
    title: 'KaspArchive #9: Quantum Security',
    description: 'Learn about Kaspa\'s approach to quantum computing challenges and future security. Understand how BlockDAG architecture provides advantages for future cryptographic upgrades.',
  }
};