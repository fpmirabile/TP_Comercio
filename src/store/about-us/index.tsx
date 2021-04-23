import * as React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./style.scss";

class AboutUs extends React.PureComponent {
  render() {
    return (
      <div className="main-about">
        <div className="section-gradient">
          <div className="map"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={{ span: 8 }}>
                <div className="wow fadeIn">
                  <h1>Expand business. Inspiring you to success.</h1>
                  <p className="lead">
                    Here at Chamb, we want you to find new connections, grow
                    profitable relationships, and make more money than you could
                    ever dream of making. Sound like something you’d like to do?
                    Then what are you reading this for?
                  </p>
                  <p>Go sign up and get inspired!</p>
                </div>
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
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia dolore
                          magnam aliquam quaerat voluptatem.
                        </p>
                        <p>
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur? Quis autem vel eum iure
                          reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum
                          fugiat quo voluptas nulla pariatur?"
                        </p>
                        <p>
                          We took it upon ourselves to change that. We developed
                          a burning desire to create something to bridge the
                          chasms between businesses across country and
                          continent. So, with a goal in mind, a skilled team at
                          hand, Chamb sprung forth: the website that helps
                          discover and build profitable long-lasting networks
                          amongst businesses around the world.
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  <img
                    className="wow fadeIn"
                    src="images/mac-about.png"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default AboutUs;
