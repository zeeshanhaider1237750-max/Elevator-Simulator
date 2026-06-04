const btns = document.querySelectorAll('.btn');
const eleva = document.querySelector('.elev');

const changeElevator = (floorNumber) => {
   let targetPercentage = (floorNumber -1) * 10;
   eleva.style.bottom = `${targetPercentage}%`;
}
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let floor = e.target.innerText;
        changeElevator(floor);
    })
})