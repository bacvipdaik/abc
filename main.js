// alert(); thông báo message
// console(); 
// confirm(); thông báo có thêm cance
// prompt(); thông báo có thêm thanh input
// setTimeout(); chay code 1 lần
// setInterval(); lặp lại lệnh nhiều lần sau 1 khoảng thời gian set

// setTimeout(function() {
//     alert('Thông báo');
// }, 1000)
// setInterval(function() {
//     console.log('Đây là log' + Math.random())
// }, 1000)

// alert(fullName);
// console.log(fullName);
// confirm(fullName);
// prompt(fullName);
// setTimeout(function(){
//     console.log(fullName);
// })
// setInterval(function(){
//     console.log(fullName);
// })
// var fullName = "Nguyen Huu Bac";
// var age = 22;
// console.log(fullName + ' ' + age);
// console.log(typeof age);

/**
 * === so sánh cả về kiểu dữ liệu
 * !== so sánh cả về kiểu dữ liệu
 */

// function whiteLog() {
//     var myString = "";
//     for (var param of arguments) {
//         myString += param + ' -';
//     }
//     console.log(myString);
// }
// whiteLog('a', 'b', 'c', 'd', 'e', 'f', 'g');

// var isConfirm = confirm('Message');
// console.log(isConfirm);

// function plus(a,b) {
//     return a.toString() + b.toString();
// }
// console.log(plus(2,3));
// hai hàm trùng tên thì hàm 1 sẽ bị hàm 2 ghi đè

// Declaretion function có thể gọi trước khi được định nghĩa
// function showMessage() {
//     console.log('Declaretion function3')
// }

// Expression function định nghĩa xong mới được gọi
// var showMessage2 = function() {
//     console.log('Expression function3')
// }

//Chuỗi
// tìm kí tự trong chuỗi
// var fullName = 'Huu Bac 2001 JS F8';
// console.log(fullName.search('JS')); 

// cắt chuỗi
// console.log(fullName.slice(0-2))

// ghi dè replace
// console.log(fullName.replace(/JS/g, 'F8'))

// Chuyển chữ hoa chữ thường
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// Trim loại bỏ khoảng trắng hai đầu chuỗi

// Split cắt chỗi thành mảng
// var language = 'js , php , react';
// console.log(language.split(''));

// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

// function strToArray(str) {
//     return str.split(', ');
// }
// console.log(strToArray(coursesStr))

function getUpperCaseName(name) {
    return name.toUpperCase();
}
// console.log(getUpperCaseName("Nguyen van a")) 
// console.log(getUpperCaseName("nGuyen vAn C")) 

function isNumber(value) {
    return Number.isFinite(value);
}
// console.log(isNumber(100));
// console.log(isNumber("bac"));
// console.log(isNumber(NaN));
// console.log(isNumber(12.5));

//mảng

//  * To string chuyển sang kiểu dữ liệu string
//  * join chuyển đổi mảng thành 1 chuỗi và thêm các phần tử giữa các thành phần trong mảng
//  * pop xóa đi phần tử cuối mảng và trả về phần tử đã xóa
//  * push thêm 1 hoặc nhiều phần tử cuối mảng
//  * shift xóa đi 1 phần tử ở đầu mảng và trả về phần tử đã xóa
//  * unshift thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
//  * splice xóa cắt chèn phần tử ms vào mảng
//  * concat nối mảng
//  * slice cắt các thành phần của mảng
 
// var languages = [
//     'JavaScript',
//     'PHP',
//     'React',
// ];
// languages.splice(1,3);
// console.log(languages);

// đối tượng
// xóa element (delete objectName.element;)
var myInfo = {
    name: 'huu bac',
    age: 22,
    address: 'HN',
    getName: function() {
        return this.name;
    }
};
// console.log(myInfo.getName());

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}
User.prototype.className = 'JS';
User.prototype.getClassName = function(){
    return this.className;
};
var outhor = new User('Bac', 'Nguyen', 'Avatar');
var user = new User('Linh', 'Quang', 'Avatar');
outhor.title = 'chs lol';
user.commet = 'valoran';
// console.log(outhor.className);
// console.log(user.getClassName());

// đối tượng date
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
// console.log(day + ' ' + month + ' ' + year);

//Đối tượng toán học
/**
 * Math.PI 
 * Math.round() làm tròn số 
 * Math.abs() giá trị tuyệt đối 
 * Math.ceil() làm tròn lên
 * Math.ceil() làm tròn xuống
 * Math.ramdom()
 * Math.min()
 * Math.max() 
 */
// var random = Math.floor(Math.random() * 100);
// if(random < 5) {
//     console.log('Thành công!');
// }else(console.log('Thất bại'));
// function getRandomItem(item) {
//     var random = Math.floor(Math.random() * item.length);
//     return item[random];
// };
//  var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
//  ];
//  console.log(getRandomItem(bonus));

//  const form = document.querySelector('form'); 
//  form.addEventListener('submit', (e) =>  e.preventDefault()); 
//     const username = document.getElementById('username').value; 
//     const password = document.getElementById('password').value; // Do something with the username and password });

// function getRandomNumbers(min , max, length) {
//     var array = [];
//     for (var i = 0; i < length; i++){
//         array.push(Math.round(Math.random()*(max-min)+min));
//     }
//     return array;
// }
// console.log(getRandomNumbers(5,10,6));

// function getTotal(arr) {
//     var sum = 0;
//     for(var i=0; i< arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// var arr = [1, 2, 3];
// console.log(getTotal(arr));

// var arr = [
//     'javaScript',
//     'php',
//     'java',
//     'html',
// ];
// var arrLength = arr.length;
// for (var i = 0; i < arrLength; i++) {
//     console.log(arr[i]);
// }

// var order = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// function getTotal(orders) {
//     var total = 0;
//     for(var i = 0; i < orders.length; i++){
//         total += orders[i].price;
//     }
//     return total;
// }
// console.log(getTotal(order))

// var arr = [
//     'javaScript',
//     'php',
//     'java',
//     'html',
// ];
// for(var key in arr){
//     console.log(arr[key]);
// }

// function run(object) {
//     var arr = [];
//     for(var key in object){
//          var result = `Thuộc tính ${key} có giá trị ${object[key]}`;
//         arr.push(result);
//     }return arr;
// }
// console.log(run({ name: 'Nguyen Van A', age: 16 }));


/**
 * Array methods:
 *  forEach() duyệt qua từng phần tử của mảng
 *  every() kiểm tra các phần tử của mảng có thỏa mãn cùng thỏa mãn 1 điều kiện hay không? trả về Boolean
 *  some() chỉ cần 1 phần tử thỏa mãn điều kiện là được
 *  find() tìm trong mảng chỉ chả về 1 phần tử
 *  filter() tìm trong mảng trả về tất cả các phần tử thoả mãn
 *  map() sửa và thêm các key vào mảng
 *  reduce()
 */

// var courses = [
//     {
//         id: 1,
//         name: 'JS',
//         coin: 10,
//     },
//     {
//         id: 2,
//         name: 'PHP',
//         coin: 10,
//     },{
//         id: 3,
//         name: 'HTML',
//         coin: 10,
//     },{
//         id: 4,
//         name: 'CSS',
//         coin: 0,
//     },
// ];
// var isFree = courses.filter(function (course, index) {
//     console.log(index);
//     return course.coin === 10;
// });
// console.log(isFree);

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

// var newSport = sports.map(function (sport, index) {
//     return{
//         id: index,
//         name: 'Khoa hoc: ' + sport.name,
//         like: sport.like,
//         likeText: 'Tong: ' + sport.like,  
//     }
// });
// console.log(newSport);

var totalLike = sports.reduce(function (total, a) {
    return total + a.like;
}, 0);
// console.log(totalLike);

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (a, b){
    return a.concat(b);
}, []);
// console.log(flatArray);

var topics = [
    {
        topic: "Frontend",
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'javaScript'
            },
        ]
    },
    {
        topic: "BackEnd",
        courses: [
            {
                id: 1,
                title: 'php'
            },
            {
                id: 2,
                title: 'VueJS'
            },
        ]
    },
];

var newCourse = topics.reduce(function (a,b){
    return a.concat(b.courses);
}, []);
// console.log(newCourse);

var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];

  function calculateRating(a){
    var movieList = a.filter(function(movie){
        return movie.Director === 'Christopher Nolan';
    });
    // console.log(movieList);
    var imdb = movieList.reduce(function(total,poin){
        return total + Number(poin.imdbRating)
    }, 0);
    var imdbTB = imdb / movieList.length;
    return imdbTB;
}
//   console.log(calculateRating(watchList)); 

//Call Back
Array.prototype.reduce2 = function(callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (;i < this.length; i++) {
        result = callback(result, this[i], this);
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = numbers.reduce2((total,number) => {
    return total + number;
}, 10);
// console.log(result);

 var courses = [
    'JAVA',
    'php',
    'html',
    'css',
 ];
//map()
 Array.prototype.map2 = function (callback) {
    var output = [], arrLength = this.length;
    for (var i = 0; i < arrLength; i++) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}
var htmls = courses.map2(function (course){
    return `<h2>${course}</h2>`
});
// console.log(htmls.join(''));
//forEach()
Array.prototype.forEach2 = function(cb){
    var op = [], arrLength = this.length;
    for (var i = 0; i < arrLength; i++) {
        var result = cb(this[i], i);
        op.push(result);
    }
    return op;
}
var value = courses.forEach2(function(course, index){
    return course
})
// console.log(value);

var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 10,
    },
    {
        id: 2,
        name: 'PHP',
        coin: 10,
    },{
        id: 3,
        name: 'HTML',
        coin: 10,
    },{
        id: 4,
        name: 'CSS',
        coin: 0,
    },
];
//every()
Array.prototype.every2 = (cb) => {
    var arrLength = this.length
    for(var i = 0; i < arrLength; i++){
        var result = cb(this[i],i);
    }
    return result;
}
var everys = courses.every2((course,index) => {
    return course.coin === 10;
})
// console.log(everys);
//some()
Array.prototype.some2 = function(cb){
    var arrLength = this.length;
    for(var i = 0; i < arrLength; i++){
        var result = cb(this[i],i);
    }
    return result;
}
var somes = courses.some2(function(course){
    return course.coin === 0;
})
// console.log(somes);

// var courses = new Array(10, 1);
// console.log(courses);
// for (var i in courses){
//     console.log(courses[i]);
// }

//HTML DOM
/**
 * 1. Element: ID, class, tag, CSS selector, HTML collection
 * 2. Attribute:
 * 3. Text
 */

//element
 var headingNote = document.getElementsByClassName('heading');
//  console.log(headingNote);

 var headingID = document.getElementById('username');
//  console.log(headingID);

 var divClass = document.querySelectorAll('.form-group');
//  console.log(divClass);

 var firstDiv = document.querySelector('.login .a:first-child')
//  console.log(firstDiv);

 var allDiv = document.getElementsByTagName('button')
//  console.log(allDiv);

 //add element vào element
 //   innerHTML ghi đè các alement 
 //   outerHTMl replace các element
//  var boxElement = document.querySelector('.box')
//  boxElement.innerHTML = '<h1 title="heading" >Heading</h1>'
//  console.log(boxElement.outerHTML)



 //Attribute
//  var headingElement = document.querySelector('h1');
//  headingElement.setAttribute('id', 'heading')
//  console.log(headingElement.getAttribute('id'))

//  headingElement.setAttribute('style', 'color: blue')

 //Text
 // innerText lấy ra nội dung mặc định
 // textContent láy ra nội dung thực sựứ
//  console.log(headingElement.textContent);
//  console.log(headingElement.innerText);
//  headingElement.innerText = 'New Heading';


 //DOM CSS

//  var boxElement = document.querySelector('.box')
//  boxElement.style.width = '50px';
//  boxElement.style.height = '50px';
//  boxElement.style.backgroundColor = 'green';

//  Object.assign(boxElement.style, {
//     width: '50px',
//     height: '50px',
//     backgroundColor: 'red',
//  });
// console.log(boxElement.style.backgroundColor);
 
// ClassList property
/**
 * add thêm class vào element
 * contains kiểm tra sự tồn tại của class trong element
 * remove xóa class khỏi element
 * toggle
 */


 var boxElement = document.querySelector('.box')

 boxElement.classList.add('red', 'green', 'blue')

//  console.log(boxElement.classList.contains('red', 'green', 'blue'))
 
//  boxElement.classList.remove('red')
// setTimeout(() => {
//     boxElement.classList.remove('red');
// }, 3000);

setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);

// DOM Event
//sự kiện khi người dùng tương tác vs website hoặc các sự kiện của trình duyệt
// 1. Attribute event
// 2. Assign event using the alement note

var h1Element = document.querySelectorAll('h1');
for(var i = 0; i < h1Element.length; i++) {
    h1Element[i].onclick = function(e) {
        console.log(e.target);
    }
}

var btnElement = document.querySelector('button')
btnElement.onclick = (e) => {
    e.target.style.color = 'red';
    // console.log(e.target);
}

//Example
//1. input, select
var inputElement = document.querySelector('input[type="text"]')
inputElement.onchange = (e) => {
    if (e.target.value === 'aaaa') {
        console.log(true);
    } else {
        console.log(false);
    }
}
 
var checkboxElement = document.querySelector('input[type="checkbox"]')
checkboxElement.onchange = (e) => {
    console.log(e.target.checked);
} 

var selectElement = document.querySelector('select')
selectElement.onchange = (e) => {
    console.log(e.target.value);
}

//2. key up, key down
/**
 * onkeyup
 * onkeydown
 * onkeypress
 */ 
// document.onkeydown = (e) => {
//     // console.log(e.which);
//     switch (e.which) {
//         case 27:
//             console.log('bala')
//             break;
//         case 81:
//             console.log('send')
//             break;
//     }
// }


//event listener
// 1. Xử lý nhiều việc khi 1 Event xảy ra
// 2. Lắng nghe / huỷ bỏ lắng nghe

var btn = document.getElementById('btnNHB');

function viec1() {
    console.log('Việc 1');
}

function viec2() {
    console.log('Việc 2');
}

btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);

setTimeout((e) => {
    btn.removeEventListener('click', viec1);
}, 3000);

//JSON 
// là 1 định dạng dữ liệu (chuỗi)
// viết tắt của (JavaScript Object Notation)
// JSON: Number, boolean, null, array, object
// chuyển đổi / giải mã
// Stringify: từ js types -> json
// parse: từ json -> js types

var json = '{"name": "Huu Bac", "age": 22}';

//Promise
/**
 * - Sync (đồng bộ)
 * - Async (bất đồng bộ)
 */

var promise = new Promise(function(resolve, reject) {
    //thành công: resolve()
    //Thất bại: reject()
    // resolve();
});

// promise
//     .then(function(){
//         return 1;
//     })
//     .then(function(data){
//         console.log(data);
//         return 2;
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(){
//         console.log('failure!')
//     })
//     .finally(function(){
//         console.log('done!')
//     })

// function sleep(ms) {
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms)
//     })
// }

// sleep(1000)
//     .then((e) => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then((e) => {
//         console.log(2);
//         return new Promise((resolve, reject) => {
//             reject('Co loi!')
//         });
//     })
//     .then((e) => {
//         console.log(3);
//         return sleep(1000);
//     })
//     .catch(function(err) {
//         console.log(err)
//     })
    
//Promise.resolve
//Promise.reject
//Promise.all
var promise = Promise.resolve('success');
var promise = Promise.reject('err');

promise
    .then((result) => {
        // console.log(result)
    })
    .catch((err) => {
        // console.log(err)
    })

var promise1 = new Promise(function (resolve) {
    setTimeout(function() {
        resolve([1]);
    }, 1000);
});
var promise2 = new Promise(function (resolve) {
    setTimeout(function() {
        resolve([2, 3]);
    }, 5000);
});

Promise.all([promise1, promise2])
    .then(([result1, result2]) => {
        // console.log(result1 .concat(result2));
    })

//example

var user = [
    { 
        id: 1,
        name: 'Huu Bac',
    },
    { 
        id: 2,
        name: 'Trinh Minh',
    },
    { 
        id: 3,
        name: 'Quang Linh',
    },
];

var comments = [
    {
        id: 1,
        user_id: 1,
        comment: 'abcde'
    },
    {
        id: 2,
        user_id: 2,
        comment: 'abcde'
    },
]

function getComments() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(comments)
        }, 1000)
    });
}

function getUsersByIds(userIds) { 
    return new Promise(function(resolve) {
        var results = user.filter(function(user) {
            return userIds.includes(user.id)
        })
        setTimeout(function() {
            resolve(results)
        }, 1000)
    })
}

getComments()
    .then(function(comments) {
        var userIDs = comments.map(function(comment) {
            return comment.user_id;
        });
        return getUsersByIds(userIDs)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments,
                };
            });
    })
    .then(function(data) {
        var commentBlock = document.getElementById('ulBlock')
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id
            });
            html += `<li>${user.name}: ${comment.comment}</li>`
        });
        // commentBlock.innerHTML = html;
    })


    // Backend -> API -> fetch -> JSON/XML
    // JSON.parse -> ja types
    //Fetch

    var postApi = 'https://jsonplaceholder.typicode.com/posts'

    fetch(postApi)
        .then(response => {
            return response.json();
            //json.parse: JSON -> js types
        })
        .then(posts => {
            var htmls = posts.map(post =>{
                return `<li>
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </li>`
            });
            var html = htmls.join('');
            document.getElementById('ulBlock').innerHTML = html;
        });

//JSON server: API Server
 var coursesApi = 'http://localhost:3000/courses'
 fetch(coursesApi)
    .then(response => {
        return response.json();
    })
    .then(courses => {
        console.log(courses);
    })