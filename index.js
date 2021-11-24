/*
 * Copyright 2021 Rigoberto Corporation
 * SPDX-License-Identifier: MIT
 */

module.exports = {
	/*
	 * Specify the line length that the printer will wrap on.
	 */
	printWidth: 120,

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
	 * Always use Linux EOL.
	 */
	endOfLine: 'lf',

	/*
	 * Overrides
	 */
	overrides: [
		/*
		 * Format Markdown files only if there's a pragma explicitely asking to.
		 *
		 * The reason is that, as of 2.4.1, Prettier replaces headers with ASX ones, which are
		 * harder to read.
		 */
		{
			files: '**/*.md',
			options: {
				requirePragma: true,
			},
		},

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
