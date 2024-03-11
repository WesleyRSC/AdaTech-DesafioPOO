// 2. Implemente uma classe chamada “Carro” com atributos para
// armazenar a marca, o modelo, se o carro está ligado ou não e a
// velocidade atual do carro. Adicione métodos para ligar, desligar,
// acelerar, frear e exibir a velocidade atual. REGRA BÁSICA DE
// VALIDAÇÃO: o carro só poderá acelerar ou frear, caso esteja ligado.

export class Carro {
  Marca: string;
  Modelo: string;
  Ligado: boolean;
  VelocidadeAtual: number;

  constructor(marca: string, modelo: string, ligado: boolean, velocidadeAtual: number) {
    this.Marca = marca;
    this.Modelo = modelo;
    this.Ligado = true;
    this.VelocidadeAtual = 0;
  }

  Ligar(): boolean {
    return this.Ligado = true;
  }

  Desligar() {
    if (this.Ligar())
    this.VelocidadeAtual = 0;
  }
}
