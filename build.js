const { existsSync, mkdirSync, writeFileSync } = require('fs')
const editorConfig = require('./src/editor.json')
const { classic, vivid } = require('./src/syntax')

// Create the directory if it doesn't exist
if (!existsSync('./themes')) {
  mkdirSync('./themes');
}

writeFileSync(
  './themes/OneDark-Pro.json',
  JSON.stringify(
    {
      ...editorConfig,
      ...classic
    },
    '',
    2
  )
)

writeFileSync(
  './themes/OneDark-Pro-vivid.json',
  JSON.stringify(
    {
      ...editorConfig,
      ...vivid
    },
    '',
    2
  )
)