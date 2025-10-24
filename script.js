// Initialize Dark Mode Toggle
function initDarkModeToggle() {
  let toggleButton = document.createElement("button");
  toggleButton.id = "darkModeToggle";
  toggleButton.innerHTML = "🌙 Dark Mode";

  // Button styles
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "20px";
  toggleButton.style.right = "20px";
  toggleButton.style.padding = "10px 15px";
  toggleButton.style.backgroundColor = "#2c3e50";
  toggleButton.style.color = "white";
  toggleButton.style.border = "none";
  toggleButton.style.borderRadius = "5px";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.zIndex = "1000";

  // Add button to the page
  document.body.appendChild(toggleButton);

  let darkMode = false;

  // Toggle functionality
  toggleButton.addEventListener("click", function () {
    darkMode = !darkMode;

    if (darkMode) {
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.color = "#ffffff";
      toggleButton.innerHTML = "☀️ Light Mode";
      toggleButton.style.backgroundColor = "#e67e22";
    } else {
      document.body.style.backgroundColor = "#f4f4f4";
      document.body.style.color = "#333";
      toggleButton.innerHTML = "🌙 Dark Mode";
      toggleButton.style.backgroundColor = "#2c3e50";
    }
  });
}

// Update Welcome Message Based on Time
function updateWelcomeMessage() {
  let homeSection = document.getElementById("home");

  if (homeSection) {
    let hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    let heading = homeSection.querySelector("h2");
    if (heading) {
      heading.textContent = `${greeting}! Welcome to My Portfolio`;
    }
  }
}

// Placeholder for future form validation
function initFormValidation() {
  console.log("Form validation ready for future implementation");
}

// Debugging helper
function debugInfo() {
  console.log(
    "Current active section:",
    document.querySelector("section.active").id
  );
  console.log("All sections:", document.querySelectorAll("section").length);
}

// Initialize all functions when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  initDarkModeToggle();
  updateWelcomeMessage();
  initFormValidation();
  console.log("Portfolio JavaScript loaded successfully!");
});
