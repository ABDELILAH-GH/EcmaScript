/*
Math.trunc 

*/

function  execute (){
      let number = document.querySelector('#number').value;
      /* let result = Math.trunc(number) 
         9.9 = >> 9
         -4.5 =>> -5    
      */

      /*let result = Math.sign(number)
      -5 => -1
      4 => 1
      0 => 0
      */

      /*let result = Math.cbrt(number)
       8 => 2 جدر مربع
      */

      /*
      let result = Math.log اللوغاريتم
      */

      /*
      let result = Math.pow(number,3) ----- 2 => 8
      number ** 3 -----  2 => 8 
      */
      document.querySelector('#number').value = ""
      document.querySelector("#result").value = result
}
