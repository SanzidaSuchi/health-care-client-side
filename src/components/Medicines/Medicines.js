import React from 'react';
import Medicine from '../Medicine/Medicine';




import medicine1 from '../../images/medicine/Adalimab.png';
import medicine2 from '../../images/medicine/Adribin.png';
import medicine3 from '../../images/medicine/Bevacimab.png';
import medicine4 from '../../images/medicine/Cisplat.png';
import medicine5 from '../../images/medicine/Cytocrab.png';
import medicine6 from '../../images/medicine/Darbetin.png';


const medicines = [
    {
        img: medicine1,
        name: 'Adalimab',
        medicare: '-medicine-'
    },
    {
        img: medicine2,
        name: 'Adribin',
        medicare: '-medicine-'
    },
    {
        img: medicine3,
        name: 'Bevacimab',
        medicare: '-medicine-'
    },
    {
        img: medicine4,
        name: 'Cisplat',
        medicare: '-medicine-'
    },
    {
        img: medicine5,
        name: 'Cytocrab',
        medicare: '-medicine-'
    },
    {
        img: medicine6,
        name: 'Darbetin',
        medicare: '-medicine-'
    },
]

const Medicines = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-2 App">Our Medicine</h2>
            <div className="row">
                {
                    medicines.map(medicine => <Medicine
                        key={medicine.name}
                        medicine={medicine}
                    >

                    </Medicine>)
                }
            </div>
        </div>
    );
};

export default Medicines;


