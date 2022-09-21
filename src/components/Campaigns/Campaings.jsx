import styles from "./Campaings.module.scss";
// import { WiStars } from "react-icons/wi";
// import { HiOutlineDocumentRemove } from "react-icons/hi";
// import { CgArrowsExchangeAlt } from "react-icons/cg";
// import { IoChatboxOutline } from "react-icons/io5";
// import { BsArrowRight } from "react-icons/bs";
// import { GoPlus } from "react-icons/go";
// import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";



function Campaings(){
  return(
    <div className="campaign">
       <h1 style={{color:"#000",
            fontFamily: "Arial",
            margin: "2rem",
          }}>Enter Donor Details</h1>
      <form>
        <h3>Enter Patient Name</h3>
        <input type="text" placeholder="Patient Name" />
        <h3>Enter Patient Age</h3>
        <input type="text" placeholder="Age" />
        <h3>Enter The organ type</h3>
        <input type="text" placeholder="Organ" />
        <h3>Enter Patient Blood Group</h3>
        <input type="text" placeholder="Blood Group" />


        <input type="submit" />

      </form>
    </div>
  )
}



export default Campaings;
