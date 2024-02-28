import { IoIosBriefcase } from "react-icons/io";
import { BsTruckFront } from "react-icons/bs";
import { FaDiceD6, FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BiSolidUpArrow } from "react-icons/bi";

import "./index.css";

const Biditemdetails = () => (
  <div className="BidItem-container">
    <div>
      <h1 className="bid-heading">
        Bid No: 16515 <span>(Sunder Yadav)</span>
      </h1>
      <div>
        <h1 className="bid-heading">
          Manesar, Gurugram, <span>(Haryana)</span>
        </h1>
        <p className="Loading-point">
          Loading point:
          <span>
            Ramchandra Ramniwas oil mill,
            <br /> Alwar, Rajasthan{" "}
          </span>
        </p>
      </div>
      <div>
        <h1 className="bid-heading">
          Kotputli, <span>(Rajasthan)</span>
        </h1>
        <p className="unloading-point">
          Unloading Point:{" "}
          <span>
            Ramchandra Ramniwas oil mill,
            <br /> Alwar, Rajasthan
          </span>
        </p>
      </div>
    </div>
    <div>
      <div className="vehicel-loading-data">
        <IoIosBriefcase />
        <p>Vehicle loading date : 17/02/2024</p>
      </div>
      <div className="vehicel-loading-data">
        <BsTruckFront />
        <p>
          Vehicel Type:{" "}
          <span className="center-span"> 20 ft Truck (Close Body)</span>
        </p>
        <p style={{ backgroundColor: "green", padding: "5px", color: "white" }}>
          CNG
        </p>
      </div>
      <div className="vehicel-loading-data">
        <FaDiceD6 />
        <p>
          Material: <span className="center-span">Agricultural Products</span>
        </p>
        <p>
          Weight : <span className="center-span">14 Tonnes</span>
        </p>
      </div>
      <div className="vehicel-loading-data">
        <IoIosBriefcase />
        <p>
          Request Date: <span className="center-span">15/02/2024</span>
        </p>
        <p>
          <IoIosBriefcase /> Expiry Date :{" "}
          <span className="center-span">15/02/2024</span>
        </p>
      </div>
      <div>
        <p>
          Remarks: <span className="center-span">Urgent Delivery</span>
        </p>
      </div>
    </div>
    <div>
      <div className="bid-contact-container">
        <FaUser />

        <p>
          Assigned Staff: <span className="center-span">Rahul Panday</span>
        </p>
      </div>
      <div className="bid-contact-container">
        <FaPhone />
        <p>
          Phonne number: <span className="center-span">+91 3332423442442</span>
        </p>
      </div>
      <div>
        <p>
          Target Price: <span className="center-span">Rs 5000</span>
        </p>
        <p>
          Number of Bider for this Bid: <span className="center-span">54</span>
        </p>
        <p className="center-span">View Details</p>
      </div>

      <div className="view-less-container">
        <p>View less</p>
        <BiSolidUpArrow />
      </div>
    </div>
  </div>
);

export default Biditemdetails;
