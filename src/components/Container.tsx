import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';

type Props = {
  color?: string;
  flex?: number;
  children?: React.ReactNode;
  hPadding?: number;
  style?: ViewStyle;
  marginTop?: number;
};

const Container: FC<Props> = ({
  color,
  children,
  flex,
  hPadding,
  style,
  marginTop,
}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        flex: flex,
        paddingHorizontal: hPadding,
        marginTop: marginTop,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default Container;
