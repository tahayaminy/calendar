var date = new Date();
var originMonth=date.getMonth();
const QS=Q=>{return document.querySelector(Q)};
var prevWeek=date.getDay();
function calendar(){
    const Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const getLastDay= new Date(date.getFullYear(), date.getMonth()+1, 0);
    const lastDay= getLastDay.getDate();
    const getOriginDay=new Date(date.getFullYear(), date.getMonth(), 1);
    const originDay=getOriginDay.getDay();

    QS('#header p:first-child').innerText=Months[date.getMonth()];
    QS('#header p:last-child').innerText=date.toDateString();

    if(date.getMonth()==0){
        QS('.fa-angle-left').style=`opacity:.2;cursor:default;`
    }else if(date.getMonth()==11){
        QS('.fa-angle-right').style=`opacity:.2;cursor:default;`
    }

    for(let count=originDay;count>0;count--){
        QS('.days').innerHTML+=`<div style="cursor:default;"></div>`;
    }
    for(let count=1;count<=lastDay;count++){
        QS('.days').innerHTML+=`<div ${(count==date.getDate()) ? "class='today'": "" }>${count}</div>`;
    }
    QS('.week').children[prevWeek].classList.remove('today');
    QS('.week').children[date.getDay()].classList.add('today');
    prevWeek=date.getDay();

}
calendar();

function prevMonth(btn){
    date.setMonth((originMonth==0)? (0):(--originMonth));
    if(originMonth==0){
        btn.style=`opacity:.2;cursor:default;`;
    }    
    QS('.fa-angle-left').style=`opacity:1;cursor:cursor;`;
    QS('.days').innerHTML='';
    calendar();
}
function nextMonth(btn){
    date.setMonth((originMonth==11)? (11):(++originMonth));
    if(originMonth==0){
        btn.style=`opacity=.2;cursor:default;`;
    }
    QS('.fa-angle-left').style=`opacity:1;cursor:cursor;`;
    QS('.days').innerHTML='';
    calendar();
}