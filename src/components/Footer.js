import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer id="main-footer" className="text-center p-4">
            <div className="container">
              <div className="row">
                <div className="col">
                  <p>Copyright &copy;
                    <span id="year">{new Date().getFullYear()}</span> Chakatpon Khunthong</p>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;