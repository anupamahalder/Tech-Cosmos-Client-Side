/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from 'prop-types';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right:'20px' }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,display:'block', left:'20px', zIndex:'10' }}
        onClick={onClick}
      />
    );
  }
//   export default function SimpleSlider() {
const BrandSlider = ({adsData})=>{
    // destructure 
    const {image1, image2, image3} = adsData;
    console.log('inside brand slider');
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <Slider {...settings} className="mx-auto bg-black">
        <div className="h-[50vh] mx-auto ">
          <img className="w-full object-cover object-bottom" 
          src={image1} alt="" />
        </div>
        <div className="h-[50vh] mx-auto ">
          <img className="w-full object-cover object-bottom" 
          src={image2} alt="" />
        </div>
        <div className="h-[50vh] mx-auto ">
          <img className="w-full object-cover object-bottom" 
          src={image3} alt="" />
        </div>
      </Slider>
    );
};
// Adding proptypes 
BrandSlider.propTypes ={
    adsData: PropTypes.object.isRequired,
}
export default BrandSlider;