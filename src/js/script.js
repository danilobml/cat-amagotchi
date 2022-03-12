window.addEventListener('load', (event) => {
    alert("You've been given the opportunity to adopt a sweet new male cat! Name him first, then take him home and do all the actions necessary to take good care of him...");
});
const imageCat = document.querySelector('#your-cat'); 
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const nameButton = document.querySelector('.name-button');
const nameTag = document.getElementById('name-tag');
const levelTired = document.getElementById('tiredness');
const levelHungry = document.getElementById('hunger');
const levelLonely = document.getElementById('loneliness');
const levelHappy = document.getElementById('happiness');
const feedButton = document.getElementById('feed');
const sleepButton = document.getElementById('sleep');
const petButton = document.getElementById('pet');
const stayButton = document.getElementById('stay');
let newCat;
let arrButtons = [];

class Cat {
    constructor(name){
        this._name = name;
        this._tiredness = Math.floor(Math.random()*10);
        this._hunger = Math.floor(Math.random()*10);
        this._loneliness = Math.floor(Math.random()*10);
        this._happiness = Math.floor(Math.random()*10);
    }
    get name() {
        return this._name;
    }
    get tiredness() {
        return this._tiredness;
    }
    get hunger() {
        return this._hunger;
    }
    get loneliness() {
        return this._loneliness;
    }
    get happiness() {
        return this._happiness;
    }
    set tiredness(value) {
        this._tiredness = value;
    }
    set hunger(value) {
        this._hunger = value;
    }
    set loneliness(value) {
        this._loneliness = value;
    }
    set happiness(value) {
        this._happiness = value;
    }
    feed() {
        const random = Math.floor(Math.random()*10);
        if(this._hunger - random <= 0){
            imageCat.src="/src/images/cat-toomuch.jpg";
            alert(`${this._name} had enough to eat. Leave him alone!`)
            this._hunger = 0;
            const resetLevel = () => {
                this._hunger = Math.floor(Math.random()*10);
                showLevels();
            };
            setTimeout(resetLevel, 15000);
        } else if (this._hunger - random <= 5) {
            imageCat.src="/src/images/cat-happy.jpg";
            alert(`You just fed ${this._name}. It was enough, so he'll love you (until he's hungry again...)`);
            this._hunger -= random;
        } else {
            this._hunger -= random;
            imageCat.src="/src/images/cat-mad.jpg"
            alert(`You just fed ${this._name}. It wasn't enough, so he'll steal all your snacks!`);
        }
    }
    sleep() {
        const random = Math.floor(Math.random()*10);
        if(this._tiredness - random <= 0){
            imageCat.src="/src/images/cat-slept.jpg";
            alert(`${this._name} slept too much. Leave him alone!`)
            this._tiredness = 0;
            const resetLevel = () => {
                this._tiredness = Math.floor(Math.random()*10);
                showLevels();
            };
            setTimeout(resetLevel, 15000);
        } else if (this._tiredness - random >= 5) {
            imageCat.src="/src/images/cat-bored.jpg"
            alert(`${this._name} slept very little (for his taste), so he'll be grumpy, and probably scratch your sofa into oblivion!`);
            this._tiredness -= random;
        } else {
            imageCat.src="/src/images/cat-happy.jpg";
            this._tiredness -= random;
            alert(`${this._name} slept long hours, so he'll be sweet and purry.`);
        }
    }
    pet() {
        const random = Math.floor(Math.random()*10);
        if(this._happiness + random >= 10){
            imageCat.src="/src/images/cat-fully.jpg";
            alert(`${this._name} is fully happy. Leave him alone!`);
            this._happiness = 10;
            const resetLevel = () => {
                this._happiness = Math.floor(Math.random()*10);
                showLevels();
            };
            setTimeout(resetLevel, 15000);
        } else if (this._happiness + random >= 5) {
            imageCat.src="/src/images/cat-mad.jpg"
            alert(`You pet ${this._name}, he didn't want to be touched. Now, he looks at you and thinks: get off my case!`);
            this._happiness += random;
        } else {
            imageCat.src="/src/images/cat-happy.jpg";
            this._happiness += random;
            alert(`You pet ${this._name}, he feels loved. Now, he looks at you and thinks: you are still ok, human!`);
        }
    }
    stayHome() {
        const random = Math.floor(Math.random()*10);
        if(this._loneliness - random <= 0){
            imageCat.src="/src/images/cat-abandoned.jpg";
            alert(`${this._name} is good on his own. Leave him alone!`)
            this._loneliness = 0;
            const resetLevel = () => {
                this._loneliness = Math.floor(Math.random()*10);
                showLevels();
            };
            setTimeout(resetLevel, 15000);
        } else if (this._loneliness - random >= 5) {
            imageCat.src="/src/images/cat-bored.jpg";
            alert(`${this._name} is sick and tired of seeing your face. Give him some space, or get scratched!`);
            this._loneliness -= random;
        } else {
            imageCat.src="/src/images/cat-cuddly.jpeg";
            this._loneliness -= random;
            alert(`${this._name} felt abandoned, and now lovingly sits on your lap.`);
        }
    }
}

const showLevels = () => {
    levelTired.innerHTML = `Level of tiredness: ${newCat.tiredness}`;
    levelHungry.innerHTML = `Level of hunger: ${newCat.hunger}`;
    levelLonely.innerHTML = `Level of loneliness: ${newCat.loneliness}`;;
    levelHappy.innerHTML = `Level of happiness: ${newCat.happiness}`;;
}

const create = (event) => {
    if (nameInput.value) {
        event.preventDefault();
        newCat = new Cat(nameInput.value);
        showLevels();  
        nameTag.textContent=`Here's ${newCat.name}:`
        document.querySelector('#your-cat').style.display = "flex";
    } else {
        alert('Please insert a name to create your cat.')
    }
}

const clickFeed = () => {
    newCat.feed();
    showLevels();
}
const clickSleep = () => {
    newCat.sleep();
    showLevels();
}
const clickPet = () => {
    newCat.pet();
    showLevels();
}
const clickStay = () => {
    newCat.stayHome();
    showLevels();
}

feedButton.addEventListener('click', clickFeed);
sleepButton.addEventListener('click', clickSleep);
petButton.addEventListener('click', clickPet);
stayButton.addEventListener('click', clickStay);    

nameButton.addEventListener('click', create);

const resetLevels = () => {
    newCat.tiredness = 5 + (Math.floor(Math.random()*5));
    newCat.hunger = 5 + (Math.floor(Math.random()*5));
    newCat.loneliness = 5 + (Math.floor(Math.random()*5));
    newCat.happiness = 5 - (Math.floor(Math.random()*5));
    showLevels();
}

setInterval(resetLevels, 120000);