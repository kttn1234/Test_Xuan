import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow"; 
import ReactFullpage from "@fullpage/react-fullpage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Footer from './../components/Footer';
import {WOW} from 'wowjs';
import "./Home.scss";
import img_rating from "./../assets/img/home/img_rating.png";
import img_banner from "./../assets/img/home/img_banner.png";
import img_eshop_pc from "./../assets/img/home/img_eshop_pc.png";
import img_microsoft_pc from "./../assets/img/home/img_microsoft_pc.png";
import img_steam_pc from "./../assets/img/home/img_steam_pc.png";
import img_eshop_sp from "./../assets/img/home/img_eshop_sp.png";
import img_microsoft_sp from "./../assets/img/home/img_microsoft_sp.png";
import img_steam_sp from "./../assets/img/home/img_steam_sp.png";
import img_demo from "./../assets/img/home/img_demo.png";
import icon_facebook_01 from "./../assets/img/common/icon_facebook_01.svg";
import icon_twitter_01 from "./../assets/img/common/icon_twitter_01.svg";
import icon_instagram_01 from "./../assets/img/common/icon_instagram_01.svg";
import img_stories_01 from "./../assets/img/home/img_stories_01.png";
import img_stories_02 from "./../assets/img/home/img_stories_02.png";
import img_stories_03 from "./../assets/img/home/img_stories_03.png";
import img_stories_04 from "./../assets/img/home/img_stories_04.png";
import img_stories_05 from "./../assets/img/home/img_stories_05.png";
import img_stories_06 from "./../assets/img/home/img_stories_06.png";

class Home extends React.Component{
  constructor(props) {
    super(props);
  }
 
  componentDidMount() {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true
    })
    wow.init();
  }
  state = {
    activeSlide: 0,
    activeSlide2: 0,
    activeSlideExclusive01: 0,
    activeSlideExclusive02: 0,
    activeSlidePromotional01: 0,
    activeSlidePromotional02: 0,
    postShow: 0,
  };
  
  onLeave(origin, destination, direction) {
  }
  afterLoad(origin, destination, direction) {
  }
  
  render() {
    const settingsStories = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
    };
    
    const slidesStories = [
      {
        id: 1,
        title: 'Short Title',
        image: img_stories_01,
      }, {
        id: 2,
        title: 'Short Title',
        image: img_stories_02,
      }, {
        id: 3,
        title: 'Short Title',
        image: img_stories_03,
      }, {
        id: 4,
        title: 'Short Title',
        image: img_stories_04,
      }, {
        id: 5,
        title: 'Short Title',
        image: img_stories_05,
      }, {
        id: 6,
        title: 'Short Title',
        image: img_stories_06,
      }, {
        id: 7,
        title: 'Short Title',
        image: img_stories_02,
      }, {
        id: 8,
        title: 'Short Title',
        image: img_stories_03,
      }, {
        id: 9,
        title: 'Short Title',
        image: img_stories_04,
      }, {
        id: 10,
        title: 'Short Title',
        image: img_stories_05,
      }
    ];
    const settingsPost = {
      className: "center",
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      arrows: false,
      centerMode: true,
      centerPadding: "5%",
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current }),
      responsive: [
        {
          breakpoint: 768,
          settings: "unslick",
        }
      ],
    };
    const slidesPostRef = React.createRef();
    const nextPost=()=> {
      slidesPostRef.current.slickNext();
    }
    const prevPost=()=> {
      slidesPostRef.current.slickPrev();
    }
    let showPostMore = () => {
      this.state.postShow = 1
    }
    let slidesPostCount = this.state.activeSlide + 1;
    let slidesPostCountString = slidesPostCount.toString().length;
    const slidesPost = [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
        image: img_demo,
      }, {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
        image: img_demo,
      }, {
        id: 3,
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
        image: img_demo,
      }, {
        id: 4,
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
        image: img_demo,
      }, {
        id: 5,
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
        image: img_demo,
      }, {
        id: 6,
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
        image: img_demo,
      }, {
        id: 7,
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
        image: img_demo,
      }, {
        id: 8,
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
        image: img_demo,
      }, {
        id: 9,
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
        image: img_demo,
      }, {
        id: 10,
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.',
        image: img_demo,
      },
    ];
    const settingsPromotional = {
      customPaging: function(i) {
        let slidesPromotionalCount = i + 1;
        let slidesPromotionalCountString = slidesPromotionalCount.toString().length;
        return (
          <div>
            <div className="progress">
              <span className="progress-left">
                  <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                  <span className="progress-bar"></span>
              </span>
              <div className="progress-value">{slidesPromotionalCountString ===1?'0':''}{slidesPromotionalCount}</div>
            </div>
          </div>
        );
      },
      className: "center",
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 3,
      arrows: false,
      centerMode: true,
      centerPadding: "13%",
      autoplay: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current }),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            centerPadding: "9.6%",
          }
        }
      ]
    };
    
    const slidesPromotional = [
      {
        id: 1,
        title: "short title here",
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... ',
        image: img_demo,
      }, {
        id: 2,
        title: 'short title here',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... ',
        image: img_demo,
      }, {
        id: 3,
        title: 'short title here',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... ',
        image: img_demo,
      }, {
        id: 4,
        title: 'short title here',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... ',
        image: img_demo,
      }, {
        id: 5,
        title: 'short title here',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... ',
        image: img_demo,
      }
    ];
    
    const settingsExclusive = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      arrows: false,
      beforeChange: (current, next) => this.setState({ activeSlideExclusive01: next }),
      afterChange: current => this.setState({ activeSlideExclusive02: current }),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "center",
            arrows: false,
            centerMode: true,
            centerPadding: "7%",
          }
        }
      ]
    };
    const slidesExclusiveRef = React.createRef();
    const nextExclusive=()=> {
      slidesExclusiveRef.current.slickNext();
    }
    const prevExclusive=()=> {
      slidesExclusiveRef.current.slickPrev();
    }
   
    let slidesExclusiveCount = this.state.activeSlideExclusive01 + 1;
    let slidesExclusiveCountString = slidesExclusiveCount.toString().length;
  
    const slidesExclusive = [
      {
        id: 1,
        image: img_demo,
      }, {
        id: 2,
        image: img_demo,
      }, {
        id: 3,
        image: img_demo,
      }, {
        id: 4,
        image: img_demo,
      }, {
        id: 5,
        image: img_demo,
      }, {
        id: 6,
        image: img_demo,
      }, {
        id: 7,
        image: img_demo,
      }, {
        id: 8,
        image: img_demo,
      }, {
        id: 9,
        image: img_demo,
      }, {
        id: 10,
        image: img_demo,
      }
    ];
    return (
      <ReactFullpage
        // scrollOverflow={true}
        scrollBar={true} 
        responsiveWidth={768} 
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <div className="banner">
                  <div className="banner__content">
                    <div className="inner">
                      <div className="banner__image  wow fadeInUp"  data-wow-duration=".8s">
                        <img
                          src={img_banner}
                          alt="start"
                          className="banner__rating-icon"
                        />
                      </div>
                      <h2 className="main-title wow fadeInUp" data-wow-duration="1s">GAMELOFT<br className="hidden-pc"/> GAME</h2>
                      <div className="banner__rating wow fadeInUp" data-wow-duration="1.2s">
                        <span className="banner__rating-title">Rating / Action</span>
                        <img
                          src={img_rating}
                          alt="start"
                          className="banner__rating-icon"
                        />
                      </div>
                      <p className="banner__description wow fadeInUp" data-wow-duration="1.4s">
                        Lorem ipsum dolor sit amet, consectetur<br className="hidden-pc"/> adipiscing elit, sed do
                        eiusmod tempor<br className="hidden-pc"/> incididunt ut labore et dolore magna aliqua.<span className="hidden-sp"> Ut
                        enim ad minim veniam, quis nostrud</span>
                      </p>
                    </div>
                    <div className="banner__store wow fadeInUp" data-wow-duration="1.6s">
                      <div className="inner">
                        <p className="banner__store-title">Download latest version</p>
                        <ul className="banner__store-list">
                          <li className="hidden-sp">
                            <a
                              className="banner__store-button"
                              href="#"
                              className="trans"
                            >
                              <img src={img_eshop_pc} alt="eshop" />
                              
                            </a>
                          </li>
                          <li>
                            <a
                              className="banner__store-button"
                              href="#"
                              className="trans"
                            >
                              <img src={img_microsoft_pc} alt="microsoft" className="hidden-sp" />
                              <img src={img_microsoft_sp} alt="microsoft" className="hidden-pc" />
                            </a>
                          </li>
                          <li>
                            <a
                              className="banner__store-button"
                              href="#"
                              className="trans"
                            >
                              <img src={img_steam_pc} alt="steam" className="hidden-sp" />
                              <img src={img_steam_sp} alt="steam" className="hidden-pc" />
                            </a>
                          </li>
                          <li className="hidden-pc">
                            <a
                              className="banner__store-button"
                              href="#"
                              className="trans"
                            >
                              <img src={img_eshop_sp} alt="eshop" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <section className="contact">
                  <div className="inner">
                    <div className="contact__content">
                      <i className="contact__icon wow fadeInUp" data-wow-duration="1.2s"></i>
                      <form className="contact__form">
                        <h2 className="contact__title wow fadeInUp" data-wow-duration="1s">Stay in the Know!</h2>
                        <p className="contact__information wow fadeInUp" data-wow-duration="1.2s">
                          Don't get left behind!
                          <br />
                          Subscribe to our newsletters today!
                        </p>
                        <div className="contact__control wow fadeInUp" data-wow-duration="1.4s">
                          <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            required
                            className="input-style"
                          />
                        </div>
                        <div className="contact__control wow fadeInUp" data-wow-duration="1.6s">
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className="input-style"
                          />
                        </div>
                        <div className="contact__control wow fadeInUp" data-wow-duration="1.8s">
                          <div className="select-style">
                            <select name="country" id="country">
                              <option value="Country">Country</option>
                              <option value="england">England</option>
                              <option value="vietnam">Vietnam</option>
                              <option value="singapore">Singapore</option>
                              <option value="france">France</option>
                            </select>
                          </div>
                        </div>
                        <div className="contact__control wow fadeInUp" data-wow-duration="2s">
                          <div className="select-style">
                            <select name="Platform" id="Platform">
                              <option value="Platform">Platform</option>
                              <option value="demo">demo</option>
                            </select>
                          </div>
                        </div>
                        <div className="contact__control contact__control--checkbox">
                          <label className="checkbox-style wow fadeInUp" data-wow-duration="2.1s">
                            By signing up, I confirm that I am 13 years old or older. I
                            agree to the Gameloft Terms and Conditions and I have read
                            the Privacy Policy.
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <label className="checkbox-style wow fadeInUp" data-wow-duration="2.2s">
                            I agree to receive promotional offers relating to all
                            Gameloft games and services.
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div className="contact__control wow fadeInUp" data-wow-duration="2.4s">
                          <button className="button-main trans">Button</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className="community">
                  <div className="inner">
                    <h2 className="main-title wow fadeInUp" data-wow-duration="1s"><span className="hidden-sp">{"Game Community Hub".toUpperCase()}</span><span className="hidden-pc">Game Community Hub</span></h2>
                    <p className="main-text hidden-sp wow fadeInUp" data-wow-duration="1.2s">Live Game Updates</p>
                    <div className="slider-stories wow fadeInUp" data-wow-duration="1.4s">
                      <Slider {...settingsStories}>
                        {slidesStories.map((slide) =>
                          <a className="slider-stories__item" key={slide.id} href="#" target="_blank">
                            <div className="slider-stories__image"><img src={slide.image} alt={slide.title}/></div>
                            <h4 className="slider-stories__title">{slide.title}</h4>
                          </a>
                        )}
                      </Slider>
                    </div>
                  </div>
                  <div className="community__post">
                    <div className="inner">
                      <div className="community__topic">
                        <h3 className="community__title wow fadeInUp" data-wow-duration="1.6s">All Posts</h3>
                        <div className="community__tools">
                          <ul className="community__social">
                            <li><a className="trans community__icon-twitter" href="./"><img src={icon_twitter_01} alt="facebook"/></a></li>
                            <li><a className="trans community__icon-instagram" href="./"><img src={icon_instagram_01} alt="facebook"/></a></li>
                            <li><a className="trans community__icon-facebook" href="./"><img src={icon_facebook_01} alt="facebook"/></a></li>
                          </ul>
                          <div className="community__search">
                            <input
                              type="text"
                              placeholder="Search"
                              name="name"
                              required
                              className="input-search"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`wow fadeInUp slider-post ${this.state.postShow===1? 'slider-more':''}`} data-wow-duration="1.8s" >
                      <Slider ref={slidesPostRef} {...settingsPost}>
                        {slidesPost.map((slide) =>
                          <div className="slider-post__item" key={slide.id}>
                            <div className="slider-post__content">
                              <a href="#" className="trans slider-post__facebook"></a>
                              <a href="#" className="trans slider-post__share"></a>
                              <div className="slider-post__image"><img src={slide.image} alt={slide.title} /></div>
                              <h4 className="slider-post__title">{slide.title}</h4>
                              </div>
                          </div>
                        )}
                      </Slider>
                      <div className="slider-button hidden-sp wow fadeInUp" data-wow-duration="2s">
                        <button className="slider-button__arrow slider-button__arrow--prev" disabled={this.state.activeSlide === 0}  onClick={() => prevPost()}>
                          Previous
                        </button>
                        <div className="slider-button__number"><span className="slider-button__current">{slidesPostCountString === 1? '0':''}{this.state.activeSlide + 1}</span>/{slidesPost.length}</div>
                        <button className="slider-button__arrow slider-button__arrow--next" disabled={this.state.activeSlide === slidesPost.length-1} onClick={() => nextPost()}>
                          Next
                        </button>
                      </div>
                      <div className="slider-button-more hidden-pc wow fadeInUp" data-wow-duration="2s">
                          <a className="button-main trans" onClick={() => showPostMore()}>More</a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className="promotional">
                  <div className="inner">
                    <h2 className="main-title wow fadeInUp" data-wow-duration="1s"><span className="hidden-sp">{"Special Events & Promotional".toUpperCase()}</span><span className="hidden-pc">Special Events & <br/>Promotional</span></h2>
                    <p className="main-text hidden-sp wow fadeInUp" data-wow-duration="1.2s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                    <p className="main-text hidden-pc wow fadeInUp" data-wow-duration="1.4s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                  </div>
                  <div className="slider-promotional wow fadeInUp" data-wow-duration="1.6s">
                    <Slider {...settingsPromotional}>
                      {slidesPromotional.map((slide) =>
                        <div className="slider-promotional__item" key={slide.id}>
                          <div className="slider-promotional__content">
                            <a href="#" className="trans slider-promotional__share"></a>
                            <h4 className="slider-promotional__title">{slide.title.toUpperCase()}</h4>
                            <p className="slider-promotional__text">{slide.text}</p>
                            <div className="slider-promotional__image"><img src={slide.image} alt={slide.title}/></div>
                            <a href="#" className="trans slider-promotional__button">{'read more'.toUpperCase()}</a>
                          </div>
                        </div>
                      )}
                    </Slider>
                  </div>
                </section>
              </div>
              <div className="section">
                <section className="exclusive">
                  <div className="inner">
                    <h2 className="main-title wow fadeInUp" data-wow-duration="1s"><span className="hidden-sp">{"Exclusive Game Content".toUpperCase()}</span><span className="hidden-pc">Exclusive Game Content</span></h2>
                    <p className="main-text hidden-sp wow fadeInUp" data-wow-duration="1.2s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                    <p className="main-text hidden-pc wow fadeInUp" data-wow-duration="1.2s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                  </div>
                  <div className="slider-exclusive wow fadeInUp" data-wow-duration="1.4s">
                    <Slider ref={slidesExclusiveRef} {...settingsExclusive}>
                      {slidesExclusive.map((slide) =>
                        <div className="slider-exclusive__item" key={slide.id}>
                          <div className="slider-exclusive__content">
                            <a href="#" className="trans slider-exclusive__download"></a>
                            <div className="slider-exclusive__image"><img src={slide.image} alt={slide.title}/></div>
                          </div>
                        </div>
                      )}
                    </Slider>
                    <div className="slider-button wow fadeInUp" data-wow-duration="1.6s">
                      <button className="slider-button__arrow slider-button__arrow--prev" disabled={this.state.activeSlideExclusive01 === 0}  onClick={() => prevExclusive()}>
                        Previous
                      </button>
                      <div className="slider-button__number"><span className="slider-button__current">{slidesExclusiveCountString === 1? '0':''}{this.state.activeSlideExclusive01 + 1}</span>/{slidesExclusive.length}</div>
                      <button className="slider-button__arrow slider-button__arrow--next" disabled={this.state.activeSlideExclusive01 === slidesExclusive.length-1} onClick={() => nextExclusive()}>
                        Next
                      </button>
                    </div>
                  </div>
                </section>
              </div>
              <div className="section">
                <Footer/>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default Home;
