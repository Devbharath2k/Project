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
                if(apiData.status === 200){
                    alert("User already exists");
                    output.classList.add("text-danger");
                    output.textContent = "User already exists";              
                }
                else if(apiData.status === 201){
                    alert("Form submitted successfully!");
                    output.classList.remove("text-danger");
                    output.classList.add("text-success");
                    output.textContent = "Form submitted successfully!";
                    form.reset();
                    setTimeout(function () {
                        output.textContent = "";
                    }, 2000); 
                }
                else {
                    alert("Internal server error");
                    output.classList.add("text-danger");
                    output.textContent = "Internal server error" ;
                }
            })
            .catch(error => {
                console.error(error);
                alert("Error in request");
            });
            
    });
});