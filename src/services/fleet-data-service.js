import { Car } from '../classes/car';
import { Drone } from '../classes/drone';

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
  }

  loadData(fleet) {
    for (const data of fleet) {
      switch (data.type) {
        case 'car':
          this.cars.push(this.loadCar(data));
          break;
        case 'drone':
          this.drones.push(this.loadDrone(data));
          break;
        default:
          break;
      }
      
    }
  }

  loadCar(car) {
    let c = new Car(car.license, car.model, car.latLong);
    c.miles = car.miles;
    c.make = car.make;
    return c;
  }

  loadDrone(drone) {
    let d = new Drone(drone.license, drone.model, drone.latLong);
    d.airTimeHours = drone.airTimeHours;
    d.base = drone.base;
    return d;
  }
}