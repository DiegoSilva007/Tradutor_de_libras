function translate() {
  const text_area = document.getElementById("input-text").value.trim();
  const text = document.getElementById("vlibras-target");
  text.textContent = text_area;
}
