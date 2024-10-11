// Get references to the form fields and the username help element
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const usernameInput = document.getElementById("username");
const usernameHelp = document.getElementById("usernameHelp");

// Function to generate and display clickable username suggestions
function generateUsernameSuggestions() {
  const firstName = firstNameInput.value.trim().toLowerCase();
  const lastName = lastNameInput.value.trim().toLowerCase();
  let suggestions = [];

  if (firstName && lastName) {
    // Suggested username options
    suggestions = [
      `${firstName.charAt(0)}${lastName}`, // First initial + last name
      `${firstName}.${lastName}`, // First name + dot + last name
      `${firstName}${lastName.charAt(0).toUpperCase()}`, // First name + first initial of last name
      `${firstName}${lastName.length}`, // First name + length of last name
      `${firstName}${lastName}${Math.floor(Math.random() * 100)}`, // Full name + random number
    ];

    // Clear existing suggestions
    usernameHelp.innerHTML = "";

    // Create clickable suggestions
    suggestions.forEach((suggestion) => {
      const suggestionSpan = document.createElement("span");
      suggestionSpan.textContent = suggestion;
      suggestionSpan.style.cursor = "pointer";
      suggestionSpan.style.color = "#4CAF50";
      suggestionSpan.style.marginRight = "10px";

      // Add click event to select the username
      suggestionSpan.addEventListener("click", () => {
        usernameInput.value = suggestion;
      });

      // Append each suggestion to the usernameHelp element
      usernameHelp.appendChild(suggestionSpan);
    });
  } else {
    // Clear suggestions if fields are empty
    usernameHelp.innerHTML = "";
  }
}

// Add event listeners to update the suggestions as the user types
firstNameInput.addEventListener("input", generateUsernameSuggestions);
lastNameInput.addEventListener("input", generateUsernameSuggestions);
