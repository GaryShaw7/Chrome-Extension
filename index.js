const saveBtn = document.getElementById("save-btn");
const userInput = document.getElementById('input-element');
const leadsList = document.getElementById("leads-ul");
let myLeads = ["www.leads.com", "www.two.com"];
let listItems = "";

saveBtn.addEventListener("click", function(){

myLeads.push(userInput.value);

})

// add the urls to a list while also converting them to a html list
for(let i = 0; i < myLeads.length; i++){

    listItems +=  "<li>" + myLeads[i] + "</li>";
    
}

leadsList.innerHTML = listItems;




