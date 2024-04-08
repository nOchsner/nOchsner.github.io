const classArea = document.getElementById("byo-class-list");
const main = document.getElementById("byo-main");
let numberOfClasses = 0;



function addClass() {
    numberOfClasses++;    
    let newClass = 
    `
        <div id="byo-classitem${numberOfClasses}">
            <label for="byo-class${numberOfClasses}">Class: </label>
            <input value="Class" class="byo-textfields" required id="byo-class${numberOfClasses}">
            <button type="button" onclick="deleteClass('byo-classitem${numberOfClasses}')" id="byo-delete-class">
                Delete Class
            </button>
        </div>
    `;
    classArea.insertAdjacentHTML("beforeend", newClass);
    console.log(document.getElementsByClassName("byo-textfields").length);
    
}

function deleteClass(deletion) {
    let elementToDelete = document.getElementById(deletion);
    console.log(deletion);
    if (elementToDelete){
        elementToDelete.remove();
    }
}


function setPageInfo() {
    let inputs = Array.from(document.getElementsByClassName("byo-textfields"));
    let name = inputs.shift().value;
    let mascot = inputs.shift().value;
    let caption = inputs.shift().value;
    let personalBackground = inputs.shift().value;
    let academicBacground = inputs.shift().value;
    let webBackground = inputs.shift().value;
    let platform = inputs.shift().value;
    let anythingElse = inputs.pop().value;
    let funnyThing = inputs.pop().value;
    let image = document.getElementById("byo-image").files[0];
    let imgURL = URL.createObjectURL(image);

    let newPagep1 = `
        <h2>${name} | ${mascot}</h2>
        <figure>
            <img src="${imgURL}" alt="image">
            <figcaption>
                <span class="Italicize">${caption}</span>
            </figcaption>
        </figure>
        <ul class="intro-list">
            <li>
                <span class="bold">
                    Personal Background:
                </span>
                ${personalBackground}
            </li>
            <li>
                <span class="bold">
                    Academic Background:
                </span>
                ${academicBacground}
            </li>
            <li>
                <span class="bold">
                    Web Background:
                </span>
                ${webBackground}
            </li>
            <li>
                <span class="bold">
                    Primary Computer Platform:
                </span>
                ${platform}
            </li>
            <li>
                <span class="bold">
                    Courses I'm Taking & Why:
                </span>
                <ul>
    `;
    let classes = ``;
    for (let i = 0; i < inputs.length; i++) {
        classes += `
            <li>
                <p>
                    ${inputs[i].value}
                </p>
            </li>
        `;
    }

    let newPagep2 = `
                </ul>
            </li>
            <li>
                <span class="bold">
                    Funny/Interesting Item to Remember me by:
                </span>
                ${funnyThing}
            </li>
            <li>
                <span class="bold">
                    Extra:
                </span>
                ${anythingElse}
            </li>
        </ul>
        <button onclick="resetPage()">Reset</button>
    `;

    let newPage = newPagep1 + classes + newPagep2;
    main.innerHTML = newPage;

}

function resetPage() {
    main.innerHTML = `
        <h2>
            ITIS 3135 BYO Intro
        </h2>
        <h3>
            Time to BYO Intro page, please fill out the form 
            below so we can create your own page.
        </h3>
        <form id="byo-form">
            <label for="byo-name">
                Name: 
            </label>
            <input id="byo-name" value="Nick Ochsner" class="byo-textfields" required>
            <br>
            <label for="mascot">
                Mascot: 
            </label>
            <input id="mascot" value="Oyster" class="byo-textfields" required>
            <br>
            <label for="byo-image">
                Image: 
            </label>
            <input id="byo-image" type="file" accept="image/png, image/jpeg">
            <br>
            <label for="img-caption">
                Image Caption: 
            </label>
            <input id="img-caption" value="Caption" class="byo-textfields" required>
            <br>
            <label for="person-background">
                Personal Background	Text: 
            </label>
            <input id="person-background" value="Background" class="byo-textfields" required>
            <br>
            <label for="academic-background">
                Academic Background	Text: 
            </label>
            <input id="academic-background" value="Background" class="byo-textfields" required>
            <br>
            <label for="web-background">
                Background in Web Development: 
            </label>
            <input id="web-background" value="Web Background" class="byo-textfields" required>
            <br>
            <label for="computer-platform">
                Primary Computer Platform: 
            </label>
            <input id="computer-platform" value="Computer Platform" class="byo-textfields" required>
            <div id="byo-classes">
                <label>
                    Classes
                </label>
                <div id="byo-class-list">
                </div>
                <button type="button" onclick="addClass()">Add Class</button>
            </div>
            <label for="funny-thing">
                Funny thing: 
            </label>
            <input id="funny-thing" value="Funny Thing" class="byo-textfields">
            <br>
            <label for="anything-else">
                Anything else: 
            </label>
            <input id="anything-else" value="Anything else?" class="byo-textfields">
            <br>

            <input type="checkbox" required id="byo-checkbox">
            <label for="byo-checkbox">
                I understand that what is on this 
                page is not password protected and 
                I will not put anything here that 
                I don't want publicly available.
            </label>
            <br>

            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
        </form>
    `;
    console.log("reset");
}

