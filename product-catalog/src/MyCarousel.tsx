import Carousel from "react-bootstrap/Carousel";
const slides_data = [
  {
    src: "https://picsum.photos/1003/500",
    alt: "First slide",
    line1: "First slide label",
    line2: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  },
  {
    src: "https://picsum.photos/1002/500",
    alt: "Second slide",
    line1: "Second slide label",
    line2: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  },
  {
    src: "https://picsum.photos/1000/500",
    alt: "Third slide",
    line1: "Third slide label",
    line2: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  },
  {
    src: "https://picsum.photos/1001/500",
    alt: "Fourth slide",
    line1: "Fourth slide label",
    line2: "Nulla vitae elit libero, a pharetra augue mollis interdum."
  }
];

function MyCorusel() {
  var slidesItems = slides_data.map((e, i) => {
    return (
      <Carousel.Item key={i}>
        <img
          width="100%"
          height="200px"
          className="d-block"
          src={e.src}
          alt={e.alt}
        />
        <Carousel.Caption>
          <h3>{e.line1}</h3>
          <p>{e.line2}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return <Carousel>{slidesItems}</Carousel>;
}

export default MyCorusel;
