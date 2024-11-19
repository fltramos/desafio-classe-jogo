class Heroi {
    
    constructor(nome, idade, tipo) {
          this.nome = nome;
          this.idade = idade;
          this.tipo = tipo;                         
    }
  
    atacar() {
      let ataque = " "        
      if (this.tipo == "Guerreiro"){
          ataque = "Espada"
      }else if(this.tipo === "Mago"){
          ataque = "Magia"
      }else if(this.tipo == "Monge"){
          ataque = "Artes Marciais"
      }else{
          ataque = "Shuriken"
      }
      return ataque
    }
  }
    
const nomeHeroi = "Cacius";
const idadeHeroi = 28;
const tipoHeroi = "Ninja";
      
const novoHeroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi)

console.log("****** Dados do Herói ******")
console.log("Nome: " + novoHeroi.nome);
console.log("Idade: " + novoHeroi.idade);
console.log("Tipo: " + novoHeroi.tipo);

const usouAtaque = novoHeroi.atacar();
console.log()
console.log(`O ${novoHeroi.tipo} atacou usando ${usouAtaque}`);