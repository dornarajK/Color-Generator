const getColor = () =>{
    //hax code
    const randomNuber =Math.floor(Math.random() * 16777215);
    const randomCode= "#"+randomNuber.toString(16);
    console.log(randomNuber, randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color-code").innerText=randomCode  
    
    navigator.clipboard.writeText(randomCode)
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor)
 

//init call
getColor();
