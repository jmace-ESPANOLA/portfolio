function showSection(id) {
      document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active");
      });
      document.getElementById(id).classList.add("active");
    }

    // Dark Mode Toggle
    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }

    // Image Upload Preview
    const fileInput = document.getElementById("fileInput");
    const gallery = document.getElementById("gallery");

    fileInput.addEventListener("change", () => {
      gallery.innerHTML = "";
      Array.from(fileInput.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = e => {
          const img = document.createElement("img");
          img.src = e.target.result;
          gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
      });
    });
