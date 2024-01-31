window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode, childNode2) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  tdNode.appendChild(childNode2)
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createBtnNode(num) {
  let btnNode = document.createElement('button');
  btnNode.textContent = 'Edit text';
  btnNode.addEventListener('click', () => {
    replaceTable(num);
  });
  return btnNode;
}

function addInput() {
  createTDNode(createInputNode(), createBtnNode());
}

function createInputNode() {
  let inputNode = document.createElement('input');
  inputNode.setAttribute('type', 'text');
  inputNode.placeholder = 'Enter Cell (x,y) ... ';
  return inputNode;
}

function nodeCheck() {
  console.log(document.body.childNodes);
}

function addTable() {
  const tableNode = document.createElement("table");
  tableNode.setAttribute('id', 'table');
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)  "),
        createBtnNode(i));
    tableNode.appendChild(createTRNode([col1]));
  }
  document.getElementById("root").appendChild(tableNode);
}

function replaceTable(num) {
  const tableNode = document.createElement('table');
  tableNode.setAttribute('id', 'table');
  for(let i = 0; i < 3; i++) {
    if(i == num) {
      let col1 = createTDNode(createInputNode(),
          createBtnNode(i));
      tableNode.appendChild(createTRNode([col1]));
    }
    else {
      let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)  "),
        createBtnNode(i));
      tableNode.appendChild(createTRNode([col1]));
    }
  }
  document.getElementById('table').replaceWith(tableNode);
}
