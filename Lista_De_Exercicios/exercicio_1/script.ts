// 1. Implemente uma classe chamada “Produto” que possua atributos para
// armazenar o nome, o preço e a quantidade em estoque. Adicione
// métodos para calcular o valor total em estoque e verificar se o produto
// está disponível (caso esteja zerado, o mesmo deverá estar setado
// como indisponível no atributo específico);

import { Produto } from "./produto";

let novoProduto: Produto = new Produto('Biscoito', 2, 5)

console.log(novoProduto);

console.log(novoProduto.CalcularValorEstoque());


