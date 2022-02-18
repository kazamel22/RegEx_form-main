const inputs = document.querySelectorAll("input")
const pattern={
    telephone:/^\d{11}$/,
    username :/^\w{5,12}$/,
    email:/^[\w-\.]+@[\w-]+\.([a-zA-Z]){2,5}(\.([a-z]){0,3})?$/,
    slug:/^[a-z\d-]{8,20}$/,
    password:/^[\w@-]{8,20}$/
}
 const valudation = (field,regEx) => {
    field.className=(regEx.test(field.value))?"valid":"unvalid"
 }


inputs.forEach(input => {
    input.addEventListener('blur', (e) =>{
        let fieldName = e.target.attributes.name.value;
        let field = e.target;
        valudation(field,pattern[fieldName])
    })
})