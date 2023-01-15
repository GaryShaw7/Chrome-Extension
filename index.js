const saveBtn = document.getElementById("save-btn");
const userInput = document.getElementById("input-element");
const leadsList = document.getElementById("leads-ul");
let myLeads = [];

saveBtn.addEventListener("click", function () {
  myLeads.push(userInput.value);
  renderLeads();
  userInput.value = "";
});

function renderLeads() {
  let listItems = "";
  // add the urls to a list while also converting them to a html list
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
                    <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                    </a>
                  </li>`;
  }

  leadsList.innerHTML = listItems;
}
