$(document).ready(function(){
	const button = $('#button');

	button.click(function() {
		let nomePais = $('#nomepais').val();
		const api = `https://restcountries.eu/rest/v2/name/${nomePais}`;
		
		$.getJSON(api, function(retorno_api){
			console.log(retorno_api);
			let nomeNativo = retorno_api[0].nativeName;
			let bandeira = retorno_api[0].flag; 
			let populacao = retorno_api[0].population;
			$('#resposta').append(`
			
				<p>População: ${populacao}</p>
				<p>Nome: ${nomeNativo}<p>
				<img src="${bandeira}" class="bandeiras">

			`);

		});
	}); 


});