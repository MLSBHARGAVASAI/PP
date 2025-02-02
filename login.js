document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission
        
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username === "Sahith" && password === "Sahith") {
            window.location.href = "admin.html";
        } else {
            alert("Invalid username or password");
        }
    });
});