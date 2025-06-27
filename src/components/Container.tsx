import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';

type Props = {
  color?: string;
  flex?: number;
  children?: React.ReactNode;
  hPadding?: number;
  style?: ViewStyle;
  marginTop?: number;
  gap?: number;
  position?: 'absolute' | 'relative';
  top?: number;
  left?: number;
  bottom?: Number;
  right?: Number;
  width?: number;
};

const Container: FC<Props> = ({
  color,
  children,
  flex,
  hPadding,
  style,
  marginTop,
  gap,
  position,
  top,
  left,
  bottom,
  right,
  width,
}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        flex: flex,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        position: position,
        paddingHorizontal: hPadding,
        gap: gap,
        width: width,
        marginTop: marginTop,
        ...style,
      }}>
      {children}
    </View>
  );
};

export default Container;
