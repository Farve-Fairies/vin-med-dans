// src/scripts/scaleLogo.js
export default function scaleLogoOnScroll() {
  const logo = document.querySelector(".logo");
  const header = document.querySelector(".site-header");

  if (!logo || !header) return;

  const onScroll = () => {
    const scrollY = window.scrollY;
    const scale = Math.max(0.4, 1 - scrollY / 1000);
    const translateY = Math.min(scrollY / 2, 150);
    logo.style.transform = `scale(${scale}) translateY(-${translateY}px)`;
  };

  window.addEventListener("scroll", onScroll);
}
