var carrinhoProdutos = 
[ 
[0, 'R$119.90', 'Amarige.png', false], 
[1, 'R$79.90', 'Amburana.png', false], 
[2, 'R$149.90', 'CoffeeWoman.png', false], 
[3, 'R$159.90', 'CrazyFeelings.png', false],
[4, 'R$99.90', 'Ekos.png', false],
[5, 'R$139.90', 'Elisee.png', false],
[6, 'R$189.90', 'Essencial.png', false],
[7, 'R$149.90', 'Humor.png', false],
[8, 'R$169.90', 'HypnoticPoison.png', false],
[9, 'R$189.90', 'IndiaMisteriosa.png', false],
[10, 'R$99.90', 'Shiraz.png', false],
[11, 'R$159.90', 'Floratta.png', false],
[12, 'R$189.90', 'Dom.png', false],
[13, 'R$139.90', 'Dreams.png', false],
[14, 'R$79.90', 'Urasfume.png', false],
[15, 'R$119.90', 'UrasHer.png', false],
[16, 'R$189.90', 'Urasmengo.png', false],
[17, 'R$139.90', 'Urasvalo.png', false],
[18, 'R$189.90', 'Urinthians.png', false],
[19, 'R$169.90', 'UrMalte.png', false],
[20, 'R$189.90', 'UrZeiro.png', false],
[21, 'R$129.90', 'Vanilla.png', false],
];

var carrinho = [];

window.onload = function(){

	montarCardProdutos();

}

function montarCardProdutos(){
	document.getElementById("produtos").innerHTML = "";

	var carrinhoAtual = JSON.parse(localStorage.getItem("carrinho"));

	if (carrinhoAtual != null) {
		carrinhoAtual.push([listaProdutos[id][0], listaProdutos[id][1], listaProdutos[id][2], listaProdutos[id][3]]);
		listaProdutos[id][2] = true;

		localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
	} 
	else {
		carrinho.push([listaProdutos[id][0], listaProdutos[id][1], listaProdutos[id][2], listaProdutos[id][3]]);
		listaProdutos[id][2] = true;
		
		localStorage.setItem("carrinho", JSON.stringify(carrinho));
	}

	alert("Carrinho: " + carrinhoAtual)
	

	/*
	for (var i = 0; i < listaProdutos.length; i++) {
		var conteudo = "";

		conteudo += '<div class="card">';
	    conteudo += '<div class="card-img">';
	    conteudo += '<img src="../images/produtos/' + carrinhoProdutos[i][2] + '">';
	    conteudo += '</div>';
	    conteudo += '<div class="preco">';
	    conteudo += carrinhoProdutos[i][1];
	    conteudo += '</div>';

	    if (carrinhoProdutos[i][3] == false) {
	    	conteudo += '<div class="comprar">';
	    	conteudo += 'Comprar';
	    	conteudo += '</div>';
	    } 

	    conteudo += '</div>';

		document.getElementById("produtos").innerHTML += conteudo;
	}*/
}

function comprar(id){

	listaProdutos[id][3] = true;

	carrinho.push(listaProdutos[id]);

	window.localStorage.setItem("carrinho", JSON.stringfy(carrinho));

	montarCardProdutos();
}