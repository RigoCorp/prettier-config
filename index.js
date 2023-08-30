/*
 * Copyright 2023 Rigoberto Corporation
 * SPDX-License-Identifier: MIT
 */

module.exports = {
	/*
	 * Specify the line length that the printer will wrap on.
	 *
	 * According to the documentation, it is not the hard upper allowed line length limit. It is
	 * a way to say to Prettier roughly how long you’d like lines to be.
	 */
	printWidth: 100,

	/*
	 * Number of spaces per indentation-level.
	 */
	tabWidth: 4,

	/*
	 * Indent lines with tabs instead of spaces.
	 */
	useTabs: true,

	/*
	 * Add a semicolon at the end of every statement.
	 */
	semi: true,

	/*
	 * Use single quotes instead of double quotes.
	 */
	singleQuote: true,

	/*
	 * Only add quotes around object properties where required.
	 */
	quoteProps: 'as-needed',

	/*
	 * Put trailing commas where valid in ES5 (objects, arrays, etc.)
	 */
	trailingComma: 'es5',

	/*
	 * Print spaces between brackets in object literals.
	 */
	bracketSpacing: true,

	/*
	 * Put the closing > of a multi-line HTML node alone on the next line.
	 */
	bracketSameLine: false,

	/*
	 * Include parentheses around a sole arrow function parameter.
	 */
	arrowParens: 'always',

	/*
	 * Enable prose wrapping for Markdown files.
	 */
	proseWrap: 'always',

	/*
	 * Disable insertion of whitespaces where it may cause a change in the rendered output.
	 */
	htmlWhitespaceSensitivity: 'css',

	/*
	 * Always use Linux EOL.
	 */
	endOfLine: 'lf',

	/*
	 * Automatically format embedded languages.
	 */
	embeddedLanguageFormatting: 'auto',

	/*
	 * Do not put one attribute per line in HTML, Vue and JSX.
	 */
	singleAttributePerLine: false,

	/*
	 * Overrides
	 */
	overrides: [
		/*
		 * Format YAML files only if there's a pragma explicitely asking to.
		 *
		 * This plugin generates buggy lists which are not aligned to tab width.
		 */
		{
			files: '**/*.{yml,yaml}',
			options: {
				requirePragma: true,
			},
		},
	],
};
