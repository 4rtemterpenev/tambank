const faqItems = document.querySelectorAll('.questions-block__item')

if(faqItems.length>0)
  faqItems.forEach((item)=> {
    const faqHead = item.querySelector('.questions-block__head')
    const faqArrow = item.querySelector('.questions-block__arrow')
    faqHead.addEventListener('click', () => {
      item.classList.toggle('opened')
      faqArrow.classList.toggle('rotate')
    })
  });


const modalHowUse = document.querySelector('.modal')
const btnHowUse = document.querySelector('.hero-block__about')
const btnCloseModalHowUse = document.querySelector('.modal-block__exit')

if(btnHowUse){
  btnHowUse.addEventListener('click', () => {
    modalHowUse.classList.add('active')
    document.body.style.overflow = "hidden"
  })
}

if(btnCloseModalHowUse){
  btnCloseModalHowUse.addEventListener('click', () => {
    modalHowUse.classList.remove('active')
    document.body.style.overflow = "visible"
  })
}

document.addEventListener('keydown', (e) => {
  if(e.key === "Escape" ){
    modalHowUse.classList.remove('active')
    modalOrder.classList.remove('active')
    document.body.style.overflow = "visible"
  }
})


const btnOrder = document.querySelector('.hero-block__order')
const modalOrder = document.querySelector('.reviewmodal')
const btnCloseModalOrder = document.querySelector('.reviewmodal-block__head')
const btnOrderService = document.querySelector('.service')
const order = document.querySelector('.order')
const send = document.querySelector('.send')


if(send){
  send.addEventListener('click', () =>{
    modalOrder.classList.add('active')
    document.body.style.overflow = "hidden"
  })
}


if(order){
  order.addEventListener('click', () =>{
    modalOrder.classList.add('active')
    document.body.style.overflow = "hidden"
  })
}


if(btnOrderService){
  btnOrderService.addEventListener('click', () =>{
    modalOrder.classList.add('active')
    document.body.style.overflow = "hidden"
  })
}

if(btnOrder){
  btnOrder.addEventListener('click', () => {
    modalOrder.classList.add('active')
    document.body.style.overflow = "hidden"
  })
}

if(btnCloseModalOrder){
  btnCloseModalOrder.addEventListener('click', () => {
    modalOrder.classList.remove('active')
    document.body.style.overflow = "visible"
  })
}


function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, '');
  }
  else {
    elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
  }

  return elem;
}

function toggleMenuDisplay(e) {
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector('.menuitems');
  const icon = dropdown.querySelector('.fa-angle-right');

  toggleClass(menu, 'hide');
  toggleClass(icon, 'rotate-90');
}

function handleOptionSelected(e) {
  toggleClass(e.target.parentNode, 'hide');

  const id = e.target.id;
  const newValue = e.target.textContent + ' ';
  const titleElem = document.querySelector('.dropdown .titleitems');
  const icon = document.querySelector('.dropdown .titleitems .fa');


  titleElem.textContent = newValue;
  titleElem.appendChild(icon);

  document.querySelector('.dropdown .titleitems').dispatchEvent(new Event('change'));
  setTimeout(() => toggleClass(icon, 'rotate-90', 0));
}


const dropdownTitle = document.querySelector('.dropdown .titleitems');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

if (dropdownTitle)
  dropdownTitle.addEventListener('click', toggleMenuDisplay);

dropdownOptions.forEach(option => option.addEventListener('click', handleOptionSelected));