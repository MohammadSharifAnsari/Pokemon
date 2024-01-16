//cb->callback
//2000 milisecons delay lega first cb execute karega and agar 2sec ke andar dusri callback aa gyi then delay timer phir 0 se set kar denge 
//jahan par bhi cb direct use karte the ab use usedebounce me wrap karke de dena
function useDebounce(cb,delay=2000){

    let timerId
    //...arguments jitni bhi argument pass karoge function me sab le lega in form of array ... work as a rest operator
    return (...args)=>{

        console.log(args);
        clearTimeout(timerId);//isse timeout work karna band kar deta hai then it clear the previous timer id
        timerId=setTimeout(()=>{
            // clearInterval(timerId)
            // yahan par sabhi  argument ko spread karke cb me daala ... work as a spread operator
            cb(...args);
        },delay);
    }

}

// let x;

// x=document.getElementById('pokemon-name-search');
// // e is event object
// x.addEventListener("input",useDebounce((e)=>{console.log(e.target.value)}));
export default useDebounce;