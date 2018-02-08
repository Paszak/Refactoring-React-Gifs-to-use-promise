var app = React.createElement(App);
ReactDOM.render(app , document.getElementById('app'));

// function httpGet(url) {
// 	return new Promise(
// 		function (resolve, reject) {
// 			const request = new XMLHttpRequest();
// 				request.onload = function () {
// 					if (this.status === 200) {
// 						resolve(this.response); // Sukces
// 					} else {
// 						reject(new Error(this.statusText)); // Dostaliśmy odpowiedź, ale jest to np 404
// 					}
// 				};
// 				request.onerror = function () {
// 					reject(new Error(`XMLHttpRequest Error: ${this.statusText}`));
// 				};
// 				request.open('GET', url);
// 				request.send();
// 		});
// }

// httpGet('http://example.com/file.txt')
// .then(response => console.log('Contents: ' + response))
// .catch(error => console.error('Something went wrong', error));



// var fs = require('fs');

// function readFilePromisified (filename) {
//  // body... 

//  return new Promise(
//      function (resolve, reject) {
//          fs.readFile(filename, {encoding: 'utf8'},
//              (error,data) => {
//          if(error) {
//              reject(error);
//          } else {
//              resolve(data);
//          }
//      });
//  });
// }

// readFilePromisified('log.txt')
// .then(text => console.log(text))
// .catch(error => console.log(error));