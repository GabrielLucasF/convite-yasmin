const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const title = document.querySelector('.title1 h1');
const heart = document.querySelector('.content2 img');

const positions = ['-360', '388', '-299', '336', '-255', '220', '233', '266', '-315', '300']; 

buttonYes.addEventListener('click',()=>{
    content1.style.display = 'none';
    content2.style.display = 'block';
    title.textContent = 'Que bom que aceitou!😳';
    title.style.fontSize = '1.2rem';
});

function runButtonY(){  
    let randomArray = parseInt(Math.random() * positions.length);
    this.style.transform = `translateY(${positions[randomArray]}px)`;
    this.style.transition = 'ease .1s';
}

function runButtonX(){  
    let randomArray = parseInt(Math.random() * positions.length);
    this.style.transform = `translateX(${positions[randomArray]}px)`;
}

buttonNo.addEventListener('mouseover', runButtonY);
buttonNo.addEventListener('mouseout', runButtonX);

buttonNo.addEventListener('click', runButtonY);
buttonNo.addEventListener('click', runButtonX);
