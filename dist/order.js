document.addEventListener('DOMContentLoaded', function () {
  const formOrder = document.getElementById('formOrder');
  
  formOrder.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      if (!name) {
          alert('Please enter your name.');
          return;
      }

      if (!email) {
          alert('Please enter your email.');
          return;
      }

      if (!phone) {
          alert('Please enter your phone number.');
          return;
      }
      const message = encodeURIComponent(
          `*Form Pembelian*\n
          Nama: ${name}\n
          Alamat: ${email}\n
          No Wa: ${phone}\n`
      );

      const whatsappLink = `https://wa.me/6282231614517?text=${message}`;
      window.open(whatsappLink, "_blank");
  });
});