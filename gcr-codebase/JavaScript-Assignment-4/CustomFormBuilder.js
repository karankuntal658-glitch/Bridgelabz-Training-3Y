
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let html = '<form id="myForm">';

        for (let i = 0; i < this.fields.length; i++) {
            const field = this.fields[i];

            html += `
                <label>${field.label}</label>
                <input type="${field.type}" name="${field.name}" required>
                <br><br>
            `;
        }

        html += '<button type="submit">Submit</button></form>';

        document.getElementById("formContainer").innerHTML = html;

        document.getElementById("myForm").addEventListener("submit", (event) => {
            event.preventDefault();
            document.getElementById("result").textContent =
                JSON.stringify(this.getFormData(), null, 2);
        });
    }

    getFormData() {
        const form = document.getElementById("myForm");
        const data = {};

        for (let i = 0; i < this.fields.length; i++) {
            const name = this.fields[i].name;
            data[name] = form.elements[name].value;
        }

        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

const builder = new FormBuilder(fields);
builder.createForm();
