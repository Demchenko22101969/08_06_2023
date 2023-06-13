class Animal {
    constructor (name, color, sound="hello!", owner="Vasia"){
        this.name=name;
        this.color=color;
        this.sound=sound;
        this.owner=owner;
    }


    getColor() {
console.log (this.color);
}

getSound() {
console.log (this.sound);
}

getName() {
console.log (this.name);
}
getOwner() {
    console.log (this.owner);
    }

}

const cat = new Animal("Vasia","black","miau");
const dog = new Animal("Tusik","Yellow","gav");
const Chupacabra = new Animal("Dangerous","Red");

const jog = new Animal();
