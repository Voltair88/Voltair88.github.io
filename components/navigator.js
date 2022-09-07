const nav = `
<ul>
<li><a href="contact.html">Contact</a></li>
<li><a href="about.html">About</a></li>
<li><a href="index.html">Home</a></li>
</ul>
`;

window.addEventListener("DOMContentLoaded", () => {
  let barnav = document.querySelector('nav[role="navigation"]');
  barnav.innerHTML = nav;
});
