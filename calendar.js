function colorirDia(){
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar =document.getElementById('calendar');
    

    if ((days < 1) || (days > 31)) {
        alert("Não tem esse numero no calendario");

    }else {
        let td = calendar.getElementsByTagName('td')[(parseInt(days)+1)];
    td.style.backgroundColor = color;
    }


     
    }