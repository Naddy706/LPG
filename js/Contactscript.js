// document.getElementById("contact-form").addEventListener("submit", function(e){
// e.preventDefault();

// emailjs.sendForm(
// 'service_oamchfh',
// 'template_9ihpk4i',
// this
// )

// .then(()=>{
// alert("Message Sent!");
// this.reset();
// })
// .catch((err)=>{
// console.log(err);
// alert("Error sending message");
// });

// });





emailjs.init("Qx-22jAlWmQPoSMGu");

document
  .getElementById("contact-form")
  .addEventListener("submit", function(e) {

  e.preventDefault();

  emailjs.sendForm(
    "service_bc69219",
    "template_klqbcpq",
    this
  ).then(function() {

      document.getElementById("result").innerHTML =
      "Message sent successfully!";

  }, function(error) {

      document.getElementById("result").innerHTML =
      "Failed to send message.";

  });

});