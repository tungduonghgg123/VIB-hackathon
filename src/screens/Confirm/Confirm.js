import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import VIBButton from '../../components/VIBButton';
import {SafeAreaView} from 'react-native';
import FieldValue from '../../components/FieldValue';

const Confirm = ({route, navigation}) => {
  // Nếu như mà không có route.params thì sao?
  const {amount, fullCategory, accountNumber, realName} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.transferContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.pleaseConfirmContainer}>
          <Text style={styles.pleaseConfirmText}>
            Vui lòng kiểm tra thông tin trước khi xác nhận
          </Text>
        </View>
        <FieldValue field="Số tiền" value={`${amount} VND`} blueValue />

        <FieldValue field="Từ tài khoản" value="23102000" />
        <FieldValue field="Danh mục chi tiêu" value={fullCategory} />
        <View style={styles.separater} />
        <FieldValue field="Tên tài khoản" value={realName} />
        <FieldValue field="Số tài khoản" value={accountNumber} />
        <FieldValue field="Ngân hàng" value="TP Bank" />
        <FieldValue field="Phí giao dịch" value="0 VND" blueValue />
      </ScrollView>
      <VIBButton
        title="xác nhận"
        onPress={() => navigation.navigate('Transfer')}
      />
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0066B3',
  },
  transferContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 11,
    padding: 0,
    flex: 1,
  },
  pleaseConfirmContainer: {
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    flex: 0.05,
    paddingLeft: 11,
    borderRadius: 5,
  },
  pleaseConfirmText: {
    fontSize: 12,
    color: '#7A7A7A',
  },
  separater: {
    height: 8,
    backgroundColor: '#F2F2F2',
  },
  input: {fontSize: 14},
  inputLabel: {fontSize: 12, fontWeight: '400'},
};
export default Confirm;
