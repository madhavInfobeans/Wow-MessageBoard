import $ from "jquery";
$(document).ready(function () {
  $("#emailMsg").hide();
  $("#passwordMsg").hide();
  var email_err = false;
  var password_err = false;

  $("#email").focusout(function () {
    email_check();
  });

  function email_check() {
    var email_val = $("#email").val();

    if (email_val !== "") {
      var pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (pattern.test(email_val) && email_val !== "") {
        $("#emailMsg").hide();
      } else {
        $("#emailMsg").show();
        $("#emailMsg").html("Enter Valid Mail");
        $("#emailMsg").focusout();
        $("#emailMsg").css("color", "red");
        $("#email").css("border", "2px solid red");
        email_err = true;
      }
    } else {
      $("#emailMsg").show();
      $("#emailMsg").html("email is Required");
      $("#emailMsg").focusout();
      $("#emailMsg").css("color", "red");
      $("#email").css("border", "2px solid red");
      email_err = true;
    }
  }

  $("#password").focusout(function () {
    password_check();
  });

  function password_check() {
    var password_val = $("#password").val();

    if (password_val !== "") {
      $("#passwordMsg").hide();
    } else {
      $("#passwordMsg").show();
      $("#passwordMsg").html("password is Required");
      $("#passwordMsg").focusout();
      $("#passwordMsg").css("color", "red");
      $("#password").css("border", "2px solid red");
      password_err = true;
    }
  }

  $("#loginForm").submit(function () {
    email_err = false;
    password_err = false;

    email_check();
    password_check();

    if (email_err === false && password_err === false) {
      return true;
    } else {
      return false;
    }
  });
});
