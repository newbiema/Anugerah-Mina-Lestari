document.addEventListener("DOMContentLoaded", function() {
    // Mendeteksi ketika elemen masuk ke dalam viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Animasi saat elemen masuk ke dalam viewport
    function animateOnScroll() {
      const historyContent = document.getElementById("historyContent");
      if (isInViewport(historyContent)) {
        historyContent.classList.add("animate__fadeInUp");
        historyContent.classList.remove("opacity-0");
      }
    }
  
    // Memanggil fungsi animasi saat pengguna menggulir halaman
    window.addEventListener("scroll", animateOnScroll);
  });


  document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    });

    const target = document.getElementById('historyContent');
    observer.observe(target);
  });
  