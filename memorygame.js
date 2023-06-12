//we have to create a board
//creating array with objects inside!

const cardArray=[
    {
      name:"fries",
      img:'images/fries.png' 
    },

    {
        name:"pizza",
        img:'images/pizza.png' 
      },

      {
        name:"cheeseburger",
        img:'images/cheeseburger.png' 
      },

      {
        name:"hotdog",
        img:'images/hotdog.png' 
      },

      {
        name:"ice-cream",
        img:'images/ice-cream.png' 
      },

      {
        name:"milkshake",
        img:'images/milkshake.png' 
      },

      //copypasting as we have 12 cards

      {
        name:"fries",
        img:'images/fries.png' 
      },
  
      {
          name:"pizza",
          img:'images/pizza.png' 
        },
  
        {
          name:"cheeseburger",
          img:'images/cheeseburger.png' 
        },
  
        {
          name:"hotdog",
          img:'images/hotdog.png' 
        },
  
        {
          name:"ice-cream",
          img:'images/ice-cream.png' 
        },
  
        {
          name:"milkshake",
          img:'images/milkshake.png' 
        }
    
]

// to randomly sort out the array

cardArray.sort(()=>0.5-Math.random());
// console.log(cardArray);


let grid=document.querySelector('#grid');
let resultDisplay=document.querySelector('#Score');
let clicks=document.querySelector('#click')
let cardsChosenName=[];
let cardsChosenId=[];
let cardsWon=[];

// console.log(gridDisplay);

// creating the board now
function createBoard(){
for(let i=0;i<cardArray.length;i++){
    const card=document.createElement('img');
    card.setAttribute('src','images/blank.png'); //setting default as blank card
    card.setAttribute('data-id',i);
    card.addEventListener('click',flipCard)
    grid.appendChild(card);
}
}


function checkMatch(){
    // cardsChosenName=[];
    // cardsChosenId=[];
    const cards=document.querySelectorAll('img')
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];
    if(optionOneId==optionTwoId)

    {   cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert("You pressed the same card");
    }


    else if(cardsChosenName[0]===cardsChosenName[1])
    {
        alert("Congrats! Match Found");
       
        //replacing chosen cards with white image
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosenName);
    }
    
    else
    { cards[optionOneId].setAttribute('src','images/blank.png');
      cards[optionTwoId].setAttribute('src','images/blank.png');
      alert("Sorry, Retry!!");
    }
    resultDisplay.textContent=cardsWon.length;
    cardsChosenName=[];
    cardsChosenId=[];

    if(cardsWon.length===cardArray.length/2)
    {resultDisplay.innerHTML='Congrats you found them all!!'}

}






//function to flip a card
function flipCard(){
    let cardId=this.getAttribute('data-id');
    //saving Ids of chosen card
    

    cardsChosenName.push(cardArray[cardId].name) //temproraily save chosen name in this array
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img)

    //now if 2 clicks are made then check for match must be made
    if(cardsChosenName.length==2){
        //for a delay use 
        setTimeout(checkMatch,100);
    }


}

createBoard();