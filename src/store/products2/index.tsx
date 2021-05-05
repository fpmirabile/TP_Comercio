import * as React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./style.scss";

class Products extends React.PureComponent {
  render() {
    return (
      <div className="w3ls_w3l_banner_nav_right_grid">
        <Container>
          <Row className="justify-content-center">
            <Col lg={{ span: 3 }}>
              <h3>Frutas y Vegetales</h3>
            </Col>
          </Row>
          <div className="w3ls_w3l_banner_nav_right_grid1">
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid1">
                    <Card className="figure">
                      <div className="snipcart-thumb">
                        <a href="single.html">
                          <img
                            src="../../assets/images/29.png"
                            alt=" "
                            className="img-responsive"
                          />
                        </a>
                        <p>Fresh Bananas (1 kg)</p>
                        <h4>
                          $10.00 <span>$12.00</span>
                        </h4>
                      </div>
                      <div className="snipcart-details">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="business" value=" " />
                            <input
                              type="hidden"
                              name="item_name"
                              value="Fresh Bananas"
                            />
                            <input type="hidden" name="amount" value="10.00" />
                            <input
                              type="hidden"
                              name="discount_amount"
                              value="1.00"
                            />
                            <input
                              type="hidden"
                              name="currency_code"
                              value="USD"
                            />
                            <input type="hidden" name="return" value=" " />
                            <input
                              type="hidden"
                              name="cancel_return"
                              value=" "
                            />
                            <input
                              type="submit"
                              name="submit"
                              value="Add to cart"
                              className="button"
                            />
                          </fieldset>
                        </form>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid1">
                    <figure className="figure">
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="images/30.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh cauliflower (2 no's)</p>
                          <h4>
                            $5.00 <span>$8.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh cauliflower"
                              />
                              <input type="hidden" name="amount" value="5.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure className="figure">
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="images/31.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh brinjal bharta (1 kg)</p>
                          <h4>
                            $2.00 <span>$3.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh brinjal bharta"
                              />
                              <input type="hidden" name="amount" value="2.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure className="figure">
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="images/32.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh sweet lime (500 gm)</p>
                          <h4>
                            $6.00 <span>$7.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh sweet lime"
                              />
                              <input type="hidden" name="amount" value="6.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
            <div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure className="figure">
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="images/9.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh spinach (palak)</p>
                          <h4>
                            $2.00 <span>$3.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh spinach"
                              />
                              <input type="hidden" name="amount" value="2.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure className="figure">
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="images/10.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh mango dasheri (1 kg)</p>
                          <h4>
                            $5.00 <span>$8.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh mango dasheri"
                              />
                              <input type="hidden" name="amount" value="5.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="tag">
                    <img
                      src="images/tag.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure className="figure">
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="images/11.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh apple red (1 kg)</p>
                          <h4>
                            $6.00 <span>$8.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh apple red"
                              />
                              <input type="hidden" name="amount" value="6.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure className="figure">
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="images/12.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh broccoli (500 gm)</p>
                          <h4>
                            $4.00 <span>$6.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh broccoli"
                              />
                              <input type="hidden" name="amount" value="4.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="w3ls_w3l_banner_nav_right_grid1 w3ls_w3l_banner_nav_right_grid1_veg">
            <div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asdfdfd">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure className="figure">
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="images/33.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh basket onion (1 kg)</p>
                          <h4>
                            $5.00 <span>$7.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh basket onion"
                              />
                              <input type="hidden" name="amount" value="5.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure className="figure">
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="images/34.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh muskmelon (1 kg)</p>
                          <h4>
                            $4.00 <span>$5.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh muskmelon"
                              />
                              <input type="hidden" name="amount" value="4.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left w3ls_w3l_banner_left_asd">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="tag">
                    <img
                      src="images/tag.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure className="figure">
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="images/35.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh mushroom (500 ml)</p>
                          <h4>
                            $11.00 <span>$15.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh mushroom"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                value="11.00"
                              />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure className="figure">
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="single.html">
                            <img
                              src="images/36.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>fresh strawberry (1 pc)</p>
                          <h4>
                            $7.00 <span>$9.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh strawberry"
                              />
                              <input type="hidden" name="amount" value="7.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Products;
