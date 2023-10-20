// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122)
var code =prompt(" Enter your Code Greater then 50 , less then 90 ")
if (code >= 50  &&  code <=90   ){
      alert(" you have type a capital letter")
}   else if  (code >= 97 &&  code <=122   ){
      alert(" you have type a small letter")
} else if  (code >= 48 &&  code <=57   ){
      alert(" you have type a number")
} 


      // 2. Write a JavaScript program that accept two integers and
      //       display the larger. Also show if the two integers are equal.

  document.write(" <br> Q : 02 ")  
var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
if (num1> num2) {
    alert(num1 + " is greater than" + num2)
}
else if (num1 < num2 ) {
    alert(num2 + " is Greater than" + num1)

}
 else alert(num1 + " and " + num2 + " are equal")

//  3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
                document.write(" <br> Q : 03 ")    
var num = prompt ("   Enter your number!  ")
if (num >   0  ){
      document.write(" Positive Number   ")     
}
else if ( num <   0   ){
      document.write(" Negtive Number   ")    
}
else if ( num ==   0   ){
      document.write(" Zero   ")    
}


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
document.write(" <br> Q : 04 ")  
    var  character = prompt ("  Enter the vowels  ")
    if (  character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'  ){
      alert (" TRUE")
      document.write("  <br> TRUE  ")
    }
    else {
      alert (" FALSE")
      document.write("  <br> FALSE  ")
    }


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
document.write(" <br> Q : 05 ")  
            var strongPassword = "Rizwan123"
            var password = prompt ( " Enter  your password " )
          if ( password  ===  null  ||  password === " "  ){
            alert (" plz Enter your  password   ")
         } else if ( password === strongPassword  ){
            alert (" correct password")
         }
else {
alert('Enter Correct Password')
}
// 6. This if/else statement does not work. Try to fix it:

            document.write(" <br> Q : 06 ")           
var hours = 13;
var greeting = prompt ("Enter your number")
if (greeting <  hours ) {
alert ( "Good morning")
document.write("<br> Good Morning")
     }
else {     
 alert ("Good evining")
 document.write("<br> Good Evening")
}
// Q = 7  Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements.
document.write(" <br> Q : 07 ") 
  var time = +prompt("What time is it?");
if(time >= 0 && time <1200){
    alert("Good Morning");
}
else if (time >= 1200 && time <1700){
    alert("Good Afternoon");
}
else if(time >= 1700 && time <2100){
    alert("Good Evining");
}
else if(time >= 2100 && time <2359){
    alert("Good Night");
}
