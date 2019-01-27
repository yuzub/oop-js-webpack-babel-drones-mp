import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';

console.log('in index.js');

let dataService = new FleetDataService();
dataService.loadData(fleet);

for (const car of dataService.cars) {
  console.log(car.license);
}

// console.log(dataService.cars);
// console.log(dataService.drones);


// let c = new Car('A123');
// let d = new Drone('B456');

// console.log(c);
// console.log(d);
