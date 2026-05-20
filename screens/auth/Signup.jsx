import { Text, View } from "react-native";
import AuthForm from "./components/AuthForm";
import { useCreateUserMutation } from "../../store/api/userApi";
import { useEffect } from "react";

export default function Signup({ navigation }) {
  const [createUser, { isLoading, isSuccess }] = useCreateUserMutation();
  const navigateToLogin = () => {
    navigation.replace("Login");
  };
  const submitFormHandler = (values) => {
    createUser({ email: values.email });
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.replace("Drawer");
    }
  }, [isSuccess]);

  return (
    <AuthForm
      navigate={navigateToLogin}
      submitFormHandler={submitFormHandler}
      isLoading={isLoading}
    />
  );
}
