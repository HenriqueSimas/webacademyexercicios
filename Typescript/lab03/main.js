// Classes de produtos
var TV = /** @class */ (function () {
    function TV(modelo, resolucao, polegadas, fabricante, valor) {
        this.modelo = modelo;
        this.resolucao = resolucao;
        this.polegadas = polegadas;
        this.fabricante = fabricante;
        this.valor = valor;
    }
    return TV;
}());
var Celular = /** @class */ (function () {
    function Celular(modelo, memoria, fabricante, valor) {
        this.modelo = modelo;
        this.memoria = memoria;
        this.fabricante = fabricante;
        this.valor = valor;
    }
    return Celular;
}());
var Bicicleta = /** @class */ (function () {
    function Bicicleta(modelo, aro, fabricante, valor) {
        this.modelo = modelo;
        this.aro = aro;
        this.fabricante = fabricante;
        this.valor = valor;
    }
    return Bicicleta;
}());
// Carrinho de compras
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras() {
        this.produtos = [];
    }
    CarrinhoDeCompras.prototype.inserir = function (produto) {
        this.produtos.push(produto);
    };
    CarrinhoDeCompras.prototype.remover = function (produto) {
        var index = this.produtos.indexOf(produto);
        if (index > -1) {
            this.produtos.splice(index, 1);
        }
    };
    CarrinhoDeCompras.prototype.calcularValorTotal = function () {
        return this.produtos.reduce(function (total, produto) { return total + produto.valor; }, 0);
    };
    CarrinhoDeCompras.prototype.listarProdutos = function () {
        return this.produtos;
    };
    return CarrinhoDeCompras;
}());
// Funções para enviar dados para o servidor
function enviarCelular(celular) {
    // Simula uma requisição HTTP
    console.log("Enviando celular: ".concat(celular.modelo));
    // Exibe um alerta de sucesso
    alert("Celular ".concat(celular.modelo, " enviado com sucesso!"));
    // Adiciona o celular ao carrinho
    carrinho.inserir(celular);
    // Atualiza o display do carrinho
    atualizarDisplayDoCarrinho();
    // Limpa o formulário
    formCelularEnviar.reset();
}
function enviarTV(tv) {
    // Simula uma requisição HTTP
    console.log("Enviando TV: ".concat(tv.modelo));
    // Exibe um alerta de sucesso
    alert("TV ".concat(tv.modelo, " enviada com sucesso!"));
    // Adiciona a TV ao carrinho
    carrinho.inserir(tv);
    // Atualiza o display do carrinho
    atualizarDisplayDoCarrinho();
    // Limpa o formulário
    formTvEnviar.reset();
}
function enviarBicicleta(bicicleta) {
    // Simula uma requisição HTTP
    console.log("Enviando bicicleta: ".concat(bicicleta.modelo));
    // Exibe um alerta de sucesso
    alert("Bicicleta ".concat(bicicleta.modelo, " enviada com sucesso!"));
    // Adiciona a bicicleta ao carrinho
    carrinho.inserir(bicicleta);
    // Atualiza o display do carrinho
    atualizarDisplayDoCarrinho();
    // Limpa o formulário
    formBikeEnviar.reset();
}
// Atualiza o display do carrinho
// Atualiza o display do carrinho
function atualizarDisplayDoCarrinho() {
    var displayDoCarrinho = document.getElementById('display-do-carrinho');
    var valorTotal = carrinho.calcularValorTotal();
    var listaDeProdutos = carrinho.listarProdutos().map(function (produto, index) {
        return "<div>\n                <p>".concat(produto.modelo, " (").concat(produto.fabricante, "): R$ ").concat(produto.valor, "</p>\n                <button class=\"btn btn-danger mb-3 btn-sm\" onclick=\"removerProduto(").concat(index, ")\">Remover</button>\n              </div>");
    });
    displayDoCarrinho.innerHTML = "<h3>Carrinho de Compras</h3>\n                                   <p>Valor total: R$".concat(valorTotal, "</p>\n                                   ").concat(listaDeProdutos.join(''));
}
// Função para remover produto
function removerProduto(index) {
    var produto = carrinho.listarProdutos()[index];
    carrinho.remover(produto);
    atualizarDisplayDoCarrinho();
}
// Cria uma nova instância do carrinho de compras
var carrinho = new CarrinhoDeCompras();
// Manipulador de eventos para selecionar produto
document.getElementById('produto-selecionado').addEventListener('change', function () {
    var formCelular = document.getElementById('form-celular');
    var formTV = document.getElementById('form-tv');
    var formBike = document.getElementById('form-bike');
    // Oculta todos os formulários
    formCelular.style.display = 'none';
    formTV.style.display = 'none';
    formBike.style.display = 'none';
    // Exibe o formulário correspondente à opção selecionada
    switch (this.value) {
        case '1':
            formCelular.style.display = 'block';
            break;
        case '2':
            formTV.style.display = 'block';
            break;
        case '3':
            formBike.style.display = 'block';
            break;
    }
});
// Manipulador de envio do formulário de celular
var formCelularEnviar = document.getElementById('form-celular-enviar');
formCelularEnviar.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    // Obtém os valores dos campos de entrada
    var modelo = document.getElementById('modelo-celular').value;
    var memoria = document.getElementById('memoria-celular').value;
    var fabricante = document.getElementById('fabricante-celular').value;
    var valor = parseFloat(document.getElementById('valor-celular').value);
    // Cria uma nova instância da classe Celular
    var celular = new Celular(modelo, memoria, fabricante, valor);
    // Envia o celular
    enviarCelular(celular);
});
// Manipulador de envio do formulário de TV (similar ao de celular)
var formTvEnviar = document.getElementById('form-tv-enviar');
formTvEnviar.addEventListener('submit', function (event) {
    event.preventDefault();
    var modelo = document.getElementById('modelo-tv').value;
    var resolucao = document.getElementById('resolucao').value;
    var polegadas = parseFloat(document.getElementById('polegadas').value);
    var fabricante = document.getElementById('fabricante-tv').value;
    var valor = parseFloat(document.getElementById('valor-tv').value);
    if (!modelo || !resolucao || isNaN(polegadas) || !fabricante || isNaN(valor)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }
    var tv = new TV(modelo, resolucao, polegadas, fabricante, valor);
    enviarTV(tv);
});
// Manipulador de envio do formulário de bicicleta (similar ao de celular)
var formBikeEnviar = document.getElementById('form-bike-enviar');
formBikeEnviar.addEventListener('submit', function (event) {
    event.preventDefault();
    var modelo = document.getElementById('modelo-bike').value;
    var aro = parseFloat(document.getElementById('aro').value);
    var fabricante = document.getElementById('fabricante-bike').value;
    var valor = parseFloat(document.getElementById('valor-bike').value);
    // Cria uma nova instância da classe Bicicleta
    var bicicleta = new Bicicleta(modelo, aro, fabricante, valor);
    // Envia a bicicleta
    enviarBicicleta(bicicleta);
});
