export class Car {
  id: number;
  owner: string;
  milage: number;
  problems: string[];
  vignette: Date;
  insurance: Date;
  revisions: Date[];
  lastTrip: Date;

  constructor(id: number = 0, owner: string = "", milage: number = 0, problems: string[] = [], vignette: Date = new Date(), insurance: Date = new Date(), revisions: Date[] = [], lastTrip: Date = new Date()) {
      this.id = id;
      this.owner = owner;
      this.milage = milage;
      this.problems = problems;
      this.vignette = vignette;
      this.insurance = insurance;
      this.revisions = revisions;
      this.lastTrip = lastTrip;
  }
}
