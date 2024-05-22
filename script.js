// When the user scrolls down 20px from the top of the document, slide down the navbar

var body = document.body,
html = document.documentElement;

var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                   html.clientHeight, html.scrollHeight, html.offsetHeight );

if (documentHeight <= window.innerHeight) {
   document.getElementById("navbar").style.top = "0";
} else {
  window.onscroll = function() {
    scrollFunction()
  };
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
