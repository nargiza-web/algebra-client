import React from 'react'
import {connect} from 'react-redux'
import {useState} from 'react'

const Contactus = (props) => {
  const [contactus, setContactus] = useState({})
  const [message, setMessage] = useState('')
  const handleChange = (e) => {
   setContactus({
     ...contactus,
     [e.target.name]: e.target.value
   })
  }
  
  const savedData = () => {
    props.onSendFeedback(contactus)
    fetch('http://localhost:3011/contactus/', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactus)
    })
      .then((resp) => {
        if(resp.ok == true) {
          setMessage('Feedback Sent')
        }
        else {
          setMessage('Feedback not sent try again')
        }
      })
      // .then((resp) => resp.json())
      // .then((json) => {
        // console.log(json)
      //   if(json._id) {
      //     setMessage('Feedback Sent')
      //   }
      //   else {
      //     setMessage('Feedback not sent try again')
      //   }
      //  })
    
  }
  
  return (
    <div>
    <div className="container">
    
    <div className="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" name="name" onChange={handleChange}/>
  </div>
    <div className="form-group">
      <label for="exampleFormControlInput1" >Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" onChange={handleChange}/>
    </div>

    <div className="form-group">
      <label for="exampleFormControlTextarea1">Feedback</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="feedback" onChange={handleChange}></textarea>
    </div>
    <button type="button" className="btn btn-outline-success" onClick={savedData}>Submit</button>
    <p>{message}</p>
    </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSendFeedback : (sendFeedback) => dispatch({type: 'CONTACTUS', value: sendFeedback})
  }
}

export default connect(null,mapDispatchToProps)(Contactus)