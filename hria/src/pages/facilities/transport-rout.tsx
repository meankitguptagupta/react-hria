import React from "react"

const facilities: string[] = [
    "From Chandni Chowk to Qadir Bakhsh sharif Via Chak No. R, 110/7-R 108/7-R-111/7 Old Chicha Watani 11 Moz, Sheikh Tayyab, Khan Ra Chak 737 Dakir, Kalia Chowk, Chhoti 37, Mana, Qadir Bakhsh sharif Total distance 30 KM",
    "From Lindwell to Qadir Bakhsh sharif Via Inayat Shah, 664/5 Gab, Sugar Mill, Kot Khatran, Sarfraz Mor, Kamalia City, kamalia Bypass, Mill Fatiana, Azmat shah, Qadir Bakhsh Sharif Total Distance 23 KM",
    "From Aza Husi, Jakhar Road to Qadir Bakhsh Sharif Via Jakhar GB, 734/GB, 735/GB, 742/GB 740/GB/733, Manof 738, Ranjhian Valadir and Anna, Kadir Bakhsh Sharif Total distance 26 km",
    "From Mamun Kanjan to Qadir Bakhsh Sharif Via GB / 504, Dholer Sharif, Vinsanwala Moradi Khokhar, Khod, Syed Moi, Sheikh Burhan, Mauza Member, Kadir Bakhsh Sharif Total Distance 30 KM",
    "From Mir Dad Maffi to Qadir Bakhsh Sharif Via Dad Zed Bala, Murad Ki Har Pa Road, Murad K Kathian, Ravi Keil, Mill Fatiana, Bachi Kapil, Tar, Haveli, Qadir Bakhsh Sharif Total Distance 48 KM",
    "From Wangi Ada to Qadir Bakhsh Sharif Via GB 724 / GB718 / GB 717 / GB - 716 / GB, 715 / GB: 714 / GB / 725, Jakhril, Veer and Anna, Qadir Bakhsh Sharif Total distance 30 KM",
    "From Mauza Ko Mill to Qadir Bakhsh Sharif Via 665 / 5, 666 / 5, 662 / 5, 664 / 5, 663 / 5, Inayat Shah, Sugar Mill, Sarfraz Mor, Kamalia Bypass Kadir Bakhsh Sharif Total distance 30 KM",
]

export const TransportRoutFacility: React.FC = () => {
    return <>
        <div className="fs-6 text-secondary">Please select the desired rout of transport</div>
        <hr className="divider" />

        <ul className="list-group list-group-flush">
            {
                facilities.map((facility: string, index: number) => <li key={`facility-rout-${index}`} className="list-group-item border-0">
                    <div className="d-flex">
                        <div className="me-3">
                            <input className="form-check-input" type="checkbox" value={index} id={`facility-rout-${index}`} />
                        </div>
                        <div>
                            <label htmlFor={`facility-rout-${index}`}>
                                <span className="text-info">ROUT-{index + 1}</span>
                                <p>{facility}</p>
                            </label>
                        </div>
                    </div>
                </li>)
            }
        </ul>
    </>
}