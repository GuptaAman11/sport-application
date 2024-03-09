import React, { useState } from "react";
import "../../Styles/reset.css";
import "../../Styles/event.css";
import { useAddEvent } from "../../Hooks/event";
const CreateEvent = () => {

    const {addEvent} = useAddEvent()
    const [selectedValues, setSelectedValues] = useState([]);
    const [organizerName, setOrganizerName] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [prize, setPrize] = useState("");
    const [description, setDescription] = useState("");
    console.log("second",selectedValues,organizerName,location,date,time,prize,description)

   

    const handleChange = (e) => {
        const value = e.target.value;
        if (!selectedValues.includes(value)) {
            setSelectedValues([...selectedValues, value]);
        }
    };

    const handleRemove = (valueToRemove) => {
        setSelectedValues(selectedValues.filter(value => value !== valueToRemove));
    };
    const handleCreateEvent =async(e)=>{
        e.preventDefault()
        await addEvent(selectedValues,organizerName,location,date,time,prize,description)
        
    }

    
    return (
        <>
            <div>
                <div className="container">
                    <div className="first">
                        <img
                            src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg"
                            alt=""
                        />
                        <div className="image-text text-white">
                            <label htmlFor="">Welcome at event Creation form</label>
                            <label htmlFor="">Create event for Sports</label>
                        </div>
                    </div>
                    <div className="second">
                        <div className="text1">Please fill event details </div>
                        <div className="text2">
                            <strong>Note:</strong>You are only responsible for participants
                            assistance.
                        </div>
                    </div>
                    <div className="third">
                        <div className="right  bg-white">
                            <div className="input-container">
                                <label htmlFor="sport">Sports Name:</label>
                                <select onChange={handleChange}>
                                    <option value="">Select Sports</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                                <div className="input-container1">
                                    {selectedValues.map((value) => (
                                        <span key={value} className="selected-value">
                                            {value}
                                            <button onClick={() => handleRemove(value)}>&times;</button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="input-container">
                                <label htmlFor="organizerName">Organizer Name:</label>
                                <input
                                    type="text"
                                    id="organizerName"
                                    name="organizerName"
                                    placeholder="Enter organizer name"
                                    value={organizerName}
                                    onChange={(e) => setOrganizerName(e.target.value)}
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="location">Location:</label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    placeholder="Enter the location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="date">Date:</label>
                                <input
                                    type="text"
                                    id="date"
                                    name="date"
                                    placeholder="Enter date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="time">Time:</label>
                                <input
                                    type="text"
                                    id="time"
                                    name="time"
                                    placeholder="Enter time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="prize">Prize:</label>
                                <input
                                    type="text"
                                    id="prize"
                                    name="prize"
                                    placeholder="Enter the prize pool"
                                    value={prize}
                                    onChange={(e) => setPrize(e.target.value)}
                                />
                            </div>

                            <div className="input-container">
                                <label htmlFor="description">Description:</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    placeholder="Rules and about sports"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="input-container">
                                <button
                                    type="button"
                                    onClick={handleCreateEvent}
                                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                >
                                    Create Event
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateEvent;
