import React from 'react';
import Select from 'react-select';
const options = [
    { label: '1 M', value: '1m' },
    { label: '3 M', value: '3m' },
    { label: '5 M', value: '5m' },
    { label: '15 M', value: '15m' },
    { label: '30 M', value: '30m' },
    { label: '1 H', value: '1h' },
    { label: '4 H', value: '4h' },
    { label: 'D', value: 'd' },
    { label: 'M', value: 'm' },
];

const SelectInterval = () => (
    <div className="form form__form-group">
        <div className="form__form-group-field">
            <div className="form__form-group-input-wrap" style={{ display: 'flex' }}>
                <Select
                    className="select select-interval"
                    options={options}
                    placeholder="Select an Interval"
                />
            </div>
        </div>
    </div>
);
export default SelectInterval;
