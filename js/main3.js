  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const voornaam = document.querySelector('input[name="firstname"]').value;
    const achternaam = document.querySelector('input[name="lastname"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const land = document.querySelector('select[name="country"]').value;
    const bericht = document.querySelector('textarea[name="subject"]').value;
    const ontvanger = document.querySelector('input[type="hidden"]').value;
    const onderwerp = "Nieuw bericht van " + voornaam + " " + achternaam;
    const body = 

      "Voornaam: " + voornaam + "\n" +
      "Achternaam: " + achternaam + "\n" +
      "Email: " + email + "\n" +
      "Land: " + land + "\n\n" +
      "Bericht:\n" + bericht;

    const mailtoLink = "mailto:" + ontvanger

                     + "?subject=" + encodeURIComponent(onderwerp)
                     + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
  });

