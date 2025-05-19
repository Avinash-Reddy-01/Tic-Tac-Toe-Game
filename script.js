let boxes=document.querySelectorAll('.box')
let win=document.querySelector('.win')
let turnO=true;
let winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

boxes.forEach((e)=>{
    e.addEventListener('click',()=>{
       if(turnO){
        e.innerHTML="O"
        turnO=false
       }
       else{
        e.innerHTML="X"
        turnO=true
       }
       e.disabled=true
       checkWinner()
    })
})

const enable=()=>{
    boxes.forEach((e)=>{
        e.innerHTML=''
        e.disabled=false})
}

const disable=()=>{
    boxes.forEach((e)=>{e.disabled=true})
}

const resetGame=()=>{
    win.style.opacity=0
    resetbtn.style.opacity=1
    enable()
}

function displayWinner(winner){
    disable()
    win.querySelector('.winner').innerHTML=`Winner is : ${winner}`
    win.style.opacity=1
    resetbtn.style.opacity=0
}

function checkWinner(){
    for(let pattern of winningPattern){
        let p1=boxes[pattern[0]].innerHTML
        let p2=boxes[pattern[1]].innerHTML
        let p3=boxes[pattern[2]].innerHTML

        if(p1!='' && p2!='' && p3!=''){
            if(p1==p2 && p2==p3){
                displayWinner(p1)
            }
        }
    }
}

resetbtn.addEventListener('click',resetGame)

newbtn.addEventListener('click',resetGame)
