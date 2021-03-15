import React,{useState, useEffect} from 'react';
import {Row, Col, Card, Table, Form} from 'react-bootstrap';
import {db} from '../../fire';
import Aux from "../../hoc/_Aux";
import SlidingPane from "react-sliding-pane";
import { Button} from 'react-bootstrap';
import "react-sliding-pane/dist/react-sliding-pane.css";
import avatar1 from '../../assets/images/aa.png';
import avatar2 from '../../assets/images/delete.png';
import SonWan from "sonwan-ui";
import "sonwan-ui/build/style.min.css";
//import car from '../../assets/images/user/car.jpg'
 import '../Tables/aka.css';
 const BootstrapTable=()=>{
    const [handleComp, setHandleComp] = useState([])
     const [handleChange, setHandleChange] = useState([])
    const onChange=async(e)=> {
      const brandName = e.target.value;
      console.log('>>>',e.target.value)
      const lena = await db.collection("Teacher").where("brand", "==", brandName).get()

      if(lena.docs.length){
        console.log("Change hoga")
        let dataArray = lena.docs.map(doc => doc.data())
        setHandleComp(dataArray)
      } else {
        setHandleComp([])
      }
    }

      const fetchBlogs=async(e)=>{
              const ateenref = await  db.collection('Teacher').where('cancel','==',false).get()        
              const docs = ateenref.docs 
              let dataArray = docs.map(doc => doc.data())
             setHandleComp(dataArray)
            }
    useEffect(() => {
      fetchBlogs();
    }, [])

     const deleteValue =async (id) =>{
     const change = await db.collection("Teacher").doc(id)
     .update({
       "cancel":true
     });

 console.log(change);
     } 

   
  const { dprice1,  mrp1,Name, FatherName, screen_size, brand, } = handleChange
      console.log(">>>>", handleComp)
    const { Input, Switch, ListItem } = SonWan;

    const [isDark, setIsDark] = React.useState(false);


     return (
            <Aux>
                <Row>
                    <Col>
                        <Card>   

                        <div className={`${isDark ? "dark" : ""} h-screen`}>
      <div className="h-screen bg-light-100 dark:bg-dark-900 ">
        
          <ListItem
            title="Dark Mode" 
            action={ <Switch name="darkmode" onChange={(value) => {setIsDark(value); }}  />
            }
          
          />
          <hr color="#2980b9"></hr>
        


                            <Card.Body>


                            <div style={{marginLeft: "20%"}}>
           
            
            <select value={brand} onChange={onChange} name="brand">
                                <option>Course</option>
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
                                
                                </select>
            {/* <button onClick={fetchData}>Suzuki</button> */}
          </div>
    
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th rowspan="2">S.No.</th>
                                        <th rowspan="2">Teacher Id</th>
                                        <th rowspan="2">Course</th>
                                        <th rowspan="2">Name</th>
                                        <th rowspan="2">Father Name</th>
                                        <th colspan="2" ><center>Fee</center></th>
                                        
                                        </tr>
                                        <tr>
                                            <th>One Time Amount</th>
                                            <th>Installment</th>
                                            <th>Delete</th>
                                
                                     </tr>                                    </thead>
                                    <tbody>
                                        {
        handleComp.map((item,mapId)=>{  
                                const {id, Roll_No, dprice1,Course, Name,FatherName, mrp1,BatchTime, screen_size, brand} = item
                                       return( id  && 
                                       <tr key={mapId}>
                                       <th>{mapId+1} </th>
                                       <td>{id} </td>
                                       <td>{Course} </td>
                                       <td>{Name} "</td>
                                       <td>{FatherName}</td>
                                       <td>{mrp1}</td>
                                       <td>{dprice1}</td>
                                       
                              <td>
                            <Button variant="outline-secondary"  onClick={() => deleteValue(id)}>
                              <img  style={{width: '20px'}} src={avatar2} alt="activity-user"/>
                            </Button>
                            </td>       
                                         </tr>
                                       )
                                    })
                                        }     
                                    </tbody>
                                </Table>
                            </Card.Body>
                            </div>
      </div>
    
                        </Card>
                      
                    </Col>
                </Row>
            </Aux>
        );
    }


export default BootstrapTable;
