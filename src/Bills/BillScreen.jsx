import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

export default function BillScreen() {
  return (
  <View style={styles.page}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>On the Floor</Text>
      </View>

      <View style={styles.pageBackground}>
          <View style={styles.billWrapper}>
              <View style={styles.billContainer}> 

                      <View style={styles.billDateContainer}>
                            <Text style={styles.billDate}>15{"\n"}Jun</Text>
                      </View>

                      <View style={styles.billInfoContainer}>
                            <Text style={styles.billID}>H.R. 2358</Text>
                            <Text style={styles.billName}>CARES ACT</Text>
                            <Text style={styles.billStage}>House > Senate > Finalizing > To President > Law</Text>
                      </View>   

              </View> 

          <View style={styles.billContainerTab}/>

          </View>
      </View>
  </View>
  );
}


const styles = StyleSheet.create({
  page: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  
  headerContainer: {
    height: 70,
    backgroundColor: "#27323d",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#a9adb1",
    paddingLeft: "10%",
  },

  pageBackground: {
    flex: 1,
    backgroundColor: "#1F2933",
  },
  billWrapper: {
    margin: "10%",
  },
  billContainer: {
    flexDirection: 'row',
    alignItems:"flex-start",
    backgroundColor: "#313e49",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  billDateContainer: {
    flex: 1,
  },
  billDate: {
    paddingTop: 7,
    fontSize: 12,
    color: "#7f878e",
    textAlign:"center",
  },

  billInfoContainer: {
    flex: 6,
    paddingVertical: 7,
  },
  billID: {
    fontSize: 12,
    color: "#adb2b6",
  },
  billName: {
    fontSize: 16,
    color: "#adb2b6",
  },
  billStage: {
    fontSize: 10,
    color: "#adb2b6",
  },

  billContainerTab: {
    width: 45,
    height: 8,
    backgroundColor: "#2b97ad",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
