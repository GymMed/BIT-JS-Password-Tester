let showPasswordButtonDom = document.querySelector("#show-password");
let showPasswordLabelDom = document.querySelector("#show-password-label");
let passwordInputDom = document.querySelector("#password");
let passwordResultDom = document.querySelector("#result");

let eyeIconHtml = '<i class="bi bi-eye"></i>';
let eyeCrossedIconHtml = '<i class="bi bi-eye-slash"></i>';

const successClasses = "from-green-500 to-green-800";
const failiureClasses = "from-red-500 to-red-800";

showPasswordButtonDom.addEventListener("click", function () {
    if (passwordInputDom.type === "text") {
        passwordInputDom.type = "password";
        showPasswordButtonDom.innerHTML = eyeIconHtml;
    } else {
        passwordInputDom.type = "text";
        showPasswordButtonDom.innerHTML = eyeCrossedIconHtml;
    }
});

passwordInputDom.addEventListener("input", function () {
    const password = passwordInputDom.value;

    if (password === null) {
        incorrectPassword("Passed null as password!");
    }

    if (password.length < 8) {
        incorrectPassword("Password has to contain atleast 8 symbols!");
        return;
    }

    if (password.length > 28) {
        incorrectPassword("Password has to contain less when 29 symbols!");
        return;
    }

    const upperCasePattern = /[A-Z]/;
    if (!upperCasePattern.test(password)) {
        incorrectPassword("Password has to contain one uppercase letter!");
        return;
    }

    const lowerCasePattern = /[a-z]/;
    if (!lowerCasePattern.test(password)) {
        incorrectPassword("Password has to contain one lowercase letter!");
        return;
    }

    const numberPattern = /[0-9]/;
    if (!numberPattern.test(password)) {
        incorrectPassword("Password has to contain atleast one number!");
        return;
    }

    const specialPattern = /[^a-zA-Z0-9]/;
    if (!specialPattern.test(password)) {
        incorrectPassword(
            "Password has to contain atleast one special symbol!"
        );
        return;
    }

    correctPassword("Passowrd is strong!");
});

function incorrectPassword(message) {
    removeContainedClasses(
        ["text-green-600", "text-orange-500"],
        showPasswordLabelDom
    );
    showPasswordLabelDom.classList.add("text-red-600");

    removeContainedClasses(
        ["focus:ring-orange-500", "focus:ring-green-600"],
        passwordInputDom
    );
    passwordInputDom.classList.add("focus:ring-red-600");

    removeContainedClasses(["text-green-600"], showPasswordButtonDom);
    showPasswordButtonDom.classList.add("text-red-600");

    removeContainedClasses(successClasses.split(" "), passwordResultDom);
    addUncontainedClasses(failiureClasses.split(" "), passwordResultDom);

    passwordResultDom.textContent = message;

    if (passwordResultDom.classList.contains("hidden"))
        passwordResultDom.classList.remove("hidden");
}

function correctPassword(message) {
    removeContainedClasses(
        ["text-red-600", "text-orange-500"],
        showPasswordLabelDom
    );
    showPasswordLabelDom.classList.add("text-green-600");

    removeContainedClasses(
        ["focus:ring-orange-500", "focus:ring-red-600"],
        passwordInputDom
    );
    passwordInputDom.classList.add("focus:ring-green-600");

    removeContainedClasses(["text-red-600"], showPasswordButtonDom);
    showPasswordButtonDom.classList.add("text-green-600");

    removeContainedClasses(failiureClasses.split(" "), passwordResultDom);
    addUncontainedClasses(successClasses.split(" "), passwordResultDom);

    passwordResultDom.textContent = message;

    if (passwordResultDom.classList.contains("hidden"))
        passwordResultDom.classList.remove("hidden");
}

function addUncontainedClasses(array, dom) {
    if (!Array.isArray(array)) {
        console.log("Passed not array to addUncontainedClasses");
        return;
    }

    let arrayLength = array.length;

    for (let currentClass = 0; currentClass < arrayLength; currentClass++) {
        if (!dom.classList.contains(array[currentClass])) {
            dom.classList.add(array[currentClass]);
        }
    }
}

function removeContainedClasses(array, dom) {
    if (!Array.isArray(array)) {
        console.log("Passed not array to removeContainedClasses");
        return;
    }

    let arrayLength = array.length;

    for (let currentClass = 0; currentClass < arrayLength; currentClass++) {
        if (dom.classList.contains(array[currentClass])) {
            dom.classList.remove(array[currentClass]);
        }
    }
}
