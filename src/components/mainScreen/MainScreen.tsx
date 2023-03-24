import Slider from "react-slick";
import './MainScreen.sass';
import firstImg from '../../assets/1.svg';
import secondImg from '../../assets/2.svg';
import thirdImg from '../../assets/3.svg';
import fourthImg from '../../assets/4.svg';
import fifthImg from '../../assets/5.svg';
import sixthImg from '../../assets/6.svg';
import mainImg from '../../assets/main.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainScreen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className='mainScreen'>
      <div className="mainScreen__container">
        <img src={mainImg} alt="main" className="mainScreen__main-img_mobile" width={436} />
        <h1 className="mainScreen__title">Lorem ipsum, dolor sit amet consectetur</h1>
        <div className="mainScreen__block-wrapper">

          <div className="top-block-wrapper">
            <div className="mainScreen__block">
              <img src={firstImg} alt="1" className="mainScreen__block-img" width={64} height={71.5} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="mainScreen__block">
              <img src={secondImg} alt="2" className="mainScreen__block-img" width={56} height={72} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="middle-block-wrapper">
            <div className="mainScreen__block">
              <img src={thirdImg} alt="3" className="mainScreen__block-img" width={56} height={72} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <img src={mainImg} alt="main" className="mainScreen__main-img" width={436} />
            <div className="mainScreen__block">
              <img src={fourthImg} alt="4" className="mainScreen__block-img" width={96} height={87} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="bottom-block-wrapper">
            <div className="mainScreen__block">
              <img src={fifthImg} alt="5" className="mainScreen__block-img" width={64} height={71.5} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="mainScreen__block">
              <img src={sixthImg} alt="6" className="mainScreen__block-img" width={56} height={72} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

        </div>

        <div className="mainScreen__block-wrapper_mobile">
          <Slider {...settings}>
            <div className="mainScreen__slider-item">
              <img src={firstImg} alt="1" className="mainScreen__block-img" width={64} height={71.5} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="mainScreen__slider-item">
              <img src={secondImg} alt="2" className="mainScreen__block-img" width={56} height={72} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="mainScreen__slider-item">
              <img src={thirdImg} alt="3" className="mainScreen__block-img" width={56} height={72} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="mainScreen__slider-item">
              <img src={fourthImg} alt="4" className="mainScreen__block-img" width={96} height={87} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="mainScreen__slider-item">
              <img src={fifthImg} alt="5" className="mainScreen__block-img" width={64} height={71.5} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="mainScreen__slider-item">
              <img src={sixthImg} alt="6" className="mainScreen__block-img" width={56} height={72} />
              <p className="mainScreen__block-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default MainScreen;