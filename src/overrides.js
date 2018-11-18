module.exports = function (colorConfig) {
	return function overrides(config, color) {
		const colorObj = colorConfig[color]
		const tokenColors = []

		config.tokenColors.forEach(tc => {
			switch (tc.name) {
				case 'Text':
				case 'js/ts variable.other.constant':
					tc.settings.foreground = colorObj.whiskey
					break

				case 'js variable readwrite':
					tc.scope = tc.scope.split(',').slice(1).join(',')
					break

				case 'js variable readwrite':
				case 'Operators':
				case 'Variables':
					tc = null
					break

				case 'keyword.operator':
					tc.scope += 'keyword.operator,punctuation.separator,punctuation.terminator'
					break

				case 'Keyword Control':
				case 'Storage':
					tc.settings.fontStyle = 'italic'
					break
			}

			// Only push the token colors that we want
			if (tc) tokenColors.push(tc)
		})

		// Update the config with the temporary token colors array
		config.tokenColors = tokenColors

		// Add the new settings
		config.tokenColors.push(...[
			{
				name: 'Parameters',
				scope: 'variable.parameter',
				settings: {
					foreground: colorObj.whiskey,
					fontStyle: 'italic'
				}
			},
			{
				name: 'JS/TS Arrow Functions',
				scope: 'storage.type.function.arrow',
				settings: {
					fontStyle: 'normal'
				}
			},
			{
				name: 'this and self',
				scope: 'variable.language.special.self,variable.language.this',
				settings: {
					foreground: colorObj.chalky,
					fontStyle: 'italic'
				}
			}
		])

		return config
	}
}
