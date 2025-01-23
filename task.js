let rowCount = 1;
document.querySelector(".elave-et").addEventListener("click", function() {
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.textContent = rowCount++;
    row.appendChild(cell);

    let placeholders = ["Ad", "Soyad", "Maas"];
    for (let i = 0; i < 3; i++) {
        let cell = document.createElement("td");
        let input = document.createElement("input");
        input.placeholder = placeholders[i];
        cell.appendChild(input);
        row.appendChild(cell);        
    }
    let buttonCell = document.createElement("td");
    let cancelButton = document.createElement("button");
    cancelButton.textContent = "imtina et";
    cancelButton.style.backgroundColor = "red";
    cancelButton.style.color = "white";cancelButton.addEventListener("click", function() {
        if (cancelButton.textContent === "Sil") {
            if (window.confirm("Silmek isteyirsinizmi?")) {
                tbody.removeChild(row);
            }
        } else {
            tbody.removeChild(row);
        }
    });    
    buttonCell.appendChild(cancelButton);

    let saveButton = document.createElement("button");
    saveButton.textContent = "yadda saxla";
    saveButton.style.backgroundColor = "green";
    saveButton.style.color = "white";
    saveButton.addEventListener("click", function() {
        let inputs = row.querySelectorAll("input");
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

        if (!allFilled) {
            alert("Inputun icini doldurun!");
            return;
        }
        inputs.forEach(input => {
            let text = document.createTextNode(input.value);
            let parent = input.parentElement;
            parent.replaceChild(text, input);
        });

        let editButton = document.createElement("button");
        editButton.textContent = "Duzelis et";
        editButton.style.backgroundColor = "orange";
        editButton.style.color = "white";
        editButton.addEventListener("click", function() {
            let cells = row.querySelectorAll("td");
            cells.forEach((cell, index) => {
                if (index > 0 && index <= 3) {
                    let text = cell.textContent;
                    let input = document.createElement("input");
                    input.value = text;
                    input.placeholder = placeholders[index - 1];
                    cell.replaceChild(input, cell.firstChild);
                }
            });
            buttonCell.replaceChild(saveButton, editButton);
            cancelButton.textContent = "imtina et";
        });
        buttonCell.replaceChild(editButton, saveButton);
        cancelButton.textContent = "Sil";
    });
    buttonCell.appendChild(saveButton);

    row.appendChild(buttonCell);

    tbody.appendChild(row);
});