const addSalaryBtn = document.getElementById("array-addsalary");
const modifySalaryBtn = document.getElementById("array-modifysalary");
const displayResultBtn = document.getElementById("array-displayresult");
const displaySalaryBtn = document.getElementById("array-displaysalary");

const personArray = [];
const salariesArray = [];

function validateData(name, salary) {
    if (name == "") {
        alert("Must Include Name")
        return false;
    }
    if (!(/^-?(\d+)\.?(\d+)?$/.test(salary))) {
        alert("Salary Must Be A Number");
        return false;
    }
    return true;
}

function updatePage() {
    const dropdown = document.getElementById("array-modifysalary-dropdown");
    let htmlToAdd = `<option value="-1">Choose A Person</option>`;
    for (let i = 0; i < personArray.length; i++) {
        htmlToAdd += `<option value="${i}">${personArray[i]} --- ${salariesArray[i]}</option>`;
    }
    dropdown.innerHTML = htmlToAdd;
}

const addSalary = () => {
    let person = document.getElementById("array-addsalary-name").value;
    let salary = document.getElementById("array-addsalary-salary").value;
    if (!(validateData(person, salary))) {
        return;
    }
    salary = parseFloat(salary).toFixed(2);

    
    personArray.push(person);
    salariesArray.push(salary);
    updatePage();
    moveCursor();
};

const modifySalary = () => {
    const value = document.getElementById("array-modifysalary-dropdown").value;
    let newSalary = document.getElementById("array-modifysalary-salary").value;
    if (value == "-1") {
        alert("Choose a person to modify their salary.")
        return;
    }
    if (!(validateData("person", newSalary))) {
        return;
    }
    newSalary = parseFloat(newSalary).toFixed(2);
    console.log(`check`);
    salariesArray[value] = newSalary;
    updatePage();
};

const displayResult = () => {
    let average;
    let highest;
    if (salariesArray.length > 0) {
        average = salariesArray.reduce((prev, curr) => {
            return prev + parseFloat(curr);
        }, 0) / salariesArray.length;
        highest = parseFloat(salariesArray[0]);
        for (let i = 1; i < salariesArray.length; i++) {
            if (highest < parseFloat(salariesArray[i])) {
                highest = parseFloat(salariesArray[i]);
            }
        }
    } else {
        average = "N/A";
        highest = "N/A";
    }
    const element = document.getElementById("results");
    element.innerHTML = `
        <h2>Average and Highest Salaries</h2>
        <p>Average: \$${average}</p>
        <p>Highest: \$${highest}</p>
    `;
};

const displaySalary = () => {
    const table = document.getElementById("results_table");
    tableHTML = `
        <tbody>
            <tr>
                <th>Name</th>
                <th>Salary</th>
            </tr>
    `;
    for (let i = 0; i < personArray.length; i++) {
        tableHTML += `
            <tr>
                <td>${personArray[i]}</td>
                <td>\$${salariesArray[i]}</td>
            </tr>
        `;
    }
    tableHTML += `
        </tbody>
    `;
    table.style.display = "table";
    table.innerHTML = tableHTML;
};

addSalaryBtn.addEventListener("click", addSalary);
modifySalaryBtn.addEventListener("click", modifySalary);
displayResultBtn.addEventListener("click", displayResult);
displaySalaryBtn.addEventListener("click", displaySalary)


function moveCursor() {
    document.getElementById("array-addsalary-name").focus()
}
moveCursor();

/*
Part 1: Make the following modifications 
    Write the addSalary() It should add a person and salary to 
    the arrays.  Using text entry boxes and a button to submit, you
    should be able to obtain information from the user. 
    
    Write the modifySalary() It should change the salary of an 
    employee of choice.  Using a dropdown to list all the exsisting 
    employees saved, a text entry of the new value and a button to 
    submit, you should be able to obtain information from the user.
    
    Write a displayResults function(). It should derive the average 
    salary and the highest from the array and then display the 
    results in the div element with “results” as its id. To display 
    the results, you need to add nodes to the DOM with the heading 
    as an h2 element and the average and highest as <p> elements. 
    The easiest way to do that is to use the innerHTML property as 
    shown in figure 6-13 in your Murach’s book.
    
    Write the displaySalary() It should get the names and values 
    from the arrays and display them as rows in the HTML table 
    element with “results_table” as its id - this should look 
    something like your original table (of the two- in the tables 
    exercise - the simpler one).
    
    If you haven’t already done it, add data validation to add 
    function. The entries must not be empty, and value has to be 
    numeric. If either entry is invalid, use the alert() method to 
    display an appropriate error message.
    
    Make application move the cursor to the name field when the 
    application starts and after a name and salary have been added, 
    or when the the user clicks the add button.  
    
    Verify there are no errors. Test test test. Did I say test? I 
    good application will be difficult to break. 
    
    Submit in the usual fashion with a URL to activity, and your 
    signed note. Call it arrays in your menu, arrays.html in your 
    files. 
*/