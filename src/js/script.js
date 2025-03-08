// Efeito de digitação no título
const titulo = document.querySelector(".titulo");
const texto = titulo.innerText;
titulo.innerHTML = "";

let i = 0;

function escrever() {
  if (i < texto.length) {
    let char = texto.charAt(i) === " " ? "&nbsp;" : texto.charAt(i); // Mantém espaços visíveis
    titulo.innerHTML += char;
    i++;
    setTimeout(escrever, 50); // Velocidade do efeito de digitação
  }
}

escrever();

// Scroll suave para seções da página
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const idDoDestino = link.getAttribute("href").slice(1);
    const elementoDestino = document.getElementById(idDoDestino);
    if (elementoDestino) {
      elementoDestino.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Inicializa animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
