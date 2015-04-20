$(document).ready(function() {
  $('#user-phone').keydown(function(e) {
    if (!validate_number(e)) {
      e.preventDefault();
    }
  });

  $('#user-year').keydown(function(e) {
    if (!validate_number(e)) {
      e.preventDefault();
    }
  })
});

function validate_number(e) {
  console.log(e.keyCode);
  if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 37 || e.keyCode > 40) && (e.keyCode != 8) && (e.keyCode != 32) && (e.keyCode != 189) && (e.keyCode != 9)) {
    return false;
  } else {
    return true;
  }
}

function validate_form() {
  var form = document.forms['user-form'];
  var form_error = document.getElementById('form-error');
  var error = form_error.getElementsByTagName('p')[0];

  var errors = [];
  var error_text = '';

  var name = form['name'].value;
  if (name == null || name == '') {
    errors.push('You need to fill in your name');
  }

  var email = form['email'].value;
  if (email == null || email == '') {
    errors.push('You need to fill in your email address');
  }

  var year = form['year'].value;
  if (year == null || year == '') {
    errors.push('You need to fill in your graduation year');
  } else {
    if (parseInt(year) < 2015 || parseInt(year) > 2018) {
      errors.push('You need to be a current student at Bronx Science to attend AtomHacks');
    }
  }

  var male = document.getElementById('user-male');
  var female = document.getElementById('user-female');
  var other = document.getElementById('user-other');
  if (!male.checked && !female.checked && !other.checked) {
    errors.push('You need to select a gender');
  }

  var conduct = document.getElementById('user-conduct');
  if (!conduct.checked) {
    errors.push('You must agree to the Code of Conduct');
  }

  var student = document.getElementById('user-student');
  if (!student.checked) {
    if (!(parseInt(year) < 2015 || parseInt(year) > 2018)) {
      errors.push('You must be a current student at Bronx Science to attend AtomHacks');
    }
  }

  // var shirt

  if (errors.length == 0) {
    form_error.style.display = 'none';
    // redirect to google form submission
  } else {
    for (var i = 0; i < errors.length; i++) {
      if (error_text == '') {
        error_text = errors[i];
      } else {
        error_text += '<br>' + errors[i];
      }
    }

    error.innerHTML = error_text;
    form_error.style.display = 'block';
    window.location.hash = '#main';
  }

  return false;
}
