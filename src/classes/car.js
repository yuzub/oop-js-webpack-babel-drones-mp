import { Vehicle } from './vehicle';

export class Car extends Vehicle {
    constructor(licence, model, latLong) {
      super(licence, model, latLong);
      // console.log('constructing Car');
      this.make = null;
      this.miles = null;
    }
  }