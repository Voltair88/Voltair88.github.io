const nav = `
<a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="contact.html">Contact</a>
`;

window.addEventListener("DOMContentLoaded", () => {
  let barnav = document.querySelector('nav[role="navigation"]');
  barnav.innerHTML = nav;
});
