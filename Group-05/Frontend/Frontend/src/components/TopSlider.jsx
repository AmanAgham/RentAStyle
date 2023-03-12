import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";

function TopSlider(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

    return (
        <>
            {/* <Slider {...settings}>
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {'assets/header1.jpg'}/>  
              </div>   
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {'assets/header2.jpg'}/>  
              </div>  
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {'assets/header3.jpg'}/>  
              </div >  
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {'assets/header4.jpg'}/>  
              </div>  
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {'assets/header5.jpg'}/>  
              </div> 
              <div className="wdt">  
              <img  className="img" alt="pic1" src= {'assets/header6.jpg'}/>  
              </div> 
            </Slider> */}
        </>        
    );
}

export default TopSlider;