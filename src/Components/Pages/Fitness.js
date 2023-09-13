import React  from "react"
import GenericComp from "./GenericComp"
import NavBar from "../NavBar"
// import DynamicComp from "./DynamicComp";
const Fitness=()=>{ 
    const category='fitness'
    return(
        <div> 
             <NavBar/>
             <GenericComp  category={category} />
        </div>
    )
}
export default Fitness