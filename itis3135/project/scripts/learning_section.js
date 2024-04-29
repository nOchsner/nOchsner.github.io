function setSection1() {
    $("#aaa").on("click", (event) => {
        console.log("hi");
        $(event.currentTarget).after("<p>Hi</p>")
    })
}