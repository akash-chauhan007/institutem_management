import React ,{useState} from 'react';
import {Row, Col, Card, Form, Button,} from 'react-bootstrap';
import{db} from '../../fire';
import Aux from "../../hoc/_Aux";
import moment from 'moment'

// class FormsElements extends React.Component {

    const FormsElements = () => {
    const [handleComp, setHandleComp] = useState({})
    const onChange = e => setHandleComp({...handleComp, [e.target.name]: e.target.value})
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log("check handleComp >>>", handleComp)
        // console.log(dprice2, dprice1, mrp2, mrp1, particulars, screen_size, brand)
        // if(){
            const statsRef = await db.collection("IICS").doc("--stats--");
            const counterDoc = await statsRef.get()
            let counter = counterDoc.exists ? counterDoc.data().counter : 1
            let zeroStr ="000"
            let counterStr = `${counter}`
            let ateenId = `APD${moment().format("YYMM")}${zeroStr.substring(counterStr.length)+counterStr}`
    
            db.collection('IICS').doc(ateenId).set({
                Roll_No:screen_size,
                cancel:false,
                id:ateenId,
                Course:brand,
                Name:Name,
                FatherName:FatherName,
                BatchTime:BatchTime,
                mrp1:mrp1,
               dprice1:dprice1,
                
            }).then(()=>{
                    counterDoc.exists ? statsRef.update({counter : counter+1}):statsRef.set({counter:counter+1})
                 }).then(() =>{
                    setHandleComp({
                        brand:'',
                        cancel:false,
                        Name:'',
                        dprice1: '',  
                        mrp1: '', 
                        Course: '', 
                        Roll_No: '',
                        FatherName:'',
                        BatchTime:''
                    })
                    // console.log(">>>>>", dprice2, dprice1, mrp2, mrp1, particulars, screen_size)
                alert('data has been submited 👍');
                
            }).catch((error) =>{
                alert(error.message);
                });
                setHandleComp({}) 
        // }
            
    };
    
    const {BatchTime, Roll_No, dprice1, mrp1, FatherName,Name, screen_size, brand} = handleComp
    console.log(">>>>", handleComp)
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                            <Form.Group controlId="exampleForm.ControlInput1">
                            
                                <Card.Title as="h5">The Course You Put Data in: Select the Course 👉 &nbsp;&nbsp;&nbsp;
                                <select onChange={onChange} value={brand} name="brand">
                                <option>Select Course</option>
                                <option  value="Software" >Software</option>
                                <option  value="Hardware" >Hardware</option>
                                <option  value="Networking">Networking</option>
                                <option  value="Hacking" >Hacking</option>
                                <option  value="multimedia" >multimedia</option>
                                <option  value="Wordpress" >Wordpress</option>
                                <option  value="Web Designing" >Web Designing</option>
                                <option  value="Basic" >Basic</option>
                                <option  value="E-accounting" >E-accounting</option>
                                <option  value="CCC">CCC</option>
                                <option  value="Php" >Php</option>
                                <option  value="Digital Marketing" >Digital Marketing</option>
                                <option  value="Java" >Java</option>
                                <option  value="JavaScript" >Java Script</option>
                                <option  value="Python" >Python</option>
                                <option  value="Css/Html">Css/Html</option>
                                
                                </select></Card.Title>
                                </Form.Group>
                            </Card.Header>
                            <Card.Body>
                                <h5> Add Course Details</h5>
                                <hr/>
                                <Row>
                                    <Col md={6}>
                                        <Form>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Roll No:</Form.Label>
                                                <Form.Control type="text" placeholder="Roll No...." name ="screen_size"
                                                value={screen_size} onChange={onChange} required="" />
                                            </Form.Group>

                                            <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Course</Form.Label>
                                            <Form.Control type="text" placeholder="Course..." name ="brand"
                                             value={brand} onChange={onChange} required="" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Name" name ="Name"
                                            value={Name} onChange={onChange} required= "" />
                                            </Form.Group>
                                        
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Father Name</Form.Label>
                                            <Form.Control type="text" placeholder="Father Name.." name ="FatherName"
                                            value={FatherName} onChange={onChange} required= "" />
                                            </Form.Group>
                                       <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Batch Time</Form.Label>
                                            <Form.Control type="text" placeholder="Batch Time.." name ="BatchTime"
                                            value={BatchTime} onChange={onChange} required= "" />
                                            </Form.Group>
                                        
                                        </Form>
                                    </Col>

                                    <Col md={6}>

                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Fee</Form.Label>
                                            <Form.Control type="number" placeholder="One Time Amount"  name ="mrp1"
                                                value={mrp1} onChange={onChange} required
                                            /><br></br>
                                            <Form.Control type="number" placeholder="Installment" name ="dprice1"
                                            value={dprice1} onChange={onChange} required />
                                        </Form.Group>
                                            
                                            
                                         
                                         <Button variant="primary" onClick={handleSubmit}>
                                                Submit
                                            </Button>  
                                        
                                    </Col>
                                </Row>
                            </Card.Body>
                </Card>
            </Col>
                 </Row>
            </Aux>
        );
    }

    
    export default FormsElements;
  