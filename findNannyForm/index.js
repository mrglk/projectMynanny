function showOther() {
  document.getElementById("other").style.visibility = "visible";
}

function noshowOther() {
  document.getElementById("other").style.visibility = "hidden";
}

back = () => {
  window.location.href = "../index.html";
};

document.getElementById("sendButton").addEventListener("click", (event) => {
  let resultValidate = validate();
  console.log("im here!1");
  if (resultValidate) {
    console.log("im here!2");
    submitForm();
  }
});

validate = () => {
  let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
  let indexFormat = /^\d{6}$/;

  let a = document.forms["nannyForm"]["name"].value;
  if (a == "") {
    document.getElementById('errName').textContent="Обязательно для заполнения";
    return false;
  } else {
    document.getElementById('errName').textContent='';
  }

  let b = document.forms["nannyForm"]["surname"].value;
  if (b == "") {
    document.getElementById('errSurname').textContent="Обязательно для заполнения";
    return false;
  } else {
    document.getElementById('errSurname').textContent='';
  }

  let с = document.forms["nannyForm"]["email"].value;
  if (с == "") {
    document.getElementById('errEmail').textContent="Обязательно для заполнения";
    return false;
  } else if( !document.getElementById('email').value.match(mailFormat) ) {
    console.log("не верно");
    document.getElementById('errEmail').textContent="Неверный формат Email. Пример: example-678@mail.com";
    document.getElementById('email').value= '';
    return false;
  } else {
    document.getElementById('errEmail').textContent='';
  }
  
  let d = document.forms["nannyForm"]["mobile"].value;
  if (d == "") {
    document.getElementById('errMobile').textContent="Обязательно для заполнения";
    return false;
  } else if( !document.getElementById('mobile').value.match(phoneFormat) ) {
    document.getElementById('errMobile').textContent="Неверный формат телефона. Пример: +7 xxx xxx xx xx";
    document.getElementById('mobile').value = '';
    return false;
  } else {
    document.getElementById('errMobile').textContent='';
  }

  let f = document.forms["nannyForm"]["child"].value;
  if (f == "") {
    document.getElementById('errChild').textContent="Обязательно для заполнения";
    return false;
  } else {
    document.getElementById('errChild').textContent='';
  }

  let g = document.forms["nannyForm"]["birth"].value;
  if (g == "") {
    document.getElementById('errBirth').textContent="Обязательно для заполнения";
    return false;
  } else {
    document.getElementById('errBirth').textContent='';
  }

  let h = document.forms["nannyForm"]["city"].value;
  if (h == "") {
    document.getElementById('errIndex').textContent="Обязательно для заполнения";
    return false;
  } else if( !document.getElementById('index').value.match(indexFormat) ) {
    document.getElementById('errIndex').textContent="Неверный формат индекса. Пример: 123654";
    document.getElementById('index').value='';
    return false;
  } else {
    document.getElementById('errIndex').textContent='';
  }

  let k = document.forms["nannyForm"]["index"].value;
  if (k == "") {
    document.getElementById('errCity').textContent="Обязательно для заполнения";
    return false;
  } else {
    document.getElementById('errCity').textContent='';
  }

  let l = document.forms["nannyForm"]["adress"].value;
  if (l == "") {
    document.getElementById('errAdress').textContent="Обязательно для заполнения";
    return false;
  } else {
    document.getElementById('errAdress').textContent='';
  }

  return true;
}

document.addEventListener("DOMContentLoaded", function (event) {
  location.hash = 'Moscow';
  document.getElementById("h1Text").innerHTML = "Найти няню в Москве";
  document.getElementById("city").value = "Москва";
});

openCity = (event, cityName) => {
    if(cityName === 'Moscow') {
    location.hash = 'Moscow';
    document.getElementById("h1Text").innerHTML = "Найти няню в Москве";
    document.getElementById("city").value = "Москва";
  } else if(cityName === 'SaintPetersburg') {
    location.hash = 'SaintPetersburg';
    document.getElementById("h1Text").innerHTML = "Найти няню в Санкт-Петербурге";
    document.getElementById("city").value = "Санкт-Петербург";
  } else if(cityName === 'NaberezhnyeChelny') {
    location.hash = 'NaberezhnyeChelny';
    document.getElementById("h1Text").innerHTML = "Найти няню в Набережных челнах";
    document.getElementById("city").value = "Набережные Челны";
  } else if(cityName === 'Kazan') {
    location.hash = 'Kazan';
    document.getElementById("h1Text").innerHTML = "Найти няню в Казани";
    document.getElementById("city").value = "Казань";
  } else if(cityName === 'Barnaul') {
    location.hash = 'Barnaul';
    document.getElementById("h1Text").innerHTML = "Найти няню в Барнауле";
    document.getElementById("city").value = "Барнаул";
  }
}

submitForm = (event) => {
  console.log("im here!3");
  // event.preventDefault();
  formData = new FormData(formElementQuestionnaire);

  formData.append("name", document.getElementById("name").value);
  formData.append("surname", document.getElementById("surname").value);
  formData.append("email", document.getElementById("email").value);
  formData.append("mobile", document.getElementById("mobile").value);
  formData.append("child", document.getElementById("child").value);

  formData.append("med", document.getElementById("med").value);
  formData.append("city", document.getElementById("city").value);
  formData.append("index", document.getElementById("index").value);
  formData.append("adress", document.getElementById("adress").value);

  let finalSchedule = null;
  let schedule = document.getElementsByName("schedule");
  for (let i = 0; schedule[i]; ++i) {
    if (schedule[i].checked) {
      finalSchedule = schedule[i].value;
      break;
    }
  }
  formData.set("schedule", schedule);

  formData.append("expect", document.getElementById("expect").value);
  formData.append("agreement", document.getElementById("agreement").checked);

  fetch('https://api.star-c.ru/webhook/mynanny', {
          method: 'POST',
          body: formData,
          // headers: {            
          //   'Access-Control-Allow-Origin':'*',
          //   'Content-Type':'application/json;charset=utf-8'
          // }
      })
      .then(response => response.json())
      .then(data => {
          // clearInput();
          // alert("бум");
      })
      .catch(err => console.log(err));
  // console.log(FormData);
};

// function openCity(evt, cityName) {
//   let i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }