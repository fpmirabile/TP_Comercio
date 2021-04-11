import * as React from "react";
import { Container,Col,Row,Card } from "react-bootstrap";
import "./style.scss";

class AboutUs extends React.PureComponent {

    render(){
        return (

            <div className="main-about">
                <div className="section-gradient">
                    <div className="map"></div>
                    <Container>
                    <Row className="justify-content-center">
                        <Col lg={{ span:8}}>
                        <div className="wow fadeIn" >
                                <h1>Expand business.
                                Inspiring you to success.
                                </h1>
                                <p className="lead">Here at Chamb, we want you to find new connections, grow profitable relationships, and make more money than you could ever dream of making. Sound like something you’d like to do? Then what are you reading this for?
                                <br></br>
                                <br></br>
                                Go sign up and get inspired!
                                </p>
                            </div>
                            <Card>
                                <Card.Body>
                                    <Card.Title className = "title"> ¿Quienes Somos? </Card.Title>
                                    <Card.Text className="lead">
                                    Somos una empresa con más de 20 años de experiencia. Somos especialistas en la venta de sofás, chaise lounge y descanso. 
                                    Nuestra experiencia y espíritu innovador somos líderes consolidados gracias a nuestros clientes.

El objetivo de nuestra empresa es llevar la comodidad a su casa por eso abrimos nuestra tienda online de venta de sofás para estar al lado de nuestros clinets ofreciendo un producto de laclidad premium y MADE IN SPAIN de la mejor calidad y confort a un PRECIO SIN COMPETENCIA.

Ofrecemos a nuestros clientes sofás tapizados en telas y piel 100% vacuno para la decoración y confort de su hogar con productos de calidad, bienestar, comodidad y diseño, decoración. Todos nuestros productos tienen una serie de ventajas que no pueden ofrecer otras empresas del sector como son 2 años de garantía que cubren cualquier desperfecto de fabricación y con los más flexibles y novedosos posibilidades de financiación que le permitirán pagar su compra muy cómodamente sin darse prácticamente cuenta.

Nos preocupamos por la satisfacción de nuestros clientes y damos un amplio servicio post-venta que facilitan desde el traslado hasta la recogida de su viejo sofá dando el mejor servicio a nuestros clientes.

Nuestra red comercial se extiende por por toda España con el objetivo de estar siempre cerca de nuestros clientes.

En nuestra web podrá encontrar una muestra de nuestros catálogos tanto de tapizados en tela como en piel donde nos comprometemos a dar:
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> 
                    </Row>
                    </Container>
                </div>
                
                <div className="do">
                    <div className="blue-light"></div>
                <Container>
                <Row className="justify-content-center">
                   {/* <Col lg={{ span:8, offset:2}}>*/}
                   <Col lg={8}>
                        <div className="does-box">
                            <Card className="panel-body">
                                <Card.Body>
                                    <Card.Title>What Does Chamb Do</Card.Title>
                                    <Card.Text>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                                            voluptatem quia dolore magnam aliquam quaerat voluptatem.
                                        </p>
                                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel 
                                            illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                        </p>
                                        <p>We took it upon ourselves to change that. We developed a burning desire to create something to bridge the chasms between 
                                            businesses across country and continent. So, with a goal in mind, a skilled team at hand, Chamb sprung forth: the website 
                                            that helps discover and build profitable long-lasting networks amongst businesses around the world.
                                        </p>
                                 </Card.Text>
                            </Card.Body>
                            </Card>
                            
                            <img className="wow fadeIn" src="images/mac-about.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
     
        )
    }
}
export default AboutUs
