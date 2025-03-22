class heroi {
    constructor(name, age, prof) {
        this.name = name;
        this.age = age;
        this.prof = prof;
    }

    ataque() {
        let tipo = this.tipo;
            if (this.prof === "Mago"){
                tipo = "magia";
            } else if (this.prof === "Guerreiro"){
                tipo = "espada";
            } else if (this.prof === "Monge"){
                tipo = "artes marciais";
            } else if (this.prof === "Ninja"){
                tipo = "shuriken";
            } else {
                tipo = "método desconhecido"
            }
    
    return `${this.prof} atacou usando ${tipo}.`
    }
}

const gabriel = new heroi("Gabriel", 25, "Mago");

console.log(gabriel.ataque())