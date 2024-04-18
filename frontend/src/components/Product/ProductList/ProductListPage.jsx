import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bimg from "../../../images/productBanner.png";
import "../productlist.css";
import ProductFilter from "./ProductFilter";
import ProductCardContainer from "./ProductCardContainer";

export default function ProductListPage() {
  return (
    <Container fluid>
      <Row>
        <Col
          style={{ backgroundImage: `url('https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/shark-new-collection-sale-clothing-banner-template-p3ztild89dffd0.webp')`, height: "50vh" }}
          className="bannerImage"
        ></Col>
    
      </Row>

    
          <ProductFilter />
          <br></br>
          <ProductCardContainer />
     
      
    </Container>
  );
}
