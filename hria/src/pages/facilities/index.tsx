import React from "react"
import { HostelFacility } from "./hostel"
import { TransportFacility } from "./transport"
import { TransportRoutFacility } from "./transport-rout"

const Facilities: React.FC = () => {
    return (
        <div className='facilities'>
            <div className="rounded bg-white container-fluid py-3 px-5">
                <HostelFacility />
                <div className="mb-3"></div>
                <TransportFacility />
                <div className="mb-3"></div>
                <TransportRoutFacility />
            </div>
        </div>
    )
}

export default Facilities