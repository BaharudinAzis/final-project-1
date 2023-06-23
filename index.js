const toggleSwitch = document.querySelector('#dark-mode-toggle');

toggleSwitch.addEventListener('change', function () {
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  // Simpan preferensi dark mode pengguna di sini (misalnya, di local storage)
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  // Hapus preferensi dark mode pengguna di sini (misalnya, dari local storage)
}
  // Membuat component sticky menggunakan JavaScript
  var stickyComponent = document.createElement('div');
  stickyComponent.className = 'sticky';

  var closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  stickyComponent.appendChild(closeButton);

  var downloadText = document.createElement('p');
  downloadText.textContent = 'Download Aplikasi Kami';
  stickyComponent.appendChild(downloadText);

  var googlePlayButton = document.createElement('button');
  googlePlayButton.textContent = 'Google Play Store';
  stickyComponent.appendChild(googlePlayButton);

  var appStoreButton = document.createElement('button');
  appStoreButton.textContent = 'Apple App Store';
  stickyComponent.appendChild(appStoreButton);

  // Cek apakah sudah pernah close sebelumnya
  var isClosed = localStorage.getItem('stickyClosed');

  if (isClosed === null) {
      // Jika belum pernah close, tambahkan component sticky ke body
      document.body.appendChild(stickyComponent);
  }

  // Tambahkan event listener untuk tombol close
  closeButton.addEventListener('click', function () {
      // Tandai component sudah ditutup
      localStorage.setItem('stickyClosed', 'true');

      // Hapus component dari body
      document.body.removeChild(stickyComponent);
  });

  // Redirect ke Google Play Store
  googlePlayButton.addEventListener('click', function () {
      window.location.href = 'https://play.google.com/';
  });

  // Redirect ke Apple App Store
  appStoreButton.addEventListener('click', function () {
      window.location.href = 'https://www.apple.com/id/app-store/';
  });