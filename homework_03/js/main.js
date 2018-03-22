let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());

/*
"Epam was created in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time)"
"Artem starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Vova starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Vasyl starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Ivan starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Orest starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Orest ends working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
"Anton starts working at Epam in Mon Mar 12 2018 07:41:50 GMT+0200 (FLE Standard Time);"
*/
epam.removeEmployee(2);


console.log(vasyl.getHistory());

/*
"Vasyl is hired to Epam in Mon Mar 12 2018 07:45:55 GMT+0200 (FLE Standard Time)"
"Vasyl is fired from Epam in Mon Mar 12 2018 07:45:55 GMT+0200 (FLE Standard Time)"
*/

console.log(epam.getAvarageSalary()); // -> 2125
console.log(epam.getAvarageAge());  // -> 21.25

epam.addNewEmployee(5,6,9,5); // -> Please try to add Employee instance

setTimeout(() => {
   epam.removeEmployee(1);
   console.log(artem.getWorkTimeInSeconds()); // -> 5.5744444444444445
}, 5000);

vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getHistory());
/*
"Vova is hired to Epam in Mon Mar 12 2018 08:08:48 GMT+0200 (FLE Standard Time)"
"try to change salary from 2000 to 900"
"change salary from 2000 to 2200"
*/
