import React from 'react';
import { BatchSelectionProps, Program } from './course.interface';

export const BatchSelection: React.FC<BatchSelectionProps> = ({ programs, onBatchSelect }) => {
    
    const getSessions = (programs: Program[]): { value: string; label: string }[] => {
        return [...new Set(programs.map((program) => program.batch))].map((batch) => ({
            value: batch,
            label: `${batch.charAt(0).toUpperCase()}${batch.slice(1)} Session`,
        }));
    };

    return (
        <>
            <p>Please select whether you want to apply for the morning or evening session:</p>

            {getSessions(programs).map((session, index) => (
                <div className="form-check form-check-inline" key={`batch-selection-${index}`}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={`batch-selection-${index}`}
                        onClick={() => onBatchSelect(session.value)}
                    />
                    <label className="form-check-label" htmlFor={`batch-selection-${index}`}>
                        {session.label}
                    </label>
                </div>
            ))}
        </>
    );
};
