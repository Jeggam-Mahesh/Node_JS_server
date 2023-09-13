import React  from "react"
import GenericComp from "./GenericComp"
import NavBar from "../NavBar"
// import DynamicComp from "./DynamicComp";
const Bollywood=()=>{ 
    const category='bollywood'
    return(
        <div> 
             <NavBar/>
             <GenericComp  category={category} />
        </div>
    )
}
export default Bollywood