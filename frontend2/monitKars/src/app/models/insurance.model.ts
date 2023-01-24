export class Insurance {
    id: number;
    policyNumber: string;
    startDate: Date;
    endDate: Date;
    carId: number;
  
    constructor(id: number, policyNumber: string, startDate: Date, endDate: Date, carId: number) {
      this.id = id;
      this.policyNumber = policyNumber;
      this.startDate = startDate;
      this.endDate = endDate;
      this.carId = carId;
    }
  }
  