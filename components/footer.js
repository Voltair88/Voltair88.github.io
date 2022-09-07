const Footer = `
        <a href="www.github.com/voltair88"><p>made by Mattias Gulec</p></a>
    `;

window.addEventListener("DOMContentLoaded", () => {
  let foot = document.querySelector('footer[role="footer"]');
  foot.innerHTML = Footer;
});
