import React  from "react"
import GenericComp from "./GenericComp"
import NavBar from "../NavBar"
// import DynamicComp from "./DynamicComp";
const Food=()=>{ 
    const category='food'
    return(
        <div> 
             <NavBar/>
             <GenericComp  category={category} />
        </div>
    )
}
export default Food