function bahubali(){
    let runButton = document.querySelectorAll('button, .space-x-4>:not([hidden])~:not([hidden])')[26];
    console.log(runButton);
    runButton.addEventListener('click', () => {
        alert("Once your code is accepted, bahubali track will play 😂");
        setTimeout(
            function() 
            {
              //do something special
              let isAccepted = document.getElementsByClassName('text-green-s')[0];
              console.log(isAccepted);
              if (isAccepted){
                  alert('Congratulations Bahubali');
                  let url = chrome.runtime.getURL('bahubali.mp3');
                  console.log(url)
              
                  let a = new Audio(url)
                  a.play();
              }
            }, 8000);
    });
}

window.addEventListener('load', ()=>{
    setTimeout(
        function() 
        {
            //do something special
            bahubali();
        }, 1000);
});
