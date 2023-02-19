function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid) alert('Адрес эл. почты введен правильно!');
    else out = 'Не корректный формат почты';
    document.getElementById('message').innerHTML = out;
    document.getElementById('message').style.color = 'red';
    document.getElementById('email').style.borderColor = 'red';
    return valid;
}
 