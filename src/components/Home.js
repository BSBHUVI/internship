import React, { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';

import axios from "axios"
import moment from "moment"
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState([]);
    const navigate=useNavigate()
    const submit=()=>{
        alert("Thank you")
        navigate('/internship/Navbar/Register')

    }

   
  

  

    const getUserData = async () => {
        const res = await axios.get("https://customerdetailsbhuvi.herokuapp.com/getdata", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status === 401 || !res.data) {
            console.log("errror")
        } else {
            setData(res.data.getUser)
        }

    }

 

    useEffect(() => {
        getUserData()
    }, [])
  
    return (
        <>
          
            <div className='container mt-2'>
                <h1 className='text-center mt-2'>Customer Details </h1>
                <div className='text-end'>

                </div>

                <div className='bhu'>

                    {
                        data.length > 0 ? data.map((el, i) => {
                            return (
                                <div key={el._id}>
                                    <Card  style={{ width: '20rem', height: "20rem" }} className="mb-3">
                                        <Card.Img variant="top" style={{ width: "8rem", textAlign: "center", margin: "auto" }} src={`/uploads/${el.imgpath}`} className='mt-2' />
                                        <Card.Body className='text-center'>
                                            <Card.Title>User Name : {el.fname}</Card.Title>
                                            <Card.Text>
                                                Date Added :{moment(el.date).format("L")}
                                            </Card.Text>
                                            <Card.Text>
                                            User Age : {el.fage} 
                                            </Card.Text>
                                            User Gender : {el.fgender}
                                            
                                        </Card.Body>
                                        <button className='btn' onClick={submit}>Submit</button>
                                    </Card>
                                </div>
                            )
                        }) : ""
                    }
                </div>
            </div>
        </>
    )
}

export default Home