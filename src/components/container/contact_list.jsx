import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactList = () => {

    const [estado, setEstado] = useState(false)
    const defaultContact = new Contact('Jose', 'Figueroa', 'jrfm.meri@gmail.com', estado)
    const cambioEstado = () => {
        setEstado (!estado)
    }

    return (
        <div>
            <ContactComponent contact={defaultContact} ></ContactComponent>
            <button onClick={cambioEstado}>Cambiar estado</button>
        </div>
    );
}

export default ContactList;
