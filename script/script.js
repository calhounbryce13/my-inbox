'use strict';


document.addEventListener('DOMContentLoaded', async() => {
    try{
        const response = await fetch('https://calhounbryce13-backend.onrender.com/messages', {method: "GET"});
        if(response.status == 200){
            let data = await response.json();
            console.log(data);
            data = Array.from(data);
            console.log(data);

            data.forEach((mssg) => {
                const message = document.createElement('div');
                message.classList.add('message');
                message.textContent = mssg;
                document.getElementById('data').appendChild(message);
            })
        }
    }catch(error){
        console.log(error);
    }
})