import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { data } from "./Data";
import { breed } from "./Data";

export default function AdoptForm() {
  const AdoptSchema = Yup.object().shape({
    pet: Yup.string().required(),
    breed: Yup.string().required(),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.number().required().positive().integer(),
  });
  const [breedName, setBreedName] = useState([]);

  const handledata = (id) => {
    const getBreedData = breed.filter((u) => u.pet_id === id);
    setBreedName(getBreedData);
  };

  return (
    <div>
      <Formik
        initialValues={{
          pet: "",
          breed: "",
          name: "",
          email: "",
          phone: "",
        }}
        validationSchema={AdoptSchema}
        onSubmit={(values, { resetForm }) => {
          localStorage.setItem("giveAway", JSON.stringify(values));

          resetForm("");
        }}
      >
        {({ errors, touched }) => (
          <Form id="adopt-form">
            <h5>What pet do you want to adopt ?</h5>
            <div className="col-12 col-sm-7 py-2">
              <label htmlFor="pet">
                Pet type<span className="text-danger">*</span>
              </label>
              <Field
                as="select"
                name="pet"
                className="form-select"
                onClick={(e) => handledata(e.target.value)}
                style={{ fontWeight: 700 }}
              >
                <option>--select--</option>
                {data.map((op, index) => {
                  return (
                    <option key={index} value={op.id}>
                      {op.type}
                    </option>
                  );
                })}
              </Field>

              {errors.pet && touched.pet ? (
                <span className="text-danger text-start">*{errors.pet}*</span>
              ) : null}
            </div>

            <div className="col-12 col-sm-7 py-2">
              <label htmlFor="breed">
                Breed<span className="text-danger">*</span>
              </label>

              <Field
                as="select"
                name="breed"
                className="form-select"
                style={{ fontWeight: 700 }}
              >
                <option>--select--</option>
                {breedName.map((g, index) => {
                  return (
                    <option key={index} value={g.breed_name}>
                      {g.breed_name}
                    </option>
                  );
                })}
              </Field>

              {errors.breed && touched.breed ? (
                <span className="text-danger text-start">*{errors.breed}*</span>
              ) : null}
            </div>

            <h5 className="py-3">Please fill in your details</h5>
            <div className="col-12 col-sm-7 py-2">
              <label htmlFor="name">
                Full Name<span className="text-danger">*</span>
              </label>
              {/*  name */}

              <Field
                type="text"
                name="name"
                placeholder=" Sachin Tendulkar"
                className="form-control"
                style={{ fontWeight: 700 }}
              />

              {errors.name && touched.name ? (
                <span className="text-danger text-start">*{errors.name}*</span>
              ) : null}
            </div>
            {/* Email */}
            <div className="col-12 col-sm-7 py-2">
              <label htmlFor="email">
                Email ID
                <span className="text-danger">*</span>
              </label>
              <Field
                type="email"
                name="email"
                placeholder="sachin@gmail.com"
                className="form-control"
                style={{ fontWeight: 700 }}
              />

              {errors.email && touched.email ? (
                <span className="text-danger text-start">*{errors.email}*</span>
              ) : null}
            </div>

            {/* Contact number */}
            <div className="col-12 col-sm-7 py-2">
              <label htmlFor="phone">
                phone <span className="text-danger">*</span>
              </label>
              <Field
                type="number"
                name="phone"
                className="form-control"
                placeholder="+91 - 4934234345"
                style={{ fontWeight: 700 }}
              />

              {errors.phone && touched.phone ? (
                <span className="text-danger text-start">*{errors.phone}*</span>
              ) : null}
            </div>

            {/* submit Button */}

            <div className="d-flex justify-content-end pt-3">
              <button
                type="submit"
                id="submit"
                className="btn btn-outline-danger adopt-btn "
              >
                REQUEST FOR ADOPTION
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
