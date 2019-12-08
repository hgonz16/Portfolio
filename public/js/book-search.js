
const ajaxfunction = function ajaxfunction(command, sourceID, targetID, useJSON) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function dataSet() {
    if (this.readyState === 4 && this.status === 200) {
      if (useJSON === 'yes') {
        const myArray = JSON.parse(this.responseText);
        let jsonMsg = 'Json List of Titles <br />';
        for (let i = 0, { length } = myArray; i < length; i += 1) {
          jsonMsg = `${jsonMsg + myArray[i].title}, ${myArray[i].year}, ${myArray[i].author}<br />`;
        }
        document.getElementById(targetID).innerHTML = jsonMsg;
      } else {
        document.getElementById(targetID).innerHTML = this.responseText;
      }
    }
  };

  return function dataRequest() {
    const charstyped = encodeURIComponent(document.getElementById(sourceID).value);
    xmlhttp.open('GET', `https://www.lampbusters.com/coperni/javascript2/grbooks_ajax.php?command=${command}&searchterm=${charstyped}`, true);
    xmlhttp.send();
  };
};

function setupEvents() {
  document.getElementById('year').onkeyup = ajaxfunction('byyear', 'year', 'outputyear', 'no');
  document.getElementById('title').onkeyup = ajaxfunction('bytitle', 'title', 'titleoutput', 'no');
  document.getElementById('author').onkeyup = ajaxfunction('byauthor', 'author', 'authoroutput', 'no');
  document.getElementById('yearjson').onkeyup = ajaxfunction('byyearjson', 'yearjson', 'yearout', 'yes');
}
window.onload = setupEvents;
