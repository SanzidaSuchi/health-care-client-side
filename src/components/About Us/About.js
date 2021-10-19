import React from 'react';
import Sergel from './../../images/sergel-intro.jpg'

const About = () => {
    return (
        <div>
            <div className="container d-flex mt-5">
                <div className="col-4">
                    <h2>About Us</h2>
                    <p>Healthcare Pharmaceuticals limited (HPL) is one of the best kinds of company in the pharmaceutical industry in Bangladesh manufacturing branded generic products for local and overseas market in Asia, Africa and CIS region. HPL adopting the most recent technology to formulate and to produce generic formulation ensuring optimum quality compared to the international brands
                    Healthcare started its operation in 1988 through establishing a company named Healthcare Distribution Limited in association with Roche (Bangladesh) Limited. Until 2001 Healthcare was responsible for importing and distributing Roche products to the local market.
                    Later on, in 1996 Healthcare decided to establish its own pharmaceutical plant named Healthcare Pharmaceuticals Limited (HPL) to produce the products those are imported from Roche, Switzerland and other local generics for indigenous market.</p>
                </div>
                <div className="col-8">
                <h3>Security Packing</h3>
                <img  src={ Sergel} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;