import React from 'react';

import person1 from '../assets/img/person1.jpg';
import person2 from '../assets/img/person2.jpg';
import person3 from '../assets/img/person3.jpg';
import person4 from '../assets/img/person4.jpg';
import chakatpon from '../assets/img/chakatpon.jpg';

class Contact extends React.Component {
    render() {
        return(
            <div>
  
  <header id="page-header">
    <div className="container">
      <div className="row">
        <div className="col-md-6 m-auto text-center">
          <h1>Contact Us</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, temporibus?</p>
        </div>
      </div>
    </div>
  </header>

  
  <section id="contact" className="py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card p-4">
            <div className="card-body">
              <h4>Get In Touch</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio!</p>
              <h4>Address</h4>
              <p>550 Main st, Boston MA</p>
              <h4>Email</h4>
              <p>test@test.com</p>
              <h4>Phone</h4>
              <p>(555) 555-5555</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card p-4">
            <div className="card-body">
              <h3 className="text-center">Please fill out this form to contact us</h3>
              <hr/>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone Number"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-outline-danger btn-block"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="staff" class="py-5 text-center bg-dark text-white">
    <div class="container">
      <h1>Our Staff</h1>
      <hr/>
      <div class="row">
        <div class="col-md-3">
          <img src={person1} alt="" class="img-fluid rounded-circle mb-2"/>
          <h4>Jane Doe</h4>
          <small>Marketing Manager</small>
        </div>
        <div class="col-md-3">
          <img src={person2} alt="" class="img-fluid rounded-circle mb-2"/>
          <h4>Sara Williams</h4>
          <small>Business Manager</small>
        </div>
        <div class="col-md-3">
          <img src={person3} alt="" class="img-fluid rounded-circle mb-2"/>
          <h4>John Doe</h4>
          <small>CEO</small>
        </div>
        <div class="col-md-3">
          <img src={chakatpon} alt="" class="img-fluid rounded-circle mb-2"/>
          <h4>Chakatpon Khunthong</h4>
          <small>Web Developer</small>
        </div>
      </div>
    </div>
  </section>
            </div>
        );
    }
}

export default Contact;