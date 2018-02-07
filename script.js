var app = React.createElement(App);
ReactDOM.render(app , document.getElementById('app'));

// var fs = require('fs');

// function readFilePromisified (filename) {
// 	// body... 

// 	return new Promise(
// 		function (resolve, reject) {
// 			fs.readFile(filename, {encoding: 'utf8'},
// 				(error,data) => {
// 			if(error) {
// 				reject(error);
// 			} else {
// 				resolve(data);
// 			}
// 		});
// 	});
// }

// readFilePromisified('log.txt')
// .then(text => console.log(text))
// .catch(error => console.log(error));