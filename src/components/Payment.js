import React,{useState}from "react";
import '../style_comp/Payment.css';
import Navbar from "./Navbar";
function Payment()
{
    const[amount,setamount]=useState('');
    const [deliveryDetails, setDeliveryDetails] = useState({
        houseNo: '',
        area: '',
        pincode: '',
        city: '',
        state: '',
        landmark: '',
      });
      const [contactDetails, setContactDetails] = useState({
        name: '',
        contactNumber: '',
      });
      const handleDeliveryChange = (e) => {
        const { name, value } = e.target;
        setDeliveryDetails({
          ...deliveryDetails,
          [name]: value,
        });
      };
      const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactDetails({
          ...contactDetails,
          [name]: value,
        });
      };
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        if(!deliveryDetails.houseNo ||
            !deliveryDetails.area ||
            !deliveryDetails.pincode ||
            !deliveryDetails.city ||
            !deliveryDetails.state ||
            !contactDetails.name ||
            !contactDetails.contactNumber||amount==='')
        {
            alert("please fill in all required fields.");
        }
        else if (deliveryDetails.pincode.length !== 6) {
            alert('Please enter a valid 6-digit pincode.');
            return;
          }
        else  if (contactDetails.contactNumber.length !== 10) {
            alert('Please enter a valid 10-digit contact number.');
            return;
          }
        else{
            var options={
                key:"rzp_test_eEW3HjJqRPK9MK",
                key_secret:"lNGq7yzeXN29UC5V3jC5ylkK",
                amount:amount*100,
                currency:"INR",
                name:"Classic Treats",
                description:"let's pay",
                handler:function(response)
                {
                    alert(response.razorpay_payment_id);
                },
                prefill:{
                    name:"revathi",
                    email:'revathip.21@kongu.edu',
                    contact:"5755875690"
                },
                notes:{
                    address:"Razorpay Corporate office"
                },
                theme:{
                    color:'#4B0082'
                }
            };
            var pay=new window.Razorpay(options);
            pay.open();
        }
        setDeliveryDetails({
            houseNo: '',
            area: '',
            pincode: '',
            city: '',
            state: '',
            landmark: '',
          });
          setContactDetails({
            name: '',
            contactNumber: '',
          });

    }
    return(
        <div>
            <Navbar/>
        <div className="payment-container">
        <br/>
        <form onSubmit={handleSubmit}  className="payment-form">
        <div className="form-section">
        <h3>Delivery Details</h3>
        <div className="form-item">
        <label>
            House No./Building Name:
            <input
              type="text"
              name="houseNo"
              value={deliveryDetails.houseNo}
              onChange={handleDeliveryChange}
            />
          </label>
          </div>
          <div className="form-item">
          <label>
          Area/Colony:
            <input
              type="text"
              name="area"
              value={deliveryDetails.area}
              onChange={handleDeliveryChange}
            />
          </label> 
          </div>
          <div className="form-item">
          <label>
          Pincode:
            <input
              type="text"
              name="pincode"
              value={deliveryDetails.pincode}
              onChange={handleDeliveryChange}
            />
          </label> 
          </div>
          <div className="form-item">
          <label>
          City:
            <input
              type="text"
              name="city"
              value={deliveryDetails.city}
              onChange={handleDeliveryChange}
            />
          </label> 
          </div>
          <div className="form-item">
          <label>
          State:
            <input
              type="text"
              name="state"
              value={deliveryDetails.state}
              onChange={handleDeliveryChange}
            />
          </label> 
          </div>
          <div className="form-item">
          <label>
          Nearby famous place/shop/school etc(optional):
            <input
              type="text"
              name="landmark"
              value={deliveryDetails.landmark}
              onChange={handleDeliveryChange}
            />
          </label> 
          </div>
        
        <h3>Contact Details</h3>
       
          <div className="form-item">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={contactDetails.name}
              onChange={handleContactChange}
            />
          </label>
          </div>
          <div className="form-item">
          <label>
          ContactNumber:
            <input
              type="text"
              name="contactNumber"
              value={contactDetails.contactNumber}
              onChange={handleContactChange}
            />
          </label>
          </div>
          <div className="form-item">
          <label>Enter Amount:
        <input type="text" value={amount}
        onChange={(e)=>setamount(e.target.value)}/>
        </label>
        </div>
        <br/>
        <button onClick={handleSubmit}>submit</button>
      
       </div>
        </form>
        </div>
    </div>
    );
}
export default Payment;