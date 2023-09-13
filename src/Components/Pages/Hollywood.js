import React  from "react"
import GenericComp from "./GenericComp"
import NavBar from "../NavBar"
// import DynamicComp from "./DynamicComp";
const Hollywood=()=>{ 
    const category='hollywood'
    return(
        <div> 
             <NavBar/>
             <GenericComp  category={category} />
        </div>
    )
}
export default Hollywood