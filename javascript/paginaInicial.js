var listaProdutos = 
[ [0, 'Use e Seduza o homem que você mais gosta!', 'CoffeeWoman.png'], 
[1, 'Não perca tempo e venha descobrir o aroma indiano!', 'IndiaMisteriosa.png'], 
[2, 'Somente o Essencial para todo homem!', 'Essencial.png'] ];

window.onload = function(){

	montarCardProdutos();

}

function clicaCadastro(){
	window.location.href = 'paginas/cadastro.html';
}

function montarCardProdutos(){

	document.getElementById("cards").innerHTML = "";
	

	for (var i = 0; i < listaProdutos.length; i++) {
		var conteudo = "";

		conteudo += '<div class="col-lg-4 col-sm-1 ">';
		conteudo += '<div class="card-img color">';
		conteudo += '<img src="images/produtos/' + listaProdutos[i][2] + '">';
		conteudo += '</div>';
		conteudo += '<div class="descricao color">';
		conteudo += listaProdutos[i][1];
		conteudo += '</div>';

		conteudo += '</div>';

		document.getElementById("cards").innerHTML += conteudo;
	}
}

function comprar(id){

	listaProdutos[id][3] = true;

	carrinho.push(listaProdutos[id]);

	window.localStorage.setItem("carrinho", JSON.stringfy(carrinho));

	montarCardProdutos();
}

function funcaoTeste(){

	window.localStorage.setItem("carrinho", "Teste");

}

function funcaoTesteGet(){
	
	var getCarrinho = window.localStorage.getItem("carrinho");
	alert(getCarrinho);

}