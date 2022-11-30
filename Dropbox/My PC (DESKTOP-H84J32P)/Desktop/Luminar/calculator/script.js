const result=document.querySelector('.current-operand')
const btn=document.querySelectorAll('[data-number]')
const equal=document.querySelector('[data-equals] ')
const clear=document.querySelector('[data-all-clear ]')
const del=document.querySelector('[data-delete]')
// function operation(){

// }
let res
btn.forEach(btn=>btn.addEventListener('click',function(){
    result.textContent+=btn.value
   res=result.textContent

    
}))
equal.addEventListener('click',function(){
     data=eval(res)

    result.textContent=data
})

clear.addEventListener('click',function(){
    result.textContent=''
})
del.addEventListener('click',function(){
    result.textContent=result.textContent.slice(0,-1)
})
