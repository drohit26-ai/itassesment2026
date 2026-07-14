let slideIndex = 0;

let slides = document.getElementsByClassName("slide");

function showSlides() {

     for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }

    setTimeout(showSlides, 3000);
}

showSlides();


function validateForm() {

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let message = document.getElementById("message").value.trim();

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone == "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (isNaN(phone)) {
        alert("Phone number must contain only numbers.");
        return false;
    }

    if (phone.length < 7) {
        alert("Phone number is too short.");
        return false;
    }

    if (message == "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Your message has been submitted successfully!");

    return true;
}