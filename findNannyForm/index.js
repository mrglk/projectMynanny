function showOther() {
  document.getElementById("myschedule").style.visibility = "visible";
}

function noshowOther() {
  document.getElementById("myschedule").style.visibility = "hidden";
}

back = () => {
  window.location.href = "../index.html";
};

document.getElementById("sendButton").addEventListener("click", (event) => {
  let resultValidate = validate();
  if (resultValidate) {
    submitForm();
  } else {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
});

validate = () => {
  let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
  let indexFormat = /^\d{6}$/;

  let a = document.forms["nannyForm"]["Name"].value;
  if(a == "") {
    document.getElementById('errName').textContent="Обязательно для заполнения";
    document.getElementById('errNameBorder').classList.add('borderErr');
    return false;
  } else {
    document.getElementById('errName').textContent='';
    document.getElementById('errNameBorder').classList.remove('borderErr');
  }

  let b = document.forms["nannyForm"]["LastName"].value;
  if(b == "") {
    document.getElementById('errSurname').textContent="Обязательно для заполнения";
    document.getElementById('errSurnameBorder').classList.add('borderErr');
    return false;
  } else {
    document.getElementById('errSurname').textContent='';
    document.getElementById('errSurnameBorder').classList.remove('borderErr');
  }

  let с = document.forms["nannyForm"]["Email"].value;
  if(с == "") {
    document.getElementById('errEmail').textContent="Обязательно для заполнения";
    document.getElementById('errEmailBorder').classList.add('borderErr');
    return false;
  } else if( !document.getElementById('Email').value.match(mailFormat) ) {
      document.getElementById('errEmail').textContent="Неверный формат Email. Пример: example-678@mail.com";
      document.getElementById('errEmailBorder').classList.add('borderErr');
      document.getElementById('Email').value= '';
      return false;
  } else {
    document.getElementById('errEmail').textContent='';
    document.getElementById('errEmailBorder').classList.remove('borderErr');
  }
  
  let d = document.forms["nannyForm"]["phone"].value;
  if(d == "") {
    document.getElementById('errMobile').textContent="Обязательно для заполнения";
    document.getElementById('errMobileBorder').classList.add('borderErr');
    return false;
  } else if( !document.getElementById('phone').value.match(phoneFormat) ) {
      document.getElementById('errMobile').textContent="Неверный формат телефона. Пример: +7 xxx xxx xx xx";
      document.getElementById('errMobileBorder').classList.add('borderErr');
      document.getElementById('phone').value = '';
      return false;
  } else {
    document.getElementById('errMobile').textContent='';
    document.getElementById('errMobileBorder').classList.remove('borderErr');
  }

  let f = document.forms["nannyForm"]["kids-name"].value;
  if (f == "") {
    document.getElementById('errChild').textContent="Обязательно для заполнения";
    document.getElementById('errChildBorder').classList.add('borderErr');
    document.getElementById('kids-name').value = '';
    return false;
  } else {
    document.getElementById('errChild').textContent='';
    document.getElementById('errChildBorder').classList.remove('borderErr');
  }

  let g = document.forms["nannyForm"]["Date"].value;
  if (g == "") {
    document.getElementById('errBirth').textContent="Обязательно для заполнения";
    document.getElementById('errBirthBorder').classList.add('borderErr');
    return false;
  } else {
    document.getElementById('errBirth').textContent='';
    document.getElementById('errBirthBorder').classList.remove('borderErr');
  }

  let h = document.forms["nannyForm"]["city"].value;
  if (h == "") {
    document.getElementById('errCity').textContent="Обязательно для заполнения";
    document.getElementById('errCityBorder').classList.add('borderErr');
    return false;
  } else {
    document.getElementById('errCity').textContent='';
    document.getElementById('errCityBorder').classList.remove('borderErr');
  }

  let k = document.forms["nannyForm"]["post-index"].value;
  if (k == "") {
    document.getElementById('errIndex').textContent="Обязательно для заполнения";
    document.getElementById('errIndexBorder').classList.add('borderErr');
    return false;
  } else if( !document.getElementById('post-index').value.match(indexFormat) ) {
    document.getElementById('errIndex').textContent="Неверный формат индекса. Пример: 123654";
    document.getElementById('errIndexBorder').classList.add('borderErr');
    document.getElementById('post-index').value='';
    return false;
  } else {
    document.getElementById('errIndex').textContent='';
    document.getElementById('errIndexBorder').classList.remove('borderErr');
  }

  let l = document.forms["nannyForm"]["address"].value;
  if (l == "") {
    document.getElementById('errAdress').textContent="Обязательно для заполнения";
    document.getElementById('errAdressBorder').classList.add('borderErr');
    return false;
  } else {
    document.getElementById('errAdress').textContent='';
    document.getElementById('errAdressBorder').classList.remove('borderErr');
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
  // event.preventDefault();
  formData = new FormData(formElementQuestionnaire);

  for(let value of formData.values()) {
    console.log(value);
  }
  
  fetch('https://api.star-c.ru/webhook/mynanny', {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
      })
      
      .then(data => {
        console.log(data);
        document.getElementById("applicationSent").classList.remove("applicationSentOff");
        document.getElementById("applicationSent").classList.add("applicationSent");
        document.getElementById("tabCity").classList.add("formOff");
        document.getElementById("formElementQuestionnaire").classList.add("formOff");
    })

      .catch(error =>{
        if(error){                
          console.log(error.message);
          console.log(error.name);
          document.getElementById("errorSent").classList.remove("errorSentOff");
          document.getElementById("errorSent").classList.add("errorSent");
          document.getElementById("tabCity").classList.add("formOff");
          document.getElementById("formElementQuestionnaire").classList.add("formOff");
        }  
      })
}