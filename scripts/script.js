document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("message");
    const warning = document.getElementById("word-warning");
    const countDisplay = document.getElementById("word-count");
    const maxWords = 100;
  
    textarea.addEventListener("keydown", (e) => {
      let words = textarea.value.trim().split(/\s+/).filter(word => word.length > 0);
 
      const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft", "ArrowRight",
        "ArrowUp", "ArrowDown", "Tab", "Control", "Meta", "Shift"
      ];
  
      if (words.length >= maxWords && !allowedKeys.includes(e.key)) {
        e.preventDefault();
        warning.style.display = "block";
      }
    });
  
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
  
      let words = textarea.value.trim().split(/\s+/).filter(word => word.length > 0);
      let wordCount = words.length;
  
      countDisplay.textContent = `Words: ${wordCount} / ${maxWords}`;

      if (wordCount < maxWords) {
        warning.style.display = "none";
      }
    });
  });

  function showGallery(id, clickedBtn) {
  
    const galleries = document.querySelectorAll('.photo-gallery');
    galleries.forEach(gallery => gallery.style.display = 'none');
  
    const selectedGallery = document.getElementById(id);
    if (selectedGallery) {
      selectedGallery.style.display = 'flex';
    }
  
    const buttons = document.querySelectorAll('.category-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
  
    clickedBtn.classList.add('active');
  }
  
  
  