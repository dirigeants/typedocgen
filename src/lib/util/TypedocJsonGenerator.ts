import { Application, TSConfigReader, TypeDocReader } from 'typedoc';

const app = new Application();

// If you want TypeDoc to load tsconfig.json / typedoc.json files
app.options.addReader(new TSConfigReader());
app.options.addReader(new TypeDocReader());

app.bootstrap({
	inputFiles: ['./src'],
	mode: 'modules'
});

const project = app.convert(app.expandInputFiles(['src']));

if (project) {
	const json = app.serializer.projectToObject(project);
	console.log(json);
}
