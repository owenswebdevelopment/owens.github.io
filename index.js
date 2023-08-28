$(document).ready(function(){
$(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }
    else{
        $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});

//slide-up script 
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});


//toggle menu bar
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});


//typing animation script

var typed = new Typed(".typing", {
    strings: ["Web Developer", "Web Designer", "Web Updater"],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Web Designer", "Web Updater"],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true
});


//owl carousel script 
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false 
        },
        600:{
            items:2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
})

})

//Initialize EmailJS with your user ID
emailjs.init("BiWJoMLf_VShR9DS5");

// Define the email parameters
function sendMail() {
    var senderNameInput = document.getElementById("sendername");
    var emailInput = document.getElementById("email_id");
    var messageInput = document.getElementById("message");
    var subjectInput = document.getElementById("subject");

    var params = {
        from_name: senderNameInput.value,
        email_id: emailInput.value,
        message: messageInput.value,
        subject: subjectInput.value,
        to_email: "melfordmalichai@gmail.com" // Replace with the recipient's email address
    };

    emailjs.send("service_20n6aa8", "template_yiab0xn", params).then(function (res) {
        alert("Message Sent! " + res.status);

        // Clear the input fields
        senderNameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        subjectInput.value = "";
    });
}



//// emailjs.init("BiWJoMLf_VShR9DS5");
// function sendMail() {
//     var params = {
//         from_name : document.getElementById("senderName").value,
//         email_id : document.getElementById("email_id").value,
//         message : document.getElementById("message").value,
        
//     }
//     emailjs.send("service_20n6aa8", "template_yiab0xn", params).then(function (res) {
//         alert("success! " + res.status);
//     })
// }