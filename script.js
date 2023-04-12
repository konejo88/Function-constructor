// контекст
// const two=document.querySelector('.two')
// let obj={
//             id: 1,
//             question: "1 What will the following code output?",
//             correctAnswer: 2,
//             peoples:{
//                 first:'Sergey',
//                 second:'Pavel'
//             },
//             andwer: function (age) {
//                 console.log('h.i');
//                 let three=`
//                 <h2>${this.id}</h2>
//                 <p> ${this.question}</p>
//                 <p>${this.peoples.second}</p>
//                 <h3>${age}</h3>
//                 `
//                    two.innerHTML=three         
//             }
        
              
//         }
//         obj.andwer(40)

// let food=document.querySelector('.food')
//   let pizza=
//   {
//     img:'1.jpg',
//     name:'Буженина с клюквенным соусом',
//     discription:'Запеченная буженина из свинины, клюквенный соус, брусника, красный лук, моцарелла, фирменный соус альфредо',
//     price:'80 рублей',
//     button:'Выбрать',
//     buy:function  () {
//         let vkus=`
//         <h2>${this.name}</h2>
//         <img src='1.jpg'>
//         <p>${this.discription}</p>
//         <h3>${this.price}</h3>
//         <button>${this.button}</button>
        
//         `
//     food.innerHTML=vkus    
   
//     }
//   }      
//    pizza.buy()

  // {
  //   img:'2.jpg',
  //   name:'Пицца из половинок',
  //   discription:'Соберите свою пиццу 35 см с двумя разными вкусами',
  //   price:'85 рублей',
  //   button:'Выбрать',
  //   buy:function  () {
  //       let vkus=`
  //       <h2>${this.name}</h2>
  //       <img src='2.jpg'>
  //       <p>${this.discription}</p>
  //       <h3>${this.price}</h3>
  //       <button>${this.button}</button>
  //       `
  //   food.innerHTML=vkus    
   
  //   }
  // } 
  //  pizza.buy()
const eda=document.querySelector('.eda')
function Test(name,img,discription,price,button) {  
  this.name=name
  this.img=img
  this.discription=discription
  this.price=price
  this.button=button
}   
Test.prototype.user=function () {
  let razmet=`
  <div class="proverka">    
  <h2>${this.name}</h2>
  <img src='${this.img}'>
  <p>${this.discription}</p>
  <h3>${this.price} рублей</h3>
  <button >${this.button}</button>
  </div>
   `
  eda.innerHTML+=razmet
}

const one = new Test('Буженина с клюквенным соусом','1.jpg','Запеченная буженина из свинины, клюквенный соус, брусника, красный лук, моцарелла, фирменный соус альфредо',80 ,'Выбрать');
one.user()
const second=new Test('Пицца из половинок','2.jpg','Соберите свою пиццу 35 см с двумя разными вкусами',85 ,'Выбрать')
second.user()
const third=new Test('Мясной Микс','3.jpg','Запеченная буженина из свинины, острая чоризо, пикантная пепперони, бекон, моцарелла, фирменный томатный соус',90,'Выбрать')
third.user()

const fourth=new Test('Сырная ','4.webp','Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',85,'Выбрать')
fourth.user()
const five=new Test('Ветчина и сыр ','5.webp','Ветчина, моцарелла, фирменный соус альфредо',75,'Выбрать')
five.user()
const six=new Test('Пепперони фреш','6.webp','Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',90,'Выбрать')
six.user()
const seven=new Test('Чоризо фреш','7.webp','Фирменный томатный соус, моцарелла, острая чоризо, сладкий перец',78,'Выбрать')
seven.user()
const eight=new Test('Додо Микс','8.webp','Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы',90,'Выбрать')
eight.user()
const nine=new Test('Цыпленок карри','9.webp','Цыпленок, ананасы, соус карри, красный лук, сладкий перец, моцарелла, фирменный томатный соус',70,'Выбрать')
nine.user()
const ten=new Test('Бургер-пицца','10.webp','Фирменный томатный соус, моцарелла, ветчина, красный лук, томаты, маринованные огурчики, соус бургер, чеснок',85,'Выбрать')
ten.user()
