import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface ThemedTextProps extends TextProps {
  type: 'title' | 'subtitle' | 'defaultSemiBold' | 'default';
}

export const ThemedText: React.FC<ThemedTextProps> = ({ type, style, ...props }) => {
  const { colors } = useTheme();

  const textStyle = {
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.primary,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.secondary,
    },
    defaultSemiBold: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
    },
    default: {
      fontSize: 16,
      fontWeight: '400',
      color: colors.text,
    },
  }[type];

  return <Text style={[textStyle, style]} {...props} />;
};