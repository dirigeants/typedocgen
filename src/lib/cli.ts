import { config as cliargs } from './Config';
import { generateTypedocJson } from './util/TypedocJsonGenerator';
import { relative, join, dirname } from 'path';
import { readJSON, outputFile } from 'fs-nextra';
import { readFile } from 'fs/promises';
import { DocConfig, DocConfigCategory, DocConfigFile } from './util/Types';

export class Cli {

	public guides = {};
	public categoryCount = 0;
	public fileCount = 0;

	public async run(): Promise<never> {
		const typedoc = generateTypedocJson(cliargs.source);
		if (!typedoc) return process.exit(1);
		if (cliargs.config) {
			await this.loadGuides();
			(typedoc as any).guides = this.guides;
		}

		if (cliargs.output) {
			console.log(`Writing to ${cliargs.output}...`);
			await outputFile(cliargs.output, JSON.stringify(typedoc));
		}

		console.log('Done!');
		return process.exit(0);
	}

	public async loadGuides(): Promise<void[][]> {
		const docconfig: DocConfig = await readJSON(cliargs.config);

		return Promise.all(docconfig.map(category => this.parseCategory(category)));
	}

	public parseCategory(category: DocConfigCategory): Promise<void[]> {
		const dir = join(dirname(cliargs.config), category.path || category.name);

		this.guides[category.name] = { name: category.name, files: [] };
		this.categoryCount++;

		return Promise.all(category.files.map(file => this.parseFile(dir, file, category)));
	}

	public async parseFile(filePath: string, file: DocConfigFile, category: DocConfigCategory): Promise<void> {
		const content = await readFile(filePath, 'utf-8');
		const path = relative(cliargs.root, filePath).replace(/\\/g, '/');

		if (cliargs.verbose) console.log(`Loaded custom docs file ${category.name}/${file.name}`);

		this.guides[category.name].files[file.path] = { name: file.name, content, path };
		this.fileCount++;
	}


}
