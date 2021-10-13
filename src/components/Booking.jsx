import { FaArrowLeft, FaShip, FaTruck, FaCalendar } from "react-icons/fa";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

import ToggleSwitch from "./ToggleSwitch";

import "./Booking.css";

const Booking = () => {
  return (
    <div className="bookingContainer">
      <div className="bookingHeaderContainer">
        <div className="bookingHeader">
          <span className="bookingHeader_icon">
            <FaArrowLeft />
          </span>
          <p className="bookingHeader_bold">New Booking</p>
        </div>

        <p className="bookingHeader_text">
          Fill in the information below to get quote or create a new booking
        </p>
      </div>

      <div className="mainServiceContainer">
        <p className="mainService_header">Select a service</p>
        <div className="mainService_body">
          <div className="mainService_item_active">
            <p className="mainService_item_active_text">Air Freight</p>
            <span className="mainService_item_active_icon">
              <MdOutlineAirplanemodeActive className="mainService_item_active_icon" />
            </span>
          </div>

          <div className="mainService_item">
            <p className="mainService_item_text">Sea Freight</p>
            <span className="mainService_item_icon">
              <FaShip className="mainService_item_icon" />
            </span>
          </div>
          <div className="mainService_item">
            <p className="mainService_item_text">
              Inland <br />
              <span>(Truck and Badge)</span>
            </p>

            <span className="mainService_item_icon">
              <FaTruck className="mainService_item_icon" />
            </span>
          </div>
          <div className="mainService_item">
            <p className="mainService_item_text">Customs Clearance</p>
            <span className="mainService_item_icon">
              <GiPoliceOfficerHead className="mainService_item_icon" />
            </span>
          </div>
        </div>
      </div>

      <div className="shippingDetailsContainer">
        <p className="shippingDetails_headerIcon">
          <HiOutlineExclamationCircle />
        </p>
        <div className="shippingDetails_form1">
          <div className="shippingDetails_form1_buttonContainer">
            <button className="shippingDetails_form1_button">Import</button>
            <button className="shippingDetails_form1_button">Export</button>
          </div>
          <div className="shippingDetails_form1_inputContainer">
            <div className="shippingDetails_form1_inputLeftElement">
              <p className="shippingDetails_form1_inputLeftText">
                <span className="shippingDetails_form1_inputLeftIcon">
                  <IoLocationSharp />
                </span>
                From
              </p>
            </div>
            <input
              placeholder="City or Port"
              className="shippingDetails_form1_input"
            />
          </div>

          <div className="shippingDetails_form1_inputContainer">
            <div className="shippingDetails_form1_inputLeftElement">
              <p className="shippingDetails_form1_inputLeftText">
                <span className="shippingDetails_form1_inputLeftIcon">
                  <IoLocationSharp />
                </span>
                To
              </p>
            </div>
            <input
              placeholder="City or Port"
              className="shippingDetails_form1_input"
            />
          </div>
        </div>

        <div className="shippingDetails_form2">
          <div className="shippingDetails_form2_inputContainer">
            <div className="shippingDetails_form2_inputLeftElement">
              <p className="shippingDetails_form2_inputLeftText">
                <span className="shippingDetails_form2_inputLeftIcon">
                  <FaCalendar />
                </span>
                Ready Date
              </p>
            </div>
            <input className="shippingDetails_form2_input" />
          </div>

          <select name="incoterms" className="shippingDetails_form2_select">
            <option value="incoterms">Incoterms</option>
          </select>

          <div className="shippingDetails_form2_inputContainer">
            <div className="shippingDetails_form2_inputLeftElement">
              <p className="shippingDetails_form2_inputLeftText">
                Total Cargo Value
              </p>
            </div>
            <input className="shippingDetails_form2_input" />
          </div>
        </div>
      </div>

      <div className="cargoDetailsContainer">
        <div className="cargoDetails_headerContainer">
          <p className="cargoDetails_header">Cargo Details</p>

          <div className="cargoDetails_form">
            <ToggleSwitch active={true} />
            <p className="cargoDetails_formHeader">Dangerous Cargo</p>
            <p className="cargoDetails_formHeadersmall">
              (ex. Chemicals, Batteries)
            </p>
          </div>
        </div>
        <div className="cargoDetails_ButtonContainer">
          <button className="cargoDetails_Button1">Total Dimensions</button>
          <button className="cargoDetails_Button2">Package Details</button>
        </div>
        <form className="cargoDetails_form">
          <fieldset>
            <legend>Total Volume</legend>
            <input className="cargoDetails_formInput" />
            <span className="cargoDetails_formText1">cbm</span>
          </fieldset>

          <fieldset>
            <legend>Total Weight</legend>
            <input className="cargoDetails_formInput" />
            <span className="cargoDetails_formText2">kg</span>
          </fieldset>
        </form>
      </div>

      <div className="additionalServiceContainer">
        <p className="additionalService_header">Additional Services</p>
        <div className="additionalService_body">
          <div className="additionalService_item">
            <ToggleSwitch active={false} />
            <div className="additionalService_itemText">
              <p className="additionalService_itemTextB">Export Forwarding</p>
              <p className="additionalService_itemTextT">
                We handle customs clearance and documentation
              </p>
            </div>
          </div>
          <div className="additionalService_item">
            <ToggleSwitch active={false} />
            <div className="additionalService_itemText">
              <p className="additionalService_itemTextB">
                Import Customs Clearance
              </p>
              <p className="additionalService_itemTextT">
                We handle imports customs and regulatory requirements
              </p>
            </div>
          </div>

          <div className="additionalService_item">
            <ToggleSwitch active={false} />
            <div className="additionalService_itemText">
              <p className="additionalService_itemTextB">Cargo Insurance</p>
              <p className="additionalService_itemTextT">
                Protect your cargo from logistics risks up to it's full value.{" "}
              </p>
            </div>
          </div>

          <div className="additionalService_item">
            <ToggleSwitch active={false} />
            <div className="additionalService_itemText">
              <p className="additionalService_itemTextB">
                Transport / Delivery
              </p>
              <p className="additionalService_itemTextT">
                We deliver the cargo to your door steps from the ports{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
