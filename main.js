// Prompt user for the number of subjects
let numSubjects = parseInt(prompt("Enter the number of subjects:"));
if (isNaN(numSubjects) || numSubjects <= 0) {
    console.log("Please enter a valid number of subjects!");
} else {
    let totalMarks = 0;
    const maxMarksPerSubject = 100;
    let subjectCount = 1; // Counter for subjects

    // Input marks using a while loop
    while (subjectCount <= numSubjects) {
        let marks = parseFloat(prompt(`Enter marks for subject ${subjectCount} (out of ${maxMarksPerSubject}):`));

        // Validate marks
        if (isNaN(marks) || marks < 0 || marks > maxMarksPerSubject) {
            console.log("Invalid marks! Please enter a number between 0 and 100.");
        } else {
            totalMarks += marks; // Add valid marks to total
            subjectCount++; // Move to the next subject
        }
    }

    // Calculate percentage
    let percentage = (totalMarks / (numSubjects * maxMarksPerSubject)) * 100;

    // Determine grade and remarks
    let grade, remarks;
    if (percentage > 80) {
        grade = "A+";
        remarks = "Excellent";
    } else if (percentage > 70) {
        grade = "A";
        remarks = "Very Good";
    } else if (percentage > 60) {
        grade = "B";
        remarks = "Good";
    } else if (percentage > 50) {
        grade = "C";
        remarks = "Satisfactory";
    } else if (percentage > 40) {
        grade = "D";
        remarks = "Needs Improvement";
    } else if (percentage >= 33) {
        grade = "E";
        remarks = "Pass";
    } else {
        grade = "F";
        remarks = "Fail";
    }

    // Display the marksheet in the console
    console.log("--- Marksheet ---");
    console.log(`Total Marks: ${totalMarks}/${numSubjects * maxMarksPerSubject}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
    console.log(`Grade: ${grade}`);
    console.log(`Remarks: ${remarks}`);
}




