const countdown = document.querySelector('.countdown');

//Set Launch Date (ms)
const launcDate = new Date('Jan 1, 2019 13:00:00').getTime();

//update every second
const intvl = setInterval(() =>{
  //get today date and time (ms)
  const now = new Date().getTime();

  //Distance from now to the launch date
  const distance = launcDate - now;

  // Time Calculations
  const days  = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds  = Math.floor((distance % (1000 * 60)) / 1000);

  //display result
  countdown.innerHTML = `
    <div>${days}<span>Hari</span></div>
    <div>${hours}<span>Jam</span></div>
    <div>${mins}<span>Menit</span></div>
    <div>${seconds}<span>Detik</span></div>
  `;

  //if launch date passed
  if(distance < 0){
    //Stop countdown
    clearIterval(intvl);
    //style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }

},1000);
