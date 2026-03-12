document.getElementById("contact-form").addEventListener("submit", function(e){
e.preventDefault();

emailjs.sendForm(
'service_oamchfh',
'template_9ihpk4i',
this
)

.then(()=>{
alert("Message Sent!");
this.reset();
})
.catch((err)=>{
console.log(err);
alert("Error sending message");
});

});





