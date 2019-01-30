

filterSelection("all")
function filterSelection(c) {

  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("show");
    if (x[i].className.indexOf(c) > -1) {
      x[i].classList += " show";
    }
  }

  active();
}

// Add active class to the current button (highlight it)
function active() {

  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("btn active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

$(".dropdown-menu").on('click', 'li a', function () {
  $(this).parent().parent().siblings(".btn:first-child").html($(this).text() + ' <span class="caret"></span>');
  $(this).parent().parent().siblings(".btn:first-child").val($(this).text());
});

/*function sendMail() {
  debugger;
  var link = "mailto:conrad.spear@parivedasolutions.com"
           + "?cc=myCCaddress@example.com"
           + "?subject=" + escape("This is my subject")
           + "?body=" + "Test";
  window.location.href = link;
}


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'caspear@outlook.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/
