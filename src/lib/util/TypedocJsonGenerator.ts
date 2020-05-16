import { Application, TSConfigReader, TypeDocReader } from 'typedoc';
import { TypedocJson } from './Types';

export function generateTypedocJson(source: string): TypedocJson | null {
	const app = new Application();

	// If you want TypeDoc to load tsconfig.json / typedoc.json files
	app.options.addReader(new TSConfigReader());
	app.options.addReader(new TypeDocReader());

	app.bootstrap({
		inputFiles: [source],
		mode: 'modules'
	});

	const project = app.convert(app.expandInputFiles([source]));
	if (project) return app.serializer.projectToObject(project);

	return null;
}
