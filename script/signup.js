const form = document.querySelector("form");

const getInputData = () => {
    const inputField = Array.from(document.querySelectorAll("input"));

    return inputField.map(element => {
        const id = element.getAttribute("id");
        return { 
            [id] : element.value 
        };
    });
};

form.addEventListener("submit", () => {
    const userData = getInputData();
    const storage = window.localStorage;

    userData.forEach((element) => {
        const id = Object.keys(element)[0];
        const value = element[id];

        console.log(element);
        storage.setItem(id, value);
    })
});