const { metaContent } = require('./articleMeta.ts');

exports.handler = async (event) => {
  const path = event.path;
  const articleId = path.split('/').pop();
  
  const article = metaContent[articleId];
  
  if (!article) {
    return {
      statusCode: 404,
      body: 'Article not found'
    };
  }

  const fullUrl = `https://kasparchive.com/kaspa/${articleId}`;
  const imageUrl = articleId === '1' 
    ? 'https://i.postimg.cc/HxDZDmnh/Circle-sign-1-svg.png'
    : 'https://i.postimg.cc/hPVwjmgx/images-1.png';

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R8893Z73LN"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R8893Z73LN');
        </script>
        
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <!-- Primary Meta Tags -->
        <title>${article.title}</title>
        <meta name="title" content="${article.title}" />
        <meta name="description" content="${article.description}" />
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="article" />
        <meta property="og:url" content="${fullUrl}" />
        <meta property="og:title" content="${article.title}" />
        <meta property="og:description" content="${article.description}" />
        <meta property="og:image" content="${imageUrl}" />
        <meta property="og:site_name" content="KaspArchive" />
        
        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="${fullUrl}" />
        <meta name="twitter:title" content="${article.title}" />
        <meta name="twitter:description" content="${article.description}" />
        <meta name="twitter:image" content="${imageUrl}" />
        
        <!-- Keywords and other meta -->
        <meta name="keywords" content="Kaspa, KAS, cryptocurrency, BlockDAG, GHOSTDAG, DagKnight, proof of work, PoW mining, fair launch, Layer 2 scaling, smart contracts, blockchain myths" />
        <meta name="author" content="Kaspa Community" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        <link rel="icon" type="image/png" href="https://i.postimg.cc/hPVwjmgx/images-1.png" />
        
        <!-- Preconnect to important third-party origins -->
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://i.postimg.cc" />
      </head>
      <body>
        <div id="root"></div>
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