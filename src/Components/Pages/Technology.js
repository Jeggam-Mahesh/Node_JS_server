import React  from "react"
import GenericComp from "./GenericComp"
import NavBar from "../NavBar"
// import DynamicComp from "./DynamicComp";
const Technology=()=>{ 
    const category='technology'
    return(
        <div> 
             <NavBar/>
             <GenericComp  category={category} />
        </div>
    )
}
export default Technology