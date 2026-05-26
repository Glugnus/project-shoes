import * as Yup from "yup";
import { Formik } from "formik";
import Input from "../../../ui-components/input/Input";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import CustomButton from "../../../ui-components/buttons/CustomButton";

export default function ProfileForm({ user, submitFormHandler, isLoading }) {
  const initialValues = {
    email: user.email,
    fullName: user.fullName,
    location: {
      postalCode: user.location?.postalCode,
      street: user.location?.street,
      city: user.location?.city,
    },
  };
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Le nom est obligatoire"),
    location: Yup.object().shape({
      street: Yup.string().required("L'adresse est obligatoire"),
      postalCode: Yup.string()
        .required("Le code postal est obligatoire")
        .min(5, "Le code postal est incorrect")
        .max(5, "Le code postal est incorrect"),
      city: Yup.string().required("La ville est obligatoire"),
    }),
  });
  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView
        className="bg-blue-50 "
        contentContainerClassName="px-6 py-8 bg-blue-50"
        showsVerticalScrollIndicator={false}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitFormHandler}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
          }) => (
            <>
              <Input
                label="Nom complet"
                maxLength={60}
                value={values.fullName}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                error={!!errors.fullName && touched.fullName}
                errorText={errors.fullName}
                autoCapitalize="none"
              />
              <Input label="Email" value={values.email} readOnly />
              <Input
                label="Numéro et nom de rue"
                maxLength={120}
                value={values.location.street}
                onChangeText={handleChange("location.street")}
                onBlur={handleBlur("location.street")}
                error={!!errors.location?.street && touched.location.street}
                errorText={errors.location?.street}
                autoCapitalize="none"
              />
              <Input
                label="Code postal"
                maxLength={5}
                value={values.location.postalCode}
                onChangeText={handleChange("location.postalCode")}
                onBlur={handleBlur("location.postalCode")}
                error={
                  !!errors.location?.postalCode && touched.location.postalCode
                }
                errorText={errors.location?.postalCode}
                keyboardType="number-pad"
              />
              <Input
                label="Ville"
                maxLength={90}
                value={values.location.city}
                onChangeText={handleChange("location.city")}
                onBlur={handleBlur("location.city")}
                error={!!errors.location?.city && touched.location.city}
                errorText={errors.location?.city}
                autoCapitalize="words"
              />
              <CustomButton
                text="Valider"
                onPress={handleSubmit}
                isLoading={isLoading}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
