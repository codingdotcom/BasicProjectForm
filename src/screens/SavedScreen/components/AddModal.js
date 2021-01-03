import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Modal, Alert, Image, StyleSheet} from 'react-native';
import Colors from '../../../contants/color';
import Size from '../../../contants/size';
import CustomButton from '../../../components/CustomButton';

class AddModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }

  render() {
    return (
      <View style={styles.screen}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible();
          }}>
          <View style={styles.contentView}>
            <View style={styles.mainView}>
              <View
                style={{
                  height: 50,
                  justifyContent: 'center',
                  marginHorizontal: 10,
                  paddingHorizontal: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.main,
                }}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>장치등록</Text>
              </View>
              <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                <Text style={{fontSize: 16}}>장치를 선택해주세요.</Text>
              </View>
              <View style={{flexDirection: 'row', flex: 1, padding: 10}}>
                <View>
                  <Text>이미지를 추가해 주세요.</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  componentDidMount() {}

  setModalVisible = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  mainView: {
    width: 300,
    height: 250,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddModal;
