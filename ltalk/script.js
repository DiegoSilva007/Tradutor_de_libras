// Arquivo de apoio da página principal.
// Mantenha ou substitua pela sua versão original, se ela já existir.

function updateCharCount() {
  const input = document.getElementById("input-text") || document.getElementById("texto");
  const count = document.getElementById("char-count") || document.getElementById("contagem-letras");

  if (input && count) {
    count.innerText = input.value.length;
  }
}

function clearAll() {
  const input = document.getElementById("input-text") || document.getElementById("texto");
  const gloss = document.getElementById("gloss-output");
  const translated = document.getElementById("translated-text");

  if (input) input.value = "";
  if (gloss) gloss.innerText = "";
  if (translated) translated.classList.remove("visible");

  updateCharCount();
}

let recognition = null;
let recording = false;

function toggleMic() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const input = document.getElementById("input-text") || document.getElementById("texto");
  const btn = document.getElementById("btn-mic");

  if (!SpeechRecognition) {
    alert("Reconhecimento de voz não suportado neste navegador.");
    return;
  }

  if (!recognition) {
    recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      if (input) {
        input.value = event.results[0][0].transcript;
        updateCharCount();
      }
    };

    recognition.onend = () => {
      recording = false;
      if (btn) btn.classList.remove("recording");
    };
  }

  if (!recording) {
    recording = true;
    if (btn) btn.classList.add("recording");
    recognition.start();
  } else {
    recognition.stop();
  }
}
