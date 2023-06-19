import { Instructions } from "./Instructions";
import { MatriculationInformation } from "./MatriculationInformation";

export const Qualification = () => {
    return (
        <div>
            <div className="rounded bg-white container-fluid py-3 px-5">
                <Instructions />
            </div>

            <div className="mb-3"></div>

            <div className="rounded bg-white container-fluid py-3 px-5">
                <MatriculationInformation />
            </div>

            <div className="mb-3"></div>
            <div className="justify-content-end d-flex">
                <span className="btn border px-5 bg-white me-3">Back</span>
                <span className="btn btn-secondary px-4">Save & Next</span>
            </div>
        </div>
    );
};

export default Qualification;
