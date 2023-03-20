let veri = document.querySelector(".veri");
let cityInput=document.querySelector(".city");
veri.addEventListener("click",()=>{
  veri.style.outline="none";
  veri.style.background="rgb(255, 162, 0)";
  getdata(cityInput.value);
  
})
   
    function getdata(name){
      const Api="a29a155ce6e9239b32bdc23c95c3f280";
      const baseUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${Api}&units=metric&lang=tr`;
      
      fetch(baseUrl).then(res=>res.json())
           .then(data=>{
            const {name,sys:{country},main:{temp,feels_like},weather: [{description}]}=data;
            const weather=document.querySelector("#der").textContent=`${temp}`;
            const feels=document.querySelector("#feel").textContent=`${feels_like}`;
            const havadurumu=document.querySelector("#havadurumu").textContent=`${description}`;
            const ülke = document.querySelector(".ülkem").textContent=`${name},${country}`;


           })
           .catch(err =>console.warn(err))

    }
    
    cityInput.addEventListener("click",()=>{
      if(cityInput.value!==null){
        cityInput.value="";
        veri.style.background="none";
        
      }
   })

    

