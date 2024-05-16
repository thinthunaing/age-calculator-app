document.addEventListener("DOMContentLoaded", () => {


//select the nodes

const inputDay = document.querySelector('#input-day');
const inputMonth = document.querySelector('.input-month');
const inputYear = document.querySelector('.input-year');
const btnEl = document.querySelector('.user-input-btn');

const dayEl = document.querySelector('.output-days');
const monthEl = document.querySelector('.output-months');
const yearEl = document.querySelector('.output-year');


//input day Event 
inputDay.addEventListener('input',function(){
    if(inputDay.nextElementSibling.textContent == 'Must be a valid date'){
        inputDay.parentElement.classList.remove('error');
        inputMonth.parentElement.classList.remove('error');
        inputYear.parentElement.classList.remove('error');
    }
    if(inputDay.value > 31){
        inputDay.nextElementSibling.textContent = 'must be a valid day';
        inputDay.parentElement.classList.add('error')
    }
    else{
        inputDay.parentElement.classList.remove('error')
    }
})


//input month event handler
inputMonth.addEventListener('input',function(){
    if(inputDay.nextElementSibling.textContent == 'Must be a valid date'){
        inputDay.parentElement.classList.remove('error');
        inputMonth.parentElement.classList.remove('error');
        inputYear.parentElement.classList.remove('error');
    }
    if(inputMonth.value > 12){
        inputMonth.nextElementSibling.textContent = 'must be a valid day';
        inputMonth.parentElement.classList.add('error')
    }
    else{
        inputMonth.parentElement.classList.remove('error')
    }
})

//input year event handler
inputYear.addEventListener('input',function(){
    if(inputDay.nextElementSibling.textContent == 'Must be a valid date'){
        inputDay.parentElement.classList.remove('error');
        inputMonth.parentElement.classList.remove('error');
        inputYear.parentElement.classList.remove('error');
    }
    if(inputYear.value < 0){
        inputYear.nextElementSibling.textContent = 'must be a valid day';
        inputYear.parentElement.classList.add('error')
    }
    else{
        inputYear.parentElement.classList.remove('error')
    }
})


btnEl.addEventListener('click', function(){

    //get value from the field
    const day=inputDay.value;
    const month=inputMonth.value;
    const year=inputYear.value;

    //check input fild is empty
    if(!day){
        inputDay.parentElement.classList.add('error')
        inputDay.nextElementSibling.textContent='This field is required'
    }
    if(!month){
        inputMonth.parentElement.classList.add('error')
        inputMonth.nextElementSibling.textContent='This field is required'
    }
    if(!year){
        inputYear.parentElement.classList.add('error')
        inputYear.nextElementSibling.textContent='This field is required'
    }

    //one of the fields is empty, return it
    if (!day || !month || !year) {
        return;
      }

    let date = new Date(year,month-1,day);
    let currentDate = new Date();
    let currentYear =currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    let outputDay;
    let outputMonth;
    let outputYear;

    //check it if it is valid date or not
    if(((date.getFullYear() == year && date.getMonth() == month-1 && date.getDate() == day) || (document.getElementsByClassName('error').length)) == false){
        inputDay.parentElement.classList.add("error");
        inputDay.nextElementSibling.textContent = "Must be a valid date"
        inputMonth.parentElement.classList.add("error");
        inputMonth.nextElementSibling.textContent = ""
        inputYear.parentElement.classList.add("error");
        inputYear.nextElementSibling.textContent = "";
        return;
    }


    //calculating the age
    if(day > currentDay){
        outputDay = (currentDay +  daysInMonth(currentYear,currentMonth)) - day;
        currentMonth = currentMonth - 1;
    }else{
        outputDay = currentDay - day;
    }

    if(date.getMonth() > currentMonth){
        outputMonth = (currentMonth + 12) - date.getMonth();
        currentYear = currentYear - 1;
    }else{
        outputMonth = currentMonth - date.getMonth();
    }


    outputYear = currentYear - year;


    //insert the answer to the specific nodes
    yearEl.textContent = outputYear;
    monthEl.textContent = outputMonth;
    dayEl.textContent = outputDay;
   
    

})

})

//get the total days in certain month
const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
