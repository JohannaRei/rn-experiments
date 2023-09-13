const readline = require('readline');

const readInput = async question => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    });
  });
};

const errorPrint = text => console.log(`\x1b[31m${text}\x1b[0m`);
const successPrint = text => console.log(`\x1b[32m${text}\x1b[0m`);

module.exports = {
  readInput,
  errorPrint,
  successPrint,
};
