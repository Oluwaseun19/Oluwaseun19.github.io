//  var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 2,
//     "friends": ["everthing"]
//  };

//  ourDog.name = "Happy Camper";
//  console.log(ourDog);


const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
         entry.target.classList.add('show');
      } else {
         entry.target.classList.remove('show');
      }
   })
})

const hiddenElemnet = document.querySelectorAll('.hidden');
hiddenElemnet.forEach((el) => observer.observe(el));

const secondObserver = new IntersectionObserver((entries)=> {
   entries.forEach((entry)=> {
      console.log(entry);
      if(entry.isIntersecting) {
         entry.target.classList.add('show');
      } else {
         entry.target.classList.remove('show');
      }
   })
})

const secondHiddenEl = document.querySelectorAll('.hiddentwo');
secondHiddenEl.forEach((el)=> secondObserver.observe(el));

const thirdObserver = new IntersectionObserver((entries)=> {
   entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
         entry.target.classList.add('showtwo');
      } else {
         entry.target.classList.remove('showtwo');
      }
   })
})

const thirdHiddenEl = document.querySelectorAll('.hiddenthree');
thirdHiddenEl.forEach((el)=> thirdObserver.observe(el));



const openBtn1 = document.querySelector('.open-modal1');
const closeBtn1 = document.querySelector('.close-modal1');
const modal1 = document.querySelector('.modal1');
openBtn1.addEventListener('click', () => {
   modal1.showModal();
})
closeBtn1.addEventListener('click', () => {
   modal1.close();
})

const openBtn2 = document.querySelector('.open-modal2');
const closeBtn2 = document.querySelector('.close-modal2');
const modal2 = document.querySelector('.modal2');
openBtn2.addEventListener('click', () => {
   modal2.showModal();
})
closeBtn2.addEventListener('click', () => {
   modal2.close();
})

const openBtn3 = document.querySelector('.open-modal3');
const closeBtn3 = document.querySelector('.close-modal3');
const modal3 = document.querySelector('.modal3');
openBtn3.addEventListener('click', () => {
   modal3.showModal();
})
closeBtn3.addEventListener('click', () => {
   modal3.close();
})