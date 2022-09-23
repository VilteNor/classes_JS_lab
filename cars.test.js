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
    test('can get an array of cars manufacturers', () => {
        const car1= new Car("Honda",5000,"electric");
        const dealership1= new Dealership("good deal",5);
        dealership1.addCar(car1);
        expected = ["Honda"];
        actual = dealership1.getCarsManufacturers();
        expect(actual).toEqual(expected);
    });
});
