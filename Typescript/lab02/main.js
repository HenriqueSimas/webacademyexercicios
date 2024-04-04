var Aluno = /** @class */ (function () {
    function Aluno(id, nomeCompleto, idade, altura, peso) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    return Aluno;
}());
var Turma = /** @class */ (function () {
    function Turma(id, nome) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }
    Turma.prototype.adicionarEstudante = function (aluno) {
        var _this = this;
        this.alunos.push(aluno);
        this.atualizarEstatisticas();
        // Cria um novo elemento div para o aluno
        // Cria um novo elemento p para o nome do aluno
        var pId = document.createElement('p');
        pId.id = "aluno-".concat(aluno.id, "-id");
        pId.textContent = "ID: ".concat(aluno.id);
        var pNome = document.createElement('p');
        pNome.id = "aluno-".concat(aluno.id, "-nome"); // Adicione esta linha
        pNome.textContent = "Nome: ".concat(aluno.nomeCompleto);
        // Cria um novo elemento p para a idade do aluno
        var pIdade = document.createElement('p');
        pIdade.id = "aluno-".concat(aluno.id, "-idade"); // Adicione esta linha
        pIdade.textContent = "Idade: ".concat(aluno.idade);
        // Cria um novo elemento p para o peso do aluno
        var pPeso = document.createElement('p');
        pPeso.id = "aluno-".concat(aluno.id, "-peso"); // Adicione esta linha
        pPeso.textContent = "Peso: ".concat(aluno.peso);
        // Cria um novo elemento p para a altura do aluno
        var pAltura = document.createElement('p');
        pAltura.id = "aluno-".concat(aluno.id, "-altura"); // Adicione esta linha
        pAltura.textContent = "Altura: ".concat(aluno.altura);
        // Cria um novo botão de apagar
        var btnApagar = document.createElement('button');
        btnApagar.textContent = 'Apagar';
        // Adiciona a classe do botão do Bootstrap
        btnApagar.classList.add('btn');
        btnApagar.classList.add('btn-danger'); // ou qualquer outra classe de botão do Bootstrap que você deseja adicionar
        btnApagar.addEventListener('click', function () {
            _this.deletarEstudante(aluno.id);
            pId.remove();
            pIdade.remove();
            pNome.remove();
            pIdade.remove();
            pPeso.remove();
            pAltura.remove();
            btnApagar.remove();
            btnEditar.remove();
            ;
        });
        // Cria um novo botão de editar
        var btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        // Adiciona a classe do botão do Bootstrap
        btnEditar.classList.add('btn');
        btnEditar.classList.add('btn-primary'); // ou qualquer outra classe de botão do Bootstrap que você deseja adicionar
        btnEditar.addEventListener('click', function () {
            // Preenche o formulário com os valores atuais do aluno
            document.querySelector('#idaluno').value = String(aluno.id);
            document.querySelector('#nome').value = aluno.nomeCompleto;
            document.querySelector('#idade').value = String(aluno.idade);
            document.querySelector('#peso').value = String(aluno.peso);
            document.querySelector('#altura').value = String(aluno.altura);
            // Abre o formulário de edição
            // Se você estiver usando um modal ou outro tipo de interface de usuário para o formulário de edição, você pode adicionar o código para abrir isso aqui
        });
        // Adiciona os novos elementos ao DOM
        var cardBody = document.querySelector('.card-body');
        cardBody === null || cardBody === void 0 ? void 0 : cardBody.appendChild(pId);
        cardBody.appendChild(pIdade);
        cardBody.appendChild(pNome);
        cardBody.appendChild(pIdade);
        cardBody.appendChild(pPeso);
        cardBody.appendChild(pAltura);
        cardBody.appendChild(btnApagar);
        cardBody.appendChild(btnEditar);
        btnApagar.style.marginRight = "10px";
    };
    Turma.prototype.editarEstudante = function (aluno) {
        var indice = this.alunos.findIndex(function (s) { return s.id === aluno.id; });
        this.alunos[indice] = aluno;
        this.atualizarEstatisticas();
        this.atualizarDadosDoAluno(aluno); // Adicione esta linha
    };
    Turma.prototype.atualizarDadosDoAluno = function (aluno) {
        // Atualiza os elementos p com os novos dados do aluno
        document.querySelector("#aluno-".concat(aluno.id, "-nome")).textContent = "Nome: ".concat(aluno.nomeCompleto);
        document.querySelector("#aluno-".concat(aluno.id, "-idade")).textContent = "Idade: ".concat(aluno.idade);
        document.querySelector("#aluno-".concat(aluno.id, "-peso")).textContent = "Peso: ".concat(aluno.peso);
        document.querySelector("#aluno-".concat(aluno.id, "-altura")).textContent = "Altura: ".concat(aluno.altura);
    };
    Turma.prototype.deletarEstudante = function (idluno) {
        this.alunos = this.alunos.filter(function (s) { return s.id !== idluno; });
        this.atualizarEstatisticas();
    };
    Turma.prototype.getNumEstudantes = function () {
        return this.alunos.length;
    };
    Turma.prototype.getMediaIdades = function () {
        if (this.alunos.length === 0) {
            return 0;
        }
        return this.alunos.reduce(function (soma, aluno) { return soma + aluno.idade; }, 0) / this.alunos.length;
    };
    Turma.prototype.getMediaAlturas = function () {
        if (this.alunos.length === 0) {
            return 0;
        }
        return this.alunos.reduce(function (soma, aluno) { return soma + aluno.altura; }, 0) / this.alunos.length;
    };
    Turma.prototype.getMediaPesos = function () {
        if (this.alunos.length === 0) {
            return 0;
        }
        return this.alunos.reduce(function (soma, aluno) { return soma + aluno.peso; }, 0) / this.alunos.length;
    };
    Turma.prototype.atualizarEstatisticas = function () {
        // atualiza o display com as novas estatísticas
        document.querySelector('#num-alunos').textContent = "N\u00FAmero de alunos: ".concat(this.getNumEstudantes());
        document.querySelector('#media-idade').textContent = "M\u00E9dia Idade: ".concat(this.getMediaIdades());
        document.querySelector('#media-peso').textContent = "M\u00E9dia Peso: ".concat(this.getMediaPesos());
        document.querySelector('#media-altura').textContent = "M\u00E9dia Altura: ".concat(this.getMediaAlturas());
    };
    return Turma;
}());
var turma = new Turma(1, 'Educação Física');
document.addEventListener('DOMContentLoaded', function (event) {
    var cardTitle = document.querySelector('h5.card-title');
    // Define o conteúdo do elemento com o nome da turma
    cardTitle.textContent = "Turma de ".concat(turma.nome);
    var form = document.querySelector('#aluno-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Busca os valores mais recentes do formulário
        var idAluno = Number(document.querySelector('#idaluno').value);
        var nome = document.querySelector('#nome').value;
        var idade = Number(document.querySelector('#idade').value);
        var peso = Number(document.querySelector('#peso').value);
        var altura = Number(document.querySelector('#altura').value);
        var aluno = new Aluno(idAluno, nome, idade, altura, peso);
        // Verifica se o aluno já existe
        var alunoExistente = turma.alunos.find(function (a) { return a.id === aluno.id; });
        if (alunoExistente) {
            // Se o aluno já existe, edita os dados do aluno
            turma.editarEstudante(aluno);
        }
        else {
            // Se o aluno não existe, adiciona um novo aluno
            turma.adicionarEstudante(aluno);
        }
        // Limpa o formulário após a submissão
        var form = document.querySelector('#aluno-form');
        form.reset();
    });
});
