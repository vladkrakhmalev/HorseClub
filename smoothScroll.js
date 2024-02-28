function animateBlocks() {
  const blocks = document.querySelectorAll('section');
  blocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (blockTop < windowHeight * 0.8) {
      block.classList.add('_animated')
    }
  });
}

window.addEventListener('scroll', animateBlocks);

animateBlocks()