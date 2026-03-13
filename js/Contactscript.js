document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_bc69219",
    "template_klqbcpq",
    this,
    "XUrgBjDNip6kxG82V"
  )
  .then(function() {
    alert("Message sent!");
    // clear form
    document.getElementById("contactForm").reset();

  })
  .catch(function(error) {
    console.log("FAILED", error);
  });
});