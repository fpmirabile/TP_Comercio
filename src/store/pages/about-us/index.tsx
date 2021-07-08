import * as React from "react";
import { Card, Col, Container } from "react-bootstrap";
import "./styles.scss";

class AboutUs extends React.PureComponent {
  render() {
    return (
      <div className="about-us">
        <Container>
          <div className="title">Quienes somos</div>
          <Col md={8}>
            <Card className="au-body">
              Estimados clientes y amigos, gracias por elegirnos!
              <br></br>
              <br></br>
              Desde hace 5 años estamos presentes en el mercado de los
              alimentos. Hemos ayudado a implementar góndolas libres de gluten
              en comercios de todo el país.
              <br></br>
              <br></br>
              En Almacen Celiaco nos hemos especializado en aquellos productos
              que cumplen condiciones de calidad, trazabilidad y un celoso
              cuidado en la elección de las materias primas con los que se
              elaboran y/o producen, fundamentalmente aquellos que están libres
              o no contengan entre sus composición e ingredientes gluten de
              trigo, avena, cebada o centeno, ni tampoco trazas de ellos. Es
              decir. que son producidos en instalaciones acondicionados
              especialmente para su elaboración y que se utilizan con materias
              primas que respetan dichas condiciones de seguridad e higiene,
              evitando todo tipo de contaminaciones externas. Si bien se tiene
              como mito que los alimentos sin TACC son también saludables,
              sabemos que no es del todo así, y que ésto no es una moda o una
              dieta de revista, sino una necesidad y una condición permanente
              para muchas personas, la de cuidar el consumo de alérgenos
              puntuales que dañan su salud. Afortunadamente existen hoy opciones
              diversas, establecimientos y fábricas específicas, con
              producciones industriales controladas y de escala menor que los
              producidos para consumo masivo. Y trabajamos junto a muchas de
              ellas.
              <br></br>
              <br></br>
              Esta es nuestra tienda online abierta a todo el público , y en
              donde podrás conocer además parte de nuestro catálogo de
              productos. Esperamos te sea cómoda y útil. Está pensada para que
              hagas tus compras a tu ritmo, puedas pagarlas fácilmente y para
              que las recibas en tu casa. Y si necesitás ayuda, contactanos por
              cualquiera de nuestros medios, así cursamos tu pedido mayorista
              por fuera de la tienda. Estamos para servirte y gracias por
              acompañarnos todos los días en esta elección de vida. Para compras
              para comercios o ventas mayoristas, contactate con nosotros. Va a
              ser un gusto conocernos.
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}

export default AboutUs;
