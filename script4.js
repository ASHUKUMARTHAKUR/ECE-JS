
let employees = [];


function addEmployee() {
    const name = document.getElementById('empName').value;
    const id = document.getElementById('empId').value;
    const salary = parseFloat(document.getElementById('empSalary').value);
    const dept = document.getElementById('empDept').value;

    if (!name || !id || !salary) {
        alert("Please fill all fields");
        return;
    }


    const newEmp = {
        id: id,
        name: name,
        salary: salary,
        dept: dept
    };


    employees.push(newEmp);
    
    
    document.getElementById('empName').value = '';
    document.getElementById('empId').value = '';
    document.getElementById('empSalary').value = '';
    renderTable(employees);
}


function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = ""; 

   
    for (const emp of data) {
        const row = `<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.dept}</td>
            <td>₹${emp.salary.toLocaleString()}</td>
        </tr>`;
        tbody.innerHTML += row;
    }
}


function filterHighSalary() {
    const highEarners = employees.filter(emp => emp.salary > 50000);
    renderTable(highEarners);
}


function calcStats() {
    if (employees.length === 0) return;

   
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    
  
    const avg = total / employees.length;

   
    document.getElementById('statsPanel').style.display = 'grid';
    document.getElementById('totalSalary').innerText = "₹" + total.toLocaleString();
    document.getElementById('avgSalary').innerText = "₹" + avg.toFixed(0);
}


function countDept() {
    let counts = {};

  
    for (const emp of employees) {
        if (counts[emp.dept]) {
            counts[emp.dept]++;
        } else {
            counts[emp.dept] = 1;
        }
    }

    
    let output = "";
    for (const dept in counts) {
        output += `${dept}: ${counts[dept]} <br>`;
    }
    
    document.getElementById('statsPanel').style.display = 'grid';
    document.getElementById('deptCounts').innerHTML = output;
}
