'use strict';


document.addEventListener('DOMContentLoaded', async() => {
    try{
        const response = await fetch('', {method: "GET"});
        if(response.status == 200){
            let data = await response.json();
            data = Array.from(data);
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