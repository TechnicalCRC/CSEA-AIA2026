import { name as Stu_Name, branch as br, RollNo } from "./Student.js";

console.log(Stu_Name);
console.log(br);
console.log(RollNo);

import { empId } from "./employee.js";
import { salary } from "./employee.js";

console.log(empId);
//console.log(salary)

import * as bundle from "./Student.js";
console.log("NAme - " + bundle.name);
console.log(bundle.branch);

import designation from "./employee.js";

console.log(designation);

import * as emp from "./employee.js";

console.log(emp.salary);
console.log(emp.empId);
console.log(emp.default);

import Study from "./Student.js";

Study();
