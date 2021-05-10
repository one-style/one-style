const { getEslint } = require('@one-style/eslint')
const config = getEslint({
  useReact: false,
})
module.exports = config
