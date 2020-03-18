import React from 'react';
import Select from 'react-select';
const options = [
    { label: 'Brazil', value: 'brazil' },
    { label: 'Spain', value: 'spain' },
    { label: 'China', value: 'china' },
];

const SelectCountry = () => (
    <div className="form form__form-group">
        <div className="form__form-group-field">
            <div className="form__form-group-input-wrap" style={{ display: 'flex' }}>
                <Select
                    className="select select-country"
                    options={options}
                    placeholder="Select a Country"
                />
            </div>
        </div>
    </div>
);
export default SelectCountry;
