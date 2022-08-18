document.getElementById('btn-submit').addEventListener('click', function(){
    const emailCheck = document.getElementById('user-email');
    const passCheck = document.getElementById('user-password');
    if(emailCheck.value.endsWith('@gmail.com') && passCheck.value == "nurnipu"){
        window.location.href = 'bank.html';
    }
    else{
        const error = document.createElement('p');
        const parentDiv = document.getElementById('div-1');
        error.innerText = '!!your mail or password is invalid please check!!';
        error.style.color = 'red';
        error.style.marginTop = '5px';
        error.style.fontWeight = 'bold';
        parentDiv.appendChild(error);
    }
})
