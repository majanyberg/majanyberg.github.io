function scrollToTarget(id) {
  const targetElement = document.querySelector(id);
  if (!targetElement) return;

  const headerOffset = document.querySelector('.header').offsetHeight;
  const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;

  if (window.location.pathname !== '/index.html') {
    // Om vi inte är på index.html, navigera till index.html och scrolla sedan till elementet
    window.location.href = 'index.html';
     window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    // Om vi redan är på index.html, scrolla direkt till elementet
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

