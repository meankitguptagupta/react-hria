import { ContactInformation } from './Contact';
import { ParentInformation } from './Parent';
import { Profile } from './Profile';
import { DataObject } from '../../components/DynamicForm/elements.interface';

const StudentProfile: React.FC = () => {

    const handleFormSubmit = (formData: DataObject) => {
        // Perform any actions with the form data
        console.log(formData);
    };

    return (
        <div className="personal-information">
            <Profile onSubmit={handleFormSubmit} formId="personal-information-form" />

            <div className="mb-5"></div>

            <ParentInformation onSubmit={handleFormSubmit} formId="personal-information-form" />

            <div className="mb-5"></div>

            <ContactInformation onSubmit={handleFormSubmit} formId="personal-information-form" />

            <div className="mb-3"></div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn border bg-white w-15 me-md-2" type="reset" form="personal-information-form">Back</button>
                <button className="btn btn-secondary w-15" type="submit" form="personal-information-form">Save & Next</button>
            </div>
        </div>
    );
};

export default StudentProfile;
