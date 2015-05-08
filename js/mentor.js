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

  var redirect_url = 'https://docs.google.com/forms/d/1S3KNrAdcX-0yKKcE43dNmch_1_iTFURXk-INAU1EVYQ/formResponse?ifq&submit=Submit'

  var name = form['name'].value;
  if (name == null || name == '') {
    errors.push('You need to fill in your name');
  } else {
    redirect_url += '&entry.247391495=' + name;
  }

  var email = form['email'].value;
  if (email == null || email == '') {
    errors.push('You need to fill in your email address');
  } else {
    redirect_url += '&entry.767062748=' + email;
  }

  var phone = form['phone'].value;
  if (phone != null && phone != '') {
    redirect_url += '&entry.1122254453=' + phone;
  }

  var hs = form['hs'].value;
  if (hs == null || year == '') {
    errors.push('You need to fill in the high school you graduated from');
  } else {
    redirect_url += '&entry.449676284=' + hs;
  }

  var year = form['year'].value;
  if (year == null || year == '') {
    errors.push('You need to fill in your graduation year');
  } else {
    redirect_url += '&entry.691741600=' + year;
  }

  var shirt = document.getElementById('user-shirt').value;
  redirect_url += '&entry.2088098197=';
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

  var company = form['company'].value;
  if (company != null && company != '') {
    redirect_url += '&entry.485171055=' + company;
  }

  var title = form['title'].value;
  if (title != null && title != '') {
    redirect_url += '&entry.679030639=' + title;
  }

  var expertise = form['expertise'].value;
  if (expertise == null || expertise == '') {
    errors.push('You need to fill in your area of expertise');
  } else {
    redirect_url += '&entry.959219095=' + expertise;
  }

  var languages = form['languages'].value;
  if (languages == null || languages == '') {
    errors.push('You need to fill in your familiar programming languages');
  } else {
    redirect_url += '&entry.438718073=' + languages;
  }

  var bio = form['bio'].value;
  if (bio == null || bio == '') {
    errors.push('You need to write a short bio about yourself');
  } else {
    redirect_url += '&entry.793049186=' + bio;
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
