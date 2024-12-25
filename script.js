// Fungsi untuk menangani elemen yang terlihat
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Jika elemen masuk viewport, tambahkan kelas 'visible' untuk efek fade in
        entry.target.classList.add('visible');
      } else {
        // Jika elemen keluar viewport, hapus kelas 'visible' untuk efek fade out
        entry.target.classList.remove('visible');
      }
    });
  }
  
  // Membuat observer untuk memantau elemen yang bergeser masuk dan keluar viewport
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Elemen harus setidaknya 50% terlihat untuk dianggap "visible"
  });
  
  // Pilih semua elemen proyek untuk dipantau
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    observer.observe(project);
  });
  