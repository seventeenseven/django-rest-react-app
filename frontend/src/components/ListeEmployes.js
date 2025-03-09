import React, {useState, useEffect} from 'react';
import { getEmployes, deleteEmploye } from '../services/api';

const ListeEmployes = () => {
    //Creation de la liste employés pour conserver les données
    const [employes, setEmployes] = useState([]);

    //Call vers l'API backend
    useEffect( () => {
        const fetchEmployes = async () => {
            const data  =  await getEmployes();
            console.log(data)
            setEmployes(data);
        };
        fetchEmployes();
    }, []);

    const handleDelete = async (id) => {
        await deleteEmploye(id);
        setEmployes(employes.filter(employe => employe.id !== id));
    };

    return [
        <div>
            <h1>Liste des employés</h1>
            <ul>
                {employes.map( employe => (
                    <li key={employe.id}> {employe.nom}  {employe.prenom} : {employe.email}
                     <button onClick={() => handleDelete(employe.id)}>Supprimer</button>
                    </li>
                )

                )}
            </ul>
        </div>
    ]
}

export default ListeEmployes;