export default function footer() {
  const year = new Date().getFullYear();
  const copyright = document.getElementById("copyright");

  copyright.innerHTML = `© ${year} Infinite Creator`;
}
