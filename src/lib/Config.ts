import * as yargs from 'yargs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../../package.json');

export const config = yargs
	.usage('$0 [command] [options]')
	.epilogue(`Typedoc Generator v${version}`)

	.option('source', {
		type: 'string',
		alias: 'src',
		describe: 'The source of the project',
		normalize: true
	})
	.option('root', {
		type: 'string',
		alias: 'r',
		describe: 'Root directory of the project',
		normalize: true,
		default: '.'
	})
	.option('output', {
		type: 'string',
		alias: 'o',
		describe: 'Path to output file',
		normalize: true
	})
	.option('verbose', {
		type: 'boolean',
		alias: 'log',
		describe: 'Logs extra information to the console',
		default: false
	})
	.option('config', {
		type: 'string',
		alias: 'C',
		describe: 'Location of the docconfig.json file for all the guides/tutorials',
		group: 'Special:',
		normalize: true,
		config: true,
		configParser: configFile => require(configFile)
	})
	.help()
	.group('help', 'Special:')
	.version(version)
	.alias('version', 'v')
	.group('version', 'Special:')
	.completion('completion')
	.wrap(yargs.terminalWidth())
	.argv;
