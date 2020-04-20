import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPayment } from '../../actions/profile';

const AddPayment = ({ addPayment, history }) => {
    const [formData, setFormData] = useState({
        name: '',
        ccn: '',
        month: '',
        year: '',
        cvv2: '',
    });
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const years = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

    const { name, ccn, month, year, cvv2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <h1 className="large text-primary">Add Your Payment Information</h1>
            <small>All Fields are Required</small>
            <form
                className="form"
                onSubmit={e => {
                    e.preventDefault();
                    addPayment(formData, history);
                }}>
                <div className="form-group">
                    <label>Name on Card</label>
                    <input
                        type="text"
                        placeholder="Name on Card"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Credit Card Number</label>
                    <input
                        type="text"
                        placeholder="Card Number"
                        name="ccn"
                        value={ccn}
                        onChange={e => onChange(e)}
                        required
                        minLength={16}
                        maxLength={16}
                    />
                </div>
                <label>Expiry Month</label>
                <select type="text" name="month" value={month} onChange={e => onChange(e)}>
                    {months.map(num =>
                        num === 10 || num === 11 || num === 12 ? (
                            <option value={num}>{num}</option>
                        ) : (
                            <option value={num}>{'0' + num}</option>
                        )
                    )}
                </select>
                <label>Expiry Year</label>
                <select name="year" value={year} onChange={e => onChange(e)}>
                    {years.map(year => (
                        <option value={year}>{year}</option>
                    ))}
                </select>
                <div className="form-group">
                    <label>
                        CVV2 <small> *Found on the back of your card</small>
                    </label>
                    <input
                        type="text"
                        placeholder="3-Digit Code"
                        name="cvv2"
                        value={cvv2}
                        onChange={e => onChange(e)}
                        required
                        minLength={3}
                        maxLength={3}
                    />
                </div>
                <input type="submit" className="btn btn-primary my-1" value="Add Payment Information" />
                <Link className="btn btn-light my-1" to="/dashboard">
                    Go Back
                </Link>
            </form>
        </Fragment>
    );
};

AddPayment.propTypes = {
    addPayment: PropTypes.func.isRequired,
};

export default connect(null, { addPayment })(withRouter(AddPayment));
