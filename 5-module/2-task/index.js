function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  let clickCount = 0;
  const text = document.querySelector('#text')
  button.addEventListener('click', ()=>{
    clickCount++;
    switch (clickCount){
      case 1:
        text.hidden = true;
        break;
      case 2:
        text.hidden = false;
        break;
    }
  });
}
