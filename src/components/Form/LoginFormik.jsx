import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { fetchUser } from "../../Services/thunkService";
import { changeEmail, changeLog } from "../../Redux/Store/userSlice";
import "../../Styles/constructionStyles";
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string().required("password is required"),
});

const LoginFormik = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialCredentials = {
    email: "",
    password: "",
  };
  const handelClick = () => {
    dispatch(fetchUser());
    navigate("/Profile");
  };

  return (
    <div className="">
      <Formik
        //intial values
        initialValues={initialCredentials}
        //YUP validation schema
        validationSchema={loginSchema}
        //VALUES toma los valores que son enviados desde el formulario
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {/*obtenemos props de formik, estos son aportados por la misma etiqueta */}
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form className="form-control GStyle2 m-1">
            <label htmlFor="email">Email</label>
            <Field
              className="form-control GStyle2 m-1"
              id="email"
              name="email"
              placeholder="ejemplo@gmail.com"
              type="email"
              required
            ></Field>

            {/*aqi manejo los errores del mail */}
            {errors.email && touched.email && (
              <div>
                <ErrorMessage name="email"></ErrorMessage>
              </div>
            )}

            <label htmlFor="password">Password</label>
            <Field
              className="form-control GStyle2 m-1"
              id="password"
              name="password"
              placeholder="password"
              type="password"
            ></Field>
            {/*aqi manejo los errores del password */}
            {errors.password && touched.password && (
              <div>
                <ErrorMessage name="password"></ErrorMessage>
              </div>
            )}
            <button
              className="btnStyle btn btn-primary"
              type="submit"
              onClick={() => handelClick()}
            >
              Login
            </button>
            {/*este es un prop que me captura el estado de la carga(isSubmittin:boolean) */}
            {/* {isSubmitting ? <p>login your credentials...</p> : null} */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
