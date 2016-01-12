// bling.js from https://gist.github.com/paulirish/12fb951a8b893a454b32

window.$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
}

NodeList.prototype.__proto__ = Array.prototype;

(function(){

const codeContainer = () => {
  pre = document.createElement('pre');
  pre.innerHTML = `<code data-trim data-es5></code>`
  pre.classList.add('es5_code_container');
  return pre;
}

const addCodeMainContainer = sectionElem => {
  const div = document.createElement('div');
  div.classList.add('code_main_container');
  sectionElem.appendChild(div);
  return div;
}

const addToMainContainer = (main, elem) => {
  main.appendChild(elem);
}

const codeHeader = name => {
  const newCodeHeader = document.createElement('h3');
  newCodeHeader.innerHTML = name;
  newCodeHeader.classList.add('code_header');
  return newCodeHeader;
}

const es6ToEs5 = es6code => {
  const compiler = new traceur.Compiler();
  const es5code = compiler.compile(es6code);
  const codeStartMarker = 'var __moduleName = "'
  const codeEndMarker = 'return {};'
  const codeStartMarkerPos = es5code.indexOf(codeStartMarker) + codeStartMarker.length + 18;
  const codeEndMarkerPos = es5code.indexOf(codeEndMarker) - 2;

  const es5CodeUnwrapped = es5code.substring(codeStartMarkerPos, codeEndMarkerPos);
  return es5CodeUnwrapped;
}

const updateEs5CodeFor = section => {
  const es6Code = section.querySelector('code[data-es6]').innerText;
  removeOldCodeResult(section);

  try {
    section.querySelector('code[data-es5]').innerText = es6ToEs5(es6Code);
    evalResult = eval(es6Code);
    showCodeResult(section, JSON.stringify(evalResult));
  } catch (e) {
    showError(section, e);
  }

}

const divWithClass = className => {
  const div = document.createElement('div');
  div.classList.add(className);
  return div;
}

const attachCodeContainers = (section, es6CodeContainer) => {
  const main = addCodeMainContainer(section);
  const es5MainContainer = divWithClass('es5_main')
  const es6MainContainer = divWithClass('es6_main')
  es6MainContainer.appendChild(codeHeader('ES6'));
  es6MainContainer.appendChild(es6CodeContainer.parentNode);
  es5MainContainer.appendChild(codeHeader('ES5'));
  es5MainContainer.appendChild(codeContainer());
  main.appendChild(es5MainContainer);
  main.appendChild(es6MainContainer);
}

function showError(section, errorMessage) {
  showCodeResult(section, errorMessage);
  section.querySelector('.code_result').classList.add('error_message');
}

const removeOldCodeResult = section => {
  const oldResult = section.querySelector('.code_result');
  if (oldResult) oldResult.parentNode.removeChild(oldResult);
}


function showCodeResult(section, result)  {
  if (result === "" || result === undefined) return;
  removeOldCodeResult(section);
  resultContainer = divWithClass('code_result');
  resultContainer.innerHTML = `<pre><code data-trim>${result}</code></pre>`
  section.appendChild(resultContainer);
}

const handleEs6Code = es6CodeContainer => {
    const section = es6CodeContainer.parentNode.parentNode;
    attachCodeContainers(section, es6CodeContainer);
    updateEs5CodeFor(section);
    es6CodeContainer.addEventListener('keyup', e => updateEs5CodeFor(section));
};

$('code[data-es6]').forEach(handleEs6Code);


/*

function evalJsCode(elem, jsCode) {
  var orig_log = console.log;

  l = console.log = function() {
    var args = Array.prototype.slice.call(arguments);
    var $section = $(elem).closest('section');
    var $runLogCodeElem = $(elem).closest('section').find('.run_log code');
    $section.find('.run_log').show();
    args.forEach(function(arg) {$runLogCodeElem.append(arg);});
    $runLogCodeElem.append("\n");
  };

  d = function() {
    var args = Array.prototype.slice.call(arguments);
    l(args.map(function(arg) {return JSON.stringify(arg)}));
  }

  try {
    evalResult = eval(jsCode);
    showResult(elem, JSON.stringify(evalResult));
  } catch(e) {
    showError(elem, 'Runtime', e);
  }

  console.log = orig_log;
}

*/
})();
