function Employee() {
    let history = '';
    let company = '';
    let timeInCompany;
    let timeOut;

    this.name = name;
    this.primarySkill = primarySkill;
    this.age = age;
    this.salary = salary;
    this.employeeHistory = [];
    this.getSalary = function () {
        return this.salary;
    }

    this.setSalary = function (unit) {
        this.salary = unit;
    }

    this.getWorkTimeInSeconds = function () {
        let date = new Date();
        return (date - timeInCompany) / 1000;
    }

    this.hire = function (value, hired) {
        company = value;
        timeInCompany = Number(hired);
        history += this.name + ' is hired to' + company + ' in ' + hired;
    }

    this.fire = function (value, fired) {
        company = value;
        timeOut = Number(fired);
        history += this.name + ' is hired from' + company + ' in ' + hired;
    }

    this.getHistory = function () {
        this.employeeHistory.forEach(function (el) {
            console.log(el)
        });
    }
};


function Company() {
    let date = new Date();

    this.name = name;
    this.owner = owner;
    this.maxCount = maxCount;
    this.newArrEmloyee = [];
    this.arrEmployee = [];
    this.addNewEmployee = function (worker) {
        let result = 0;
        let newEmployee;

        if (worker instanceof Employee) {
            if (this.newArrEmloyee.length >= this.maxCount) {
                this.newArrEmloyee.forEach(function (el, i) {
                    if (el.salary > result) {
                        result = el.salary;
                        newEmployee = i;
                    }
                })
                this.newArrEmloyee.splice(newEmployee, 1);
            }
            if (worker.arrEmployee != this) {
                worker.hire(this);
            }
            this.newArrEmloyee.push(worker)
            this.arrEmployee.push('addNewEmployee');
        }
    }

    this.removeEmployee = function () {

    }

    this.getAvarageSalary = function () {

    }

    this.getEmployees = function () {
        this.arrEmployee.push('getEmployees');
        return newArrEmloyee;
    }

    this.getFormattedListOfEmployees = function () {
        let newStr = '';
        for (var i = 0; i < newArrEmloyee.length; i++) {
            newStr += `${newArrEmloyee[i].name} -  works in ${this.name} ${newArrEmloyee[i].getWorkTimeInSeconds()} seconds`
        }
        return newStr;
    }

    this.getAvarageAge = function () {

    }

    this.getHistory = function () {
        this.employeeHistory.forEach(function (el) {
            console.log(el)
        });
    }
};

let artem = new Employee({
    name: "Artem",
    age: 15,
    salary: 1000,
    primarySkill: "UX"
});
let vova = new Employee({
    name: "Vova",
    age: 16,
    salary: 2000,
    primarySkill: "BE"
});
let vasyl = new Employee({
    name: "Vasyl",
    age: 25,
    salary: 1000,
    primarySkill: "FE"
});
let ivan = new Employee({
    name: "Ivan",
    age: 35,
    salary: 5000,
    primarySkill: "FE"
});
let orest = new Employee({
    name: "Orest",
    age: 29,
    salary: 300,
    primarySkill: "AT"
});
let anton = new Employee({
    name: "Anton",
    age: 19,
    salary: 500,
    primarySkill: "Manager"
});

let epam = new Company({
    name: "Epam",
    owner: "Arkadii",
    maxCompanySize: 5
});

//epam.addNewEmployee(artem);
//epam.addNewEmployee(vova);
//epam.addNewEmployee(vasyl);
//epam.addNewEmployee(ivan);
//epam.addNewEmployee(orest);
//epam.addNewEmployee(anton);
//
//console.log(epam.getHistory());
//
//epam.removeEmployee(2);
//
//console.log(vasyl.getHistory());
//
//console.log(epam.getAvarageSalary());
//
//console.log(epam.getAvarageAge());
//
//epam.addNewEmployee(5, 6, 9, 5);
//
//setTimeout(() => {
//    epam.removeEmployee(1);
//    console.log(artem.getWorkTimeInSeconds());
//}, 5000);
//
//vova.setSalary(900);
//vova.setSalary(2200);
//console.log(vova.getHistory());
