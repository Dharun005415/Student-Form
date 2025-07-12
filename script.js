document.getElementById("studentform").addEventListener("submit", function (event) {
    event.preventDefault();

    // Element selection
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value.trim();

    const genderElement = document.querySelector('input[name="Gender"]:checked');
    const gender = genderElement ? genderElement.value : "";

    // Validation
    if (name === "") {
        alert("Please enter the Name!");
        return;
    }

    if (age === "" || isNaN(age) || age < 3 || age > 100) {
        alert("Please enter a valid age");
        return;
    }

    if (course === "Select Course") {
        alert("Please select the course");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    if (gender === "") {
        alert("Please select the gender");
        return;
    }

    // Create new table row
    const tr = document.createElement("tr");
    tr.innerHTML =
        `<td class='border p-2 text-center bg-white'>${name}</td>
         <td class='border p-2 text-center bg-white'>${age}</td>
         <td class='border p-2 text-center bg-white'>${course}</td>
         <td class='border p-2 text-center bg-white'>${gender}</td>
         <td class='border p-2 text-center bg-white'>${email}</td>
         <td class='border p-2 text-center bg-white'>
            <button onclick="deleteElement(event)" class="bg-red-500 text-white text-center px-5 py-2 rounded hover:bg-red-600">Delete</button>
         </td>`;

    document.getElementById("container").appendChild(tr);
    document.getElementById("studentform").reset();
});

// Delete function
function deleteElement(event) {
    event.preventDefault();
    event.target.closest("tr").remove();
}