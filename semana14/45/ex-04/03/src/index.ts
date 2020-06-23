import * as fs from 'fs';

// EXercício 3
const nomeDoArquivo: string = process.argv[2];
const novaTarefa: string = process.argv[3];
const tarefa: string = `\n${novaTarefa}`;

fs.appendFileSync(nomeDoArquivo, tarefa, 'utf8');
