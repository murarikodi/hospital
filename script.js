function registerPatient() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const contact = document.getElementById('contact').value;

    if (name && age && gender && contact) {
        const tableBody = document.getElementById('patient-table-body');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${age}</td>
            <td>${gender}</td>
            <td>${contact}</td>
        `;

        tableBody.appendChild(newRow);

        // Clear form fields
        document.getElementById('registration-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
}
