document.addEventListener('DOMContentLoaded', function(){
    const eventBar = document.querySelector('.event-bar');
    const prevBtn = document.querySelector('#prevBtn');
    const nxtBtn = document.querySelector('#nxtBtn');
    let scrollPosition = 0;
  
    prevBtn.addEventListener('click', () => {
      scrollPosition -= 100;
      eventBar.scrollTo({ left: `${scrollPosition}vw`, behavior: 'smooth' });
    });
  
    nxtBtn.addEventListener('click', () => {
      scrollPosition += 100;
      eventBar.scrollTo({ left: `${scrollPosition}vw`, behavior: 'smooth' });
    });
  });
  