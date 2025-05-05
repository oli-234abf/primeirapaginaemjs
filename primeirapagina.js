const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Olá mundo, digite algo: ', (resposta) => {
  console.log(`Você digitou: ${resposta}`);
  rl.close();
});
