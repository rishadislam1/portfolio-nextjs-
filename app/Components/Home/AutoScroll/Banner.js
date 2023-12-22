const Banner = ({ images, speed = 25000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <p className="mx-10 w-full">{image}</p>
              </div>
            ))}
          </section>
        
      
        </div>
      </div>
    );
  };
  
  export { Banner };
  