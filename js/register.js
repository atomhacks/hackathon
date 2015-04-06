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
  if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 37 || e.keyCode > 40) && (e.keyCode != 8)) {
    return false;
  } else {
    return true;
  }
}
