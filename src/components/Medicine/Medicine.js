import React from 'react';

const Medicine = ({medicine}) => {
    const { name, img, medicare } = medicine;
    return (
        <div className="col-lg-4 col-sm-6 col-12 App">
        <img src={img} alt="" />
        <h3 className="App">{name}</h3>
        <h5 className="text-danger">{medicare}</h5>
    </div>
    );
};

export default Medicine;



