var Lembrete = /** @class */ (function () {
    function Lembrete() {
        this.registro = [];
        this.cores = ["blue", "red", "green", "yellow", "purple"];
    }
    Lembrete.prototype.adicionar = function (titulo, data, hora, dataL, descricao) {
        this.registro.push([titulo, data, hora, dataL, descricao]);
        this.mostrar();
    };
    Lembrete.prototype.apagar = function (titulo) {
        this.registro = this.registro.filter(function (lembrete) { return lembrete[0] !== titulo; });
        this.mostrar();
    };
    Lembrete.prototype.criarElemento = function (tipo, valor) {
        var elemento = document.createElement("input");
        elemento.type = tipo;
        elemento.value = valor;
        return elemento;
    };
    Lembrete.prototype.editar = function (lembrete, index) {
        var _this = this;
        var divLembretes = document.getElementById("divLembretes");
        if (!divLembretes) {
            console.error('Elemento com id "divLembretes" não encontrado');
            return;
        }
        divLembretes.innerHTML = "";
        var elementos = [
            this.criarElemento("text", lembrete[0]),
            this.criarElemento("date", lembrete[1]),
            this.criarElemento("time", lembrete[2]),
            this.criarElemento("date", lembrete[3] || ""),
            this.criarElemento("text", lembrete[4] || "")
        ];
        elementos.forEach(function (elemento) {
            divLembretes.appendChild(elemento);
            divLembretes.appendChild(document.createElement("br"));
        });
        var confirmEditButton = document.createElement("button");
        confirmEditButton.textContent = "Confirmar";
        confirmEditButton.addEventListener("click", function () {
            _this.atualizar(elementos[0].value, elementos[1].value, elementos[2].value, index, elementos[3].value, elementos[4].value);
        });
        divLembretes.appendChild(confirmEditButton);
        var cancelEditButton = document.createElement("button");
        cancelEditButton.textContent = "Cancelar";
        cancelEditButton.addEventListener("click", function () {
            _this.mostrar();
        });
        divLembretes.appendChild(cancelEditButton);
    };
    Lembrete.prototype.atualizar = function (titulo, data, hora, index, dataL, descricao) {
        this.registro[index] = [titulo, data, hora, dataL, descricao];
        this.mostrar();
    };
    Lembrete.prototype.mostrar = function () {
        var _this = this;
        var divLembretes = document.getElementById("divLembretes");
        if (!divLembretes) {
            console.error('Elemento com id "divLembretes" não encontrado');
            return;
        }
        divLembretes.innerHTML = "";
        this.registro.forEach(function (lembrete, index) {
            var p = document.createElement('p');
            p.style.color = _this.cores[index % _this.cores.length];
            p.style.fontWeight = 'bold';
            p.innerHTML = "T\u00EDtulo: ".concat(lembrete[0], "<br>Data de Inser\u00E7\u00E3o: ").concat(lembrete[1], "<br>Hora de Inser\u00E7\u00E3o: \n        ").concat(lembrete[2] || '', "<br>Data Limite: ").concat(lembrete[3] || '', "<br>Descri\u00E7\u00E3o: ").concat(lembrete[4] || '', "<br><br><button id=\"editar").concat(index, "\">Editar</button> <button id=\"apagar").concat(index, "\">Apagar</button>");
            divLembretes.appendChild(p);
        });
        this.registro.forEach(function (lembrete, index) {
            document.getElementById("apagar".concat(index)).addEventListener('click', function () { return _this.apagar(lembrete[0]); });
            document.getElementById("editar".concat(index)).addEventListener('click', function () { return _this.editar(lembrete, index); });
        });
    };
    return Lembrete;
}());
var lembrete = new Lembrete();
var formulario = document.getElementById('lembreteForm');
document.getElementById('lembreteForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var titulo = document.getElementById('titulo').value;
    var data = document.getElementById('dataInsercao').value;
    if (!titulo) {
        alert('Título não fornecido');
        event.preventDefault();
        return;
    }
    if (!data) {
        alert('Data não fornecida');
        event.preventDefault();
        return;
    }
    var hora = document.getElementById('horaInsercao').value;
    if (!hora) {
        alert('Hora não fornecida');
        event.preventDefault();
        return;
    }
    var dataL = document.getElementById('dataLimite').value;
    var descricao = document.getElementById('descricao').value;
    lembrete.adicionar(titulo, data, hora, dataL, descricao);
    lembrete.mostrar();
});
