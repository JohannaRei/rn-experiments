import React, {useState, ReactNode} from 'react';
import {StyleSheet, Pressable, PressableProps} from 'react-native';
import {spacing, useTheme} from '../theme';
import {TextBody} from './Text';

export enum ButtonVariant {
  DEFAULT = 'default',
}

interface ButtonProps extends PressableProps {
  children: ReactNode;
}

type ButtonBaseProps = {
  variant: ButtonVariant;
};

function ButtonBase({
  variant,
  children,
  ...props
}: ButtonBaseProps & ButtonProps) {
  const {colors} = useTheme();

  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      style={[
        styles.container,
        styles[variant],
        {backgroundColor: colors.button},
        pressed && {backgroundColor: colors.buttonPressed},
      ]}
      {...props}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      <TextBody style={{color: colors.background}}>{children}</TextBody>
    </Pressable>
  );
}

export function ButtonDefault(props: ButtonProps) {
  return <ButtonBase {...props} variant={ButtonVariant.DEFAULT} />;
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.smallMedium,
    borderRadius: spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  default: {},
});
