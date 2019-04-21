import React from 'react';

class About extends React.Component {
    render() {
        return(
            <div>
                
                <header id="page-header">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 m-auto text-center">
                        <h1>About Us</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p>
                      </div>
                    </div>
                  </div>
                </header>

                
                <section id="about" className="py-3">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h1>What We Do</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga eaque. Amet, assumenda aliquid tempore dolorum
                          error eveniet doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam accusantium pariatur aut sint deleniti
                          laborum ducimus voluptatem? Architecto cumque quod suscipit officiis soluta, voluptate dicta blanditiis similique
                          praesentium temporibus adipisci debitis labore!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga eaque. Amet, assumenda aliquid tempore dolorum
                          error eveniet doloribus sed repellat quod, dolores fuga ipsam soluta. Aliquam accusantium pariatur aut sint deleniti
                          laborum ducimus voluptatem? Architecto cumque quod suscipit officiis soluta, voluptate dicta blanditiis similique
                          praesentium temporibus adipisci debitis labore!</p>
                      </div>
                      <div className="col-md-6">
                        <img src="https://source.unsplash.com/random/700x700/?technology" alt="" className="img-fluid rounded-circle d-none d-md-block about-img"/>
                      </div>
                    </div>
                  </div>
                </section>

                
                <section id="icon-boxes" className="p-5">
                  <div className="container">
                    <div className="row mb-4">
                      <div className="col-md-4">
                        <div className="card bg-danger text-white text-center">
                          <div className="card-body">
                            <i className="fas fa-building fa-3x"></i>
                            <h3>Sample Heading</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-dark text-white text-center">
                          <div className="card-body">
                            <i className="fas fa-bullhorn fa-3x"></i>
                            <h3>Sample Heading</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-danger text-white text-center">
                          <div className="card-body">
                            <i className="fas fa-comments fa-3x"></i>
                            <h3>Sample Heading</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-4">
                        <div className="card bg-dark text-white text-center">
                          <div className="card-body">
                            <i className="fas fa-box fa-3x"></i>
                            <h3>Sample Heading</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-danger text-white text-center">
                          <div className="card-body">
                            <i className="fas fa-credit-card fa-3x"></i>
                            <h3>Sample Heading</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-dark text-white text-center">
                          <div className="card-body">
                            <i className="fas fa-coffee fa-3x"></i>
                            <h3>Sample Heading</h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                
                <section id="testimonials" className="p-4 bg-dark text-white">
                  <div className="container">
                    <h2 className="text-center">testimonials</h2>
                    <div className="row text-center">
                      <div className="col">
                        <div className="slider">
                          <div>
                            <blockquote className="blockquote">
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quaerat.
                              </p>
                              <footer className="blockquote-footer">John Doe From
                                <cite title="Company 1">Company 1</cite>
                              </footer>
                            </blockquote>
                          </div>
                          <div>
                            <blockquote className="blockquote">
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quaerat.
                              </p>
                              <footer className="blockquote-footer">Sam Smith From
                                <cite title="Company 2">Company 2</cite>
                              </footer>
                            </blockquote>
                          </div>
                          <div>
                            <blockquote className="blockquote">
                              <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quaerat.
                              </p>
                              <footer className="blockquote-footer">Meghan Williams From
                                <cite title="Company 3">Company 3</cite>
                              </footer>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
            </div>
        );
    }
}

export default About;