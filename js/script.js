let triger = document.getElementById('triger');
let secondtriger = document.getElementById('secondtriger');
let controler1 = document.getElementById('controldiv');
let controler2 = document.getElementById('seccontroldiv');
let thirdtriger = document.getElementById('thirdtriger');
let controler3 = document.getElementById('thirdcontorldiv');
let profile = document.getElementById("showprofile");
let profileinfo = document.getElementById('profilediv');

triger.addEventListener('click', () => {
    if (controler1.style.display == "none") {
        controler1.style.display = "block";
        controler2.style.display = "none";
        controler3.style.display = "none";
    } else {
        controler1.style.display = "none";
    }
})
secondtriger.addEventListener('click', () => {
    if (controler2.style.display == "none") {
        controler2.style.display = "block";
        controler1.style.display = "none";
        controler3.style.display = "none";
    } else {
        controler2.style.display = "none";
    }
})
thirdtriger.addEventListener('click', () => {
    if (controler3.style.display == "none") {
        controler3.style.display = "block";
        controler1.style.display = "none";
        controler2.style.display = "none";
    } else {
        controler3.style.display = "none"
    }
})

profile.addEventListener('click', () => {
    if (profileinfo.style.display === "none") {
        profileinfo.style.display = "block";
    } else if (profileinfo.style.display === "block") {
        profileinfo.style.display = "none";
    }
});
let pin = document.getElementById('pin');
let checkpin = document.getElementById('verificationcode');
let randomNumer = Math.floor(Math.random() * 10000);
randomNumer = randomNumer.toString();
pin.innerHTML = randomNumer;
// form validation
document.getElementById('form1').addEventListener('submit', (event) => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let servie = document.getElementById('services').value;
    let msg = document.getElementById('message').value;
    let pincheck = document.getElementById('verificationcode').value;
    pincheck = pincheck.toString();
    let error = document.getElementById("error");
    let emailerror = document.getElementById("emailerror");
    let phoneerror = document.getElementById("phoneerror");
    let pinerror = document.getElementById("pinerror");
    let submitbtn = document.getElementById('submitbtn');
    let isValid = true;

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    if (name === "") {
        error.innerText = "This field Can't be blank";
        isValid = false;
    } else {
        error.innerText = "";
    }

    if (email === "") {
        emailerror.innerText = "Email Field Can't be blank";
        isValid = false;
    } else {
        if (!validateEmail(email)) {
            emailerror.innerText = "Please enter a valid email";
            isValid = false;
        } else {
            emailerror.innerText = "";
        }
    }

    if (phone === "") {
        phoneerror.innerText = "This field can't be blank";
        isValid = false;
    } else {
        phoneerror.innerText = "";
    }

    if (pincheck === "") {
        pinerror.innerText = "Enter the code";
        isValid = false;
    } else {
        if (randomNumer !== pincheck) {
            pinerror.innerText = "Please Enter the correct code";
            isValid = false;
        } else {
            pinerror.innerText = "";
        }
    }

    if (isValid) {
        let messageBody = "<b>Name : </b>" + name + "<br/>" +
            "<b>Email : </b>" + email + "<br/>" +
            "<b>Phone : </b>" + phone + "<br/>" +
            "<b>Service : </b>" + servie + "<br/>" +
            "<b>Message : </b>" + msg;

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "estiakdev@gmail.com",
            Password: "36796BDED816BA7FB333D7727E959316D317",
            To: 'mdasif49678@gmail.com',
            From: "estiakdev@gmail.com",
            Subject: servie,
            Body: messageBody
        }).then(
            message => {
                if (message == 'OK') {
                    swal("Successful", "I will contact You Soon", "success");
                } else {
                    swal("Error", "Something Wrong", "error");
                }
            }
        );
    }
});


