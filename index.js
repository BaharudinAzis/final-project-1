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
