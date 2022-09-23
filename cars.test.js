const {Car, Dealership}= require("./cars");

  describe('access car properties', () => { 

    test('can see car manufacturer', () => {
        const car1= new Car("Honda",5000,"electric");
      expected = "Honda";
      actual = car1.getManufacturer();
      expect(actual).toBe(expected);
    });
    test('can see car price', () => {
        const car1= new Car("Honda",5000,"electric");
      expected = 5000;
      actual = car1.getPrice();
      expect(actual).toBe(expected);
    });
});



describe('dealership tests', () => { 

    test('get stock size', () => {
        const dealership1= new Dealership("good deal",5);
        expected = 0;
        actual = dealership1.getStockSize();
        expect(actual).toBe(expected);
    });
    test('can add a car to stock', () => {
        const car1= new Car("Honda",5000,"electric");
        const dealership1= new Dealership("good deal",5);
        dealership1.addCar(car1);
        expected = 1;
        actual = dealership1.getStockSize();
        expect(actual).toBe(expected);
    });
    test('cannot add a car if stock capacity is reached', () => {
        const car1= new Car("Honda",5000,"electric");
        const dealership1= new Dealership("good deal",0);
        dealership1.addCar(car1);
        expected = 0;
        actual = dealership1.getStockSize();
        expect(actual).toBe(expected);
    });
    test('can get an array of cars manufacturers', () => {
        const car1= new Car("Honda",5000,"electric");
        const dealership1= new Dealership("good deal",5);
        dealership1.addCar(car1);
        expected = ["Honda"];
        actual = dealership1.getCarsManufacturers();
        expect(actual).toEqual(expected);
    });

    test('can get an array of cars by manufacturer', () => {
        const car1= new Car("Honda",5000,"electric");
        const car2= new Car("BMW",10000,"hybrid");
        const car3= new Car("BMW",6000,"electric");
        const dealership1= new Dealership("good deal",5);
        dealership1.addCar(car1);
        dealership1.addCar(car2);
        dealership1.addCar(car3);
        expected =  [car2,car3];
        actual = dealership1.getCarsByManufacturer("BMW");
        expect(actual).toEqual(expected);
    });
    test('can get a total price of cars in stock', () => {
        const car1= new Car("Honda",5000,"electric");
        const car2= new Car("BMW",10000,"hybrid");
        const car3= new Car("BMW",6000,"electric");
        const dealership1= new Dealership("good deal",5);
        dealership1.addCar(car1);
        dealership1.addCar(car2);
        dealership1.addCar(car3);
        expected =  21000;
        actual = dealership1.getCarsTotalValue();
        expect(actual).toEqual(expected);
    });





});
