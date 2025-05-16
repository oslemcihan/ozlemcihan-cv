// Tema Değiştirici - Dark/Light Mode
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Aktif buton
    tabButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Aktif içerik
    tabContents.forEach(content => {
      content.classList.remove("active");
    });

    const target = button.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});



  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  const texts = [
  " Yazılım Geliştiricisi",
  " Bilgisayar Mühendisliği Öğrencisi",
  " Proje Tutkunu",
  " Frontend Meraklısı"
];

let textIndex = 0;
const fancyText = document.getElementById("fancy-text");

function cycleText() {
  fancyText.style.opacity = 0;
  setTimeout(() => {
    fancyText.textContent = texts[textIndex];
    fancyText.style.opacity = 1;
    textIndex = (textIndex + 1) % texts.length;
  }, 500);
}

// İlk başlatma
cycleText();
setInterval(cycleText, 3000);






window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

setTimeout(() => {
  showToast("Hoş geldiniz, Özlem Cihan'ın CV'sine göz atıyorsunuz!");
}, 1000);


  document.querySelectorAll(".footer a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.currentTarget.classList.add("clicked");
    setTimeout(() => {
      e.currentTarget.classList.remove("clicked");
    }, 500);
  });
});


  // Scroll ile navbar efektleri
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Tema geçiş butonuna olay ekle
  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const icon = themeToggle.querySelector("i");
    if (body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      showToast("Karanlık moda geçildi");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      showToast("Aydınlık moda geçildi");
    }
  });

  // Sosyal medya bağlantılarına yönlendirme kontrolü
  document.querySelectorAll(".footer a").forEach(link => {
    link.addEventListener("click", (e) => {
      const url = e.currentTarget.href;
      window.open(url, "_blank");
    });
  });

  // Toast mesajı fonksiyonu
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }
});
