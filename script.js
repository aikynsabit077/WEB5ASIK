
const userProfile = {
    name: "Aiko",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["Volleyball", "Music", "Sleep"]
};

const profileForm = document.getElementById("profileForm");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birthYear");
const newItemInput = document.getElementById("newItem");
const hobbyList = document.getElementById("hobbyList");

const currentYear = new Date().getFullYear();

function updateProfile() {
    const age = currentYear - userProfile.birthYear;

    document.getElementById("profileName").textContent = userProfile.name;
    document.getElementById("profileYear").textContent = userProfile.birthYear;
    document.getElementById("profileAge").textContent = age;
    document.getElementById("developerStatus").textContent =
        userProfile.isDeveloper ? "Yes" : "No";
    document.getElementById("hobbyCount").textContent =
        userProfile.hobbies.length;
}

function renderHobbies() {
    hobbyList.innerHTML = "";

    userProfile.hobbies.forEach(function(hobby) {
        const li = document.createElement("li");
        li.textContent = hobby;
        hobbyList.appendChild(li);
    });

    document.getElementById("hobbyCount").textContent =
        userProfile.hobbies.length;
}

profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = usernameInput.value.trim();
    const birthYear = Number(birthYearInput.value);

    if (name === "") {
        alert("Please enter your username.");
        return;
    }

    if (!Number.isInteger(birthYear) ||
        birthYear < 1900 ||
        birthYear > currentYear) {
        alert("Please enter a valid birth year.");
        return;
    }

    userProfile.name = name;
    userProfile.birthYear = birthYear;

    updateProfile();
    profileForm.reset();
});

document.getElementById("addButton").addEventListener("click", function() {
    const hobby = newItemInput.value.trim();

    if (hobby === "") {
        alert("Please enter a hobby.");
        return;
    }

    userProfile.hobbies.push(hobby);
    renderHobbies();
    newItemInput.value = "";
});

document.getElementById("removeButton").addEventListener("click", function() {
    if (userProfile.hobbies.length === 0) {
        alert("The list is empty.");
        return;
    }

    userProfile.hobbies.pop();
    renderHobbies();
});

updateProfile();
renderHobbies();
