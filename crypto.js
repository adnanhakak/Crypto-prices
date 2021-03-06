let button = document.querySelector("#button");               //get btn to work with js
let ul = document.querySelector("#ul")                        //get ul 
let textbox = document.querySelector('#textbox')              //get textbox


const getPrice = async () => {
    let textboxValue = textbox.value;
    let resolvedPromise = await axios.get(`https://api.cryptonator.com/api/ticker/${textboxValue}-usd`)   //send req to api
    return resolvedPromise.data.ticker.price;                                                   //fxn will return price
    console.log(resolvedPromise.data.ticker.price)
}

// this is a test comment

button.addEventListener('click', createLi);


async function createLi() {
    let fetchedPrice = await getPrice();                                                             //price from server
    let newLi = document.createElement("li");                                                         //<li></li>
    newLi.append(`The price of ${textbox.value} at ${getTime()} is '${fetchedPrice}'`);                  //<li>23445</li>
    ul.append(newLi);                                                                                  //<ul><li>23345</li></ul>
    console.log(textbox.value)
    textbox.value = '';
}

function getTime() {
    return (new Date()).toLocaleTimeString()
}
