document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      document.getElementById('personagem').classList.add('pulando');
    }
  });