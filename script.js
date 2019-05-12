class Employee {
    constructor(name, hireDate, salary) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(name, hireDate, salary, descriptionOfJob) {
        super(name, hireDate, salary);
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes " + this.salary + " because they " + this.descriptionOfJob);
    }
}

class Designer extends Employee {
    constructor(name, hireDate, salary, experience) {
        super(name, hireDate, salary);
        this.experience = experience;
    }
    yearsExperience() {
        console.log(this.name + " was hired on " + this.hireDate + ", makes " + this.salary + ", and has " + this.experience + " years of experience.");
    }
}

class SalesAssociate extends Employee {
    constructor(name, hireDate, salary, degrees) {
        super(name, hireDate, salary);
        this.degrees = degrees;
    }
    degreeCompleted() {
        console.log(this.name + " was hired on " + this.hireDate + ", makes " + this.salary + ", and has " + this.degrees + " degrees.");
    }
}

let bob = new Manager("Bob", "04/16/95", 25000, "get the work done.");

let sarah = new Designer("Sarah", "08/23/99", 20000, 19.5);

let lisa = new SalesAssociate("Lisa", "03/06/09", 15000, 6);

bob.jobDescription();

sarah.yearsExperience();

lisa.degreeCompleted();