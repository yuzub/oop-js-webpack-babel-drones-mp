import { Vehicle } from './vehicle';

export class Drone extends Vehicle {
  constructor(licence, model, latLong) {
    super(licence, model, latLong);
    // console.log('constructing Drone');
    this.airTimeHours = null;
    this.base = null;
  }
}
