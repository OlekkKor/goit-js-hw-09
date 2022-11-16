import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const btnStart = document.querySelector('button[data-start]');
const form = document.querySelector('input#datetime-picker');
const val = document.querySelectorAll('span.value');

btnStart.disabled = true; 

let choosenDate;

flatpickr(form, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    choosenDate = selectedDates[0];

    const today = new Date ();
    const different = selectedDates[0] - today; 

    if (different < 0) { 
    Notiflix.Notify.failure(`Please choose a date in the future`);
    }
      else {
      btnStart.disabled = false; 
      Notiflix.Notify.success(`Great, let's calculate this`);
      }
  },
});


btnStart.addEventListener('click', startCalculate); 

function startCalculate(e){
  
  const timeInterval = setInterval(() => {
      
  const today = new Date;
  const different = choosenDate - today; 

  const date = convertMs(different);

  if (different < 0){
    return 0;
  }

  console.log();
  Object.entries(date).forEach(([ name, value ], i) => {
    // let num = value.toString().padStart(2, "0");;
    val[i].textContent = addLeadingZero(value);
  });
}, 1000);

}




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



function addLeadingZero(n){
  return n.toString().padStart(2, '0');
}