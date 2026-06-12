// Tradução simplificada para teste de interface.
// Substitua pela sua lógica original, se ela já existir.

function translate() {
  const input = document.getElementById("input-text") || document.getElementById("texto");
  const gloss = document.getElementById("gloss-output");
  const translated = document.getElementById("translated-text");
  const statusText = document.getElementById("status-text") || document.getElementById("status-texto");
  const emptyState = document.getElementById("empty-state");

  const texto = input ? input.value.trim() : "";

  if (!texto) {
    alert("Digite uma frase antes de traduzir.");
    return;
  }

  const glosa = texto
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map(palavra => palavra.toUpperCase())
    .join(" ");

  if (gloss) gloss.innerText = glosa;
  if (translated) translated.classList.add("visible");
  if (statusText) statusText.innerText = "Tradução gerada para demonstração";
  if (emptyState) emptyState.style.display = "none";
}
