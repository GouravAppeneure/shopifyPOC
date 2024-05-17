import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
// import Header from '../components/Header';
import colors from '../../config/Theme/theme';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
// import Fonts from '../config/Theme/fonts';
import CircularIcon from '../../components/CircularIconButton';
import {useNavigation} from '@react-navigation/native';
import {CustomButton} from './Details';

const {width} = Dimensions.get('window');

const ReusableRow = ({
  leftText,
  rightText,
  leftTextStyle,
  rightTextStyle,
  containerStyle,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...containerStyle,
      }}>
      <Text
        style={{
          fontSize: responsiveFontSize(2),
          color: '#616A7D',
          ...leftTextStyle,
          // ...Fonts?.fontLight,
        }}>
        {leftText}
      </Text>
      <Text
        style={{
          fontSize: responsiveFontSize(2),
          color: '#1E222B',
          ...rightTextStyle,
          // ...Fonts?.fontSemiBold,
        }}>
        {rightText}
      </Text>
    </View>
  );
};

const MyCart = () => {
  const navigation = useNavigation();

  const cartItems = [
    {
      id: 1,
      title: 'Product 1',
      price: 10,
      quantity: 2,
      thumbnail: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 20,
      quantity: 1,
      thumbnail: 'https://via.placeholder.com/50',
    },
  ];

  const handleIncreaseQuantity = (id) => {
    // Handle quantity increase logic here
  };

  const handleDecreaseQuantity = (id) => {
    // Handle quantity decrease logic here
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const deliveryFees = 2;
    return subtotal + deliveryFees;
  };

  const renderItem = ({ item }) => (
    <View
      key={item.id.toString()}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: responsiveHeight(2),
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={{
            uri: item.thumbnail,
          }}
          style={{ width: 50, height: 50, marginRight: 10, borderRadius: 25 }}
          resizeMode="cover"
        />
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              color: '#1E222B',
              // ...Fonts?.fontMedium,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              color: '#1E222B',
              // ...Fonts?.fontRegular,
            }}>
            {item.price}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <CircularIcon
          onPress={() => handleIncreaseQuantity(item.id)}
          containerStyles={{ padding: responsiveWidth(3) }}
          color="#E7ECF0"
          iconColor="black"
          size={14}
          iconName="plus"
        />
        <Text
          style={{
            fontSize: responsiveFontSize(2.3),
            color: '#1E222B',
            // ...Fonts?.fontRegular,
            marginHorizontal: responsiveWidth(3),
          }}>
          {item.quantity}
        </Text>
        <CircularIcon
          onPress={() => handleDecreaseQuantity(item.id)}
          containerStyles={{ padding: responsiveWidth(3) }}
          color="#E7ECF0"
          iconColor="black"
          size={14}
          iconName="minus"
        />
      </View>
    </View>
  );

  const CustomButton = ({title, onPress, buttonStyle, textStyle}) => {
    return (
      <Pressable style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 15,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
        <CircularIcon
          onPress={() => navigation.goBack()}
          containerStyles={{ padding: responsiveWidth(3) }}
          color="#E7ECF0"
          iconColor="#A9B4BC"
          size={14}
          iconName="left"
        />
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: '#1E222B',
            // ...Fonts?.fontMedium,
            marginLeft: responsiveWidth(7),
          }}>
          Shopping Cart ({cartItems.length})
        </Text>
      </View>
      <View>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ marginTop: responsiveHeight(3) }}
        />
      </View>
      <Text
        style={{
          fontSize: responsiveFontSize(1.9),
          color: colors.blue,
          // ...Fonts?.fontMedium,
          textAlign: 'right',
        }}>
        Edit
      </Text>

      <View
        style={{
          padding: 16,
          borderRadius: 8,
          backgroundColor: '#E7ECF0',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          marginTop: 'auto',
          marginBottom: 10,
        }}>
        <View style={{ padding: 16 }}>
          <ReusableRow
            leftText="Subtotal"
            rightText={`$${calculateSubtotal()}`}
            leftTextStyle={{ fontWeight: 'normal' }}
            containerStyle={{ marginBottom: 10 }}
          />
          <ReusableRow
            leftText="Delivery"
            rightText="$2.00"
            containerStyle={{ marginBottom: 10 }}
          />
          <ReusableRow
            leftText="Total"
            rightText={`$${calculateTotal()}`}
            containerStyle={{ marginBottom: 10 }}
          />
          <CustomButton
            title="Proceed To checkout"
            onPress={() => {}}
            buttonStyle={{
              backgroundColor: colors.blue,
              borderRadius: responsiveWidth(5),
              padding: responsiveWidth(5),
              paddingHorizontal: responsiveWidth(19),
              marginVertical: 10,
            }}
            textStyle={{
              fontSize: responsiveFontSize(1.8),
              // ...Fonts?.fontSemiBold,
              textAlign: 'center',
              color: 'white',
              width: '100%',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({});