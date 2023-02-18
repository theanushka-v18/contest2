let bookName = document.getElementById("bookName");
let issuedTo = document.getElementById("issuedTo");
let button = document.getElementById("issueBtn");
let tbody = document.getElementById("tbody");

let details = [];
let obj = {};
let idx = 0;
let iconTag, newTd, td;

button.addEventListener("click", function() {
    let ampm = "AM";

    let fullTime = new Date();
    let date = fullTime.getDate();
    let month = fullTime.getMonth() + 1;
    let year = fullTime.getFullYear();
    idx++;
    obj.id = idx;
    obj.book_name = bookName.value;
    obj.issued_to = issuedTo.value;

    let visiblehrs = fullTime.getHours();
    if(visiblehrs >= 12) {
        visiblehrs -= 12;
        ampm = "PM";
    }
    obj.issued_time = date + "/0" + month + "/" + year + " at " + visiblehrs + ":" + fullTime.getMinutes() + " " + ampm;


    obj.status = "Not Returned";

    details.push(obj);

    let tr = document.createElement("tr");

    for (const key of Object.keys(obj)) {
        td = document.createElement("td");
        td.setAttribute("class", key);
        td.innerHTML = obj[key];
        tr.appendChild(td);
        
        if(td.innerHTML=="Not Returned" || td.innerHTML=="Returned") {
            iconTag = document.createElement("i");
            iconTag.classList.add("fa-sharp");
            iconTag.classList.add("fa-regular");
            iconTag.classList.add("fa-pen-to-square");
            td.appendChild(iconTag);
            iconTag.style.color = "white";
            iconTag.style.cursor = "pointer";
            iconTag.style.marginLeft = "1rem";
            
            
            iconTag.addEventListener("click", function() {
                if(obj.status=="Not Returned") {
                    let objIndex = details.findIndex(newobj => newobj.id == obj.id);
                    details[objIndex].status = "Returned";
                    td.innerText = "Returned";
                    td.style.color = "green";
                }

            })
        }
        newTd = td;
    }
    if(newTd.innerText == "Not Returned") {
        newTd.style.color = "red";
    } 
    tbody.appendChild(tr);
})


