function calculateAge() {
    // Get user input for birth year
    var birthYear = document.getElementById("birth-year").value;
    var currentYear = new Date().getFullYear();  // Get the current year dynamically

    // Validation: Ensure birth year is provided and is a valid number
    if (!birthYear || birthYear < 1900 || birthYear > currentYear) {
        alert("Please enter a valid birth year between 1900 and " + currentYear);
        return;
    }

    // Calculate age
    var age = currentYear - birthYear;
    var ageNextYear = age + 1;  // The age they will turn next year

    // Display the result
    var resultMessage = "Your age is currently " + age + " years old, or you will be " + ageNextYear + " years old next year.";
    document.getElementById("result").innerHTML = resultMessage;
}
