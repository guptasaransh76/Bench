import axios from "axios";

var instance = undefined;

const getInstance = () => {
  if (instance === undefined) {
    instance = axios.create({
      'baseURL' : 'http://www.mocky.io/v2',
      headers: { 'Content-Type': 'application/json' },
      'origin': '*',
      'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      'preflightContinue': false,
      'withCredentials': true
    });
  }

  return instance;
};

 	let getMemory = () => {
	return getInstance().get('/5b4dad7c31000055005ebd04');
};


module.exports = {
	getMemory: getMemory,
}