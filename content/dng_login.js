// var demo_input = document.getElementById("StudentId");

// var type_this = "HE180534";
// var index = 0;

// window.next_letter = function() {
//     if (index <= type_this.length) {
//         demo_input.value = type_this.substr(0, index++);
//         setTimeout("next_letter()", 50);
//     }
// }
// next_letter();

 //Get the paragraph to add attribute.
 let doc = document.getElementById("StudentId");
           
 //Creating a class attribute.
 let attr = document.createAttribute("value");

 //Setting the value of class attribute.
 attr.value = "value";

 //Adding class attribute to paragraph.
 doc.setAttributeNode(attr);
 doc.setAttribute("value", "HE180534");

// Get the input field
var input = document.getElementById("StudentId");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    var divs = document.querySelectorAll('.btn-primary'); 

    for (i = 0; i < divs.length; ++i) {
        divs[i].click();
    };
  }
});