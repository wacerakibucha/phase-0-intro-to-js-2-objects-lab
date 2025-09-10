//  Create an employee object
const employee = {
  name: "Alice",
  streetAddress: "123 Main St"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee, // copy existing properties
    [key]: value // update or add the new key/value
  };
}

// modifies original object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

//returns new object without the key)
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee }; // copy
  delete newEmployee[key]; // remove key
  return newEmployee;
}m

//modifies original object)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

