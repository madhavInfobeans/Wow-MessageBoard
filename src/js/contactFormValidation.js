import $ from "jquery";
$(document).ready(function () {
  $("#fnameMsg").hide();
  $("#lnameMsg").hide();
  $("#emailMsg").hide();
  $("#mobileMsg").hide();
  $("#messageMsg").hide();
  $("#attachmentMsg").hide();

  var fname_err = false;
  var lname_err = false;
  var email_err = false;
  var mobile_err = false;
  var message_err = false;
  var attachment_err = false;

  $("#firstname").focusout(function () {
    fname_check();
  });

  function fname_check() {
    var firstname_val = $("#firstname").val();

    if (firstname_val !== "") {
      $("#fnameMsg").hide();
    } else {
      $("#fnameMsg").show();
      $("#fnameMsg").html("firstname is Required");
      $("#fnameMsg").focusout();
      $("#fnameMsg").css("color", "red");
      $("#fname").css("border", "2px solid red");
      fname_err = true;
    }
  }

  $("#lastname").focusout(function () {
    lname_check();
  });

  function lname_check() {
    var lastname_val = $("#lastname").val();

    if (lastname_val !== "") {
      $("#lnameMsg").hide();
    } else {
      $("#lnameMsg").show();
      $("#lnameMsg").html("Lastname is Required");
      $("#lnameMsg").focusout();
      $("#lnameMsg").css("color", "red");
      $("#lname").css("border", "2px solid red");
      lname_err = true;
    }
  }

  $("#emailId").focusout(function () {
    email_check();
  });

  function email_check() {
    var email_val = $("#emailId").val();

    if (email_val !== "") {
      var pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (pattern.test(email_val) && email_val !== "") {
        $("#emailMsg").hide();
      } else {
        $("#emailMsg").show();
        $("#emailMsg").html("Enter Valid Mail");
        $("#emailMsg").focusout();
        $("#emailMsg").css("color", "red");
        email_err = true;
      }
    } else {
      $("#emailMsg").show();
      $("#emailMsg").html("email is Required");
      $("#emailMsg").focusout();
      $("#emailMsg").css("color", "red");
      email_err = true;
    }
  }

  $("#mobile").focusout(function () {
    mobile_check();
  });

  function mobile_check() {
    var mobile_val = $("#mobile").val();

    if (mobile_val !== "") {
      $("#mobileMsg").hide();
    } else {
      $("#mobileMsg").show();
      $("#mobileMsg").html("mobile is Required");
      $("#mobileMsg").focusout();
      $("#mobileMsg").css("color", "red");
      mobile_err = true;
    }
  }

  $("#message").focusout(function () {
    message_check();
  });

  function message_check() {
    var message_val = $("#message").val();

    if (message_val !== "") {
      $("#messageMsg").hide();
    } else {
      $("#messageMsg").show();
      $("#messageMsg").html("Message is Required");
      $("#messageMsg").focusout();
      $("#messageMsg").css("color", "red");
      message_err = true;
    }
  }

  $("#attachment").focusout(function () {
    attachment_check();
  });

  function attachment_check() {
    var attachment_val = $("#attachment").val();

    if (attachment_val !== "") {
      var allowedFiles = [".doc", ".docx", ".pdf"];

      var regex = new RegExp(
        "([a-zA-Z0-9s_\\.-:])+(" + allowedFiles.join("|") + ")$"
      );
      if (regex.test(attachment_val.toLowerCase()) && attachment_val !== "") {
        $("#attachmentMsg").hide();
      } else {
        $("#attachmentMsg").show();
        $("#attachmentMsg").html(
          "Supported extensions: <b>" + allowedFiles.join(", ") + "</b> only."
        );
        $("#attachmentMsg").focusout();
        $("#attachmentMsg").css("color", "red");
        attachment_err = true;
      }
    } else {
      $("#attachmentMsg").show();
      $("#attachmentMsg").html("attachment is Required");
      $("#attachmentMsg").focusout();
      $("#attachmentMsg").css("color", "red");
      attachment_err = true;
    }
  }

  $("#contactForm").submit(function () {
    fname_err = false;
    lname_err = false;
    email_err = false;
    mobile_err = false;
    message_err = false;
    attachment_err = false;

    fname_check();
    lname_check();
    email_check();
    mobile_check();
    message_check();
    attachment_check();

    if (
      fname_err === false &&
      lname_err === false &&
      email_err === false &&
      mobile_err === false &&
      message_err === false &&
      attachment_err === false
    ) {
      return true;
    } else {
      return false;
    }
  });
});
