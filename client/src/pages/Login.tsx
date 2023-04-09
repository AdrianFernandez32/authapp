import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

function LoginPage() {
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
    console.log(values);
    setSubmitting(false);
  };

    return (
      <Formik initialValues={initialValues}
      onSubmit={(values: any) =>{
        alert(JSON.stringify(values));
      }}
      >
        <Form className='p-4 bg-slate-100 flex items-center flex-col w-96 space-y-2'>
          <span className="text-2xl font-bold text-black">Inicia sesión</span>
          <div className="flex flex-col gap-2 ">
            <label className='text-black'>Correo</label>
            <Field
              type="text"
              id={"correo"}
              name="correo"
              placeholder="example@smth.com"
              className="px-3 py-1.5 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className='text-black'>Contraseña</label>
            <Field
              type="password"
              id={"contrasena"}
              name="contrasena"
              placeholder="Password"
              className="px-3 py-1.5 rounded-lg"
            />
          </div>
          <label className="text-center text-black p-1">
            ¿No tienes cuenta? Crea una{" "}
            <Link href="/hello" className="text-yellow-500">
              {" "}
              aqui
            </Link>
          </label>
          <button onClick={onSubmit}>Ingresar</button>
        </Form>
      </Formik>
    );
}

export default LoginPage;
