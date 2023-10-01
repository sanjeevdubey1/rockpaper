



const calButton=document.getElementById('calButton')



function calculate(){
    let valueInput=document.getElementById('inputs');
  let cost=parseInt(valueInput.value);
    console.log(valueInput)


    if(cost<40){
        cost = cost +10
    }else{
        cost
    }
    document.getElementById('output').innerText=cost
    

}