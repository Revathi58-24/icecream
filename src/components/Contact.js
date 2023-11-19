import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../App.css';
const Contact=()=>
{
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Successfully added to our mailing list!");
        // Handle your form submission logic
      };
      const handleRemove=()=>
      {
        alert("Successfully removed");
      };
    return(
        <><Navbar /><div>
            <table className="table table-responsive" border={0} width="1350px">
                <tbody><tr width={675}>
                    <td>
                        <form name="f" action="http://localhost:4001" method="get" onSubmit="valid()">
                            <div className="user" align-text="left">
                                <h2 style={{ "color": "lightcoral" }}>GET IN TOUCH WITH US</h2>
                                <p>Please fill out the form and we will be in touch with you.</p>
                                <label htmlFor="name">First Name:</label>
                                <input type="text" name="nm" id="fn" pattern="[a-zA-z]{3,}" required /><br /><br />
                                <label htmlFor="name">Last Name:</label>
                                <input type="text" name="lnm" id="lm" pattern="[a-zA-z]{1,}" required /><br /><br />
                                <label>Email ID:</label>
                                <input type="email" name="eml" id="eml" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required /><br /><br />
                                <label>Mobile:</label>
                                <input type="text" name="c1" defaultValue={+91} size={1} />
                                <input type="text" name="phn" id="phn" pattern="[0-9]{10}" size={10} required /><br /><br />
                                <label>Gender:</label>
                                <input type="radio" name="male" defaultValue="male" id="ml" />male
                                <input type="radio" name="male" defaultValue="female" id="fm" />female<br />
                                <label>Address:</label>
                                <textarea name="adres" id="adres" size={30} pattern="[0-9A-Za-z]" required defaultValue={""} /><br />
                                <label>Visit:</label>
                                <input type="radio" name="fr" id="frst" />First time
                                <input type="radio" name="fr" id="alr" />Already visited<br />
                                <label>Message:</label><br />
                                <textarea cols={30} pattern="[A-Za-z]" rows={0} name="msg" required defaultValue={""} /><br /><br />
                                <input type="submit" defaultValue="PROCCEED" />
                            </div>
                        </form>
                    </td>
                    <td>
                        <div id="contact" align-text="right">
                            <h2 style={{ "color": "lightcoral" }}>CONNECT WITH US:</h2>
                            <p>For support or any questions:</p>
                            <p>Email us at dairyday@dairyday.com</p>
                            <p><b>Classic Treats Ice Creams Pvt.Ltd.</b></p>
                            <p> Address:  #55, 8th Main, JC Industrial Estate, Yelachenahalli,<br />    Kanakapura Road, Bengaluru – 560062
                                <br /> Phone:
                                +91 80 2666 4533
                            </p>
                        </div>
                        <button type="button" className="btn button-89" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><b>Link in Bio...Let's Connect</b></button>
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel"> Join Our Mailing List</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body" style={{ "background-image": "url('https://t4.ftcdn.net/jpg/02/03/57/29/360_F_203572957_MUpeh20knuo1FFloemSEjUhMdETKarxm.jpg')" }}>
                                        <form name="f1" action="http://localhost:5001" method="get" onSubmit="valido()">
                                            <div className="mb-3">
                                                <p style={{ "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                                                    Sign Up for Recipes,new Flavours and Latest news
                                                </p>
                                                <label htmlFor="em">EMAIL</label><br />
                                                <input type="email" name="em" id="em" onkeyup="success()" required />
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
                        <br />
                        <br />
                        {/*delete*/}
                        <button type="button" className="btn button-89" data-bs-toggle="modal" data-bs-target="#example" data-bs-whatever="@mdo"><b>Disconnect :-)</b></button>
                        <div className="modal fade" id="example" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel"> Remove from Our Mailing List</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body" style={{ "background-image": "url('https://c4.wallpaperflare.com/wallpaper/851/988/1008/ice-cream-4k-beautiful-hd-quality-wallpaper-preview.jpg')" }}>
                                        <form name="f" action="http://localhost:6001" method="get" onSubmit="valid()">
                                            <div className="mb-3">
                                                <label htmlFor="email">EMAIL</label><br />
                                                <input type="email" name="rem" id="rem" onkeyup="success()" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="ps">PASSWORD</label><br />
                                                <input type="password" name="rpsw" id="rpsw" onkeyup="success()" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                                                <br />
                                            </div>
                                        </form></div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary" onClick={handleRemove}>Remove →</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody></table>

            <table className="table table-responsive" border={0} style={{ "background-color": "wheat" }}>
                <tbody><tr>
                    <td style={{ "background-color": "pink" }}><h3 style={{ "color": "crimson" }}>CAREER</h3>
                        If you love being a part of a growing brand and care for stakeholders as much as we do, get in touch with us. Here you can expect <br />rapid professional growth and long term career opportunities.<br />
                        Please send your CV to <b>classictreats@classictreats.com</b> and we’ll get in touch with you.
                    </td>
                    <td style={{ "background-color": "skyblue" }}><h3 style={{ "color": "white" }}>BECOME A DISTRIBUTOR/RETAILER</h3> Classic treats fast paced growth is what our distribution partners enjoy. Our distributors and retailers are part of our family and we <br />support them round the year to ensure steady growth throughout.<br />
                        For details, interested entrepreneurs may mail us at <b>classictreats@classictreats.com</b> or <br />call us on +91 80 2666 4533 / 44
                    </td>
                </tr>
                </tbody></table>
        </div>
        <Footer/>
        </>

    )
}
export default Contact;