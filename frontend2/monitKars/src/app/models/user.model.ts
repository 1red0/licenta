export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  dateofBirth: Date;
  numberOfCars: number;
  password: string;
  passwordConfirmation: string;

  constructor(id: number = 0, firstName: string = "", username: string = "", email: string = "", dateofBirth: Date = new Date(), numberOfCars: number = 0, password: string = "", passwordConfirmation: string = "") {
      this.id = id;
      this.firstName = firstName;
      this.username = username;
      this.email = email;
      this.dateofBirth = dateofBirth;
      this.numberOfCars = numberOfCars;
      this.password = password;
      this.passwordConfirmation = passwordConfirmation;
  }
}
