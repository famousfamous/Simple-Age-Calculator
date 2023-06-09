//code to add today
function setDefaultDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    
    var today = year + "-" + month + "-" + day; 
    document.getElementById("dateBirthdate").value = today;
    document.getElementById("dateBirthdate").setAttribute('max', today);
    console.log(today);
}

//code to determine if user is choosing a later date than today
let dateExtract = document.getElementById("alive");

dateExtract.addEventListener('change', calculate);

function calculate() {
  let isUserAlive = document.querySelector('input[type="checkbox"]');
  if (isUserAlive.checked) {
    document.getElementById("shortInfo").innerHTML = "You have been enjoying life for:";
    document.getElementById('shortInfo').style.color = 'green';
  } else if (!isUserAlive.checked) {
    document.getElementById("shortInfo").innerHTML = "The Person lived for:";
    document.getElementById('shortInfo').style.color = 'yellow';
  }

  setInterval(() => {
    let birthdate = new Date(document.getElementById("dateBirthdate").value);

    let now = new Date();
    let ageInMs = now.getTime() - birthdate.getTime();

    // this is where we begin to calculate the age...
    let ageInSecs = ageInMs / 1000; //to seconds
    let ageInMins = ageInSecs / 60; //to seconds
    let ageInhours = ageInMins / 60; // to hours
    let ageInDays = ageInhours / 24; // to days
    let ageInMonths = ageInDays / 30.4375; // to months
    let ageInYears = ageInMonths / 12; // to years

    //now we begin to populate the DOM with the compute

    document.querySelector("#years").innerHTML = Math.floor(ageInYears);
    document.querySelector("#months").innerHTML = Math.floor(ageInMonths % 12);
    document.querySelector("#days").innerHTML = Math.floor(ageInDays % 30.4375);
    document.querySelector("#hours").innerHTML = Math.floor(ageInhours % 24);
    document.querySelector("#minutes").innerHTML = Math.floor(ageInMins % 60);
    document.querySelector("#seconds").innerHTML = Math.floor(ageInSecs % 60);
    document.querySelector("#seconds").style.borderBottom = "1px grey solid";
  }, 1000);
}

function reset() {
  window.location.reload();
}
