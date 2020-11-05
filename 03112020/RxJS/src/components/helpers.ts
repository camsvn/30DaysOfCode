export enum fontSize {
    h2 = '24px',
    h3 = '20px'
}

//Helper Functions
//Helper Function to add values to DOM
export function addItem(val:any,id:number,desc:string='',h2:(boolean|fontSize)=false){
    var liNode = document.createElement('li');
    var ul = document.getElementById(`output${id}`);
    
    // liNode.innerText = `${val} ${desc!=='' ? `(${desc})` : ''}`;
    liNode.innerHTML = `${val} ${desc!=='' ? `(<b>${desc}</b>)` : ''}`;
    if (h2 !== null && h2 && typeof h2 !== 'boolean'){
         liNode.style.fontSize = h2;
        liNode.style.fontWeight = "bold";
    }
    if (val !== '' && h2 === false) {
        liNode.style.padding = '10px';
        liNode.style.paddingLeft = '40px';
    }
    ul !== null && ul.appendChild(liNode);
}

//Helper function to pause execution / program flow
// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate :(null | number) = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//eof Helper function