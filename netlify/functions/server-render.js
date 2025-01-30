exports.handler = async (event) => {
  const path = event.path;
  const articleId = path.split('/').pop();
  
  // Define your meta content based on the article ID
  const metaContent = {
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

  const article = metaContent[articleId];
  
  if (!article) {
    return {
      statusCode: 404,
      body: 'Article not found'
    };
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <!-- Primary Meta Tags -->
        <title>${article.title}</title>
        <meta name="title" content="${article.title}" />
        <meta name="description" content="${article.description}" />
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://kasparchive.com${path}" />
        <meta property="og:title" content="${article.title}" />
        <meta property="og:description" content="${article.description}" />
        <meta property="og:image" content="https://i.postimg.cc/hPVwjmgx/images-1.png" />
        <meta property="og:site_name" content="KaspArchive" />
        
        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kasparchive.com${path}" />
        <meta name="twitter:title" content="${article.title}" />
        <meta name="twitter:description" content="${article.description}" />
        <meta name="twitter:image" content="https://i.postimg.cc/hPVwjmgx/images-1.png" />
        
        <link rel="icon" type="image/png" href="https://i.postimg.cc/hPVwjmgx/images-1.png" />
      </head>
      <body>
        <div id="root"></div>
        <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  `;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };
};