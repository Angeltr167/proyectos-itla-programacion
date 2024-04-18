class Employee {
    constructor(name, surname, salary, position) {
      this.name = name;
      this.surname = surname;
      this.salary = salary;
      this.position = position;
    }
  
    getInfo() {
      return `${this.name} ${this.surname} - ${this.position} - Salario: $${this.salary}`;
    }
  }
  
  class Company {
    constructor() {
      this.loadEmployees();
    }
  
    loadEmployees() {
      const employeesData = JSON.parse(localStorage.getItem('employees')) || [];
      this.employees = employeesData.map(employeeData => new Employee(
        employeeData.name,
        employeeData.surname,
        employeeData.salary,
        employeeData.position
      ));
    }
  
    addEmployee(name, surname, salary, position) {
      const employee = new Employee(name, surname, salary, position);
      this.employees.push(employee);
      this.saveData();
    }
  
    listEmployees() {
      const employeesList = document.getElementById('employees');
      employeesList.innerHTML = '';
      this.employees.forEach(employee => {
        const li = document.createElement('li');
        li.textContent = employee.getInfo();
        employeesList.appendChild(li);
      });
    }
  
    calculateTotalSalary() {
      const totalSpan = document.getElementById('total');
      const totalSalary = this.employees.reduce((acc, employee) => acc + employee.salary, 0);
      totalSpan.textContent = `$${totalSalary}`;
    }
  
    saveData() {
      localStorage.setItem('employees', JSON.stringify(this.employees));
    }
  }
  
  const company = new Company();
  
  function addEmployee() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const position = document.getElementById('position').value;
    
    company.addEmployee(name, surname, salary, position);
    company.listEmployees();
    company.calculateTotalSalary();
  
    // Clear input fields after adding employee
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('position').value = '';
  }
  
  // Load employees data on page load
  window.onload = function() {
    company.listEmployees();
    company.calculateTotalSalary();
  };
  