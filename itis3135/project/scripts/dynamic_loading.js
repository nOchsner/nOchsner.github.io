function load_page(name, callback) {
    var xhr = new XMLHttpRequest();

    // Define the function to handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Success! The response contains the contents of b.html
                let htmlContent = xhr.responseText;

                // Now you can use bHtmlContent as needed
                callback(htmlContent);
            } else {
                // Handle errors
                console.error('Failed to fetch page: ' + xhr.status);
            }
        }
    };

    // Open a GET request to fetch b.html
    xhr.open('GET', name, true);

    // Send the request
    xhr.send();
}
function createSections(pageName) {
    const sections = document.getElementsByClassName(`material-section`);
    const pageArea = document.getElementById(`${pageName}-content-area`);
    for (let i = 0; i < sections.length; i++) {
        let path = `./${pageName}/section_${i+1}.html`
        load_page(path, (page)=> {
            sections[i].addEventListener("click", () => {
                pageArea.innerHTML = page;
            })
        });
    }
}


/*
load_page("./learning/section_1.html", (page)=> {
    console.log(page);
});
*/

