const yaml = require('js-yaml');
const fs   = require('fs');

// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync('./syntaxes/🌊💎🌧.tmLanguage.yaml', 'utf8'));
  console.log(doc);
  fs.writeFileSync('./syntaxes/🌊💎🌧.tmLanguage.json',JSON.stringify(doc,null,2), 'utf-8')
} catch (e) {
  console.log(e);
}
