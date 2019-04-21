import React from 'react';

import * as $ from 'jquery';
// import * as jQuery from 'jquery';
import 'bootstrap';
import 'popper.js';
import laptopImg from '../assets/img/laptop1.png';
// import 'ekko-lightbox';

class Home extends React.Component {
    componentDidMount() {
    //         // Configure Slider
    // $('.carousel').carousel({
    //     interval: 6000,
    //     pause: 'hover'
    //   });
  
    //   // Lightbox Init
    //   $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    //     event.preventDefault();
    //     $(this).ekkoLightbox();
    //   });
  
    //   // Video Play
    //   $(function () {
    //     // Auto play modal video
    //     $(".video").click(function () {
    //       var theModal = $(this).data("target"),
    //         videoSRC = $(this).attr("data-video"),
    //         videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    //       $(theModal + ' iframe').attr('src', videoSRCauto);
    //       $(theModal + ' button.close').click(function () {
    //         $(theModal + ' iframe').attr('src', videoSRC);
    //       });
    //     });
    //   });
    }

    render() {
        return (
            <div>
                  
                  <section id="showcase">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item carousel-image-1 active">
                          <div className="container">
                            <div className="carousel-caption d-none d-sm-block text-right mb-5">
                              <h1 className="display-3">Heading One</h1>
                              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione
                                quod aliquid inventore vero perspiciatis.</p>
                              <a href="#" className="btn btn-danger btn-lg">Sign Up Now</a>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item carousel-image-2">
                          <div className="container">
                            <div className="carousel-caption d-none d-sm-block mb-5">
                              <h1 className="display-3">Heading Two</h1>
                              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione
                                quod aliquid inventore vero perspiciatis.</p>
                              <a href="#" className="btn btn-primary btn-lg">Learn More</a>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item carousel-image-3">
                          <div className="container">
                            <div className="carousel-caption d-none d-sm-block text-right mb-5">
                              <h1 className="display-3">Heading Three</h1>
                              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione
                                quod aliquid inventore vero perspiciatis.</p>
                              <a href="#" className="btn btn-success btn-lg">Learn More</a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <a href="#myCarousel" data-slide="prev" className="carousel-control-prev">
                        <span className="carousel-control-prev-icon"></span>
                      </a>

                      <a href="#myCarousel" data-slide="next" className="carousel-control-next">
                        <span className="carousel-control-next-icon"></span>
                      </a>
                    </div>
                  </section>

                  
                  <section id="home-icons" className="py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-4 mb-4 text-center">
                          <i className="fas fa-cog fa-3x mb-2"></i>
                          <h3>Turning Gears</h3>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                          <i className="fas fa-cloud fa-3x mb-2"></i>
                          <h3>Sending Data</h3>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                          <i className="fas fa-cart-plus fa-3x mb-2"></i>
                          <h3>Making Money</h3>
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, veniam.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  
                  <section id="home-heading" className="p-5">
                    <div className="dark-overlay">
                      <div className="row">
                        <div className="col">
                          <div className="container pt-5">
                            <h1>Are You Ready To Get Started?</h1>
                            <p className="d-none d-md-block">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eaque magni sit dolores. Nisi, dolor nam modi perspiciatis
                              consequatur soluta.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  
                  <section id="info" className="py-3">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6 align-self-center">
                          <h3>Lorem Ipsum</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet blanditiis incidunt iusto corrupti illum
                            cum laudantium ex sequi amet.</p>
                          <a href="about.html" className="btn btn-outline-danger btn-lg">Learn More</a>
                        </div>
                        <div className="col-md-6">
                          <img src={laptopImg} alt="" className="img-fluid"/>
                        </div>
                      </div>
                    </div>
                  </section>

                
                  <section id="video-play">
                    <div className="dark-overlay">
                      <div className="row">
                        <div className="col">
                          <div className="container p-5">
                            <a href="#" className="video" data-video="https://www.youtube.com/embed/HnwsG9a5riA" data-toggle="modal" data-target="#videoModal">
                              <i className="fas fa-play fa-3x"></i>
                            </a>
                            <h1>See What We Do</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  
                  <section id="gallery" className="py-5">
                    <div className="container">
                      <h1 className="text-center">Photo Gallery</h1>
                      <p className="text-center">Check out our photos</p>
                      <div className="row mb-4">
                        <div className="col-md-4">
                          <a href="https://source.unsplash.com/random/560x560" data-toggle="lightbox" data-gallery="img-gallery" data-height="560"
                            data-width="560">
                            <img src="https://source.unsplash.com/random/560x560" alt="" className="img-fluid"/>
                          </a>
                        </div>

                        <div className="col-md-4">
                          <a href="https://source.unsplash.com/random/561x561" data-toggle="lightbox" data-gallery="img-gallery" data-height="561"
                            data-width="561">
                            <img src="https://source.unsplash.com/random/561x561" alt="" className="img-fluid"/>
                          </a>
                        </div>

                        <div className="col-md-4">
                          <a href="https://source.unsplash.com/random/562x562" data-toggle="lightbox" data-gallery="img-gallery" data-height="562"
                            data-width="562">
                            <img src="https://source.unsplash.com/random/562x562" alt="" className="img-fluid"/>
                          </a>
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-4">
                          <a href="https://source.unsplash.com/random/563x563" data-toggle="lightbox" data-gallery="img-gallery" data-height="563"
                            data-width="563">
                            <img src="https://source.unsplash.com/random/563x563" alt="" className="img-fluid"/>
                          </a>
                        </div>

                        <div className="col-md-4">
                          <a href="https://source.unsplash.com/random/564x564" data-toggle="lightbox" data-gallery="img-gallery" data-height="564"
                            data-width="564">
                            <img src="https://source.unsplash.com/random/564x564" alt="" className="img-fluid"/>
                          </a>
                        </div>

                        <div className="col-md-4">
                          <a href="https://source.unsplash.com/random/565x565" data-toggle="lightbox" data-gallery="img-gallery" data-height="565"
                            data-width="565">
                            <img src="https://source.unsplash.com/random/565x565" alt="" className="img-fluid"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>

                
                  <section id="newsletter" className="text-center p-5 bg-dark text-white">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <h1>Sign Up For Our Newsletter</h1>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores consectetur, quae ducimus voluptates
                            vero repellendus architecto maiores recusandae mollitia?</p>
                          <form className="form-inline justify-content-center">
                            <input type="text" className="form-control mb-2 mr-2" placeholder="Enter Name"/>
                            <input type="text" className="form-control mb-2 mr-2" placeholder="Enter Email"/>
                            <button className="btn btn-primary mb-2">Submit</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
            </div>
        );
    }
}

export default Home;