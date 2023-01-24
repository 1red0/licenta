export class Maintenance {
    id: number;
    task: string;
    date: Date;
    carId: number;
  
    constructor(id: number, task: string, date: Date, carId: number) {
      this.id = id;
      this.task = task;
      this.date = date;
      this.carId = carId;
    }
  }
  