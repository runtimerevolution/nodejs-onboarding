const { execSync } = require('child_process');

execSync(
  `yarn build &&
   yarn export:static &&
   touch ./out/.nojekyll && echo '${
     process.env.GH_PAGE_URL ?? ''
   }' > ./out/CNAME`
);
