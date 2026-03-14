// 1. Data Structure: Array of Objects
let employees = [];

// Function to Add Employee
function addEmployee() {
    const name = document.getElementById('empName').value;
    const id = document.getElementById('empId').value;
    const salary = parseFloat(document.getElementById('empSalary').value);
    const dept = document.getElementById('empDept').value;

    if (!name || !id || !salary) {
        alert("Please fill all fields");
        return;
    }

    // Create Object
    const newEmp = {
        id: id,
        name: name,
        salary: salary,
        dept: dept
    };

    // Add to Array
    employees.push(newEmp);
    
    // Clear inputs and refresh table
    document.getElementById('empName').value = '';
    document.getElementById('empId').value = '';
    document.getElementById('empSalary').value = '';
    renderTable(employees);
}

// Function to Display (Map equivalent logic for DOM)
function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = ""; // Clear current rows

    // Syllabus: for...of loop (or forEach)
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

// Function to Filter (Syllabus: filter)
function filterHighSalary() {
    const highEarners = employees.filter(emp => emp.salary > 50000);
    renderTable(highEarners);
}

// Function to Calculate Stats (Syllabus: reduce, math)
function calcStats() {
    if (employees.length === 0) return;

    // Total using Reduce
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    
    // Average
    const avg = total / employees.length;

    // Update UI
    document.getElementById('statsPanel').style.display = 'grid';
    document.getElementById('totalSalary').innerText = "₹" + total.toLocaleString();
    document.getElementById('avgSalary').innerText = "₹" + avg.toFixed(0);
}

// Function to Count by Dept (Syllabus: for...of loop logic)
function countDept() {
    let counts = {};

    // Iterate and count
    for (const emp of employees) {
        if (counts[emp.dept]) {
            counts[emp.dept]++;
        } else {
            counts[emp.dept] = 1;
        }
    }

    // Format output string
    let output = "";
    for (const dept in counts) {
        output += `${dept}: ${counts[dept]} <br>`;
    }
    
    document.getElementById('statsPanel').style.display = 'grid';
    document.getElementById('deptCounts').innerHTML = output;
}
