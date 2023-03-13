/** @format */
import { observer } from "mobx-react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext } from "react";
import cx from "classnames";
import { MFAContext } from "../shared/context";

const validateSchema = Yup.object({
  name: Yup.string().required(),
  token: Yup.string()
    .matches(/^[0-9]+$/, "Must be number")
    .required()
    .min(6)
    .max(6),
  logoUrl: Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter correct url!"
  ),
});

export const MFAAdd = observer(() => {
  const mFAContext = useContext(MFAContext);
  const navigate = useNavigate();

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      validationSchema: validateSchema,
      initialValues: {
        name: "",
        token: "",
        logoUrl: "",
      },
      onSubmit: (values) => {
        mFAContext.addMFA(values);
        navigate("/");
      },
    });

  return (
    <div className="w-full h-screen font-mono border-l border-r border-t max-w-xl mx-auto flex flex-col p-20">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="w-3/4 mx-auto">
          Add token
          <TextField
            name="name"
            label="Name"
            value={values.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Please enter token name"
            isError={touched.name && errors.name && touched.name ? true : false}
            helpText={touched.name && errors.name ? errors.name : ""}
            className="mt-10"
          />
          <TextField
            name="token"
            label="Token"
            value={values.token}
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Please enter token"
            isError={
              touched.token && errors.token && touched.token ? true : false
            }
            helpText={touched.token && errors.token ? errors.token : ""}
            className="mt-10"
          />
          <TextField
            name="logoUrl"
            label="Logo url"
            value={values.logoUrl}
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Please enter logo url"
            isError={
              touched.logoUrl && errors.logoUrl && touched.logoUrl
                ? true
                : false
            }
            helpText={touched.logoUrl && errors.logoUrl ? errors.logoUrl : ""}
            className="mt-10"
          />
        </div>
        <div className="w-3/4 mx-auto mt-20 flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-100 h-40"
          >
            Add token
          </button>
          <Link
            to="/"
            className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-100 text-center h-40 leading-loose text-gray-600"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
});

interface ITextField {
  className?: string;
  placeholder: string;
  label: string;
  value: any;
  handleChange?: any;
  handleBlur?: any;
  name: string;
  isError: boolean;
  helpText: string;
}

const TextField = (props: ITextField) => {
  return (
    <div className={props.className}>
      <label
        htmlFor={props.name}
        className={cx(
          "block mb-2 text-sm font-medium",
          props.isError ? " text-red-700" : ""
        )}
      >
        {props.label}
      </label>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        className={cx(
          " border text-sm rounded-lg block w-full px-5 py-5 outline-0",
          props.isError
            ? " bg-red-50 border-red-500 text-red-900  placeholder-red-700  focus:border-red-500  focus:ring-red-500"
            : ""
        )}
        placeholder={props.placeholder}
      />
      {props.isError && props.helpText && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{props.helpText}</span>
        </p>
      )}
    </div>
  );
};
