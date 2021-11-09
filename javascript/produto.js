var listaProdutos = 
[ 
[0, 'Amarige', false, false], 
[1, 'Amburana', false, false], 
[2, 'CoffeeWoman', false, false], 
[3, 'CrazyFeelings', false, false],
[4, 'Ekos', false, false],
[5, 'Elisee', false, false],
[6, 'Essencial', false, false],
[7, 'Humor', false, false],
[8, 'Hypnotic Poison', false, false],
[9, 'India Misteriosa', false, false],
[10, 'Shiraz', false, false],
[11, 'Floratta', false, false],
[12, 'Dom', false, false],
[13, 'Dreams', false, false],
[14, 'Urasfume', false, false],
[15, 'UrasHer', false, false],
[16, 'Urasmengo', false, false],
[17, 'Urasvalo', false, false],
[18, 'Urinthians', false, false],
[19, 'UrMalte', false, false],
[20, 'UrZeiro', false, false],
[21, 'Vanilla', false, false],
];

var carrinho = [];

var comprado = [];

/*
function comprarProduto(){
	document.getElementById("comprar").innerHTML = "";

	for (var i = 0; i < listaProdutos.length; i++) {
		var conteudo = "";

		conteudo += '<button class="button-buy" onclick="comprar()">' + listaProdutos[i][2] + '</button>';

		document.getElementById("comprar").innerHTML += conteudo;
		
	}
}*/

/*
function limpaStorage(){
	localStorage.clear();
}
*/

function comprar(id){
	var carrinhoAtual = JSON.parse(localStorage.getItem("carrinho"));
	var conteudo = "";

	if(listaProdutos[id][2] == false && listaProdutos[id][3] == false){
		if (carrinhoAtual != null) {
			listaProdutos[id][2] = true;

			carrinhoAtual.push([listaProdutos[id][0], listaProdutos[id][1], listaProdutos[id][2], listaProdutos[id][3]]);
			localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));

			conteudo = '<button class="button-buy" onclick="comprar()">Adicionado no Carrinho</button>';

			document.getElementById("button-comprar").innerHTML = conteudo;
		} 
		else {
			listaProdutos[id][2] = true;

			carrinho.push([listaProdutos[id][0], listaProdutos[id][1], listaProdutos[id][2], listaProdutos[id][3]]);
			localStorage.setItem("carrinho", JSON.stringify(carrinho));

			conteudo = '<button class="button-buy" onclick="comprar()">Adicionado no Carrinho</button>';

			document.getElementById("button-comprar").innerHTML = conteudo;
		}

		alert("Adicionado: " + listaProdutos[id][1] + " ao carrinho");

	}

	if (listaProdutos[id][2] == true && listaProdutos[id][3] == false) {
		alert("Produto: " + listaProdutos[id][1] + " já inserido no carrinho");

		//document.getElementById("button-comprar").innerHTML = "Adicionado no carrinho";
		conteudo = '<button class="button-buy" onclick="comprar()">Adicionado no Carrinho</button>';

		document.getElementById("button-comprar").innerHTML = conteudo;
	}

	if(listaProdutos[id][2] == true && listaProdutos[id][3] == true){
		alert("O produto: " + listaProdutos[id][1] + " já foi comprado!");

		conteudo = '<button class="button-buy" onclick="comprar()">Comprado</button>';
		document.getElementById("button-comprar").innerHTML = conteudo;
	}

}

/*
function montarCardProdutos(){

	document.getElementById("produtos").innerHTML = "";
	

	for (var i = 0; i < listaProdutos.length; i++) {
		var conteudo = "";

		conteudo += '<div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">';
		conteudo += '<div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">';
		conteudo += '<div class="my-3 py-3">';
		conteudo += '<h2 class="display-5">' + listaProdutos[i][1] + '</h2>';
		conteudo += '<p class="lead">' + listaProdutos[i][2] + '</p>';
		conteudo += '<p class="lead">' + listaProdutos[i][3] + '</p>';
		conteudo += '</div>';
		conteudo += '<div class="bg-dark shadow-sm mx-auto" style = "width: 80%; height: 300px; border-radius: 21px 21px 0 0;">';
		conteudo += '<img src="../images/produtos/' + listaProdutos[i][4] '" style="width: 100%; height: 100%;">';
		conteudo += '</div>';

		if (listaProdutos[i][6] == false && listaProdutos[i][7] == false) {
			conteudo += '<button class="button-buy" onclick="comprar()">Comprar</button>';
		}
		if(listaProdutos[i][6] == true && listaProdutos[i][7] == false){
			conteudo += '<button class="button-buy" onclick="comprar()">Adicionado no Carrinho</button>';
		}
		if(listaProdutos[i][6] == true && listaProdutos[i][7] == true){
			conteudo += '<button class="button-buy" onclick="comprar()">Comprado</button>';
		}

		conteudo += '</div>';

		/* PRODUTO 2 
		conteudo += '<div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">';
		conteudo += '<div class="my-3 p-3">';
		conteudo += '<h2 class="display-5">' + listaProdutos[i + 1][1] + '</h2>';
		conteudo += '<p class="lead">' + listaProdutos[i + 1][2] + '</p>';
		conteudo += '<p class="lead">' + listaProdutos[i + 1][3] + '</p>';
		conteudo += '</div>';
		conteudo += '<div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">';
		conteudo += '<img src="../images/produtos/' + listaProdutos[i + 1][4] '" style="width: 100%; height: 100%;">';
		conteudo += '</div>';

		if (listaProdutos[i][6] == false && listaProdutos[i + 1][7] == false) {
			conteudo += '<button class="button-buy" onclick="comprar()">Comprar</button>';
		}
		if(listaProdutos[i][6] == true && listaProdutos[i + 1][7] == false){
			conteudo += '<button class="button-buy" onclick="comprar()">Adicionado no Carrinho</button>';
		}
		if(listaProdutos[i][6] == true && listaProdutos[i + 1][7] == true){
			conteudo += '<button class="button-buy" onclick="comprar()">Comprado</button>';
		}

		conteudo += '</div>';
		conteudo += '</div>';
      
		document.getElementById("produtos").innerHTML += conteudo;
	}
}
*/