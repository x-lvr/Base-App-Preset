import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';
import { Typography } from '@/constants/design-system';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  /** Use theme semantic color: 'text' | 'secondary' | 'tertiary' | 'accent' | 'destructive' */
  colorName?: keyof typeof import('@/constants/theme').Colors.light;
  type?:
    | 'default'
    | 'title'
    | 'titleLarge'
    | 'screenTitle'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'headline'
    | 'body'
    | 'bodyPrimary'
    | 'bodySecondary'
    | 'callout'
    | 'subhead'
    | 'footnote'
    | 'caption'
    | 'caption1'
    | 'sectionHeader'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  colorName = 'text',
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const resolvedColorName =
    type === 'link' && colorName === 'text'
      ? 'accent'
      : (colorName as keyof typeof import('@/constants/theme').Colors.light);
  const color = useThemeColor({ light: lightColor, dark: darkColor }, resolvedColorName);

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'titleLarge' ? Typography.titleLarge : undefined,
        type === 'screenTitle' ? Typography.screenTitle : undefined,
        type === 'title1' ? Typography.title1 : undefined,
        type === 'title2' ? Typography.title2 : undefined,
        type === 'title3' ? Typography.title3 : undefined,
        type === 'headline' ? Typography.headline : undefined,
        type === 'body' ? Typography.body : undefined,
        type === 'bodyPrimary' ? Typography.bodyPrimary : undefined,
        type === 'bodySecondary' ? Typography.bodySecondary : undefined,
        type === 'callout' ? Typography.callout : undefined,
        type === 'subhead' ? Typography.subhead : undefined,
        type === 'footnote' ? Typography.footnote : undefined,
        type === 'caption' ? Typography.caption : undefined,
        type === 'caption1' ? Typography.caption1 : undefined,
        type === 'sectionHeader' ? Typography.sectionHeader : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
  },
});
