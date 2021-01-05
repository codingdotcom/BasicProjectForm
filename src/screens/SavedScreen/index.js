import React, {Component, createRef} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableWithoutFeedback, TouchableOpacity, Image, Dimensions, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Colors from '../../contants/color';
import Sizes from '../../contants/size';

import AddModal from './components/AddModal';
import ListItem from './components/ListItem';
import FloatingButton from '../../components/FloatingButton';

const width = Dimensions.get('window').width;

const listItem = [
  {
    id: 202101,
    imageUri: require('../../assets/image/thumbnail_uquiz.png'),
    title: '유퀴즈 온더 블럭 정주행',
    info: 'Live / 3분전',
  },
  {id: 202102, imageUri: require('../../assets/image/thumbnail_criim.png'), title: '크라임 씬 정주행', info: 'Live / 1시간전'},
  {id: 202103, imageUri: require('../../assets/image/thumbnail_excl.png'), title: '실무 엑셀 제대로 배워보자.', info: 'Live / 21시 공개'},
  {id: 202104, imageUri: require('../../assets/image/thumbnail_joosic.png'), title: '주식천하 최초공개', info: 'Live / 10분전'},
];

class SavedScreen extends Component {
  constructor(props) {
    super(props);

    this.page = 0;
    this.isLoading = false;
    this.endPage = false;

    this.state = {
      items: [],
      refreshing: false,
    };

    this.addModalRef = createRef();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <AddModal ref={this.addModalRef} />
        </View>
        <FlatList
          data={this.state.items}
          numColumns={1}
          // keyboardShouldPersistTaps={'handle'}
          // extraData={this.state}
          // ListFooterComponent={this.listFooter}
          // refreshing={this.state.refreshing}
          // onRefresh={() => this._handleRefesh()}
          // onEndReached={this._handleLoadMore}
          // onEndReachedThreshold={1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{}}
          ItemSeparatorComponent={this.ItemSeparator}
          renderItem={this.renderItem}
        />
        <FloatingButton style={{bottom: 10, right: 35}} btnLink={() => this.props.navigation.push('SignUp')} />

        {/* <Button title="Open Modal" onPress={() => this.addModalRef.current.setState({showModal: true})} /> */}
      </View>
    );
  }

  componentDidMount = () => {
    this.setState({
      items: listItem,
    });
  };

  //플랫 리스트 구분선 추가
  ItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '95%',
          alignSelf: 'center',
          backgroundColor: Colors.lightgrey,
        }}
      />
    );
  };

  //플랫리스트 렌더 아이템(등록한 상품들)
  renderItem = ({item}) => {
    return <ListItem mData={item} />;
  };

  //등록된 상품 리스트에서  상품 선택
  onSelectItemCell = () => {
    this.props.navigation.push('SavedDetail');
  };

  //플랫리스트 하단 더하기버튼
  // listFooter = () => {
  //   return (
  //     <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
  //       <TouchableOpacity
  //         activeOpacity={0.8}
  //         onPress={() => {
  //           this.addModalRef.current.setModalVisible();
  //         }}>
  //         <AntDesign name="pluscircle" size={60} color={colors.main} />
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export const screenOptions = ({navigation, route}) => {
  return {};
};

export default SavedScreen;
