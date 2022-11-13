
let id = 0;
let inp = 0;
let table = document.getElementById('emp_table');

while((inp = Number(prompt('Enter Hours Worked: '))) > -1){
    
    let pay = 0;
    id++;
    if(inp > 40){
        pay = (inp * 15) * 1.5;
    }else{
        pay = inp * 15;
    }

    let tr = table.insertRow(-1);

    for(let i = 0; i < 3; i++){
        let cell = tr.insertCell(i);
        if(i == 0){
            cell.innerHTML = id;
        }else if (i==1){
            cell.innerHTML = inp;
        }else{
            cell.innerHTML= pay;
        }
    }
}

if(id == 0){
    alert('Please make sure that at least 1 employee has been entered into the system');
}
