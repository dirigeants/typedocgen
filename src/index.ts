#!/usr/bin/env node
import { Cli } from './lib/cli';

new Cli().run().catch(err => {
	console.error(err);
	process.exit(1);
});
