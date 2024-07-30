import Carousel from "react-bootstrap/Carousel";
import Card from "../comp6/card";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className="all">
      <Carousel.Item>
        <div className="ok o">
          <Card />
          <Card />
          <Card />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="ok1 o">
          <Card />
          <Card />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="ok2 o">
          <Card />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
