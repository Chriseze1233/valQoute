
const navBar = document.querySelector(".navBar");
const nav = document.querySelector(".nav");
const items = document.querySelectorAll(".countCard h3");

navBar.addEventListener("click", () => {
    nav.classList.toggle("active");
    navBar.classList.toggle("active")
})


window.addEventListener("click", (e) => {
    let navChild = document.querySelector('#navChild');
    if(e.target !== navBar && e.target !== nav && e.target !== navChild) {
        nav.classList.remove('active');
        console.log(navChild);
    }
    else{
        nav.classList.add('active');
    }
    
})

const dDate = new Date(2023, 1, 14, 0, 0, 0);
const currentDate = dDate.getTime();
 console.log(currentDate)
 
function valDate() {
    const today = new Date().getTime();
    const rTime = dDate - today;
    const day = 1000*24*60*60;
    const hour = 1000*60*60;
    const min = 60*1000;
    
    
    let days = Math.floor(rTime/day);
    let hours = Math.floor((rTime % day) / hour);
    let mins = Math.floor((rTime % hour) / min);
    let secs = Math.floor((rTime % min) / 1000);
    const values = [days, hours, mins, secs];
    function format(item) {
        if(item < 10) {
            return item =`0${item}`
        }
        return item
    }
    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    })
}
let countDown = setInterval(valDate, 1000);

valDate()


