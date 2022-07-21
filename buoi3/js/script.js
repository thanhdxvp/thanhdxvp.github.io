var firstname = document.getElementById('firstname')
var lastname = document.getElementById('lastname')
var genders = document.getElementsByClassName('gender')
var gendersValue
var pass = document.getElementById('password')
var calenders = document.getElementsByClassName('calender')
var calendersValue = [];
var locations = document.getElementById('location')
var contents = document.getElementById('content')
var remember = document.getElementById('remember')

function btnSubmit() {
    var element_firstname = document.getElementById('firstname-error')
    var element_lastname = document.getElementById('lastname-error')
    var element_gender = document.getElementById('gender-error')
    var element_pass = document.getElementById('pass-error')
    var element_calender = document.getElementById('calender-error')
    var element_location = document.getElementById('location-error')
    var element_content = document.getElementById('decription-error')
    var element_remember = document.getElementById('remember-error')

    if (firstname.value === '') {
        element_firstname.style.display = 'block'
        element_firstname.innerHTML = 'Vui long nhap truong nay'
        // element_firstname.classList.remove('error')
        element_firstname.classList.add('error_active')
    } else if (firstname.value.length >= 5) {
        element_firstname.style.display = 'block'
        element_firstname.innerHTML = 'Vui long nhap duoi 5 ky tu'
    } else {
        element_firstname.style.display = 'none'
        element_firstname.innerHTML = ''
    }

    if (lastname.value === '') {
        element_lastname.style.display = 'block'
        element_lastname.innerHTML = 'Vui long nhap truong nay'
    } else if (lastname.length >= 5) {
        element_lastname.style.display = 'block'
        element_lastname.innerHTML = 'Vui long nhap duoi 5 ky tu'
    } else {
        element_lastname.style.display = 'none'
        element_lastname.innerHTML = ''
    }

    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked === true) {
            element_gender.style.display = 'none'
            element_gender.innerHTML = ''
            break;
        } else {
            element_gender.style.display = 'block'
            element_gender.innerHTML = 'Vui long nhap truong nay'
        }
    }

    if (pass.value === '') {
        element_pass.style.display = 'block'
        element_pass.innerHTML = 'Vui long nhap truong nay'
    } else if (pass.value.length <= 5) {
        element_pass.style.display = 'block'
        element_pass.innerHTML = 'Vui long nhap tren 5 ky tu'
    } else {
        element_pass.style.display = 'none'
    }


    for (var j = 0; j < calenders.length; j++) {
        if (calenders[j].checked === true) {
            element_calender.style.display = 'none'
            element_calender.innerHTML = ''
            break;
        } else {
            element_calender.style.display = 'block'
            element_calender.innerHTML = 'Vui long nhap truong nay'

        }
    }

    if (locations.value === '') {
        element_location.style.display = 'block'
        console.log('aa');
        element_location.innerHTML = 'Vui long nhap truong nay'

    } else {
        element_location.style.display = 'none'
        element_location.innerHTML = ''
    }

    if (contents.value === '') {
        element_content.style.display = 'block'
        element_content.innerHTML = 'Vui long nhap truong nay'

    } else {
        element_content.style.display = 'none'
        element_location.innerHTML = ''

    }

    if (remember.checked === false) {
        element_remember.style.display = 'block'
        element_remember.innerHTML = 'Vui long nhap truong nay'
    } else {
        element_remember.style.display = 'none'
        element_remember.innerHTML = ''
    }
    // console.log(firstname.value);  
    // console.log('gendersValue: ' + gendersValue);
    // console.log('calendersValue:  ' + calendersValue);
    // console.log('location: ' + locations.value);
    // console.log('content: ' + contents.value);
}

function btnRefresh() {
    firstname.value = '';
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gendersValue = genders[i].value
        }
    }
}

