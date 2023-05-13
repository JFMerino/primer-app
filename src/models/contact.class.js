export class Contact {
    firstName = '';
    lastName = '';
    email = '';
    estado = false;

    constructor (firstName, lastName, email, estado){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.estado = estado
        }
}