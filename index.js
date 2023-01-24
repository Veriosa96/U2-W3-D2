class Person {
    constructor(name, age) {
     this.name= name
     this.age = age
    }
    showNameandAge(){
        return "il mio nome è " + this.name + " e ho " + this.age + " anni"
    }
    comparaEtà(utente) {
        if (this.age > utente.age) {
            return console.log(this.name + " è più anziano di " + utente.name) 
          
        } else if (this.age < utente.age) {
            return console.log(this.name + " è più giovane di " + utente.name) 
            
        } else {
            return console.log(this.name + " e " + utente.name + " hanno la stessa età") 
          
        }
    }
}

let p1 = new Person ("Aldo", 30)
console.log(p1.showNameandAge())
let p2 = new Person ("Giovanni", 35)
console.log(p2.showNameandAge())
let p3 = new Person("Giacomo", 35)
console.log(p3.showNameandAge())



p2.comparaEtà(p1)







