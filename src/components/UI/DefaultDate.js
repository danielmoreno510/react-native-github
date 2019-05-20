import React from 'react';
import DatePicker from 'react-native-datepicker'

const defaultDate = props => (
    <DatePicker
        style={{width: 340,height: 40,margin:15}}
        mode="date"
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate="2015-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        {...props}
    />
)

export default defaultDate;