// Defining pseudo-class
function Building(floors){
    this.what = "building"
    this.floors = floors
}

// Defining methods to created pseudo-class
Building.prototype.count = function(){
    console.log(`I have ${this.floors} flors`)
}

// Creating a new instance from pseudo-class
const house = new Building(3)

// Printing results
console.log(house)
console.log(house.count())