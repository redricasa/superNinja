class Ninja {
    constructor(name , health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.name, this.speed, this.strength, this.health);
    }

    drinkSake() {
        this.health += 10//increment the health 
        return this.health;
    }
    
}

class Sensei extends Ninja {
    constructor(name , health= 200, speed = 10, strength =10,  wisdom=10){
        super(name , health= 200, speed = 10, strength =10)
    }
    speakWisdom(){
        console.log("something wise from the sensei");
    }


}