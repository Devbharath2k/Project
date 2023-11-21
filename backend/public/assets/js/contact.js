document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const output = document.getElementById("output");


    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const fname = document.getElementById("fname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        console.log("name, email, phone, message",fname, email, phone, message)
        if (fname === "" || email === "" || phone === "") {
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
            if(apiData.message == "User already exists"){
                alert("User already exists")
                output.classList.add("text-danger");
                output.textContent = "User already exists";              
            }
            else if(apiData.message == "User created successfully"){
                alert("Form submitted successfully!")
                output.classList.add("text-success");
                output.textContent = "Form submitted successfully!";      
                 // You can also reset the form here if needed
            form.reset();        
            }
            else {
                alert("Internal server error")
                output.classList.add("text-danger");
            output.textContent = "Internal server error" 
        }

           

        })
        .catch(error => {
            // Handle errors
            console.error("Error:", error);
            output.textContent = "Error occurred while submitting the form.";
        });
    });
});