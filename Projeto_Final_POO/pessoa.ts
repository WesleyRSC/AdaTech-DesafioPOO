export class Pessoa {
  private Nome: string;
  private Idade: number;
  private Email: string;

  constructor(nome: string, idade: number, email: string) {
    this.ValidarNome(nome);
    this.ValidarIdade(idade);
    this.ValidarEmail(email);
    
    this.Nome = nome;
    this.Idade = idade;
    this.Email = email;
  }

  public get nome(): string {
    return this.Nome;
  }

  public get idade(): number {
    return this.Idade;
  }

  public set idade(value: number) {
    if (this.ValidarIdade(value)) this.Idade = value;
  }

  public get email(): string {
    return this.Email;
  }

  public set email(value: string) {
    if (this.ValidarEmail(value)) this.Email = value;
  }

  private ValidarNome(nome: string): boolean {
    if (nome.trim() == "") {
      throw new Error("Nome da pessoa não pode ser vazio");
    }
    if (/\d/.test(nome)) {
      throw new Error("Nome da pessoa não pode conter numeros");
    }
    return true;
  }

  private ValidarEmail(email: string): boolean {
    if (email.trim() == "") {
      throw new Error("Email da pessoa não pode ser vazio");
    }
    return true;
  }

  private ValidarIdade(idade: number): boolean {
    if (idade <= 0) {
      throw new Error("Idade da pessoa não pode ser menor ou igual a zero");
    }

    if (!Number.isInteger(idade)) {
      throw new Error("Idade da pessoa não pode ser um numero decimal");
    }

    return true;
  }
}
