const inputs = document.querySelectorAll('.btn');
const btnSend = document.getElementById('send');
const content = document.getElementById('content');

inputs.forEach(btn => {
  btn.addEventListener('click', activeFun)
});

btnSend.addEventListener('click', (e) => {
  e.preventDefault();
  content.classList.add('.animation')
  setTimeout(() => {
    renderHTMl(value);
  }, 800);
});

let value;

function activeFun(event) {
  inputs.forEach(val => {
    val.classList.remove('btn-active')
    if (event.target.value == val.value) {
      val.classList.add('btn-active');
      value = val.value;
    }
  })
}

function renderHTMl(val) {
  htmlCode = `
  <div class="center">
    <img src="images/illustration-thank-you.svg" alt="illustration-thank-you" class="thank-img">
    <p class="select"> You selected ${val} out of 5</p>
    <h3>Thank you!</h3>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>
  </div>
  `;
  content.innerHTML = htmlCode;
}
