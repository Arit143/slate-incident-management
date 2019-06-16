import React from 'react';
import { Field, FieldProps } from 'formik';
import has from 'lodash/has';
import omit from 'lodash/omit';
import TextField from '@material-ui/core/TextField';

interface FormikProps {
    name: string;
    required?: boolean;
    label?: string;
    fullWidth?: boolean;
    autoComplete?: string;
    [key: string]: any;
}

const FormikTextField: React.SFC<FormikProps> = (props: FormikProps) => {
    return (
        <Field 
            name={props.name} 
            id={props.name} 
            render={({ field, form: { touched, errors } } : FieldProps) => {
                const hasChildren = has(props, 'children');
                return !hasChildren ? <TextField {...field} {...props} fullWidth autoComplete="off"/> : 
                    <TextField {...field} {...omit(props, ['children'])} fullWidth autoComplete="off">{props.children}</TextField>;
            }} 
            required={props.required}
        />
    );
}

export default FormikTextField;