// 1. Implemente uma classe chamada “Produto” que possua atributos para
// armazenar o nome, o preço e a quantidade em estoque. Adicione
// métodos para calcular o valor total em estoque e verificar se o produto
// está disponível (caso esteja zerado, o mesmo deverá estar setado
// como indisponível no atributo específico);

export class Produto {
  Nome: string;
  Preco: number;
  QuantidadeEstoque: number;
  private Disponivel: boolean;

  constructor(nome: string, preco: number, quantidadeEstoque: number) {
    this.Nome = nome;
    this.Preco = preco;
    this.QuantidadeEstoque = quantidadeEstoque;
    this.Disponivel = this.QuantidadeEstoque > 0;
  }

  CalcularValorEstoque(): number {
    if (this.VerificarDisponibilidade())
      return this.Preco * this.QuantidadeEstoque;
    else return 0;
  }

  VerificarDisponibilidade(): boolean {
    this.Disponivel = this.QuantidadeEstoque > 0;
    return this.Disponivel;
  }
}
