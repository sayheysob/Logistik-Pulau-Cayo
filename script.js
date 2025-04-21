const users = [
  { email: "admin@example.com", password: "admin123" },
  { email: "user@example.com", password: "user123" }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Email atau password salah!";
  }
});
