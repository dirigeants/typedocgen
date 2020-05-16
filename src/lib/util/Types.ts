import { ModelToObject } from 'typedoc/dist/lib/serialization/schema';
import { ProjectReflection } from 'typedoc';

export type DocConfig = DocConfigCategory[]

export interface DocConfigCategory {
	name: string;
	path?: string;
	files: DocConfigFile[];
}

export interface DocConfigFile {
	name: string;
	path: string;
}

export type TypedocJson = ModelToObject<ProjectReflection>;
