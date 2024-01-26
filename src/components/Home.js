import React from "react";
import Navbar from "./Navbar";
import '../App.css';
import Footer from "./Footer";
//import { useAuth0 } from '@auth0/auth0-react';
const Home = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Successfully added to our mailing list!");
    // Handle your form submission logic
  };
  return (
    <>
    <Navbar/>
      <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src="https://images5.alphacoders.com/838/838902.jpg" width="1300" height="600" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700651483.jpg" width="1300" height="600" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images2.alphacoders.com/734/734388.jpg" width="1300" height="600" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://rare-gallery.com/uploads/posts/990902-food-ice-cream-still-life-orange-fruit-waffles.jpg" width="1300" height="600" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="shrink">
          <img src="home.png" className="img-fluid" height="600" width="1350" alt="home" />
        </div>
        <br />
        <center>
          <h1 style={{ fontFamily: 'Lucida Sans, Geneva, Verdana, sans-serif' }}>
            <b>OUR PHILOSOPHY</b>
          </h1>
          <br />
          <p style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', fontSize: 'larger' }}>
            At Classic Treats, we only use ingredients you’d find in your own kitchen – <br />Nothing derived from a food laboratory.<br />We provide plant-based desserts at the location of your choice in our very own ice cream cart <br />
            or designated table provided for your next event! 
          </p>
        </center>

        <br />
        <br/>
        <center>
          <h3 style={{ fontFamily: 'Lucida Sans, Geneva, Verdana, sans-serif' }}>
            <b>LET’S GET REAL WITH OUR INGREDIENTS</b>
          </h3>
        </center>

        <marquee>
          <img src="https://cdn.shopify.com/s/files/1/0634/2675/6846/files/MicrosoftTeams-image_23283a96-39a2-40e6-9d8b-5681fef19488.jpg?v=1657719382" height="250" width="250" alt="marquee 1" />

          <img src="https://cdn.shopify.com/s/files/1/0634/2675/6846/files/MicrosoftTeams-image_63.jpg?v=1658125011" height="250" width="250" alt="marquee 2" />

          <img src="https://cdn.shopify.com/s/files/1/0634/2675/6846/files/MicrosoftTeams-image_5.jpg?v=1657719382" height="250" width="250" alt="marquee 3" />

          <img src="https://cdn.shopify.com/s/files/1/0634/2675/6846/files/MicrosoftTeams-image_14.jpg?v=1657722174" height="250" width="250" alt="marquee 4" />

          <img src="https://cdn.shopify.com/s/files/1/0634/2675/6846/files/MicrosoftTeams-image_4_b138ac2a-57da-4938-b426-d436d9b079c1.jpg?v=1657719382" height="250" width="250" alt="marquee 5" />
        </marquee>
        <br/>
        <br/>  
        <table className="table table-responsive" border="0" width="1350px">
          <tr>
            <td>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <img src="https://cdn.pixabay.com/photo/2021/01/18/12/49/ice-cream-5928043_960_720.jpg" alt="Paris" style={{ width: '580px', height: '280px' }} />
                  </div>
                  <div className="flip-box-back">
                    <br />
                    <br />
                    <h2 style={{ color: 'slategrey', fontFamily: 'Impact, Haettenschweiler,Arial Narrow Bold, sans-serif' }}>The most delicious <br />place on the<br /> Internet! <br />There's so much to explore, here at the <br />home of ice cream.</h2>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <br />
              <h2 style={{ fontFamily: 'Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode, Geneva, Verdana, sans-serif' }}>
                <b>PLEASE NOTE:</b>
              </h2>
              <br />
              <p style={{ fontFamily:"Times New Roman" }}>
                While we take every precaution to prevent cross-contamination and provide a pleasant experience for customers with dietary needs, we do make our products in a facility with peanuts, tree nuts, coconut, and gluten. If you have any allergies, we will be happy to make reasonable accommodations at your request but we cannot guarantee any of our products are allergen-free. We encourage you to communicate with your server and use your own best judgment in determining what is best for your needs.
              </p>
              <a href="/cart">
                <input type="button" className="btn btn-primary" style={{ fontFamily: 'lucida console' }} value="SHOP NOW" />
              </a>
            </td>
          </tr>
        </table>

        <center>
          <div className="container-fluid" id="back">
            <br />
            <h1 style={{ fontFamily: 'Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode, Geneva, Verdana, sans-serif' }}>
              <b>CATERING</b>
            </h1>
            <br />
            <h1 style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              <b>Scoop Station</b>
            </h1>
            <br />
            <p style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: 'larger' }}>
            Joyful experience that replicates what you would <br/>experience when you visit a Kind Kones shop.<br/> View the flavours available, sample, choose, then<br/> get it scooped in cones or cups!
    We scoop on<br/> demand from a mobile freezer and can make the <br/>set up more exciting by bringing our ice cream <br/>bicycle cart.
            </p>
            <br />
            <br />
          </div>
        </center>

        <br />
        <center>
          <div className="card bg-dark text-black" style={{ width: '40rem' }}>
            <img src="https://i.pinimg.com/originals/44/08/f6/4408f6f62181d6855dec28074ccbbb69.jpg" className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h3 className="card-title"><b>About us</b></h3><br />
              <p className="card-text"><b>In 2017… we started out by experimenting with plant based ice cream recipes in a no-frill family home kitchen. Our goal was to develop a nice cream that was better-for-you (and the planet!) than the conventional 
      If you want to know what’s new and next in ice cream, you’ve come to the right place!
      We are headquartered in the Bay area, a hub for up and coming food trends, so that we can focus on both the future and the present for ice cream. 
At Dreyer’s Grand Ice Cream, we are in the business of putting smiles on people’s faces, with ice cream. We are a U.S. ice cream business with nearly 100 years of winning experience in the market and with a robust portfolio of powerhouse brands that everyone knows and loves. From Häagen-Dazs to Outshine, Drumstick and more, our suite of delicious ice cream treats includes something for everyone.
options available… and to prove that the plant based label or a 
healthier option does not mean you have to compromise on taste.
               
              </b></p>
              <a href="/about" className="btn btn-outline-light "><b>Learn more</b></a>
            </div>
          </div>
        </center>
       <br/>
        <br />
        <table className="table table-responsive" width="1300" border="0">
    <tr><td style={{textAlign: 'center'}}>
  <h1 style={{fontFamily:'Lucida Sans,Lucida Sans Regular,Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif'}}><b>
  WHAT WE OFFER</b></h1>
  <br/>
  <p style={{fontFamily: '"Times New Roman", Times, serif',fontSize: 'larger'}}>
    Classic Treats is an all-natural vegan ice cream brand. The ice <br/>creams are plant based and free from dairy, egg, refined <br/>sugar, and other artificial additives with mostly gluten-free <br/>
    options. The shops also serve a selection of desserts that<br/> are healthier alternatives to conventional versions usually <br/>
    loaded with sugar and unhealthy fats. Classic Treats strives to <br/>provide a better way to indulge in sweet treats guided by a <br/>
    philosophy of being kind to your body, the environment, and <br/>to others. 
  </p></td>
  <td style={{textAlign: 'center'}}>
    <div id="carouselExampleIndicators" className="carousel" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item  active">
          <img className="img-responsive"src="https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." width="700" height="400"/>
        </div>
        <div className="carousel-item">
          <img className="img-responsive" src="https://mobimg.b-cdn.net/v3/fetch/ce/ce86a43def36c9483513a01b89b1f2ce.jpeg" width="700" height="400"class="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img className="img-responsive" src="https://media.istockphoto.com/id/507541843/photo/coffee-ice-cream.jpg?s=612x612&w=0&k=20&c=-78P0UC2aMR9URU0T32jUzOETWIvih5WDHwFx7JxdZs=" width="700" height="400" class="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
  </td>
  </tr>
</table>

        <center>
          <img className="img-rounded rotate" src="https://nicicecreams.com/wp-content/uploads/2022/07/Chakra-320x324.png" alt="chakra" />
        </center>

        <br />
  <br />
  {/* Card */}
  <div className="vh-60 d-flex justify-content-center align-items-center">
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Let's Connect</button>
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"> Join Our Mailing List</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body" style={{"background-image":"url('https://t4.ftcdn.net/jpg/02/03/57/29/360_F_203572957_MUpeh20knuo1FFloemSEjUhMdETKarxm.jpg')"}}>
            <form name="f"   onSubmit={handleSubmit}>
              <div className="mb-3">
                <p style={{"font-family":"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>
                  Sign Up for Recipes,new Flavours and Latest news
                </p>
                <label htmlFor="email">EMAIL&nbsp;&nbsp;ADDRESS</label><br />
                <input type="email" name="em" id="em" onkeyup="success()" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
              </div>
              <div className="mb-3">
                <label htmlFor="ps">PASSWORD</label><br />
                <input type="password" name="psw" id="psw" onkeyup="success()" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                <br />
                <label htmlFor="cps">CONFIRM&nbsp;&nbsp;PASSWORD</label><br />
                <input type="password" name="cpsw" id="cpsw" required />
                <br />
                <input type="checkbox" name="ch1" id="ch1" defaultValue="sel" />I have read,understand and agree to the <u>Terms of Use.</u><br />
                <input type="checkbox" name="ch2" id="ch2" defaultValue="def" defaultChecked />Yes,I want to join the email list and receive updates<br /> &nbsp;&nbsp;from Classictreats.com.
              </div>
            </form></div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Join →</button>
          </div>

       
        </div>
      </div>
  </div>
</div>
<br/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
