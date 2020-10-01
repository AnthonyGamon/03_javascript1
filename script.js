// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?", "~", "`"];

var completedPassword = "";

for (var i = 0; i<1; i++) {

  var confirmNumber = prompt("How many characters would you like in your password? Must be at least 8 characters and no more than 128 characters.");
 confirmNumber = Number(confirmNumber);
  
 
 var confirmLowercase = confirm("Would you like lowercase characters in your password? Okay is yes. Cancel is no.");
  var confirmUppercase = confirm("Would you like uppercase characters in your password? Okay is yes. Cancel is no.");
  var confirmNumberic = confirm("Would you like numberic characters in your password? Okay is yes. Cancel is no.");
  var confirmSpecial = confirm("Would you like special characters in your password? Okay is yes. Cancel is no.");

  if ((confirmNumber <8 || confirmNumber >128)&&(confirmLowercase == false && confirmUppercase == false && confirmNumberic == false && confirmSpecial == false))  {
    alert("Your password must be more than 8 characters or less than 128 characters and you must select one special password characteristic")
  }
  if ((confirmNumber >=8 || confirmNumber <=128)&&(confirmLowercase == false && confirmUppercase == false && confirmNumberic == false && confirmSpecial == false))  {
    alert("Your password does not meet one of the special reqirments must select okay to one of the options.")
  }
  if ((confirmNumber <8 || confirmNumber >128)&&(confirmLowercase == true || confirmUppercase == true || confirmNumberic == true || confirmSpecial == true))  {
    alert(" Your password must be atleast 8 characters and less than 128 characters")
  }
  if ((confirmNumber >=8 || confirmNumber <=128)&&(confirmLowercase == true || confirmUppercase == true || confirmNumberic == true || confirmSpecial == true))  {

    if (confirmLowercase == true && confirmUppercase == true && confirmNumberic == true && confirmSpecial == true ){
      for ( var j = 0; j<confirmNumber; j++){ 
        var num = Math.floor(Math.random() * 4);
          if (num = 1 ) { 
            var lowercaseLetter = Math.floor(Math.random() * 26);
            completedPassword += lowerCase[lowercaseLetter];
          }
          if (num = 2 ){ 
            var uppercaseLetter = Math.floor(Math.random() * 26);
            completedPassword += upperCase[uppercaseLetter];
          }
          if (num = 3 ){ 
            var numericText = Math.floor(Math.random() * 10);
            completedPassword += numericCharacters[numericText];
          
          }
          if (num = 4 ){ 
            var specialText = Math.floor(Math.random() * 30);
            completedPassword += specialCharacters[specialText];
           
          }
      }
    }
// all are true
    if (confirmLowercase == true && confirmUppercase == true && confirmNumberic == true && confirmSpecial == true ){
      for ( var j = 0; j<confirmNumber; j++){ 
        var num = Math.floor(Math.random() * 4);
          if (num = 1 ) { 
            var lowercaseLetter = Math.floor(Math.random() * 26);
            completedPassword += lowerCase[lowercaseLetter];
          }
          if (num = 2 ){ 
            var uppercaseLetter = Math.floor(Math.random() * 26);
            completedPassword += upperCase[uppercaseLetter];
          }
          if (num = 3 ){ 
            var numericText = Math.floor(Math.random() * 10);
            completedPassword += numericCharacters[numericText];
          
          }
          if (num = 4 ){ 
            var specialText = Math.floor(Math.random() * 30);
            completedPassword += specialCharacters[specialText];
           
          }
      }
    }
// all but LOWERCASE are true
    if (confirmLowercase == false && confirmUppercase == true && confirmNumberic == true && confirmSpecial == true ){
      for ( var j = 0; j<confirmNumber; j++){ 
        var num = Math.floor(Math.random() * 4);

          if (num = 2 ){ 
            var uppercaseLetter = Math.floor(Math.random() * 26);
            completedPassword += upperCase[uppercaseLetter];
          }
          if (num = 3 ){ 
            var numericText = Math.floor(Math.random() * 10);
            completedPassword += numericCharacters[numericText];
          
          }
          if (num = 4 ){ 
            var specialText = Math.floor(Math.random() * 30);
            completedPassword += specialCharacters[specialText];
           
          }
      }
    }
// all but UPPERCASE are true
    if (confirmLowercase == true && confirmUppercase == false && confirmNumberic == true && confirmSpecial == true ){
      for ( var j = 0; j<confirmNumber; j++){ 
        var num = Math.floor(Math.random() * 4);
          if (num = 1 ) { 
            var lowercaseLetter = Math.floor(Math.random() * 26);
            completedPassword += lowerCase[lowercaseLetter];
          }

          if (num = 3 ){ 
            var numericText = Math.floor(Math.random() * 10);
            completedPassword += numericCharacters[numericText];
          
          }
          if (num = 4 ){ 
            var specialText = Math.floor(Math.random() * 30);
            completedPassword += specialCharacters[specialText];
           
          }
      }
    }
    // all but NUMERIC are true
    if (confirmLowercase == true && confirmUppercase == true && confirmNumberic == false && confirmSpecial == true ){
      for ( var j = 0; j<confirmNumber; j++){ 
        var num = Math.floor(Math.random() * 4);
          if (num = 1 ) { 
            var lowercaseLetter = Math.floor(Math.random() * 26);
            completedPassword += lowerCase[lowercaseLetter];
          }
          if (num = 2 ){ 
            var uppercaseLetter = Math.floor(Math.random() * 26);
            completedPassword += upperCase[uppercaseLetter];
          }

          if (num = 4 ){ 
            var specialText = Math.floor(Math.random() * 30);
            completedPassword += specialCharacters[specialText];
           
          }
      }
    }
    // all but SPECIAL are true
    if (confirmLowercase == true && confirmUppercase == true && confirmNumberic == true && confirmSpecial == false ){
      for ( var j = 0; j<confirmNumber; j++){ 
        var num = Math.floor(Math.random() * 4);
          if (num = 1 ) { 
            var lowercaseLetter = Math.floor(Math.random() * 26);
            completedPassword += lowerCase[lowercaseLetter];
          }
          if (num = 2 ){ 
            var uppercaseLetter = Math.floor(Math.random() * 26);
            completedPassword += upperCase[uppercaseLetter];
          }
          if (num = 3 ){ 
            var numericText = Math.floor(Math.random() * 10);
            completedPassword += numericCharacters[numericText];
          
          }

      }
    }

        // only LOWERCASE is true
        if (confirmLowercase == true && confirmUppercase == false && confirmNumberic == false && confirmSpecial == false ){
          for ( var j = 0; j<confirmNumber; j++){ 
            var num = Math.floor(Math.random() * 4);
              if (num = 1 ) { 
                var lowercaseLetter = Math.floor(Math.random() * 26);
                completedPassword += lowerCase[lowercaseLetter];
              }
              
              
    
          }
        }
        // only UPPERCASE is true
    if (confirmLowercase == false && confirmUppercase == true && confirmNumberic == false && confirmSpecial == false ){
      for ( var j = 0; j<confirmNumber; j++){ 
        var num = Math.floor(Math.random() * 4);
        
          if (num = 2 ){ 
            var uppercaseLetter = Math.floor(Math.random() * 26);
            completedPassword += upperCase[uppercaseLetter];

      }
    }
  }
// only NUMERIC is true
if (confirmLowercase == false && confirmUppercase == false && confirmNumberic == true && confirmSpecial == false ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);
   
      if (num = 3 ){ 
        var numericText = Math.floor(Math.random() * 10);
        completedPassword += numericCharacters[numericText];
      
      }

  }
}
// only SPECIAL is true
if (confirmLowercase == false && confirmUppercase == false && confirmNumberic == false && confirmSpecial == true ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);

      if (num = 4 ){ 
        var specialText = Math.floor(Math.random() * 30);
        completedPassword += specialCharacters[specialText];
       
      }
  }
}
// lowercase and uppercase are true --
if (confirmLowercase == true && confirmUppercase == true && confirmNumberic == false && confirmSpecial == false ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);
      if (num = 1 ) { 
        var lowercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += lowerCase[lowercaseLetter];
      }
      if (num = 2 ){ 
        var uppercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += upperCase[uppercaseLetter];
      }

  }
}
// lowercase and numeric are true --
if (confirmLowercase == true && confirmUppercase == false && confirmNumberic == true && confirmSpecial == false ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);
      if (num = 1 ) { 
        var lowercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += lowerCase[lowercaseLetter];
      }

      if (num = 3 ){ 
        var numericText = Math.floor(Math.random() * 10);
        completedPassword += numericCharacters[numericText];
      
      }

  }
}
// lowercase and special are true --
if (confirmLowercase == true && confirmUppercase == false && confirmNumberic == false && confirmSpecial == true ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);
      if (num = 1 ) { 
        var lowercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += lowerCase[lowercaseLetter];
      }

      if (num = 4 ){ 
        var specialText = Math.floor(Math.random() * 30);
        completedPassword += specialCharacters[specialText];
       
      }
  }
}
// uppercase and numeric are true
if (confirmLowercase == false && confirmUppercase == true && confirmNumberic == true && confirmSpecial == false ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);

      if (num = 2 ){ 
        var uppercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += upperCase[uppercaseLetter];
      }
      if (num = 3 ){ 
        var numericText = Math.floor(Math.random() * 10);
        completedPassword += numericCharacters[numericText];
      
      }
  }
}
// uppercase and special are true
if (confirmLowercase == false && confirmUppercase == true && confirmNumberic == false && confirmSpecial == true ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);

      if (num = 2 ){ 
        var uppercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += upperCase[uppercaseLetter];
      }

      if (num = 4 ){ 
        var specialText = Math.floor(Math.random() * 30);
        completedPassword += specialCharacters[specialText];
       
      }
  }
}
// numeric and special are true
if (confirmLowercase == false && confirmUppercase == false && confirmNumberic == true && confirmSpecial == true ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);

      if (num = 3 ){ 
        var numericText = Math.floor(Math.random() * 10);
        completedPassword += numericCharacters[numericText];
      
      }
      if (num = 4 ){ 
        var specialText = Math.floor(Math.random() * 30);
        completedPassword += specialCharacters[specialText];
       
      }
  }
}
// lowercase, uppercase and numeric are true
if (confirmLowercase == true && confirmUppercase == true && confirmNumberic == true && confirmSpecial == false ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);
      if (num = 1 ) { 
        var lowercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += lowerCase[lowercaseLetter];
      }
      if (num = 2 ){ 
        var uppercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += upperCase[uppercaseLetter];
      }
      if (num = 3 ){ 
        var numericText = Math.floor(Math.random() * 10);
        completedPassword += numericCharacters[numericText];
      
      }

}
// lowercase, numeric and special are true
if (confirmLowercase == true && confirmUppercase == false && confirmNumberic == true && confirmSpecial == true ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);
      if (num = 1 ) { 
        var lowercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += lowerCase[lowercaseLetter];
      }

      if (num = 3 ){ 
        var numericText = Math.floor(Math.random() * 10);
        completedPassword += numericCharacters[numericText];
      
      }
      if (num = 4 ){ 
        var specialText = Math.floor(Math.random() * 30);
        completedPassword += specialCharacters[specialText];
       
      }
  }
}
// lowercase, uppercase and special are true
if (confirmLowercase == true && confirmUppercase == true && confirmNumberic == false && confirmSpecial == true ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);
      if (num = 1 ) { 
        var lowercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += lowerCase[lowercaseLetter];
      }
      if (num = 2 ){ 
        var uppercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += upperCase[uppercaseLetter];
      }

      if (num = 4 ){ 
        var specialText = Math.floor(Math.random() * 30);
        completedPassword += specialCharacters[specialText];
       
      }
  }
}
// uppercase, numeric and special are true
if (confirmLowercase == false && confirmUppercase == true && confirmNumberic == true && confirmSpecial == true ){
  for ( var j = 0; j<confirmNumber; j++){ 
    var num = Math.floor(Math.random() * 4);

      if (num = 2 ){ 
        var uppercaseLetter = Math.floor(Math.random() * 26);
        completedPassword += upperCase[uppercaseLetter];
      }
      if (num = 3 ){ 
        var numericText = Math.floor(Math.random() * 10);
        completedPassword += numericCharacters[numericText];
      
      }
      if (num = 4 ){ 
        var specialText = Math.floor(Math.random() * 30);
        completedPassword += specialCharacters[specialText];
       
      }
  }
}
}
  // return password
}
} return completedPassword;
}






generateBtn.addEventListener("click", writePassword);
