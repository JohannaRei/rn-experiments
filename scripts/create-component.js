const fs = require('fs');
const {component} = require('./component-template.js');
const {readInput, errorPrint, successPrint} = require('./utils.js');

const createComponent = name => {
  if (!name?.length) throw new Error('You must give a component name.');

  const componentFile = `./src/components/${name}.tsx`;

  if (fs.existsSync(componentFile)) {
    errorPrint(`Component ${componentFile} already exists.`);
  } else {
    fs.writeFile(componentFile, component(name), err => {
      if (err) throw err;
      else successPrint(`Component ${componentFile} created successfully.`);
    });
  }
};

const main = async () => {
  const name = await readInput('Component name? ');
  createComponent(name);
};

main();
