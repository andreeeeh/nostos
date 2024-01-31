import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
import loginService from "./loginService";
import { LoginValues } from "../../client-types/LoginValues";
import { useAppDispatch } from '../../hooks';
import { setAuth, initialState } from '../../slices/authSlice';
import { save } from "../../utils/secureStorage";


const Login: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
  })

  const dispatch = useAppDispatch();

  const handleSubmit = async (values: LoginValues) => {
    const res: any = await loginService(values)
    if (res.error) {
      Alert.alert(`${res.error}`);
      dispatch(setAuth(initialState));
    } else {
      Alert.alert('login 👍')
      dispatch(setAuth({ isAuthenticated: true, token: res.data }))
      save('accessToken', res.data);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Login</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => handleSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {},
  head: {},
  input: {},
  error: {}
})

export default Login;