function generatePassword(length = 12) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

function updatePassword() {
  const passwordElement = document.getElementById("password");
  passwordElement.textContent = generatePassword();
}

// Initial password
updatePassword();

// Generate every hour
setInterval(updatePassword, 6000);

// Manual generate button
document
  .getElementById("generateBtn")
  .addEventListener("click", updatePassword);
