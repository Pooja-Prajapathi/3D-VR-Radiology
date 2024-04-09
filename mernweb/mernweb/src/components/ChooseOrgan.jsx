import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const ChooseOrgan = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });


    const handleButtonClick = (buttonType) => {
        // Perform actions related to pixel streaming based on the button clicked
        console.log('Button Clicked: ${ buttonType }');
        window.location.href = '/Upload';
        // Add logic to connect to pixel streaming for lungs, brain, and heart
    };
    const brainhandleButtonClick = (buttonType) => {
        // Perform actions related to pixel streaming based on the button clicked
        console.log('Button Clicked: ${ buttonType }');
        window.location.href = '/Uploadbrain';
        // Add logic to connect to pixel streaming for lungs, brain, and heart
    };
    const hearthandleButtonClick = (buttonType) => {
        // Perform actions related to pixel streaming based on the button clicked
        console.log('Button Clicked: ${ buttonType }');
        window.location.href = '/Uploadheart';
        // Add logic to connect to pixel streaming for lungs, brain, and heart
    };

    return (
        <div className="justify-content-between"style={{ backgroundColor: "smokewhite" }}>
            <div className="container my-5" style={{ backgroundColor: "white" }}>
                <div className="col-6 shadow p-3 mx-auto" style={{ backgroundColor: 'white' }}>
                    <h1 className="display-8 fw-bolder" style={{ textAlign:'center' }}>Choose Organ</h1>
                    <img src="/assests/human_parts.jpg" alt="Organ Image" style={{ width: '100%', height: '50'}} />
                    <button className="btn btn-success"
                        style={{ fontSize: '18px', marginLeft: '70px',marginRight: '50px', marginTop:'20px' }}
                            onClick={() => brainhandleButtonClick('lungs')}
                        >
                            Brain
                        </button>
                        <button className="btn btn-success "
                        style={{
                            fontSize: '18px', marginLeft: '70px', marginRight: '50px', marginTop:'20px' }}
                            onClick={() => handleButtonClick('brain')}>
                            Lungs
                        </button>
                    <button className="btn btn-success "
                        style={{ fontSize: '18px', marginLeft: '70px', marginRight: '10px', marginTop:'20px' }}
                            onClick={() => hearthandleButtonClick('heart')}>
                            Heart
                    </button>

                </div>
                

                </div>
            </div>
    );
};

export default ChooseOrgan;