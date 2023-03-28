const fs = require('fs'); // Node.js'te dosya işlemleri için gerekli olan fs modülünü yükle

// Dosyadan tüm çalışanları oku
function getAllEmployees() {
    const data = fs.readFileSync('employee.json');
    return JSON.parse(data);
}

// Yeni bir çalışanı dosyaya ekle
function addEmployee(employee) {
    const employees = getAllEmployees();
    employees.push(employee);
    fs.writeFileSync('employee.json', JSON.stringify(employees));
}

// Belirli bir çalışanı dosyadan sil
function deleteEmployee(employeeName) {
    const employees = getAllEmployees().filter(e => e.name !== employeeName);
    fs.writeFileSync('employee.json', JSON.stringify(employees));
}

// Belirli bir çalışanın bilgilerini güncelle
function updateEmployee(employeeId, updatedEmployee) {
    const employees = getAllEmployees().map(e => {
        if (e.id === employeeId) {
            return { ...e, ...updatedEmployee };
        }
        return e;
    });
    fs.writeFileSync('employee.json', JSON.stringify(employees));
}

// Çalışanları listele
listAll = () => {
    const employees = getAllEmployees();
    console.log('Employees:', employees.length);
    employees.forEach(e => console.log(e));
}
listAll();
deleteEmployee('John');
listAll();

addEmployee({ name: 'John', salary: 2200 });