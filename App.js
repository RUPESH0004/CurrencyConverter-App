const BASE_URL =
  " https://api.currencyapi.com/v3/currencies?apikey=cur_live_TmS91XnhtwJWphBtKHM8VRE26WzTUZgJtShH5C6I&currencies=ALL ";
  const drop = document.querySelectorAll(".drop select");
  const btn = document.querySelector(".btn");
 const fromCurr = document.querySelector(".from select");
 const toCurr = document.querySelector(".to select");
 for (let select of drop)
 { 
    for ( currcode in countryList)
    {
      let newOption = document.createElement("option")
        newOption.innerText= currcode;
        newOption.value=currcode;
        if(select.name==="from" && currcode==="INR")
        {
            newOption.selected="selected";
        }
        else if(select.name==="to" && currcode==="USD")
        {
            newOption.selected="selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt) =>
    {
        updatFlag(evt.target);
    }
    )
 }
 const updatFlag  = (element) =>
 {
    let currcode = element.value;
    let countryCode= countryList[currcode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img")
    img.src = newsrc;
 };
 btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if (amtval=== "" || amtval<1)
    {
        amtval= 1;
        amount.value= "1";
    }
    
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    console.log(response);
 });
