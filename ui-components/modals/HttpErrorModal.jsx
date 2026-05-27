import { Modal, View } from "react-native";
import { TextBoldL } from "../texts";
import CustomButton from "../buttons/CustomButton";

export default function HttpErrorModal({ isModalVisible, closeModal }) {
  return (
    <Modal visible={isModalVisible} animationType="slide" transparent>
      <View className="absolute bottom-0 min-h-[40vh] w-full bg-gray-400 rounded-t-2xl p-6 justify-evenly items-center">
        <TextBoldL className="text-center color-blue-50">
          Une erreur est survenue. Veuillez ré-essayer ultérieurement
        </TextBoldL>
        <CustomButton text="OK" onPress={closeModal} />
      </View>
    </Modal>
  );
}
