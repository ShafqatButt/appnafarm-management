import React, {useCallback} from 'react';
import {
  PressableProps,
  Pressable as RNPressable,
  ViewStyle,
} from 'react-native';

interface Props extends PressableProps {
  style?: ViewStyle | ViewStyle[];
  activeOpacity?: number;
}

const Pressable = ({
  children,
  style,
  activeOpacity = 0.7,
  ...otherProps
}: Props) => {
  const _style = useCallback(
    ({pressed}: any) => [
      {opacity: pressed ? activeOpacity : 1},
      style && style,
    ],
    [style],
  );
  return (
    <RNPressable style={_style} {...otherProps}>
      {children}
    </RNPressable>
  );
};

export default Pressable;
