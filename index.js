/// alert( 'Я' > 'А' ); // true
// alert( 'Коты' > 'Кода' ); // true
// alert( 'Сонный' > 'Сон' ); // true
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//              (1)

// let a = 100, b = 12;

// let c = ++a + b;
// console.log(a + c)



// let d = a + b++;
// console.log(c);
// console.log(d);
// console.log(b);
// console.log(a);

// // *************************************
//              (2)
// let user = "верно" > "истина";
// console.log(user);
// let usely = "-101" < "10";
// console.log(usely);

// // *************************************
//              (3)
// let num = "3200000" < "5";
// console.log(num);
// let number = "10" < "4!";
// console.log(number);

// // *************************************
//             (4)
// let numeric = '01' == 1;
// console.log(numeric);
// let nun = '001' == 1;
// console.log(nun);

// // *************************************
//             (5)
// let add = 2 + true;
// console.log(add);
// let plus = 2 + false;
// console.log(plus);

// // *************************************
//             (6) 
// let check = null + 221 - 1;
// console.log(check);
// let checkout = - 221 - 1 - null;
// console.log(checkout);

// // *************************************
//             (7)
// let strictly = '01' === 1;
// console.log(strictly);
// let equal = '001' === 1;
// console.log(equal);

// // *************************************
//             (8)
// let sum = (1 + 2, 3 + 4);
// console.log(sum);
// let ass = (-999 + 99, 12 + 21, 0.001);
// console.log(ass);

// *************************************

// if (age < 3) {
//     message = 'Здравствуй, малыш!';
//   } else if (age < 18) {
//     message = 'Привет!';
//   } else if (age < 100) {
//     message = 'Здравствуйте!';
//   } else {
//     message = 'Какой необычный возраст!';
//   }

// let age = prompt('Возраст?', 18);
// let message = (age < 3) ? 'Здравствуй, малыш' :
//     (age < 18) ? 'Привет!' :
//         (age < 100) ? 'Здравствуйте!' :
//             'Какой необычный возраст';

// alert(message);


// let age = prompt('How old are you?')

// let year = age >= 18 && age <= 35 && age  ? "Hello":"Error";
// console.log(year)


// ///////////////////////////////////////////////////////////////
              
// let x = prompt();
// let y = prompt();
// let z = prompt();
// if (x > y && x > z){
//     console.log(x)
// }
// else if (y > x && y > z){
//         console.log(y);
// } 
// else if (z > x && z > y){
//     console.log(z);
// }


// let x = prompt("Large");
// let y = prompt("Medium");
// let z = prompt("Small");

// if (x < y && y < z){
//     console.log(z);
// }

//////////////////////////////////////////////////////////////
              

// let a = prompt();
// let b = prompt();
// let c = prompt();  

// if (a > b && b > c && a > c){
//     console.log(a, b, c);

// }

// let number = 25;

// if (number >= 3 && number < 20)
// console.log('first');
// else if (number >20 && number <= 82)
// console.log('Second');
// else 
// console.log('Third');

// if (a < b && a < c && b < c && c > b) {
    
//         console.log(`${a}, ${b}, ${c}`);
//     else 
//         console.log(`${a}, ${c}, ${b}`);
//      else 
//         console.log(`${b}, ${c}, ${a}`);
         

    
// }
// } else if (b < a && b < c) {
//     if (a < c) {
//         console.log(`${b}, ${a}, ${c}`);
//     } else {
//         console.log(`${b}, ${c}, ${a}`);
//     }
// } else if (c < b && c < a) {
//     if (a < b) {
//         console.log(`${c}, ${a}, ${b}`);
//     } else {
//         console.log(`${c}, ${b}, ${a}`);
//     }
// }


// let questionName = prompt('What is your name?');
// if (questionName === "Админ") {
// let password = prompt('Введите пароль');
// if (password === "Я главный") {
// alert("Здравствуйте!");
// } else if (password = password) {
// alert("Неверный пароль");
// } else {
// alert("Отменено");
// };
// } else if (questionName = questionName) {
// alert("Я вас не знаю");
// } else {
// alert("Отменено");
// };

// alert(questionName);






// ////////////////////////////////////////////

// let hour = 2;
// alert (hour < 10 || hour >= null && hour > 18);



// ******************************************

// alert( 1 && 2 && null && 3 ); // null




// alert ( null || 1 || 2 );


// let x;
// let c =(x = 4)  &&  5  &&  null;
// alert(c);
// console.log(c);

// let x;
// true || (x = 1);
// alert(x);

// let a = 2 + 2;
// if (a == 3 ) {
//     alert( 'Маловато' );
//     alert( 'В точку!' );
//     alert( 'Перебор' );
//     alert( "Нет таких значений" );
// } else if ( a == 4){ 
//     alert( 'В точку!' );
//     alert( 'Перебор' );
//     alert( "Нет таких значений" );

// } else if(a == 5){
//     alert( 'Перебор' );
//     alert( "Нет таких значений" );

// } else{
//     alert( "Нет таких значений" );
// }



// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//   case 4:
//     alert( 'В точку!' );
//   case 5:
//     alert( 'Перебор' );
//   default:
//     alert( "Нет таких значений" );
// }


    //  Task 7  //

// let inputValue = prompt('Enter your age', 20);
// let text = (inputValue > 18) ? 'Hi': 'Hi baby';

// console.log(text);


// let inputValue = +prompt('Enter your age');
// let text;
// switch(inputValue){
//   case 18: 
//     text = 'Hi!'
//   break;
//   case 17: 
//     text = 'Hi, baby!'
//   break;
//   default: 
//     text = 'Hello!'
//     console.log(text);}

// **************************************************** //


// let inputValue = +prompt('Enter your age');
// let text;
// switch(true){
//     case (inputValue < 18):
//         text = 'Hi, baby!';
//         break;
//         default:
//             text = 'Hi!';
//             alert(text);
// }


// **************************************************************************

// while (condition) {
//     // код
//     // также называемый "телом цикла"
//   }


//   let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }
// let i = 0;
// while (true) {
// if (i === 3){
//     break;
// }
// console.log(i);
// i++;
// }
// **********************************************************
// let i = 1;
// do {
//   alert( i );
//   i++;
// } while (i < 3);
// *********************************************************
// let i = 0;
// for (; i < 3; ) { // выведет 0, затем 1, затем 2
//     alert(i);
//     i++;
//   }
// ***********************************************************

// let i = 12;
// for ( let i = 0; i < 3 ; i++){
//     console.log(i);
// }
// console.log('p', i);

// ***********************************************************

// function showMessage() {
//     alert( 'Всем привет!' );
//   }
  
//   showMessage();
//   showMessage();
//   showMessage();

// *************************************************************



// *************************************************************

// for (let i = 0 ; i <= 100; i++) {
//     if (i % 2  == 0) {
//       console.log(i);
//     }
//   }
// ****************************************************************

// function getFunction(start, end){

// for (let v = start; v >= end; v--){
//   console.log(v);  
//     }
// }
// getFunction(100, 50)

// ******************************************************************
// function getFunction(start, end){
       
        
//     for (let t = start; t <= end; t++){
//         if (t % 2  == 0) {
//             console.log(t);
//         }  
//     } 
//  }      let start = +prompt(15);
//         let end = +prompt(65);
//     getFunction(10,20);
//     getFunction(20,30);
//     getFunction(30,40);
//     getFunction(40,50);

// *******************************************************************


     
    // min(8,-4) == 4
    // min(-5,0) == -5
    // min(3,2) == 2
    // min(6,0) == 0
      
        

//       function
//       if (min(2,4))  {
//       return 2;
//     } else {
//       return 4;
    
//  }

// let tr = 20;
// for (let i =1; i <= id; i++){
//     for(let c = 1; c < i; c++){
//      document.write("$")
//     }
//    document.write('<br>')
// }


// let pr = 30
// for (let i = 1; i < 10; i++) { 
//     for (let n = i; n < 10; n++) { 
//       document.write("&nbsp"); 
//     }
//     for (let k = 0; k < i; k++) { 
//       document.write(k); 
//     }  
//     document.write(" <br/>")
//   }
// *********************************************
// let height = 8;
// let width = 10;
// let board = "";

//  for (var y = 0; y < height; y++) {
//      if(y>0) board += "\n";
//      for (var x = 0; x < width; x++) {
//          if ((x + y) % 2 == 0){
//              board += " ";
//          } else {
//              board += "#";
//          }
//      }
//  }

//  console.log(board);
//  *************************************************

// let fun =[4, 0, 2, 3, 1]
// let min = Math.min(fun);
// let max = Math.max(min);

// console.log(min);
// console.log(max);

// **************************************************

// function item(a, b, c, d, e) {
//     let res = Math.max(a,b,c,d,e);
//      console.log(res)
// }
// item(1,2,31,5,8);


// function it(a, b, c, d, e) {
//   let res = Math.min(a,b,c,d,e);
//    console.log(res)
// }
// it(1,2,31,5,8);


// *************************************************

// document.write("<table border='1px'>");

// document.write("<tr style=''>");

// for(i = 1; i < 11; i++)
// {
//   document.write("<th>["+ i + "]</th>");
// }
// for ( k = 1; k < 11; k++)
// {
//    let colorCode = "";
//    if (k & 2 === 0);
//   {
//     colorCode = "#eee";
//   } else { colorCode = "#99e256"; 

//   }
//   document.write("<tr style='background-color:'"+ colorCode +"'>");
//   for(j = 1; j < 11; j++)
//   {
    
//   }
// }
// document.write("</tr>");

// document.write("</table>");

// *******************************************


// var result = ' x ';

// function buff(val){
//   var buff = '';
//   var pad = 4 - val;
//     while( pad-- > 0 )
//             buff += ' ';            
//   return buff;
// }

// for (var i = 0; i < 5; i++) {

//     for (var j = 0; j < 5; j++) {

//         if(i == 0 && j > 0){
//           result +=  + j  + buff((j+'').length+2);
//         } 
//         else if(j == 0 && i > 0){
//           result +=  + i  ;
//         } 
//         else if(i > 0 && j > 0){
//         result += buff((i*j+'').length ) + i*j;
//         }
//     }
//     result += '\n'
// }
// console.log(result);

// *************************************************

// function table (multiplication) {
//   for (let i = 1; i <= multiplication; i++ ) {
//     for(let j = 1; j<= multiplication; j++){
//       let res = i*j;
//       document.write(" "+ res + " ")
//     }
//     document.write("<br>")
//   }

// }
// table(3);
// // *****************************************************

// let result = ' ';
// for (let i = 0; i < 5; i++) {

//     for (let j = 0; j < 5; j++) {

//         if(i == 0 && j > 0){
//           result += ' ' + j + ' ';
//         } 
//         else if(j == 0 && i>0){
//           result += ' ' + i + ' ';
//         } 
//         else if(i > 0 && j > 0){
//         result += (i*j) + ' ';
//         }
//     }
//     result += '\n';
// }

// console.log(result);
  


// "use strict";

// function showerror(error = 'Default error', code = 404) {
//   console.log(error. code);
// }


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();

// ask(
//   "Вы согласны?",
//  () >= { alert("Вы согласились."); },
//   () >={ alert("Вы отменили выполнение."); }
// );

// **************************************************************


// let myCalculate = (number, percent) => {
//     if ( percent > 0){
//      let per = number*percent*1/100;
//      console.log(per);
//     }else{
//         console.log('percent должен быть больше нуля!');
//     }
// }
// myCalculate(37, 6);
// myCalculate(65, 10);

// **************************************************************


// let myfunc = (N, P) => {
//     if ( P > 0 ){
//         return N * P * 1/100;      
//     } else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
//         console.log('percent должен быть больше нуля!');
//     }
// }
//  console.log(myfunc(20,30));
//  console.log(myfunc(2500, 45));

//  ***************************************************************

// let myFunc = (x,z) => {
//     console.log('work');
//   return z*3*x;
// }
// console.log(myFunc(5, 2));

// ****************************************************************

// const somepercent = (sum, percent) => {
//     if (percent <= 0){
//        alert("Number should be more than 0");
	
//     }
    
// 	alert(sum  * percent / 100)
// }

// *******************************************************

// let str  = 'I hate winter';
// for (const char of str ){
// alert( Math.random() + str);
// console.log(char);
// }

//     let str = 'Hello, world!'

// 	let result = mixString(str);
// 	console.log(result); // eHll,ow lr!d


// *******************************************************

// let str1 = 'hello world'
// console.log(str1.toLowerCase);
// console.log(str1.toUpperCase);

// alert( 'hello world'[0].toLowerCase() );


// let str2 = 'Widget with id';

// alert( str2.indexOf('id', 5) ) // 12


// *************************************
// const codes =
// [".... . .-.. .-.. ---", ".-- --- .-. .-.. -.."]

// const wordToMorse = function (word) {
//     const result = [];
// for (let i = 0; i < word.lenght; i += 1) {
//     const currentLetter = word[i];
//     const code = [currentLetter.charcodeAt()];
//     result.push(code);
// }
// //     return result.join('');
// }

    // var uniqueMorseRepresentations = function(words) {
    //     let count = 0;
    //     const structure = {};
    //     words.forEach(word => {
    //         const morse = wordToMorse(word);
    //     if (!structure[morse]){
    //         count += 1;
    //         structure[morse] = true; 
    //     }
    //     });
    //     return count;
    // };

    // function decodeMorse(morseCode) {
    //     var ref = { 
    //       '.-':     'a',
    //       '-...':   'b',
    //       '-.-.':   'c',
    //       '-..':    'd',
    //       '.':      'e',
    //       '..-.':   'f',
    //       '--.':    'g',
    //       '....':   'h',
    //       '..':     'i',
    //       '.---':   'j',
    //       '-.-':    'k',
    //       '.-..':   'l',
    //       '--':     'm',
    //       '-.':     'n',
    //       '---':    'o',
    //       '.--.':   'p',
    //       '--.-':   'q',
    //       '.-.':    'r',
    //       '...':    's',
    //       '-':      't',
    //       '..-':    'u',
    //       '...-':   'v',
    //       '.--':    'w',
    //       '-..-':   'x',
    //       '-.--':   'y',
    //       '--..':   'z',
    //     //   '.----':  '1',
    //     //   '..---':  '2',
    //     //   '...--':  '3',
    //     //   '....-':  '4',
    //     //   '.....':  '5',
    //     //   '-....':  '6',
    //     //   '--...':  '7',
    //     //   '---..':  '8',
    //     //   '----.':  '9',
    //     //   '-----':  '0',
    //     };
      
    //     return morseCode
    //       .split(' ')
    //       .map(
    //         a => a
    //           .split(' ')
    //           .map(
    //             b => ref[b]
    //           ).join('')
    //       ).join(' ');
    //   }
      
    //   var decoded = decodeMorse("-- ..- -. .- .-. .-");
    //   console.log(decoded);
// ********************************************************************************

//     let message = ".... . .-.. .-.. ---    -... .. .-.. .- .-..  -.- -.-- --.. -.--  -- ..- -. .- .-. .-"; 
//     let alphabet = {  
  
//    ".-":"a",
//    "-...":"b",
//    "-.-.":"c",
//    "-..":"d",
//    ".":"e",
//    "..-.":"f",
//    "--.":"g",
//    "....":"h",
//    "..":"i",
//    ".---":"j",
//    "-.-":"k",
//    ".-..":"l",
//    "--":"m",
//    "-.":"n",
//    "---":"o",
//    ".--.":"p",
//    "--.-":"q",
//    ".-.":"r",
//    "...":"s",
//    "-":"t",
//    "..-":"u",
//    "...-":"v",
//    ".--":"w",
//    "-..-":"x",
//    "-.--":"y",
//    "--..":"z"
   
   
// };
// let messageConst = [];
// let letter = prompt('');
// function split(letter)
// message.split(" ").map(function (word) {
//     word.split(" ").map(function (letter) {
//         messageConst.push(alphabet[letter]);
//     });
//     messageConst.push(" ");
// });
 
// console.log(messageConst.join(""));

// ********************************************************

// let str = prompt('Enter some code:', 'a');

// function getCodeMorse(s) {
//     if( s.toLowerCase() === 'a')
//     return '.-';
//     if( s.toLowerCase() === 'b')
//     return '-...';
//     if( s.toLowerCase() === 'c')
//     return '-.-.';
//     if( s.toLowerCase() === 'd')
//     return '-..';
//     if( s.toLowerCase() === 'e')
//     return '.';
//     if( s.toLowerCase() === 'f')
//     return '..-.';
//     if( s.toLowerCase() === 'g')
//     return '--.';
//     if( s.toLowerCase() === 'h')
//     return '....';
//     if( s.toLowerCase() === 'i')
//     return '..';
//     if( s.toLowerCase() === 'j')
//     return '.-..';
//     if( s.toLowerCase() === 'k')
//     return '-.-';
//     if( s.toLowerCase() === 'l')
//     return '.---';
//     if( s.toLowerCase() === 'm')
//     return '--';
//     if( s.toLowerCase() === 'n')
//     return '-.';
//     if( s.toLowerCase() === 'o')
//     return '---';
//     if( s.toLowerCase() === 'p')
//     return '.--.';
//     if( s.toLowerCase() === 'q')
//     return '--.-';
//     if( s.toLowerCase() === 'r')
//     return '.-.';
//     if( s.toLowerCase() === 's')
//     return '...';
//     if( s.toLowerCase() === 't')
//     return '-';
//     if( s.toLowerCase() === 'u')
//     return '..-';
//     if( s.toLowerCase() === 'v')
//     return '...-';
//     if( s.toLowerCase() === 'w')
//     return '.--';
//     if( s.toLowerCase() === 'x')
//     return '-..-';
//     if( s.toLowerCase() === 'y')
//     return '.-';
//     if( s.toLowerCase() === 'z')
//     return '--..';   
//  else 
//     return 'nothing';
// }
// let result = '';
// for(let i = 0; i<str.length; i++){
// result += getCodeMorse(str[i]);
// }

// console.log(result);
// //////////////////////////////////////////////////

// let res = countChar('hello');

// function wordToMorse(word){
//     for (let i = 0; i < word.length; i++){
//         if() {
            
//         }else{
            
//         }
//     }
// }
// console.log();
// /////////////////////////////////////////////

// let str = prompt('Enter some text:', 'hello');

// function countChar(str) {
//     // debugger;
//     str = str.toLowerCase().split(' ').join('');
//     let temp = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i]; // M, i = 0
//         let count = 1;

//         for (let j = 0; j < str.length; j++) {
//             if (char === ' ') continue;
//             if (char === str[j] && i !== j) {
//                 count += 1;
//             }
//         }
//         if (temp.indexOf(char) === -1) {
//             console.log(`${char}:${count}`);
//             temp += char;
//         }
//         count = 1;
//     }
// }

// countChar(str);

// *************************************************

// let text = prompt('Enter your message');

// if (text.indexOf('ea') >= 0){
//     console.log('ea');
// }else{
//     console.log("Nothing!");
// }

// **********************************************

// let arr = [1, 8, true, 'hello', false, 'hi', 'world'];
// function countTypeOfElements()
   
//     for(let i = 0; i < typeArr.length; i ++){
//         let check = typeArr[i];
//         if (isFinite(check)) num += check;
//     }
//     return num;
    
// function countTypeOfElements()
	
// let arr = [-1, '2', 3, -9, '$','!', true, false, NaN, null]

// function countTypeOfElements(){
// for(let number of arr){
//     let check = typeArr[i],
//     Num = 0,
//     Str = '';

// if (number = 0){
// res += number
// }
// }return +res
// }
// console.log(countTypeOfElements());
// //////////////////////////////////////////////////////////////////

// let typeArr = [1,8, true, 'hello', 'hi','sky', NaN, -1, null, undefined, 'apple'];
// function countTypeOfElements(){
//      for(let i = 0; i < typeArr.length; i++){
//          let Type = typeof typeArr[i];  
//          let Num = 0;
//          let Str =''; 

//          for(let j = 0; j < typeArr.length; j++){
//              let TypeOf = typeof typeArr[j];
//              if (Type === TypeOf){
//                  Num += 1;
//              }
//          }
//          if (Str.indexOf(Type) === -1){
//              console.log(`${Type}:${Num}`);
//              Str += Type;
//          }
//      }
// }
// countTypeOfElements();

// // /////////////////////////////////////////////////////////////////////////

// let arr = ["Яблоко", "Апельсин", "Груша"];

// for (let i = 1; i < arr.length; i++) {
//   alert( arr[i] );
// }
// // ////////////////////////////////////////////////////////////////////////
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// alert( fruits.length ); // 4
// // ////////////////////////////////////////////////////////////////////////////
// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// alert( styles.shift() );
// styles.unshift("Рэп", "Регги");
// // //////////////////////////////////////////////////////////////////////////
// let arr = ["a", "b"];
// arr.push(function() {
//   alert( this );
// })
// arr[2](); // "a","b",function
// /////////////////////////////////////////////////////////////////////////
// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(0, 1); 
// alert( arr ); 
// //////////////////////////////////////////////////////////////////////

// let arr = ["t", "e", "s", "t"];
// let newArr =  arr.slice();

// // newArr.pop();

// console.log(arr);
// console.log(newArr);
// // /////////////////////////////////////////////////////////////////////////

// let arr = [1, 2];

// let newArr = arr.concat(3,4,5);
// let newArr = [...arr,...a,...b]
// console.log(arr);
// console.log(newArr);
// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];  
//   // возвращает массив, состоящий из двух первых пользователей
//   let someUsers = users.filter(item => item.id < 3);
  
//   alert(someUsers.length); // 2

// ///////////////////////////////////////////////////////////////////////////////

// let arr = ["Bilbo", "Gandalf", "Nazgul"]; // 0B0i0l0b0o0

// let resArr = arr.map(item => {
//     let innerStr = item.split('').join('0');
//     return `0${innerStr}0`
// });

// let newResArray = newArray
// console.log(resArr);
// ////////////////////////////

// let arr1 = ["Bilbo", "Gandalf", "Nazgul"];

// let arr1S = arr1.map(item => {
//     let addzero = item.split('').join('0');
//     addzero = 0 + addzero + 0;
//     console.log(addzero)
//     return addzero
// });

// let consume = arr1S.map(inner => {
//     cut = inner.split('');
//     let str = '';
  
//     for(let i = 0;i < inner.length;i++) {
//         if(inner[i] == 0) {
//             continue;
//         }
//         str += inner[i];
//         console.log(str)
//     }
// })
// ////////////////////////////////////////////////////////

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// arr.reverse();
// console.log(arr);
// ///////////////////////////////////////////////////////

// let user = {};

// let prop, value;

// while(true){
//  prop = prompt("Что вы хотите узнать о пользователе?","name");
//  console.log(prop)
//  value = prompt("Что вы хотите узнать о пользователе?","empty");
// user[prop] = value;


// }
// for(let prop in user){
//   alert(prop, user[prop])
// }

// // for(let key in user){
// //     console.log(key);
// //     console.log(user[key]);
// // };
// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////

// let iphon12 = {
//     screen: "Super Retina XDR OLED, 6,1 дюйма/5,4 дюйма, максимальная яркость – 1200 нит",
//     prosessor: "Apple A14 Bionic",
//     oper: "4 ГБ ",
//     camera: " двойная ",
//     price: "от $799/от $699",
//     color: "черный, белый, красный, синий, золотой",
//     sellbeg: "23 октября/13 ноября",
// };
// for (let key in iphon12 ) {
    
//     console.log( key );  
    
//     console.log( iphon12[key] ); 
//   }
// ///////////////////////////////////////////////////////////////////

// let user ={name: "Bob" ,age: 21};

// let user2 = user;

// user2.address = "M2";

// console.log(user, 'user');
// console.log(user2, 'user2');

// //////////////////////////////////////////////////////////////////

// let firstObject = {
//     name: "Bob",
//     age:16,
//     addressHistory:[212, 34, 65, 122]
//  };

// firstObject.city = 'Bishkek';
// console.log(firstObject);

// let secondObj = {};

// for (let wrap in firstObject) {
//     secondObj[wrap] = firstObject[wrap];
// };

// secondObj.city = 'Osh';
// secondObj.addressHistory;
// console.log(secondObj);

///////////////////////////////////////////////////////////

// let myObject = {
//     name: "Bob",
//     age:16,
//     addressHistory:[212, 34, 65, 122]
// }
// let objects =[myObject];

// let deep = _.cloneDeep(object);

// object.addressHistory.push(10);

// ////////////////////////////////////////////////////////

// let user = {
//     name: "Джон",
//     age: 30
//   };
  
// let user2 = {
//     name: "User2",
//     age: 20
//   };
  
  
//   user.sayHi = function() {
//     console.log(this.name, this.age)

//   };
//   user2.sayHi = user.sayHi
//   user.sayHi(); // Привет!/////////////////////////////

// let john = {
//     name: 'John',
//     age: 18,
//     address: 'Masalieva 17',
//     score: [4, 1, 88, 32, 2, 7, 5, 40]
// };

// // john.score.sort((a,b) => a - b);
// john.score.sort((b,a) => b - a);

// console.log(john.score);
// console.log(john);
// ////////////////////////////////////////////////////////
// let john = {
//     name: 'John',
//     age: 18,
//     address: 'Masalieva 17',
//     score: [4, 1, 88, 32, 2, 7, 5, 40],
//     john() {
//         alert(this.score);
//     }
// };

// john.score = {}
//     // return a - b;

// console.log(john.score);
// console.log(john);
// ///////////////////////////////////////////////////////

// Домашка 1: Нужно создать конструктор Animal и еще нужно добавить базовые методы для Animal, можете добавить столько методов сколько хотите.
// Например что могут делать животные? Они могут ходить, бежать, рычать итд..
// Внутри методов можете делать что угодно, например можно просто выводить в консоль надпись "животный ходит" "животный бежит" что-то еще итд..

// Для всех объектов еще не забудьте добавить возможность преобразоватся к примитивным типам: string, number, default.
// Как только написали констуктор создайте несколько объектов на основе конструктура и вызывайте объязательно добавленные методы.

// function Animal (name, age, foodType){
//     this.name = name;
//     this.age = age;
//     this.foodType = foodType;
//     this.isPets = true;
// }
// Animal.prototype.sayHi = function(){
//     console.log(`This is a ${this.name}`);
//     console.log(`age:${this.age}`);
//     console.log(`foodType:${this.foodType}`);
// }

// let cat = new Animal('cat', 2, 'meat');
// this.valueOf = function(){
//     return this.age;}
// cat.sayHi();


// alert(cat);
// ///////////////////////////////////////////////////////////////

// let Animal = function(typeOfAnimal, classOfAnimal, name ,isPets, century){
//     this.typeOfAnimal = typeOfAnimal;
//     this.classOfAnimal = classOfAnimal;
//     this.name = name;
//     this.isPets = isPets;
//     this.century= century;

//     this[Symbol.toPrimitive] = function(hint){
//         // console.log(hint);
//         return hint === 'string'? this.name: this.century;

//         this.info = function(){
//             for (let prop)
//         }
//     }
// }
// /////////////////////////////////////////////////////////////////////////

// function sayHi() {
//     alert('Привет');
//   }
  
//   setTimeout = setTimeout(sayHi, 1000);
//   clearTimeout(timerId);

////////////////////////////////////////////////////////

// function Calculator(){

//         this.count = function(){
//         this.a = +prompt('Enter your number', '');             
//         this.b = +prompt('Enter your number', '');
//         this.c = prompt('a + b')
//     };
//         this.add = function(){
//         return this.a + this.b;

//     };
//         this.sub = function(){
//         return this.a - this.b;

//     };
//         this.mul = function(){
//         return this.a * this.b;

//     };
//         this.div = function(){
//         return this.a / this.b;

//     };
//         this.per = function(){
//         return this.a * this.b * 1/100;

//     };
       
// }


// let calculator = new Calculator();

// calculator.count();

// alert('add=' + calculator.add());
// alert('sub=' + calculator.sub());
// alert('mul=' + calculator.mul());
// alert('div=' + calculator.div());
// alert('per=' + calculator.per());
// alert('root=' + calculator.root());

// setTimeout("alert()", 3000);
// ////////////////////////////////////////////////////////

// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     run(){
//         console.log(`${this.name} is running...`)
//     }
// }
// let Rabbit = new Animal('Bob', 1);
// console.log(Rabbit.run())

// ////////////////////////////////////////////////////////

// // заменим цвет фона на красный,
// document.body.style.background = "red";

// // а через секунду вернём как было
// setTimeout(() => document.body.style.background = "", 1000);

// function bgc(){
//     document.body.style.background = "", 1000;
// }
// //////////////////////////////////////////////////////////

// function str(st) {
//     let tex = st;
//     let myStr = '';
//     tex = tex.split(' ')
//     tex.map(item => {
//         let res = item.replace(item[0], item[0].toUpperCase())
//         emStr += res + ' ';
             
//     })
//    return (myStr)
//    }
//    let pr = prompt('Enter some text') 
//    console.log(str(pr))
          
   
// //   ///////////////////  TASK 4  ////////////////////////////
   
//    let arr = ['hello', 'world','the','lowest', 'sum'];
//    let arr1 = arr.slice();
//    arr = [];
//    arr1.map(item => {
//        let res = item.split('');
//        res =  res.reverse().join('');
//        console.log(res);
//       let inner =  arr.push(res)
//    })
   
//    console.log(arr);

//    ///////////////// Task  ////////////////////////////////

// let arr = ["phuiajijofijeorfjm"];
// let word = '';

// for(let i = 0; i < arr.length; i++){
//     word = arr[i].toLowerCase().split('').sort().join('');
// }
// console.log(word);

// //////////////////////////////////////////////////////


// document.body.style.background = 'red'; // сделать фон красным

// setInterval(() => document.body.style.background = '', 3000); 
// /////////////////////////////////////////////////////////////////


