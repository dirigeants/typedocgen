export type DocConfig = DocConfigCategory[]

export interface DocConfigCategory {
	name: string;
	files: DocConfigFile[];
}

export interface DocConfigFile {
	name: string;
	path: string;
}
