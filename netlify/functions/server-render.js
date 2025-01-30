const { metaContent } = require('../../src/data/articleMeta');

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
        <meta property="og:url" content="${fullUrl}" />
        <meta property="og:title" content="${article.title}" />
        <meta property="og:description" content="${article.description}" />
        <meta property="og:image" content="https://i.postimg.cc/hPVwjmgx/images-1.png" />
        <meta property="og:site_name" content="KaspArchive" />
        
        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="${fullUrl}" />
        <meta name="twitter:title" content="${article.title}" />
        <meta name="twitter:description" content="${article.description}" />
        <meta name="twitter:image" content="https://i.postimg.cc/hPVwjmgx/images-1.png" />
        
        <link rel="icon" type="image/png" href="https://i.postimg.cc/hPVwjmgx/images-1.png" />
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