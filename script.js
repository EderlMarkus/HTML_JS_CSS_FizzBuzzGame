/**
 *@param{integer} dividend = The dividend
 *@param{integer} divisor = The divisor
 *@returns {boolean} if modulu of dividend and divisor is 0
 */
function isModulu(dividend, divisor) {
  if (dividend % divisor == 0) {
    return true;
  }
  return false;
}
/**
 * @param  {HTMLObjectElement} htmlElement = HTML Element you want to clear
 * Clears an HTML Element of it's Values and Childs. (emtpys it)
 */
function clearElement(htmlElement) {
  htmlElement.innerHTML = '';
}
/**
 * @param  {JSON} params = parameter to write fizzbuzz. 
 * Need to be in correct syntax e.g. like this:
 * const params = {
    numbers: {
      Fizz: FizzNummer,
      Buzz: BuzzNummer
    },
    end: 100,
    start: 1,
    insertInto: document.getElementsByTagName('table')[0],
    asElement: 'tr'
  };
 */
function createFizzBuzzWithParams(params) {
  for (i = params.start; i < params.end + 1; i++) {
    var p = document.createElement(params.HTMLElementType);
    var text = '';

    for (var key in params.numbers) {
      if (isModulu(i, params.numbers[key])) {
        text += key;
      }
    }

    if (text == '') {
      text = i;
    }

    p.innerHTML = text;
    params.HTMLParent.appendChild(p);
  }
}

/**
 * @param  {Event} e = event given by html element (e.g. from a button or a submit)
 * Prevents default behaivor and creates HTML-Table with Fizz_Buzz Game and Parameters given by user.
 */
function mySubmitFunction(e) {
  //prevent default action
  e.preventDefault();

  //if table exists clear it
  if (document.getElementsByTagName('table')[0]) {
    clearElement(document.getElementsByTagName('table')[0]);
  }

  //get User Input
  let target = e.target;
  let FizzNummer = parseInt(target[0].value);
  let BuzzNummer = parseInt(target[1].value);

  //set Parameters for createFizzBuzzWithParams Method
  const params = {
    numbers: {
      Fizz: FizzNummer,
      Buzz: BuzzNummer
    },
    end: 100,
    start: 1,
    HTMLParent: document.getElementsByTagName('table')[0],
    HTMLElementType: 'tr'
  };

  //Create FizzBuzzTable
  createFizzBuzzWithParams(params);
}
