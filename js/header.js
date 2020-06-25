window.onload = () => {
  // Fancy header transition when hovering on icons
  document.getElementById('social').addEventListener("mouseover", () => {
    document.getElementById('header').style.backgroundColor = 'rgba(0, 20, 0, 0.6)';
  });
  
  document.getElementById('social').addEventListener("mouseout", () => {
    document.getElementById('header').style.backgroundColor = 'rgba(0, 30, 0, 0.4)';
  });
};