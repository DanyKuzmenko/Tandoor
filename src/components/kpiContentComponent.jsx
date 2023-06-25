import React from "react";
import KpiContent_v1 from "./kpiContentComponent_v1";
// import KpiContent_v2 from "./kpiContentComponent_v2";

const KpiContent = (props) => {
   return (
    <>
        <KpiContent_v1
            props = {props}
        />
        {/* <KpiContent_v2
            props = {props}
        /> */}
    </>
   )
}
export default KpiContent;