document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const output = document.getElementById("output");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const fname = document.getElementById("fname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

      
        if (fname === "" || email === "" || phone === "" || message === "") {
            output.textContent = "All fields are required!";
            return;
        }
            console.log("name, email, phone, message",fname, email, phone, message)
        fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fname, email, phone, message })
        })
        .then(response => response.json())
        .then(apiData => {
            
            console.log(apiData);
            alert("Form submitted successfully!")
            output.textContent = "Form submitted successfully!";
            // You can also reset the form here if needed
            form.reset();

        })
        .catch(error => {
            // Handle errors
            console.error("Error:", error);
            output.textContent = "Error occurred while submitting the form.";
        });
    });
});