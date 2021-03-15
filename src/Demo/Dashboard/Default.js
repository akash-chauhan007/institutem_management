import React,{useState, useEffect} from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';
import {db} from '../../fire';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import {Form} from 'react-bootstrap';
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import aka1 from '../../assets/images/user/akash1.PNG'
import aka3 from '../../assets/images/user/akash2.PNG';
import aka2 from '../../assets/images/user/akash3.PNG';
import aka4 from '../../assets/images/user/akash4.PNG';
import aka5 from '../../assets/images/user/akash5.PNG';
import aka6 from '../../assets/images/user/akash6.PNG';
import aka7 from '../../assets/images/user/akash7.PNG';
// import akash8 from '../../assets/images/user/akash-8.jpg';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Gallery from 'react-grid-gallery';


const Dashboard=()=>{
    const [handleComp, setHandleComp] = useState([])
    const fetchBlogs=async()=>{
      const ateenref =db.collection('Ateen_India');
      const res=await ateenref.get();
      const docs = res.docs 
      let dataArray = docs.map(doc => doc.data())
      setHandleComp(dataArray)
    }
    useEffect(() => {
      fetchBlogs();
 
    }, [])

    const IMAGES =
[{
        src: aka1,
        thumbnail: aka1,
        thumbnailWidth: 600,
        thumbnailHeight: 400,
        // isSelected: true,
        // caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: aka2,
        thumbnail: aka2,
        thumbnailWidth: 600,
        thumbnailHeight: 400,
        // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        // caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: aka3,
        thumbnail: aka3,
        thumbnailWidth: 600,
        thumbnailHeight: 400
        
},
{
        src: aka4,
        thumbnail: aka4,
        thumbnailWidth: 600,
        thumbnailHeight: 400,
        // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        // caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: aka5,
        thumbnail: aka5,
        thumbnailWidth: 600,
        thumbnailHeight: 400,
        // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        // caption: "Boats (Jeshu John - designerspics.com)"

  },
{
            src: aka6,
            thumbnail: aka6,
            thumbnailWidth: 600,
            thumbnailHeight: 400,
            // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            // caption: "Boats (Jeshu John - designerspics.com)"
},
  {
        src: aka7,
        thumbnail: aka7,
        thumbnailWidth: 600,
        thumbnailHeight: 400,
        // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        // caption: "Boats (Jeshu John - designerspics.com)"

}]

// class Dashboard extends React.Component {
    // render() {
        const tabContent = (
            <Aux>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Silje Larsen</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3784</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Julie Vad</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3544</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>2739</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Frida Thomse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>1032</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Silje Larsen</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>8750</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>8750</span>
                    </div>
                </div>
            </Aux>
        );

        return (
            <Aux >
                <Row>
                <Col md={5} xl={10}>
                        <Card>
        
                        <AliceCarousel autoPlay autoPlayInterval="3000">
                            <img src={aka1} className="sliderimg" width="100%"/>
                            <img src={aka2} className="sliderimg" width="100%"/>
                            <img src={aka3} className="sliderimg" width="100%"/>
                            <img src={aka4} className="sliderimg" width="100%"/>
                        </AliceCarousel>
            
                        </Card>
                    </Col>

                    <Col md={15} xl={12} >
                        <Card>
                        <Gallery images={IMAGES}/>
                        
              
                        </Card>
                    </Col>
                    


                        {/* <h6 className='mb-4'>The Brand You Check Data in: Select the Brand 👉 &nbsp;&nbsp;&nbsp; */}
                                {/* <select onChange={onChange} value={brand} name="brand"> */}
                                {/* <select  name="brand">
                                <option>Select here</option>
                                <option  value="suzuki" >Suzuki</option>
                                <option  value="honda" >Honda</option>
                                <option  value="hundai">Hyundai</option>
                                <option  value="mahindra" >Mahindra</option>
                                <option  value="renault" >Renaults</option>
                                <option  value="nissan" >Nissan</option>
                                <option  value="tata" >Tata</option>
                                <option  value="suzuki" >Skoda</option>
                                <option  value="honda" >Toyota</option>
                                <option  value="hundai">Volkswagen</option>
                                <option  value="mahindra" >Jeep</option>
                                <option  value="renault" >Chevorolet</option>
                                <option  value="nissan" >Ford</option>
                                <option  value="suzuki" >Mitsudisha</option>
                                <option  value="honda" >Isuzu</option>
                                <option  value="hundai">Mercedes</option>
                                <option  value="mahindra" >Mg</option>
                                <option  value="renault" >Kia</option>
                                <option  value="nissan" >Flat</option>
                                
                                </select></h6>
 */}

 
                            {/* <Card.Body>
                                <h6 className='mb-4'>Monthly Sales</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-5"/> $2.942.32</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">36%</p>
                                    </div>
                                </div>
                                {/* <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                </div> */}
                            {/* </Card.Body>  */}

                    {/* <Col xl={4}> */}
                        {/* <Card> */}
                            {/* <Card.Body>
                                <h6 className='mb-4'>Yearly Sales</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> $8.638.32</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">70%</p>
                                    </div>
                                </div>
                                {/* <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                </div> */}
                            {/* </Card.Body>  */}
                        {/* </Card> */}
                        {/* </Col> */}
            {/* <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={akash1} className="sliderimg" alt="" width="100%" height="700" />
                <img src={akash2} className="sliderimg" alt="" width="100%" height="700"/>
                <img src={akash3} className="sliderimg" alt="" width="100%" height="700"/>
                <img src={akash4} className="sliderimg" alt=""  width="100%" height="700"/>
            </AliceCarousel> */}

                </Row>
            </Aux>
        );
    }
// }

export default Dashboard;