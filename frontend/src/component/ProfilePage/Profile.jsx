import React, { useState } from 'react';
import "../../Styles/reset.css";

import "../../Styles/addProfile.css";
import { useAddProfile } from '../../Hooks/profile';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate()
    const {addProfile} = useAddProfile()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [insteredSports, setinsteredSports] = useState([]);
    const [skill, setSkill] = useState("Beginner");
    const [city, setCity] = useState("");
    const [address , setAddress] = useState(city)

    const handleOnSubmit = async(e) => {
        e.preventDefault();
       await addProfile(name, phone, address ,insteredSports, skill, city)
       navigate('/getallevent')

    }

    const getValues = () => {
        const inputText = document.getElementById('textInput').value;
        const values = inputText.split(',').map(value => value.trim());
        setinsteredSports(values);
    }

    return (
        <div className='max-div'>
            <div className="container">
                <div className="first">
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <div className="image-text">
                        <label>Complete Your Profile</label>
                        <label>done</label>
                    </div>
                </div>
                <div className="second">
                    <div className='text1'>Request Information</div>
                    <div className='text2'>If you are a current customer, visit one of our Support Sites for assistance.</div>
                </div>
                <div className="third">
                    <div className="right">
                        <div className="input-container">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" className='input1' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Phone Number:</label>
                            <input type="text" id="phone" name="phone" placeholder="Enter your phone number" className='input1' onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="input-container-checkbox12">
                            <label htmlFor="sports" className=''>Interested Sports:</label>
                            <input type='text' className='input1' id="textInput" placeholder='enter the sport separated by commas' onChange={getValues} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="skill">Skill Level:</label>
                            <select id="skill" name="skill" onChange={(e) => setSkill(e.target.value)}>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label htmlFor="country">City:</label>
                            <input type='text' className='input1' onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label htmlFor="country">Address:</label>
                            <input type='text' className='input1' onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="button">
                            <button type="submit" onClick={handleOnSubmit}>Submit</button>
                        </div>
                    </div>
                    <div className="left">
                        <div className='common-div'>
                            <div className="circle">a</div>
                            <label> We Care About You! We are excited to learn about your league, what you want in an online partner, and consult with you on how we can make your next season easy!</label>
                        </div>
                        <div className='common-div'>
                            <div className="circle">a</div>
                            <label>The Trusted Leader With over 20 years of experience and league partners in every state, we are a partner you can trust to take your league to the next level.</label>
                        </div>
                        <div className='common-div'>
                            <div className="circle">a</div>
                            <label> Quick Setup & Easy To Use Designed by athletes. Made for everyone. No technical skills necessary. Backed by the best team in the industry.</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
