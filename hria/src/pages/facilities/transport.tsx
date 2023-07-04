import React from "react"

const facilities: string[] = [
    "Check this box, only if you want to avail transport facility",
    "By checking this box, you are agreeing to our rules, regulations and policies of transport facility To read all policies Click here"
]

export const TransportFacility: React.FC = () => {
    return <>
        <div className="fs-4 text-capitalize text-secondary fw-bolder">Transport Facility</div>
        <hr className="divider" />
        <div className="fs-6 text-secondary">Hostel facility is only allowed to the students of Regular/Morning Programs on Merit Basis</div>

        <ul className="list-group list-group-flush">
            {
                facilities.map((facility: string, index: number) => <li key={`facility-transport-${index}`} className="list-group-item border-0">
                    <input className="form-check-input me-1" type="checkbox" value={index} id={`facility-transport-${index}`} />
                    <label htmlFor={`facility-transport-${index}`}>
                        {facility}
                    </label>
                </li>)
            }
        </ul>
    </>
}