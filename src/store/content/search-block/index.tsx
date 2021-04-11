import * as React from "react";
import { Row,
Col,
DropdownButton,
Dropdown,
Button,
} from "react-bootstrap";
import "./style.scss"

class SearchBlock extends React.PureComponent {
  render() {
    return (
      <div className="search-block">
        <h1>Encuentra tu nuevo amor por los muebles</h1>
        <h4>Nunca ha sido tan facil.</h4>
        <div className="product-search">
          <Row>
            <Col sm={6}>
              <div className="form-search">
                <input type="text" placeholder="Busca el mueble que amas" />
              </div>
            </Col>
            <Col sm={3}>
              <div className="form-search">
                <DropdownButton id="dropdown-basic-button" title="Sillones">
                  <Dropdown.Item href="#/action-1">Sillones</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Sillas</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Camas</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
            <Col sm={3}>
              <div className="form-search">
                <Button className="search-button" variant="primary">
                  Buscar
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SearchBlock;