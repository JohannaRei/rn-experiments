import React from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';
import {useTheme, fontSizes} from '../theme';

export enum TextVariant {
  BODY = 'body',
}

interface TextBaseProps extends TextProps {
  variant: TextVariant;
}

function TextBase({variant, children, style, ...props}: TextBaseProps) {
  const {colors} = useTheme();

  return (
    <RNText
      style={[styles.container, styles[variant], {color: colors.text}, style]}
      {...props}>
      {children}
    </RNText>
  );
}

export function TextBody(props: TextProps) {
  return <TextBase {...props} variant={TextVariant.BODY} />;
}

const styles = StyleSheet.create({
  container: {},
  body: {
    fontSize: fontSizes.medium,
    lineHeight: fontSizes.medium * 1.5,
  },
});
