import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Header = () => {
  return (
    <ScrollView>
      <View style={styles.content}>
        <TouchableOpacity style={styles.acc_qr}>
          <Text style={styles.text}>Chờ xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acc_qr}>
          <Text style={styles.text}>Lịch chụp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acc_qr}>
          <Text style={styles.text}>Đã hủy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acc_qr}>
          <Text style={styles.text}>Hoàn thành</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Header;
const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
});
