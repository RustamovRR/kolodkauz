module.exports = (plop) => {
	plop.setGenerator("component", {
		description: "Creating new react components",
		prompts: [
			{
				type: "input",
				name: "name"
			}
		],
		actions: () => [
			{
				type: "add",
				templateFile: "plop-templates/component/index.hbs",
				path: "src/components/{{pascalCase name}}/index.js"
			},
			{
				type: "add",
				templateFile: "plop-templates/component/component.hbs",
				path: "src/components/{{pascalCase name}}/{{pascalCase name}}.jsx"
			},
			{
				type: "add",
				path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss"
			}
		]
	});
};
