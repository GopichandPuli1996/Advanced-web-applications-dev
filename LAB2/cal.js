//refered mathametical functions from https://www.youtube.com/watch?v=QS6Y0ezhyCs
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));
console.log("display");
buttons.map(btn =>{
    btn.addEventListener( 'click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                display.innerText=display.innerText.slice(0,-1);
                break;
            case '=':
                try{
                    display.innerText=eval(display.innerText);
                }catch{
                    display.innerText="Systex error";
                }
                break;
                //refered trignometric functions from https://www.youtube.com/watch?v=LgryqYxSCNk
                case 'sin':
                    display.innerText=Math.sin(display.innerText);
                    break;
                case 'cos':
                    display.innerText=Math.cos(display.innerText);
                    break;
                case 'tan':
                    display.innerText=Math.tan(display.innerText);
                    break;
                case 'x²':
                    display.innerText=Math.pow(display.innerText,2);
                    break;
                case '√':
                    display.innerText=Math.sqrt(display.innerText);
                    break;    
            default:
                display.innerText = display.innerText+e.target.innerText;
        }

    }

    )
});