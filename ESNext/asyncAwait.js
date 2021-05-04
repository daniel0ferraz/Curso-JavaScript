// Com promisse
const http = require('http')

const getTurma = letra => {
	const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
	return new Promise((resolve, reject) => {
		get(url, res => {
			let resultado = '';

			res.on('data', dados => {
				resultado += dados;
			});

			res.on('end', () => {
				try {
					resolve(JSON.parse(resultado));
				} catch {
					reject(e);
				}
			});
		});
	});
};

//   Recurso do es8
// Simplificar o usi do promise

let obterAlunos = async () => {
	const ta = await getTurma('A');
	const tb = await getTurma('B');
	const tc = await getTurma('C');
	return [].concat(ta, tb, tc);
}; // retorna um objeto AsyncFunction

obterAlunos()
	.then(alunos => alunos.map(a => a.nome))
	.then(nomes => console.log(nomes));
