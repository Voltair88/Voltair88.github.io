const Footer = `
        <a href="www.github.com/voltair88"><p>Made by Mattias Gulec</p></a>
    `;

window.addEventListener("DOMContentLoaded", () => {
  let foot = document.querySelector('footer[role="footer"]');
  foot.innerHTML = Footer;
});
