function calculateGrade(){
    let n = parseInt(document.getElementById("subjects").value, 10);
    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    let total = 0;
    for (let i = 0; i < n; i++) {
        let x = parseFloat(prompt("Enter marks of subject " + (i + 1)));
        if (!isNaN(x)) {
            total += x;
        } else {
            alert("Invalid input. Please enter a valid mark for subject " + (i + 1));
            i--;
            continue;
        }
    }

    let average = total / n;
    let grade;
    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    let r = document.getElementById("result");
    if (r) {
        r.innerHTML =
            "Total marks: " + total +
            "<br/>Average: " + average.toFixed(2) +
            "<br/>Grade: " + grade;
    } else {
        alert("Result element not found.");
    }
}

