const clienteForm = document.getElementById("cliente-form");
const produtoForm = document.getElementById("produto-form");
const clientesLista = document.getElementById("clientes__lista");
const produtosLista = document.getElementById("produtos__lista");
const produtosListaCheckbox = document.getElementById("produtos__lista__checkbox");
const btnCalcular = document.getElementById("calcular");
const containerPergunta = document.getElementById("container-pergunta");
const contadorDeClientes = 0;
var j = 0;
const clientes = [];
const produtos = [];
const precos = [];

clienteForm.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['cliente'].value;

    criaCliente(nome);
})

produtoForm.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const produto = evento.target.elements['produto'].value;
    const preco = evento.target.elements['preco'].value;

    criaProduto(produto, preco)
})


function criaCliente(nome) {
    const novoCliente = document.createElement("li");
    novoCliente.classList.add("lista__item");
    novoCliente.innerHTML = nome;

    clientesLista.appendChild(novoCliente);
    clientes.push(nome);
    // console.log(clientes.length);
    // console.log(clientes);
}

function criaProduto(produto, preco) {
    const novoProduto = document.createElement("li");
    novoProduto.classList.add("lista__item");
    novoProduto.innerHTML = produto + ' R$' + parseInt(preco);

    produtosLista.appendChild(novoProduto);
    produtos.push(produto);
    precos.push(preco);
    // console.log(produtos);
    // console.log(precos);
}

// Botão responsável por iniciar o calculo e armazenar o que cada cliente consumiu

btnCalcular.addEventListener("click", function calcular (evento) {
        evento.preventDefault();
        var contadorProdutos = 0;
        var contadorDelete = 0;
        const pergunta = document.getElementById("pergunta");
        pergunta.innerHTML = `Quais itens o cliente ${clientes[j]} consumiu?`;

        produtos.forEach(element => {
            contadorProdutos += 1;
            const itemProdutoCheckbox = document.createElement("li");
            itemProdutoCheckbox.classList.add("lista__item__checkbox");
            itemProdutoCheckbox.id = `produto${contadorProdutos}`;
            itemProdutoCheckbox.innerHTML = element;

            const produtoCheckbox = document.createElement("input");
            produtoCheckbox.type = "checkbox";
            produtoCheckbox.id = `${contadorProdutos}`;
            produtosListaCheckbox.appendChild(itemProdutoCheckbox);
            itemProdutoCheckbox.appendChild(produtoCheckbox);
        });

        const btnProximoCliente = document.createElement("button");
        btnProximoCliente.id = "proximo-cliente";
        btnProximoCliente.classList.add("btn");
        btnProximoCliente.innerText = "Próximo cliente/Calcular";

        containerPergunta.appendChild(btnProximoCliente);

        btnProximoCliente.addEventListener("click", (evento) => {
            evento.preventDefault();
            contadorDelete = 1;
            j += 1;
            if (j <= clientes.length) {
                while ( contadorDelete <= produtos.length) {
                    const produtoCheckboxEmpurrar = document.getElementById(`${contadorDelete}`);
                    formaOArrayComIndices(produtoCheckboxEmpurrar);
                    const produtoLiASerRemovido = document.getElementById(`produto${contadorDelete}`);
                    produtoLiASerRemovido.remove();
                    contadorDelete += 1;
                }

                arraydearrays.push(indicesProdutosAPagar);
                indicesProdutosAPagar = [];
                
                btnProximoCliente.remove();
                console.log(clientes.at(j-1));
                calcular(evento);

            } else {
                // Aqui vai a função de calculo
                console.log("acabou os clientes");
                console.log(arraydearrays);
                criaArrayDeContadores();
                contadores(arrayContadores);
                contasAPagar(arrayContadores);
            }
            
        });

    });


var indicesProdutosAPagar = [];
var arraydearrays = [];

function formaOArrayComIndices(input) {

    if (input.checked) {
        indicesProdutosAPagar.push(input.id);
    }
    return indicesProdutosAPagar
}

function contadores(arrayContadores) {
    // console.log(arraydearrays);
    for ( var m = 0 ; m <= clientes.length - 1 ; m++) {
        var indicesProdutos = arraydearrays.at(m);
        // console.log("O cliente = " + clientes.at(m));
        // console.log("Consumiu os produtos = " + indicesProdutos);
        for ( var n = 0; n <= indicesProdutos.length - 1; n++) {
            // console.log(n);
            // console.log((parseInt(indicesProdutos.at(n)) - 1 - m));
            if (m = 1 && parseInt(indicesProdutos) === arrayContadores.length) {
                if ( n === (parseInt(indicesProdutos.at(n))) - 1 - m){
                    // console.log(arrayContadores.at(n));
                    
                    var variavel = parseInt(arrayContadores.at(n));
                    var soma = variavel + 1;
                    arrayContadores.splice(n + 1, 1, soma);
                    // console.log(arrayContadores);
                }
            } else {
                if ( n === (parseInt(indicesProdutos.at(n))) - 1 - m){
                    // console.log(arrayContadores.at(n));
                    
                    var variavel = parseInt(arrayContadores.at(n));
                    var soma = variavel + 1;
                    arrayContadores.splice(n, 1, soma);
                    // console.log(arrayContadores);
                } else if (indicesProdutos.length === arrayContadores.length){
                    var variavel = parseInt(arrayContadores.at(n));
                    var soma = variavel + 1;
                    arrayContadores.splice(n, 1, soma);
                    // console.log(arrayContadores);
                }
            }
               
                // arrayContadores.at(n) = parseInt(arrayContadores.at(n)) + 1;
            } 
        }
        n = 0;
        return arrayContadores
    }

var arrayContadores = [];

function criaArrayDeContadores() {
    var cont = 0;
    while (cont <= produtos.length - 1) {
        arrayContadores.push(0);
        cont += 1;
    }
    return arrayContadores;
}
// cliente indice 0 
// vai pagar os produtos 1,2,3

// contador do produto 1 += 1
// contador do produto 2 += 1
// contador do produto 3 += 1

// cliente indice 1 
// vai pagar os produtos 1
// contador do produto 1 += 1

function contasAPagar(arrayContadores) {
    var n = 0;
    var somaConta = 0;
    for ( var m = 0 ; m <= clientes.length - 1 ; m++) {
        var indicesProdutos = arraydearrays.at(m);
        var verificador = parseInt(indicesProdutos.at(n)) - 1;
        var somaConta = 0;

        console.log("O cliente = " + clientes.at(m));
        console.log("Consumiu os produtos = " + indicesProdutos);
        
        while ( n <= produtos.length - 1){
            
            if ( (n+1) === parseInt(indicesProdutos.at(n))){
                var precoAPagar = parseInt(precos.at(n));
                var quantosVaoPagar = parseInt(arrayContadores.at(n));
                somaConta = somaConta + (precoAPagar/quantosVaoPagar);
            } else if ( m != 0 && n === verificador){
                console.log(n);
                console.log(indicesProdutos.at(0));
                var precoAPagar = parseInt(precos.at(n));
                var quantosVaoPagar = parseInt(arrayContadores.at(n));
                somaConta = somaConta + (precoAPagar/quantosVaoPagar);
            } else if (indicesProdutos.length === arrayContadores.length){
                somaConta = somaConta + (precoAPagar/quantosVaoPagar);
            }
            n++;
        }

        console.log("Tem que pagar = " + somaConta);
        n = 0;
    }
}

// && (n) === (parseInt(indicesProdutos.at(n)))