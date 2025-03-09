// src/components/AddEmployee.js

import React, { useState } from 'react';
import { createEmploye } from '../services/api';

const AddEmploye = () => {
    const [employe, setEmploye] = useState({
        nom: '',
        prenom: '',
        email: '',
        departement: '',
        date_embauche: '',
    });

    const handleChange = (e) => {
        setEmploye({ ...employe, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createEmploye(employe);
        setEmploye({
            nom: '',
            prenom: '',
            email: '',
            departement: '',
            date_embauche: '',
        });
        // Vous pouvez ajouter une logique pour rafraîchir la liste des employés ici
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter un Employé</h2>
            <input type="text" name="nom" placeholder="Nom" value={employe.nom} onChange={handleChange} required />
            <input type="text" name="prenom" placeholder="Prénom" value={employe.prenom} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={employe.email} onChange={handleChange} required />
            <input type="text" name="departement" placeholder="Département" value={employe.departement} onChange={handleChange} required />
            <input type="date" name="date_embauche" value={employe.date_embauche} onChange={handleChange} required />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AddEmploye;
