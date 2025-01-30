exports.handler = async (event) => {
  const path = event.path;
  const articleId = path.split('/').pop();
  
  // Define your meta content based on the article ID
  const metaContent = {
    '1': {
      title: 'Kaspa Analysis #1: Understanding DAGLabs\' Role',
      description: 'DAGLabs, founded in 2018 by Yonatan Sompolinsky, has a transparent history of development and fair launch, with clear documentation of their $8M funding primarily from Polychain.',
    },
    '2': {
      title: 'Kaspa Analysis #2: Understanding PoW Security',
      description: 'Proof of Work provides unique security benefits through its physical backing and proven track record of securing high-value networks.',
    },
    // ... Add meta content for other articles
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
        <title>${article.title}</title>
        
        <meta name="description" content="${article.description}" />
        <meta property="og:title" content="${article.title}" />
        <meta property="og:description" content="${article.description}" />
        <meta property="og:image" content="https://i.postimg.cc/hPVwjmgx/images-1.png" />
        <meta property="og:url" content="https://kasparchive.com${path}" />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
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