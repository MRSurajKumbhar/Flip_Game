
const cards = document.querySelectorAll(".card");

cards.forEach( (card)=> {
	card.addEventListener("click",flip);
});


var isFlipped = false;
var firstCard;
var secondcard;

function flip(){
	this.classList.add("flip");

	if(!isFlipped){
		isFlipped = true;
		firstCard = this;
	}
	else{
		secondcard = this;
		checkIT()
	}
}

function checkIT()
{
	if(firstCard.dataset.image === secondcard.dataset.image)
	{
		success();
	}
	else{
		fail();
	}
}


function success(){
	firstCard.removeEventListener("click",flip);
	secondcard.removeEventListener("click",flip);
	reset();
}

function fail(){

	setTimeout(()=>{
		firstCard.classList.remove("flip");
	secondcard.classList.remove("flip");
	reset();
	},800);

	
}

function reset(){

isFlipped=false;
firstCard=null;
secondcard=null;

}

(function shuffle(){

cards.forEach( (card)=> {
	var index = Math.floor(Math.random() * 16);
	card.style.order = index;
});
})();