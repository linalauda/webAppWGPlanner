import { useState } from 'react';
import PB_Max from '../Max_Mustermann.jpeg';
import PB_Fritz from '../Fritz_Fiktiv.jpeg';
import PB_Klara from '../Klara_Klartext.jpeg';

const initialUsers = [
    { 
        email: 'mustermann@beispiel.bsp',
        username: 'Max Mustermann',
        passwort: 'Mustermann123!',
        geddatum: '2001-05-02',
        bio: 'Hallo ich bin Max Mustermann und 23 Jahre alt',
        image: PB_Max
    },
    { 
        email: 'fiktiv@beispiel.bsp',
        username: 'Fritz Fiktiv',
        passwort: 'Fiktiv123!',
        geddatum: '1999-11-25',
        bio: 'Hallo ich bin Fritz Fiktiv und 24 Jahre alt',
        image: PB_Fritz
    },
    { 
        email: 'klartext@beispiel.bsp',
        username: 'Klara Klartext',
        passwort: 'klartext123!',
        geddatum: '2003-06-25',
        bio: 'Hallo ich bin Klara Klartext und 20 Jahre alt',
        image: PB_Klara
    }
];


export default initialUsers;