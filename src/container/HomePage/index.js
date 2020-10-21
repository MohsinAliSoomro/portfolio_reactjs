import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Typist from 'react-typist';
import avatar from '../../img/avatar.jpg'
import './style.css'
import { Link } from 'react-router-dom';
export default function HomePage() {
    return (
        <Layout>
            <Row className="mt-5">
                <Col className="">
                    <p className="intro-paragraph">
                        <Typist>
                        Hello, my name is Mohsin Ali. I am Mern Stack Backend / Frontend developer Living in Pakistan Sindh
                        </Typist>
                    </p>
                    <div className="avatar">
                        <img src={avatar} alt={avatar} />
                    </div>
                    <div className="about">
                        <h4>About</h4>
                        <p>
                        I currently am working as a Mern Stack developer at Fiverr, 
                        which is where my passion for design and development converge. 
                        See my previous work history on <Link to="https://www.linkedin.com/">LinkedIn</Link>. 
                        Outside of work I am a Final year 
                        Student of bachelor in Information Technology .
                        </p>
                        <h4>Service</h4>
                        <p>DEVELOPMENT
                            <br/>
                           Developing Application involves planning and iterating a site's structure and layout. 
                            Once the proper information architecture is in place, I design the visual 
                            layer to create a beautiful user experience.
                        </p>
                        <p>FRONT END DEVELOPMENT
                            <br/>
                            Front End Development is building out the visual components of a website. Using HTML, CSS , 
                            and Javascript, I build fast, interactive websites. This also may include a CMS, API's or other 
                            integrations.
                        </p>
                        
                        
                    </div>
                    <hr/>
                    <div className="email">
                        <h1>Interested in doing project together</h1>
                    </div>
                    <div className="email-container">
                    <Link to="/email">Email Me &rarr;</Link>
                    </div>
                    <hr/>
                    <div className="copyright">
                        <h5>&#169; Mohsin Ali 2020</h5>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}
