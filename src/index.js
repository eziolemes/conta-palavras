export function contaPalavras(texto) {
	const paragrafos = extraiParagrafos(texto);
	const contagem = paragrafos.flatMap((paragrafo) => { // flatmap pega um array dentro de outro array e achata em um só array.
		if (!paragrafo) return [];
		return verificaPalavrasDuplicadas(paragrafo);

	})
	return contagem;
}

function extraiParagrafos(texto) {
	return texto.toLowerCase().split('\n');
}


function verificaPalavrasDuplicadas(texto) {
	const listaPalavras = texto.split(' ');
	const resultado = {};
	listaPalavras.forEach(palavra => {
		if (palavra.length >= 3) {
			const palavraLimpa = limpaPalavras(palavra);
			resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
		}
	});

	return resultado;
}

function limpaPalavras(palavra) {
	return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}