/* 1- Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), 
quantidade de faltas (number) e notas (array de números). */

/* 2-Na função construtora crie o método calcularMedia que retorna a média de suas notas. 
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. 
Crie alguns alunos para testar a sua função construtora.  */

class Aluno {
  constructor(nome = '', faltas = 0, notas = []) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
  }

  addFaltas() {
    this.faltas++;
  }

  calcularMedia() {
    let total = this.notas.reduce((acc, valor) => (acc + valor));
    let media = total / this.notas.length;
    return media
  }
}

/* 3-crie o objeto literal curso que tem como atributos: nome do curso 
(string), nota de aprovação (number), faltas máximas (number) e uma 
lista de estudantes (um array composto pelos alunos criados no passo 2).  */

/* 4-Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método 
em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto 
curso.  */

/* 5-Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. 
Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. 
Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.  */

/* 6- Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados
  se os alunos aprovaram ou não.  */

const CURSO = {
  nome_do_curso: 'Programação Imperativa',
  nota_de_aprovacao: 7,
  faltas_maxima: 5,
  estudantes: [],

  adicionarAluno(nome, faltas, notas) {
    const NOVO_ALUNO = new Aluno(nome, faltas, notas);
    this.estudantes.push(NOVO_ALUNO);
  },

  buscarAluno(nome) {
    for (let aluno of this.estudantes) {
      if (nome.toLowerCase() == aluno.nome.toLowerCase()) {
        return aluno;
      } else {
        false;
      }
    }
  },

  alunoAprovou(nome) {
    let alunoEncontrado = this.buscarAluno(nome);
    if (alunoEncontrado.calcularMedia() >= this.nota_de_aprovacao && alunoEncontrado.faltas < this.faltas_maxima) {
      return true;
    } else if (alunoEncontrado.calcularMedia() >= ((this.nota_de_aprovacao * 10 / 100) + this.nota_de_aprovacao) && alunoEncontrado.faltas == this.faltas_maxima) {
      return true;
    } else {
      return false;
    }
  },

  alunosAprovados() {
    let alunosAprovados = [];
    for (let aluno of this.estudantes) {
      alunosAprovados.push({ nome: aluno.nome, aprovado: this.alunoAprovou(aluno.nome) })
    }
    return alunosAprovados;
  },
}

CURSO.adicionarAluno("Caue", 5, [7, 8, 9]);
CURSO.adicionarAluno("Luan", 3, [10, 8, 9]);
CURSO.adicionarAluno("Ederson", 6, [10, 9, 10]);
CURSO.adicionarAluno("Eduardo", 7, [8, 9, 6]);
CURSO.adicionarAluno("Vanessa", 2, [8, 9.5, 10]);
CURSO.adicionarAluno("Pedro", 4, [7, 9, 10]);



console.log(
  CURSO.alunosAprovados()
);