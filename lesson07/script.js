'uses strict';
  
let week = ['воскресенье','понедельник','вторник', 'среда', 'четверг', 'пятница', 'суббота' ];
let d = new Date();
let ii = d.getDay();

week.forEach(function (day, i, days) {
    //window.write('<p>'); 
    let p = document.createElement('p');  
    let t = document.createTextNode(day); 

    if (i == 0 || i == 6) {
        p.style.fontStyle = 'italic';
    } 
    if (ii == i) {
        p.style.fontWeight = 'bold';
    } 
    p.appendChild(t);
    document.body.appendChild(p);
    //p.innerText = day;
    //window.write('</p>');  
    
}); 