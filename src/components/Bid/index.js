import { Component } from "react";
import Biditemdetails from "../Biditemdetails";
import { IoSearchOutline } from "react-icons/io5";
import { PiPlusFill } from "react-icons/pi";
import { FaFilter } from "react-icons/fa";

import "./index.css";

const liveBidresponse = [
  {
    sno: "1",
    id: 2,
    bidNumber: "#122345678123",
    createdby: "Sunder Yadav",
    Startdate: "14/02/2024",
    time: "05:40 Pm",
    bidtimeremaining: "7hr 20 min",
    fromcity: " Gurgaon",
    tocity: "Mumbai",
    vehicletypesize: "Truck, 20 ft",
    bodynoofvehicle: "Close body , 1",
    materialweight: "400 kg",
    response: "View results",
    assignedstaff: "Mohit",
    details: "View Details",
  },
  {
    sno: "1",
    bidNumber: "#122345678123",
    createdby: "Sunder Yadav",
    Startdate: "14/02/2024",
    time: "05:40 Pm",
    bidtimeremaining: "7hr 20 min",
    fromcity: " Gurgaon",
    tocity: "Mumbai",
    vehicletypesize: "Truck, 20 ft",
    bodynoofvehicle: "Close body , 1",
    materialweight: "400 kg",
    response: "View results",
    assignedstaff: "Mohit",
    details: "View Details",
  },
  {
    sno: "1",
    bidNumber: "#122345678123",
    createdby: "Sunder Yadav",
    Startdate: "14/02/2024",
    time: "05:40 Pm",
    bidtimeremaining: "7hr 20 min",
    fromcity: " Gurgaon",
    tocity: "Mumbai",
    vehicletypesize: "Truck, 20 ft",
    bodynoofvehicle: "Close body , 1",
    materialweight: "400 kg",
    response: "View results",
    assignedstaff: "Mohit",
    details: "View Details",
  },
  {
    sno: "1",
    bidNumber: "#122345678123",
    createdby: "Sunder Yadav",
    Startdate: "14/02/2024",
    time: "05:40 Pm",
    bidtimeremaining: "7hr 20 min",
    fromcity: " Gurgaon",
    tocity: "Mumbai",
    vehicletypesize: "Truck, 20 ft",
    bodynoofvehicle: "Close body , 1",
    materialweight: "400 kg",
    response: "View results",
    assignedstaff: "Mohit",
    details: "View Details",
  },
  {
    sno: "1",
    bidNumber: "#122345678123",
    createdby: "Sunder Yadav",
    Startdate: "14/02/2024",
    time: "05:40 Pm",
    bidtimeremaining: "7hr 20 min",
    fromcity: " Gurgaon",
    tocity: "Mumbai",
    vehicletypesize: "Truck, 20 ft",
    bodynoofvehicle: "Close body , 1",
    materialweight: "400 kg",
    response: "View results",
    assignedstaff: "Mohit",
    details: "View Details",
  },
];

class Bid extends Component {
  renderbiddetails = (Biddata) => {
    const {
      sno,
      bidNumber,
      createdby,
      Startdate,
      time,
      bidtimeremaining,
      fromcity,
      tocity,
      vehicletypesize,
      bodynoofvehicle,
      materialweight,
      response,
      assignedstaff,
      details,
      id,
    } = Biddata;
    return (
      <li>
        <div className="list-items">
          <p>{sno}</p>
          <div>
            <p>{bidNumber}</p>
            <p>{createdby}</p>
          </div>
          <div>
            <p>{Startdate}</p>
            <p>{time}</p>
          </div>
          <p>{bidtimeremaining}</p>
          <div>
            <p>{fromcity}</p>
            <p>{tocity}</p>
          </div>
          <div>
            <p>{vehicletypesize}</p>
            <p>{bodynoofvehicle}</p>
          </div>
          <p>{materialweight}</p>
          <div>
            <p>{liveBidresponse.length - 1}</p>
            <p>{response}</p>
          </div>
          <div>
            <p>{assignedstaff}</p>
            <p>5215001161264</p>
          </div>
          <p>{details}</p>
        </div>
        <div>
          <hr />
        </div>
        {id === 2 ? <Biditemdetails /> : null}
      </li>
    );
  };

  render() {
    return (
      <div>
        <div className="search-Container">
          <div className="icon-items">
            <p>Live</p>
            <p>Result</p>
            <p>History</p>
            <div className="Search-box">
              <IoSearchOutline />
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <div className="Create-container">
            <p>Create</p>
            <PiPlusFill />
          </div>
        </div>
        <div className="options-container">
          <ul className="option-items">
            <li>Live(30)</li>
            <li>Responded(30)</li>
            <li>Unresponded</li>
          </ul>
          <ul className="option-items">
            <li>Bid Created</li>
            <li>Today</li>
            <li>Yesterday</li>
            <select name="calander" className="calander">
              <option>Calender</option>
            </select>
            <FaFilter style={{ color: "blue" }} />
          </ul>
        </div>
        <div className="tab-container">
          <p>SNO.</p>
          <p>Bid Number Created By</p>
          <p>Start Date & Time</p>
          <p>Bid Time Remaining</p>
          <p>From city To city</p>
          <p>
            Vehical Type,size <br /> Body,No.of Vehicle
          </p>
          <p>Material Weight (in kg)</p>
          <p>Response</p>
          <p>Assigned Staff</p>
          <p>Details</p>
        </div>
        <ul className="response-container">
          {liveBidresponse.map((eachresponse) =>
            this.renderbiddetails(eachresponse)
          )}
        </ul>
      </div>
    );
  }
}

export default Bid;
