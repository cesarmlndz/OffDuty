import React, {useEffect, useState} from 'react'
import axios from 'axios';
import medical from '../icons/first-aid-kit.png';
import accident from '../icons/healthy-care.png';
import thief from '../icons/thief.png';
import danger from '../icons/danger.png';

export default function Main() {
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState(0);
    const [description, setDescription] = useState("");

    const sendMainAlert = () => {
        if(userName.length < 1 || userPhone < 1 || description < 1) {
            alert("Please fill out all fields!");
        }
        else {
            axios.post("http://localhost:6001/getMessage", {
                name: userName,
                body: description,
                to: "+19546737179",
                number: userPhone
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })

            alert("Success! Someone is on the way. Stay safe.");
        }
    }

     const sendMedicalAlert = () => {
        axios.post("http://localhost:6001/getMedical", {
                body: "URGENT MEDICAL EMERGENCY",
                to: "+19546737179",
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
    }

    const sendRobberyAlert = () => {
        axios.post("http://localhost:6001/getRobbery", {
                body: "URGENT ROBBERY EMERGENCY",
                to: "+19546737179",
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
    }

    const sendAccidentAlert = () => {
        axios.post("http://localhost:6001/getAccident", {
                body: "URGENT ACCIDENT EMERGENCY",
                to: "+19546737179",
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
    }

    const sendDangerAlert = () => {
        axios.post("http://localhost:6001/getDanger", {
                body: "URGENT DANGER EMERGENCY",
                to: "+19546737179",
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
    } 
 
  return (
    <div className='main-container'>
        <h2 className='instant-title'>Select Your <span>Emergency</span></h2>
        <div className='btn-container'>
            <div className='top-btns'>
                <button className='quick-btn' onClick={sendMedicalAlert}>
                    <img src={medical} />
                    <h2>Medical</h2>
                </button>
                <button className='quick-btn' onClick={sendRobberyAlert}>
                    <img src={accident}/>
                    <h2>Accident</h2>
                </button>
            </div>
           <div className='bot-btns'>
            <button className='quick-btn' onClick={sendAccidentAlert}>
                    <img src={thief}/>
                    <h2>Robbery</h2>
                </button>
                <button className='quick-btn' onClick={sendDangerAlert}>
                    <img src={danger}/>
                    <h2>Danger</h2>
                </button>
           </div>
        </div>
       <div className='p-container'>
            <p>Is the Emergency not too urgent? Have time to fill out some details? Provide your name, phone number, and a description of what occured. </p>
       </div>
        <div className='bottom-half'>
            <h3>Additional Details</h3>
            <input className='number' placeholder='Name' onChange={(e) => {
                setUserName(e.target.value)
            }}></input>
            <input className='number' placeholder='Phone #' onChange={(e) => {
                setUserPhone(e.target.value)
            }}></input>
            <textarea placeholder='What happened?' onChange={(e) => {
                setDescription(e.target.value);
            }}></textarea>
            <button className='send-alert' onClick={sendMainAlert}>ALERT NOW!</button>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.851451740415!2d-80.1409627495051!3d25.907253408803125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad768d6fb88f%3A0x2260d38b31d36d0a!2sKovens%20Conference%20Center!5e0!3m2!1sen!2sus!4v1662844715877!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
