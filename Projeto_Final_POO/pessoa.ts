export class Pessoa {
  private Nome: string;
  private Idade: number;
  private Email: string;

  constructor(nome: string, idade: number, email: string) {
    this.Nome = nome;
    this.Idade = idade;
    this.Email = email;
  }

  public get nome(): string {
    return this.Nome;
  }

  public set nome(value: string) {
    this.Nome = value;
  }

  public get idade(): number {
    return this.Idade;
  }

  public set idade(value: number) {
    this.Idade = value;
  }

  public get email(): string {
    return this.Email;
  }

  public set email(value: string) {
    this.Email = value;
  }
}
