document.querySelectorAll('.nav-dynamic-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); 
      const targetURL = this.getAttribute('data-link');
      if (targetURL) {
        window.open(targetURL, '_blank'); 
      }
    });
  });
  
  document.getElementById('submit').onclick = function () {
      let score = 0;
      let q1 = document.querySelector('input[name="q1"]:checked');
      let q2 = document.querySelector('input[name="q2"]:checked');
  
      if (q1 && q1.value === 'b') score++;
      if (q2 && q2.value === 'a') score++;
  
      document.getElementById('result').innerText = `Aapka Score: ${score} / 2`;
    };
  
    document.getElementById('commentSubmit').onclick = function () {
      const comment = document.getElementById('commentBox').value.trim();
      if (comment) {
        document.getElementById('userComment').innerText = `Aapka Comment: "${comment}"`;
        document.getElementById('commentBox').value = "";
      } else {
        document.getElementById('userComment').innerText = "Kripya comment box khali na chhodiye.";
      }
    };
  
  