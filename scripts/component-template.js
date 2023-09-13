exports.component = name => `import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '../theme';

export enum ${name}Variant {
  DEFAULT = 'default',
}

interface ${name}Props {
  variant: ${name}Variant;
}

function ${name}Base({variant}: ${name}Props) {
  const {colors} = useTheme();

  return <View style={[styles.${name.toLowercase()}, styles[variant]]} />;
}

export function ${name}Default(props: ${name}Props) {
  return <${name}Base {...props} variant={${name}Variant.DEFAULT} />;
}

const styles = StyleSheet.create({
  ${name.toLowercase()}: {},
  default: {},
});
`;
