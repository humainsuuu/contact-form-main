let errorText = document.querySelectorAll("p")

let submitBtn = document.querySelector('button')
let inputFill = document.querySelectorAll('input')
 let arryInput = Array.from(inputFill)

submitBtn.addEventListener("click",() =>{
    arryInput.filter((num, index) =>{
        let valueInput = num.value
        if(true){
            alert('fill the  input')
        }
    })
})
