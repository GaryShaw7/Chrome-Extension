let myLeads = [];
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const userInput = document.getElementById("input-element");
const leadsList = document.getElementById("leads-ul");
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromStorage) {
  myLeads = leadsFromStorage;
  render(myLeads);
}

function render(myArray) {
  let listItems = "";
  // add the urls to a list while also converting them to a html list
  for (let i = 0; i < myArray.length; i++) {
    listItems += `<li>
                      <a href='${myArray[i]}' target='_blank'>
                      ${myArray[i]}
                      </a>
                    </li>`;
  }

  leadsList.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

saveBtn.addEventListener("click", function () {
  myLeads.push(userInput.value);
  userInput.value = "";
  //Store the leads in local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

tabBtn.addEventListener("click", function(){
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});


