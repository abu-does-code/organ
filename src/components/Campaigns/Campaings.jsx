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
        <h2>Enter Patient Name</h2>
        <input type="text" placeholder="Patient Name" />
        <h2>Enter Patient Age</h2>
        <input type="text" placeholder="Age" />
        <h2>Enter The organ type</h2>
        <input type="text" placeholder="Organ" />
        <h2>Enter Patient Blood Group</h2>
        <input type="text" placeholder="Blood Group" />


        <input type="submit" />

      </form>
    </div>
  )
}



export default Campaings;
