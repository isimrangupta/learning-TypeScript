// ! Basic classes

// class Deparment {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   describe(this: Deparment) {
//     console.log("Department", this.name);
//   }
// }

// const accounting = new Deparment("Accounting");
// accounting.describe();

// const accountingCopy = {
//   name: "vishal",
//   describe: accounting.describe,
// };

// accountingCopy.describe();




// ! Private, public access modyfiers :-

class Deparment {
  public name: string;
  private employees: string[];
  constructor(n: string) {
    this.name = n;
    this.employees = [];
  }
  describe(this: Deparment) {
    console.log("Department", this.name);
  }

  addEmployee(emp: string) {
    this.employees.push(emp);
  }

  printEmployeeInformation() {
    console.log("Number of emp:", this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Deparment("Accounting");
accounting.describe();

accounting.addEmployee("Vishal");
accounting.addEmployee("Simi");

accounting.printEmployeeInformation();

// accounting.employees = ["Diksha"]    //can't chnage value
accounting.printEmployeeInformation();


// OR

class Deparment2 {
  constructor(public name: string, private employees: string[]) {}
  describe(this: Deparment2) {
    console.log("Department:", this.name);
  }

  addEmployee(emp: string) {
    this.employees.push(emp);
  }

  printEmployeeInformation() {
    console.log("Number of emp:", this.employees.length);
    console.log(this.employees);
  }
}

const accounting2 = new Deparment2("Accounting2", []);
accounting2.describe();

accounting2.addEmployee("Raj");
accounting2.addEmployee("sivi");

accounting2.printEmployeeInformation();

// ! Readonly

class Deparment3 {
  public name: string;
  private employees: string[];
  private readonly id: string;
  constructor(n: string) {
    this.name = n;
    this.id = "di"; //only you can initialize
    this.employees = [];
  }
  describe(this: Deparment3) {
    // this.id = "d2"      // Readonly can't change
    console.log("Department:", this.name);
  }

  addEmployee(emp: string) {
    this.employees.push(emp);
  }

  printEmployeeInformation() {
    console.log("Number of emp:", this.employees.length);
    console.log(this.employees);
  }
}




// ! Inheritance

// class User {
//   public name: string;
//   private employees: string[];
//   private readonly id: string;
//   constructor(id: string, n:string) {
//     this.name = n;
//     this.id = "di"  //only you can initialize
//     this.employees = [];
//   }
//   describe(this: User) {
//     console.log(`Department(${this.id}), ${this.name}`);
//   }

//   addEmployee(emp: string) {
//     this.employees.push();
//   }
//   printEmployeeInformation() {
//     console.log("Number of emp:", this.employees.length);
//     console.log(this.employees);
//   }
// }

// class AccountingDepartment extends User {
//   constructor(id:string, private reports: string[]){
//     super(id, "Accounting")
//   }

//   addReports(text:string){
//     this.reports.push(text)
//   }

//   printReport(){
//     console.log(this.reports)
//   }
// }

// const accDep = new AccountingDepartment("d1", [] );
// accDep.addReports("code bugs");
// accDep.printReport();
// accDep.describe();




// ! Override properties & protacted access modifier

// class User {
//   public name: string;
//   protected employees: string[];
//   private readonly id: string;
//   constructor(id: string, n:string) {
//     this.name = n;
//     this.id = "di"  //only you can initialize
//     this.employees = [];
//   }
//   describe(this: User) {
//     console.log(`Department(${this.id}), ${this.name}`);
//   }

//   addEmployee(emp: string) {
//     this.employees.push();
//   }
//   printEmployeeInformation() {
//     console.log("Number of emp:", this.employees.length);
//     console.log(this.employees);
//   }
// }

// class AccountingDepartment extends User {
//   constructor(id:string, private reports: string[]){
//     super(id, "Accounting")
//   }

//   addReports(text:string){
//     this.reports.push(text)
//   }

//   printReport(){
//     console.log(this.reports)
//   }

//   addEmployee(emp: string): void {
//     if(emp === "vishal"){
//       return;
//     }
//     this.employees.push(emp)
//   }
// }

// const accDep = new AccountingDepartment("d1", [] );
// accDep.addReports("code bugs");
// accDep.printReport();
// accDep.describe();

// accDep.addEmployee("vishal")
// accDep.addEmployee("simi")
// accDep.printEmployeeInformation();



// ! Setter & getter method :-

// class User {
//   public name: string;
//   protected employees: string[];
//   private readonly id: string;
//   constructor(id: string, n:string) {
//     this.name = n;
//     this.id = "di"  //only you can initialize
//     this.employees = [];
//   }
//   describe(this: User) {
//     console.log(`Department(${this.id}), ${this.name}`);
//   }

//   addEmployee(emp: string) {
//     this.employees.push();
//   }
//   printEmployeeInformation() {
//     console.log("Number of emp:", this.employees.length);
//     console.log(this.employees);
//   }
// }

// class AccountingDepartment extends User {
//   constructor(id:string, private reports: string[]){
//     super(id, "Accounting")
//   }

//   addReports(text:string){
//     this.reports.push(text)
//   }

//   printReport(){
//     console.log(this.reports)
//   }

//   addEmployee(emp: string): void {
//     if(emp === "vishal"){
//       return;
//     }
//     this.employees.push(emp)
//   }

//   get getReports(){
//     if(this.reports.length > 0){
//       return this.reports;
//     }
//     throw new Error("Reports not found.")
//   }
//   set setReports(value:string){
//     if(!value){
//       throw new Error("Please pass valid value.")
//     }
//     this.reports.push(value)
//   }
// }

// const accDep = new AccountingDepartment("d1", [] );
// accDep.addReports("code bugs");
// accDep.printReport();
// accDep.describe();

// accDep.addEmployee("vishal")
// accDep.addEmployee("simi")
// accDep.printEmployeeInformation();

// setter & getter:-
// console.log("getter ->", accDep.getReports);
// accDep.setReports = "code review error"



// ! Static Method :-

class User {
  public name: string;
  protected employees: string[];
  private readonly id: string;
  constructor(id: string, n: string) {
    this.name = n;
    this.id = "di"; //only you can initialize
    this.employees = [];
  }
  describe(this: User) {
    console.log(`Department(${this.id}), ${this.name}`);
  }

  addEmployee(emp: string) {
    this.employees.push();
  }
  printEmployeeInformation() {
    console.log("Number of emp:", this.employees.length);
    console.log(this.employees);
  }

  static getSalary() {
    return { salary: 580000 };
  }
}

const SalaryValue = User.getSalary();  // Without creating object, we can access by its class name
console.log(SalaryValue);



// ! abstract classes :-

abstract class Company {
  name: string;
  protected employees: string[] = [];
  protected readonly id: string;

  constructor(id:string, n:string){
    this.id = id;
    this.name = n;
  }

  abstract decribe(this:Company):void;
  abstract displayName() : void;
}

class Subclass extends Company{
  constructor(id:string, private reports:string[]){
    super(id, "Accounting")
  }

  decribe(): void {
    console.log("Department", this.id);
  }

  displayName(): void {
    console.log(this.name);
  }
}

const subClass = new Subclass("Di", []);
subClass.decribe()
