const CorrectAnsers=['B','B','A','B'];
const form=document.querySelector('.quiz-form');
// to show the results on page
const result=document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();

    let score=0;
    // to make a cycle here to all questions
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

    // check answers through ForEach Method
    userAnswers.forEach((answer,index)=>{
        if(answer===CorrectAnsers[index]){
            score+=25;
        } 
    });
    // SHOWING THE RESULT
    //  Add Scrolling Up
    scroll(0,0);
result.querySelector('span').textContent=`${score}%`;
result.classList.remove('d-none');
//Adding animation to our obtained score
let output=0;
const timer=setInterval(()=>{
    result.querySelector('span').textContent=`${output}%`;
    if(output===score){
        clearInterval(timer);
} else{
    output++;
}
},10);
});

//wINDOW object
// console.log(window);
// console.log('hello');
// window.console.log('hello');
// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// alert('helo');
// window.alert('hello again');
// setTimeout(()=>{
//     alert('hello,ninjas');
// },300);
