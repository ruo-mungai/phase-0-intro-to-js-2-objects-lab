const employee = {
    name: 'Sam',
    streetAddress:'11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(Employee, key, value) {
    const streetAddress = 'delete employee.name'
    employee['streetAddress'] = '12 Broadway'

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {newEmployee}
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, Key) {
    delete employee.name
    return employee
}

