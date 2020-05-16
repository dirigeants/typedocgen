import { Cli } from './lib/Cli';

new Cli().run().catch(err => {
	console.error(err);
	process.exit(1);
});
