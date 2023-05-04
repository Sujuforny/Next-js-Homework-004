import Carousel from "react-bootstrap/Carousel";

function CaruoselComponent() {
  return (
  
    <Carousel className="container" >
      <Carousel.Item interval={1000}>
        <img 
          className="d-block w-100 " style={{height:800}}
          src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-25"
          src="https://i.pinimg.com/564x/e7/a1/6c/e7a16c60e12bd3c1eb32cea2246758de.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src="https://i.pinimg.com/564x/bd/22/ba/bd22ba86f4b78015a6bea7c2b9bd27f3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CaruoselComponent;
