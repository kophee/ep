import React, {useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    View
  } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


export default function TestModal () {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.test}>
      <View style={styles.modalFrame}>
          <Modal visible={modalOpen} animationType='slide'>
                <Icon
                name='favorite-border'
                size={24}
                onPress={() => setModalOpen(false)}
              />
              <Text> Hello from the Modal !</Text>
          </Modal>
      </View>

          <Icon 
            name='favorite-border'
            size={24}
            onPress={() => setModalOpen(true)}
          />

    </View>
  );
}

const styles = StyleSheet.create({

test: {
  margin: 100,
  paddingTop: 40
},
modalFrame: {
  margin: 100,
  paddingTop: 40
}

})



