
// Name: Emma Wilby
// Assignment: Restaurant Site
// Date Created: 06/12/20
// Most recent revision: 16/12/20
// Date Submitted: 16/12/20


//function to validate the form
function validate() {
  var form = document.forms["contact-form"]
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var info = document.getElementById("info");
  var buttonSubmit = document.getElementById("buttonSubmit");
  var validationSuccess = document.getElementById("validation-success");
  var failed = false;


  form.className = "needs-validation";
  validationSuccess.style.display = "none";

  if(!form.checkValidity()){
    failed = true;
  }

  if(!isPhoneValid()){
    failed = true;
  }

  if(!isDayValid()){
    failed = true;
  }


  if(failed){
    form.className = "was-validated";
    return false;
  }

  validationSuccess.style.display = "block"; //show submission success message
  return false;

}


//function to check whether phone number field is valid
function isPhoneValid(){
  var phone = document.getElementById("phone");
  var valid;

  if(phone.value.length != 11){
    phone.setCustomValidity('invalid');
    valid = false;
  }else{
    phone.setCustomValidity('');
    valid = true;
  }

  return valid;
}


//function to check whether contact day field is valid
function isDayValid(){
  var day = document.getElementsByName("day");
  var contactDay = document.getElementById("contactDay");
  var warningDay = document.getElementById("warning-day");
  var valid;

  if(!day[0].checked && !day[1].checked && !day[2].checked && !day[3].checked && !day[4].checked){
    contactDay.setCustomValidity('invalid');
    warningDay.style.display = "block";
    valid = false;
  }
  else{
    contactDay.setCustomValidity('');
    warningDay.style.display = "none";
    valid = true;
  }

  return valid;
}
