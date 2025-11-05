#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

module.exports = function (context) {
  if (!context.opts.cordova.platforms.includes('ios')) {
    console.log('cordova-plugin-ios-disable-bounce Not iOS platform, skipping CSS injection.');
    return;
  }

  const projectRoot = context.opts.projectRoot;
  const indexPath = path.join(projectRoot, 'www', 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.warn('cordova-plugin-ios-disable-bounce index.html not found, skipping.');
    return;
  }

  let html = fs.readFileSync(indexPath, 'utf8');
  const linkTag = '<link rel="stylesheet" href="cordova-plugin-ios-disable-bounce/disablebouncestyle.css">';

  if (html.includes(linkTag)) {
    console.log('cordova-plugin-ios-disable-bounce CSS already linked.');
    return;
  }

  html = html.replace(/<\/head>/i, `  ${linkTag}\n</head>`);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('cordova-plugin-ios-disable-bounce CSS link added to index.html (iOS only)');
};
