//  Car class with manufacturer, price and engine type
const Car = function(manufacturer,price,engine){
    this.manufacturer=manufacturer;
    this.price=price;
    this.engine=engine;
}

Car.prototype.getManufacturer=function(){return this.manufacturer};
Car.prototype.setManufacturer=function(manufacturer){return this.manufacturer=manufacturer};
Car.prototype.getPrice=function(){return this.price};
Car.prototype.setPrice=function(price){return this.price=price};
Car.prototype.getEngine=function(){return this.engine};
Car.prototype.setEngine=function(engine){return this.engine=engine};


const Dealership = function(name,capacity){
    this.name=name;
    this.capacity=capacity;
    this.stock=[];
}

Dealership.prototype.getName=function(){return this.name};
Dealership.prototype.setName=function(name){return this.name=name};
Dealership.prototype.getCapacity=function(){return this.capacity};
Dealership.prototype.setCapacity=function(capacity){return this.capacity=capacity};
Dealership.prototype.getStock=function(){return this.stock};

// Count the number of cars in stock
Dealership.prototype.getStockSize=function(){return this.stock.length};
// Add a car to stock
Dealership.prototype.addCar=function(car){this.stock.push(car)};
// Return an array containing each car's manufacturer
Dealership.prototype.getCarsManufacturers=function(){
    return this.getStock().map((car)=>car.getManufacturer())};
// Find all the cars from a given manufacturer
// Find the total value of all the cars in stock


module.exports = { 
Car,
Dealership
};