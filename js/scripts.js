// scripts.js

// Function to validate form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const recipeName = document.getElementById('recipeName').value;

    // Regex patterns for validation
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const recipeNamePattern = /^[A-Za-z0-9\s]+$/;

    // Validate name (only letters and spaces)
    if (!namePattern.test(name)) {
        alert('Please enter a valid name using only letters.');
        return false;
    }

    // Validate email format
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate recipe name (letters, numbers, and spaces)
    if (!recipeNamePattern.test(recipeName)) {
        alert('Recipe name should only contain letters, numbers, and spaces.');
        return false;
    }

    // All validations passed
    return true;
}

// Event listener for form submission
document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Call validation function
    if (validateForm()) {
        alert('Recipe submitted successfully!');
        document.getElementById('recipeForm').reset(); // Reset form after submission
    }
});
