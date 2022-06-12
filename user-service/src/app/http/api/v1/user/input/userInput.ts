import * as Yup from 'yup'

export interface IUserInput {
    name: string;
    country: string;
}

export default Yup.object().shape({
    name: Yup.string().required("This field is required"),
    country: Yup.string().required("This field is required"),
})