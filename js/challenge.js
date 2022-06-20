let number;
let likes = 0
let count = 0
let btns = document.querySelectorAll("#button ")
let counter = document.getElementById('counter')
setInt=(setInterval(add,1000))
function add (){
    count++
    counter.innerText=count
    
}
function subtract(){
    count--
    counter.innerText=count
}
plus=document.querySelector('#plus')
plus.addEventListener("click",add,false)

minus=document.querySelector('#minus')
minus.addEventListener('click',subtract)
likes =0
likeTag= document.querySelector('#heart')
likeTag.addEventListener('click',numberOfLike )
///////////////////////////////////////////////////////////////////////
                //here//


function numberOfLike(){ 
    likes ++
    
    
    
    number = counter.innerText

    
    
    const newElement=document.createElement('l1')
    newElement.innerHTML= `number ${number}: likes ${likes}   `

    document.querySelector('body'). appendChild(newElement)


}












   
   







