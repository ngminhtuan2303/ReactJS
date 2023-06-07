import logo from './logo.svg';
import './App.css';
import { member, age } from './member.js';
import *as nguvkl from './member';
// import nguvkl from './member';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //variables
// //var
// var x = 10;
// function myFnc() {
//     var y = x + 5
//     console.log(y); /* output: 10, x có ảnh hưởng tới Function */
// }
// console.log(x); /* output: 10, x có ảnh hưởng khắp nơi */
// myFnc();

// if (x === 10) {
//     var x = 20;
//     console.log(x);
// }
// console.log(x);

// //let
// let x = 10;
// if (x === 10) {
//     let x = 20;
//     console.log(x);
// }
// console.log(x);

// //const
// const x = 10;
// console.log(x);
// // if (x === 10) {
// //     x = 20;
// //     console.log(x);
// // }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // default parameters
// // Gán mặc định tại vị trí khai báo
// function multiply(a, b = 1) {
//     return a * b;
// }
// console.log(multiply(5, 2));
// console.log(multiply(5));

// // Gán bên trong function
// function member(name) {
//     name = name || "Hello World";
//     return name;
// }
// console.log(member());
// console.log(member("Nguyễn Minh Tuấn"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Spread syntax
// // Spread syntax với Array
// const oldArray = [1, 2, 3];
// //const newArray = [oldArray, 4, 5];
// const newArray = [...oldArray, 4, 5];
// console.log(newArray);

// // Spread syntax với Object
// const oldObject = {
//     name: 'Nguyễn Minh Tuấn'
// };
// const newObject = {
//     // oldObject,
//     ...oldObject,
//     age: 23
// };
// console.log(newObject);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Rest parameters
// function number(num1, num2, ...numOther) {
//     console.log("x: ", num1);
//     console.log("y: ", num2);
//     console.log("Other number: ", numOther);
// }
// number(1, 2, 3, 4, 5, 6, 7);

// function number(...numOther) {
//   var x = console.log(number.length);
//   return x;
// }
// // number();
// // number(4);
// number(1, 2, 3, 4, 6);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Destructuring
// // Destructuring với Array
// const array = [1, 2, 3];
// const [a, b] = array;
// console.log(a);
// console.log(b);
// console.log(array);

// // Destructuring với Object
// const myObject = {
//     name: 'Nguyễn Minh Tuấn',
//     age: 23
// }
// const { name, age } = myObject;
// console.log(name);
// console.log(age);
// console.log(myObject);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // arrow function
// var member = (name, age) => {
//     console.log(name, age);
// }
// member("Nguyễn Minh Tuấn", 23);

// // arrow function 1 tham số
// var member = (name) => {
//     console.log(name);
// }
// member("Nguyễn Minh Tuấn");

// // arrow function không có tham số
// var member = () => {
//     console.log("Nguyễn Minh Tuấn");
// }
// member();

// // arrow function return giá trị
// var a = [1, 2, 3];
// var arr = () => a[2];
// console.log(arr());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Classes
// // Cấu trúc cơ bản của một Classes
// class Member {
//     constructor() {
//         this.name = "Nguyễn Minh Tuấn";
//     }
// }
// var x = new Member();
// console.log(x.name);
// // Member: Tên classes
// // constructor() hàm khởi tạo đối tượng cho một class, mỗi class chỉ chứa một hàm khởi tạo duy nhất
// // this.name với name là tham số đặt bất kỳ
// // var x = new Member() cần khai báo Classes trước khi dùng

// // Classes - sử dụng với method
// class Member {
//     constructor() {
//         this.name = "Nguyễn Minh Tuấn";
//     }
//     memberName() {
//         return this.name;
//     }
// }
// var x = new Member();
// console.log(x.memberName());

// // Classes - tính kế thừa (inheritance)
// class Member {
//   constructor() {
//     this.name = "Nguyễn Minh Tuấn";
//   }
//   memberName() {
//     return this.name;
//   }
// }
// class User extends Member {
//   constructor(name, age) {
//     super(name);
//     this.age = 23;
//   }
//   memberInfo() {
//     return this.memberName() + '\nTuổi: ' + this.age;
//   }
// }
// var x = new User();
// console.log(x.memberInfo());
// // User extends Member: Classes User kế thừa phương thức của Member.
// // name: đây là tham số được sử dụng trong Member.
// // super(name); khai báo này cần thiết để gọi các tham số đã có trong Member.
// // this.memberName() sử dụng lại phương thức của Member.
// // var x = new User() cần khai báo Classes User trước khi dùng.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Javascript - export theo mặc định (default)
console.log(member.name);
console.log(age.age);
// console.log(nguvkl.name);
console.log(nguvkl.member.name);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default App;

