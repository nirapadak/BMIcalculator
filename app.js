

function calculator(){
    let height=document.querySelector('.feet').value;
    let width=document.querySelector('.width').value;
    let inch=document.querySelector('.inc').value;
    var h=parseInt(height);
    var i=parseInt(inch);
    var w=parseInt(width);
    let result=(h*0.3048)+(i*0.0254);
    let bmi=w/(result*result);
    let bMi=parseInt(bmi);
    
    var comment=document.querySelector('.comment');
    if(bMi<18){
        comment.innerHTML="You are Underweight";
        comment.style.color="black";
    }else if(bMi>=18 && bMi<=24){
        comment.innerHTML="You are Normal weight"
        comment.style.color="green";
    }else if(bMi>=25 && bMi<=29){
        comment.innerHTML="You are Overweight"
        comment.style.color="yellow";
    }else if(bMi>30){
        comment.innerHTML="You are Obesity"
        comment.style.color="red";
        
    }
    console.log(bMi);

    document.querySelector('.result').innerHTML=bMi;
    
}