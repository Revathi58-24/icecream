import React from 'react';


const Footer = () => {
  const iconStyle = {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#555',
    position: 'relative'
  };

  const circleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'none'
  };
  const logoStyle = {
    color: 'white',
    fontWeight: 300,
    fontSize: '30px',
    lineHeight: 0.6,
    fontFamily: 'Bangers, cursive',
    letterSpacing: '5px',
    textAlign: 'right',
    marginLeft: '20px'
  };

  const taglineStyle = {
    fontSize: '16px',
    marginLeft: '20px',
    color: 'black',
    fontWeight: '400',
    textTransform: 'capitalize',
    fontStyle: 'italic',
    fontFamily: 'Mansalva',
    position: 'relative',
    left:'29px'
  };

  const pseudoElementStyle = {
    position: 'absolute',
    content: '',
    width: '27px',
    height: '12px',
    background: '#545454',
  };
  const showCircle = (event) => {
    event.currentTarget.querySelector('.circle').style.display = 'block';
  };

  const hideCircle = (event) => {
    event.currentTarget.querySelector('.circle').style.display = 'none';
  };

  return (
    <footer className="footer" style={{ backgroundColor: '#A284E0', padding: '20px 0' }}>
      <div className="container">
        <table width="100%">
          <tbody>
            <tr>
              <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                <div >
                  <h3 style={logoStyle}>Classic</h3>
                  <p style={taglineStyle}><span style={{...pseudoElementStyle,left:'40px',top:'5px'}}></span>
                    treats
                  <span style={{...pseudoElementStyle,left:'122px',top:'5px'}}></span>
              
                  </p>
                </div>
                
              </td>
              <td>
                <h5><b>Classic</b>Treats</h5> 
                <p>&copy; 2023 Classictreats. All Rights Reserved.</p>
              </td>
              <td>
                <p><b>Corporate Headquarters</b></p>
                <p>42 Main Street</p>
                <p>Hudson, MA 01749</p>
                <br />
                <a href="https://www.facebook.com" style={iconStyle}
                  onMouseEnter={showCircle}
                  onMouseLeave={hideCircle}><i className="fab fa-facebook"></i> <div className="circle" style={circleStyle}></div></a>
                <a href="https://www.twitter.com" style={iconStyle}
                  onMouseEnter={showCircle}
                  onMouseLeave={hideCircle}><i className="fab fa-twitter"></i> <div className="circle" style={circleStyle}></div></a>
                <a href="https://www.instagram.com" style={iconStyle}
                  onMouseEnter={showCircle}
                  onMouseLeave={hideCircle}><i className="fab fa-instagram"> </i><div className="circle" style={circleStyle}></div></a>
                <a href="https://www.linkedin.com" style={iconStyle}
                  onMouseEnter={showCircle}
                  onMouseLeave={hideCircle}><i className="fab fa-linkedin"></i> <div className="circle" style={circleStyle}></div></a>
                <a href="https://www.youtube.com" style={iconStyle}
                  onMouseEnter={showCircle}
                  onMouseLeave={hideCircle}><i className="fab fa-youtube"></i><div className="circle" style={circleStyle}></div></a>
              </td>
              <td>
                <a href="#top" style={{ margin: '0 10px', textDecoration: 'none', color: '#555' }} ><i className="fas fa-arrow-up"></i> Back to Top</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
}

export default Footer;
