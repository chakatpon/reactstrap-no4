import React from 'react';

class Blog extends React.Component {
    render() {
        return(
            <div>

              <header id="page-header">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 m-auto text-center">
                      <h1>Read Our Blog</h1>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p>
                    </div>
                  </div>
                </div>
              </header>


              <section id="blog" className="py-3">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="card-columns">
                        <div className="card">
                          <img src="https://source.unsplash.com/random/300x200" alt="" class="img-fluid card-img-top"/>
                          <div className="card-body">
                            <h4 className="card-title">Blog Post One</h4>
                            <small className="text-muted">Written by Jeff on 05/20</small>
                            <hr/>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                              molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                              exercitationem.
                            </p>
                          </div>
                        </div>

                        <div className="card p-3">
                          <blockquote className="card-blockquote card-body">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident amet tenetur vel quam atque est?</p>
                            <footer className="blockquote-footer">
                              <small className="text-muted">Someone Famous in
                                <cite title="Source Title">Source Title</cite>
                              </small>
                            </footer>
                          </blockquote>
                        </div>

                        <div className="card">
                          <img src="https://source.unsplash.com/random/301x200" alt="" className="img-fluid card-img-top"/>
                          <div className="card-body">
                            <h4 className="card-title">Blog Post Two</h4>
                            <small className="text-muted">Written by Karen on 05/22</small>
                            <hr/>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                              molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                              exercitationem.
                            </p>
                          </div>
                        </div>

                        <div className="card p-3 bg-danger text-white">
                          <blockquote className="card-blockquote card-body">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident amet tenetur vel quam atque est?</p>
                            <footer className="blockquote-footer">
                              <small className="text-white">Someone Famous in
                                <cite title="Source Title">Source Title</cite>
                              </small>
                            </footer>
                          </blockquote>
                        </div>

                        <div className="card">
                          <img src="https://source.unsplash.com/random/302x200" alt="" className="img-fluid card-img-top"/>
                          <div className="card-body">
                            <h4 className="card-title">Blog Post Three</h4>
                            <small className="text-muted">Written by Harry on 05/23</small>
                            <hr/>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla facilis, sequi excepturi, quisquam, dignissimos
                              molestiae dicta dolore dolores quas vel sunt placeat tempora expedita suscipit. Magni vel iusto mollitia
                              exercitationem.
                            </p>
                          </div>
                        </div>

                        <div className="card p-3">
                          <blockquote className="card-blockquote card-body">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident amet tenetur vel quam atque est?</p>
                            <footer className="blockquote-footer">
                              <small className="text-muted">Someone Famous in
                                <cite title="Source Title">Source Title</cite>
                              </small>
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

export default Blog;