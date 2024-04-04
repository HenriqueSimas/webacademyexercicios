
class Aluno {
  constructor(
    public id: number,
    public nomeCompleto: string,
    public idade: number,
    public altura: number,
    public peso: number
  ) {}
}

class Turma {
  public alunos: Aluno[] = [];

  constructor(public id: number, public nome: string) {}

  public adicionarEstudante(aluno: Aluno): void {
    this.alunos.push(aluno);
    this.atualizarEstatisticas();
     // Cria um novo elemento div para o aluno
    // Cria um novo elemento p para o nome do aluno
    const pId = document.createElement('p');
    pId.id = `aluno-${aluno.id}-id`;
    pId.textContent = `ID: ${aluno.id}`;

const pNome = document.createElement('p');
pNome.id = `aluno-${aluno.id}-nome`; // Adicione esta linha
pNome.textContent = `Nome: ${aluno.nomeCompleto}`;

// Cria um novo elemento p para a idade do aluno
const pIdade = document.createElement('p');
pIdade.id = `aluno-${aluno.id}-idade`; // Adicione esta linha
pIdade.textContent = `Idade: ${aluno.idade}`;

// Cria um novo elemento p para o peso do aluno
const pPeso = document.createElement('p');
pPeso.id = `aluno-${aluno.id}-peso`; // Adicione esta linha
pPeso.textContent = `Peso: ${aluno.peso}`;

// Cria um novo elemento p para a altura do aluno
const pAltura = document.createElement('p');
pAltura.id = `aluno-${aluno.id}-altura`; // Adicione esta linha
pAltura.textContent = `Altura: ${aluno.altura}`;

    // Cria um novo botão de apagar
    const btnApagar = document.createElement('button');
    btnApagar.textContent = 'Apagar';
  
    // Adiciona a classe do botão do Bootstrap
    btnApagar.classList.add('btn');
    btnApagar.classList.add('btn-danger'); // ou qualquer outra classe de botão do Bootstrap que você deseja adicionar
  
    btnApagar.addEventListener('click', () => {
  this.deletarEstudante(aluno.id);
  pId.remove();
  pIdade.remove();
  pNome.remove();
  pIdade.remove();
  pPeso.remove();
  pAltura.remove();
  btnApagar.remove();
  btnEditar.remove();;
    });
  
    // Cria um novo botão de editar
    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
  
    // Adiciona a classe do botão do Bootstrap
    btnEditar.classList.add('btn');
    btnEditar.classList.add('btn-primary'); // ou qualquer outra classe de botão do Bootstrap que você deseja adicionar
  
    btnEditar.addEventListener('click', () => {
      // Preenche o formulário com os valores atuais do aluno
      (<HTMLInputElement>document.querySelector('#idaluno')).value = String(aluno.id);
      (<HTMLInputElement>document.querySelector('#nome')).value = aluno.nomeCompleto;
      (<HTMLInputElement>document.querySelector('#idade')).value = String(aluno.idade);
      (<HTMLInputElement>document.querySelector('#peso')).value = String(aluno.peso);
      (<HTMLInputElement>document.querySelector('#altura')).value = String(aluno.altura);
  
      // Abre o formulário de edição
      // Se você estiver usando um modal ou outro tipo de interface de usuário para o formulário de edição, você pode adicionar o código para abrir isso aqui
    });
  
    // Adiciona os novos elementos ao DOM
    const cardBody = document.querySelector('.card-body');
    cardBody?.appendChild(pId);
cardBody.appendChild(pIdade);
cardBody.appendChild(pNome);
cardBody.appendChild(pIdade);
cardBody.appendChild(pPeso);
cardBody.appendChild(pAltura);
cardBody.appendChild(btnApagar);
cardBody.appendChild(btnEditar);
(btnApagar as HTMLElement).style.marginRight = "10px";


  }
  

  
  public editarEstudante(aluno: Aluno): void {
    const indice = this.alunos.findIndex((s) => s.id === aluno.id);
    this.alunos[indice] = aluno;
    this.atualizarEstatisticas();
    this.atualizarDadosDoAluno(aluno); // Adicione esta linha
  }
  
  private atualizarDadosDoAluno(aluno: Aluno): void {
    // Atualiza os elementos p com os novos dados do aluno
    document.querySelector(`#aluno-${aluno.id}-nome`).textContent = `Nome: ${aluno.nomeCompleto}`;
    document.querySelector(`#aluno-${aluno.id}-idade`).textContent = `Idade: ${aluno.idade}`;
    document.querySelector(`#aluno-${aluno.id}-peso`).textContent = `Peso: ${aluno.peso}`;
    document.querySelector(`#aluno-${aluno.id}-altura`).textContent = `Altura: ${aluno.altura}`;
  }
  

  public deletarEstudante(idluno: number): void {
    this.alunos = this.alunos.filter((s) => s.id !== idluno);
    this.atualizarEstatisticas();
  }

  public getNumEstudantes(): number {
    return this.alunos.length;
  }

  public getMediaIdades(): number {
    if (this.alunos.length === 0) {
      return 0;
    }
    return this.alunos.reduce((soma, aluno) => soma + aluno.idade, 0) / this.alunos.length;
  }
  
  public getMediaAlturas(): number {
    if (this.alunos.length === 0) {
      return 0;
    }
    return this.alunos.reduce((soma, aluno) => soma + aluno.altura, 0) / this.alunos.length;
  }
  
  public getMediaPesos(): number {
    if (this.alunos.length === 0) {
      return 0;
    }
    return this.alunos.reduce((soma, aluno) => soma + aluno.peso, 0) / this.alunos.length;
  }
  

  private atualizarEstatisticas(): void {
    // atualiza o display com as novas estatísticas
    
    (<HTMLParagraphElement>document.querySelector('#num-alunos')).textContent = `Número de alunos: ${this.getNumEstudantes()}`;
    (<HTMLParagraphElement>document.querySelector('#media-idade')).textContent = `Média Idade: ${this.getMediaIdades()}`;
    (<HTMLParagraphElement>document.querySelector('#media-peso')).textContent = `Média Peso: ${this.getMediaPesos()}`;
    (<HTMLParagraphElement>document.querySelector('#media-altura')).textContent = `Média Altura: ${this.getMediaAlturas()}`;
}

}
const turma = new Turma(1, 'Educação Física');
document.addEventListener('DOMContentLoaded', (event) => {

  const cardTitle = document.querySelector('h5.card-title');

  // Define o conteúdo do elemento com o nome da turma
  cardTitle.textContent = `Turma de ${turma.nome}`;
  const form = document.querySelector('#aluno-form');
  

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Busca os valores mais recentes do formulário
    const idAluno = Number((<HTMLInputElement>document.querySelector('#idaluno')).value);
    const nome = (<HTMLInputElement>document.querySelector('#nome')).value;
    const idade = Number((<HTMLInputElement>document.querySelector('#idade')).value);
    const peso = Number((<HTMLInputElement>document.querySelector('#peso')).value);
    const altura = Number((<HTMLInputElement>document.querySelector('#altura')).value);
  
    const aluno = new Aluno(idAluno, nome, idade, altura, peso);
  
    // Verifica se o aluno já existe
    const alunoExistente = turma.alunos.find(a => a.id === aluno.id);
  
    if (alunoExistente) {
      // Se o aluno já existe, edita os dados do aluno
      turma.editarEstudante(aluno);
    } else {
      // Se o aluno não existe, adiciona um novo aluno
      turma.adicionarEstudante(aluno);
    }
  
    // Limpa o formulário após a submissão
    const form = <HTMLFormElement>document.querySelector('#aluno-form');
form.reset();

  });
});
