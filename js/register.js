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

  var redirect_url = 'https://docs.google.com/forms/d/1OQcrO1xGWvrGefrGvjIO2Qn_qXrRpztzZIWUNhCWG2A/formResponse?ifq&submit=Submit'

  var name = form['name'].value;
  if (name == null || name == '') {
    errors.push('You need to fill in your name');
  } else {
    redirect_url += '?entry.259310217=' + name;
  }

  var email = form['email'].value;
  if (email == null || email == '') {
    errors.push('You need to fill in your email address');
  } else {
    redirect_url += '&entry.1617286564=' + email;
  }

  var phone = form['phone'].value;
  if (phone != null && phone != '') {
    redirect_url += '&entry.2123498044=' + phone;
  }

  var year = form['year'].value;
  if (year == null || year == '') {
    errors.push('You need to fill in your graduation year');
  } else {
    if (parseInt(year) < 2015 || parseInt(year) > 2018) {
      errors.push('You need to be a current student at Bronx Science to attend AtomHacks');
    } else {
      redirect_url += '&entry.530114257=' + year;
    }
  }

  var male = document.getElementById('user-male');
  var female = document.getElementById('user-female');
  var other = document.getElementById('user-other');
  if (!male.checked && !female.checked && !other.checked) {
    errors.push('You need to select a gender');
  } else {
    redirect_url += '&entry.343323236='
    if (male.checked) {
      redirect_url += 'Male';
    } else if (female.checked) {
      redirect_url += 'Female';
    } else if (other.checked) {
      redirect_url += 'Other';
    }
  }

  var shirt = document.getElementById('user-shirt').value;
  redirect_url += '&entry.44813199=';
  if (shirt == 'XS') {
    redirect_url += 'X+Small';
  } else if (shirt == 'S') {
    redirect_url += 'Small';
  } else if (shirt == 'M') {
    redirect_url += 'Medium';
  } else if (shirt == 'L') {
    redirect_url += 'Large';
  } else if (shirt == 'XL') {
    redirect_url += 'X Large';
  }

  var vegetarian = document.getElementById('user-vegetarian').checked;
  if (vegetarian) {
    redirect_url += '&entry.1726989026=Vegetarian';
  }

  var vegan = document.getElementById('user-vegan').checked;
  if (vegan) {
    redirect_url += '&entry.1726989026=Vegan';
  }

  var gluten = document.getElementById('user-gluten').checked;
  if (gluten) {
    redirect_url += '&entry.1726989026=Gluten+Free';
  }

  var kosher = document.getElementById('user-kosher').checked;
  if (kosher) {
    redirect_url += '&entry.1726989026=Kosher';
  }

  var lactose = document.getElementById('user-lactose').checked;
  if (lactose) {
    redirect_url += '&entry.1726989026=Lactose+Intolerant'
  }

  var halal = document.getElementById('user-halal').checked;
  if (halal) {
    redirect_url += '&entry.1726989026=Halal';
  }

  var conduct = document.getElementById('user-conduct').checked;
  if (!conduct) {
    errors.push('You must agree to the Code of Conduct');
  } else {
    redirect_url += '&entry.1365518036=I+agree+to+the+Code+of+Conduct.';
  }

  var student = document.getElementById('user-student').checked;
  if (!student) {
    if (!(parseInt(year) < 2015 || parseInt(year) > 2018)) {
      errors.push('You must be a current student at Bronx Science to attend AtomHacks');
    }
  } else {
    redirect_url += '&entry.1365518036=I+verify+that+I+am+a+current+student+at+Bronx+Science,+and+am+eligible+to+participate+in+this+event.'
  }

  if (errors.length == 0) {
    form_error.style.display = 'none';
    window.location.href = redirect_url;
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

    redirect_url = 'https://docs.google.com/forms/d/1OQcrO1xGWvrGefrGvjIO2Qn_qXrRpztzZIWUNhCWG2A/formResponse?ifq&submit=Submit'
  }

  return false;
}
