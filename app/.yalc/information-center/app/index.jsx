import { Text, View } from "react-native";
import { InformationsCenter } from "../src/pages/InformationsCenter";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InformationsCenter />
    </View>
  );
}
