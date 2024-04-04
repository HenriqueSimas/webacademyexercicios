
// Interface do produto
interface Produto {
    modelo: string;
    fabricante: string;
    valor: number;
  }
  
  // Classes de produtos
  class TV implements Produto {
    constructor(public modelo: string, public resolucao: string, public polegadas: number, public fabricante: string, public valor: number) {}
  }
  
  class Celular implements Produto {
    constructor(public modelo: string, public memoria: string, public fabricante: string, public valor: number) {}
  }
  
  class Bicicleta implements Produto {
    constructor(public modelo: string, public aro: number, public fabricante: string, public valor: number) {}
  }
  
  // Carrinho de compras
  class CarrinhoDeCompras<T extends Produto> {
    private produtos: T[] = [];
  
    inserir(produto: T): void {
      this.produtos.push(produto);
    }

    remover(produto: T): void {
      const index = this.produtos.indexOf(produto);
      if (index > -1) {
        this.produtos.splice(index, 1);
      }
    }
  
    calcularValorTotal(): number {
      return this.produtos.reduce((total, produto) => total + produto.valor, 0);
    }
  
    listarProdutos(): T[] {
      return this.produtos;
    }
  }
  
  // Funções para enviar dados para o servidor
  function enviarCelular(celular: Celular): void {
    // Simula uma requisição HTTP
    console.log(`Enviando celular: ${celular.modelo}`);
  
    // Exibe um alerta de sucesso
    alert(`Celular ${celular.modelo} enviado com sucesso!`);
  
    // Adiciona o celular ao carrinho
    carrinho.inserir(celular);
  
    // Atualiza o display do carrinho
    atualizarDisplayDoCarrinho();
  
    // Limpa o formulário
    formCelularEnviar.reset();
  }
  
  function enviarTV(tv: TV): void {
    // Simula uma requisição HTTP
    console.log(`Enviando TV: ${tv.modelo}`);
  
    // Exibe um alerta de sucesso
    alert(`TV ${tv.modelo} enviada com sucesso!`);
  
    // Adiciona a TV ao carrinho
    carrinho.inserir(tv);
  
    // Atualiza o display do carrinho
    atualizarDisplayDoCarrinho();
  
    // Limpa o formulário
    formTvEnviar.reset();
  }
  
  function enviarBicicleta(bicicleta: Bicicleta): void {
    // Simula uma requisição HTTP
    console.log(`Enviando bicicleta: ${bicicleta.modelo}`);
  
    // Exibe um alerta de sucesso
    alert(`Bicicleta ${bicicleta.modelo} enviada com sucesso!`);
  
    // Adiciona a bicicleta ao carrinho
    carrinho.inserir(bicicleta);
  
    // Atualiza o display do carrinho
    atualizarDisplayDoCarrinho();
  
    // Limpa o formulário
    formBikeEnviar.reset();
  }
  
  // Atualiza o display do carrinho
  // Atualiza o display do carrinho
  function atualizarDisplayDoCarrinho(): void {
    const displayDoCarrinho = document.getElementById('display-do-carrinho') as HTMLDivElement;
    const valorTotal = carrinho.calcularValorTotal();
    const listaDeProdutos = carrinho.listarProdutos().map((produto, index) => {
      return `<div>
                <p>${produto.modelo} (${produto.fabricante}): R$ ${produto.valor}</p>
                <button class="btn btn-danger mb-3 btn-sm" onclick="removerProduto(${index})">Remover</button>
              </div>`;
    });
    displayDoCarrinho.innerHTML = `<h3>Carrinho de Compras</h3>
                                   <p>Valor total: R$${valorTotal}</p>
                                   ${listaDeProdutos.join('')}`;
  }

  
  // Função para remover produto
  function removerProduto(index: number): void {
    const produto = carrinho.listarProdutos()[index];
    carrinho.remover(produto);
    atualizarDisplayDoCarrinho();
  }
  

  // Cria uma nova instância do carrinho de compras
  const carrinho = new CarrinhoDeCompras<Produto>();
  
  // Manipulador de eventos para selecionar produto
  document.getElementById('produto-selecionado').addEventListener('change', function(this: HTMLSelectElement) {
    const formCelular = document.getElementById('form-celular') as HTMLDivElement;
    const formTV = document.getElementById('form-tv') as HTMLDivElement;
    const formBike = document.getElementById('form-bike') as HTMLDivElement;
  
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
  const formCelularEnviar = document.getElementById('form-celular-enviar') as HTMLFormElement;
  formCelularEnviar.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    // Obtém os valores dos campos de entrada
    const modelo = (document.getElementById('modelo-celular') as HTMLInputElement).value;
    const memoria = (document.getElementById('memoria-celular') as HTMLInputElement).value;
    const fabricante = (document.getElementById('fabricante-celular') as HTMLInputElement).value;
    const valor = parseFloat((document.getElementById('valor-celular') as HTMLInputElement).value);
  
    // Cria uma nova instância da classe Celular
    const celular = new Celular(modelo, memoria, fabricante, valor);
  
    // Envia o celular
    enviarCelular(celular);
  });
  
  // Manipulador de envio do formulário de TV (similar ao de celular)
  const formTvEnviar = document.getElementById('form-tv-enviar') as HTMLFormElement;
  formTvEnviar.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const modelo = (document.getElementById('modelo-tv') as HTMLInputElement).value;
    const resolucao = (document.getElementById('resolucao') as HTMLInputElement).value;
    const polegadas = parseFloat((document.getElementById('polegadas') as HTMLInputElement).value);
    const fabricante = (document.getElementById('fabricante-tv') as HTMLInputElement).value;
    const valor = parseFloat((document.getElementById('valor-tv') as HTMLInputElement).value);
  
    if (!modelo || !resolucao || isNaN(polegadas) || !fabricante || isNaN(valor)) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
  
    const tv = new TV(modelo, resolucao, polegadas, fabricante, valor);
    enviarTV(tv);
  });
  
  // Manipulador de envio do formulário de bicicleta (similar ao de celular)
  const formBikeEnviar = document.getElementById('form-bike-enviar') as HTMLFormElement;
  formBikeEnviar.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const modelo = (document.getElementById('modelo-bike') as HTMLInputElement).value;
    const aro = parseFloat((document.getElementById('aro') as HTMLInputElement).value);
    const fabricante = (document.getElementById('fabricante-bike') as HTMLInputElement).value;
    const valor = parseFloat((document.getElementById('valor-bike') as HTMLInputElement).value);
  
    // Cria uma nova instância da classe Bicicleta
    const bicicleta = new Bicicleta(modelo, aro, fabricante, valor);
  
    // Envia a bicicleta
    enviarBicicleta(bicicleta);
  });
