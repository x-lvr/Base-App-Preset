import { Platform, StyleSheet } from 'react-native';

/**
 * Shared list styles for profile pages.
 * iOS: grouped list (rounded sections, inset).
 * Android: Material-style rows.
 */
const LIST_HORIZONTAL = 16;
const LIST_SECTION_SPACING = 24;
const ROW_PADDING_V = 12;
const ROW_PADDING_H = 16;
const ROW_MIN_HEIGHT = 44;
const SECTION_HEADER_MARGIN_BOTTOM = 8;

export const profileListStyles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  section: {
    marginBottom: LIST_SECTION_SPACING,
    marginHorizontal: LIST_HORIZONTAL,
  },
  sectionHeader: {
    marginBottom: SECTION_HEADER_MARGIN_BOTTOM,
    paddingHorizontal: 4,
  },
  group: {
    borderRadius: Platform.OS === 'ios' ? 10 : 4,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: ROW_MIN_HEIGHT,
    paddingVertical: ROW_PADDING_V,
    paddingHorizontal: ROW_PADDING_H,
  },
  rowSingle: {
    borderBottomWidth: 0,
  },
  rowBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowLabel: {
    flex: 1,
    fontSize: 16,
  },
  rowValue: {
    fontSize: 16,
    marginLeft: 8,
  },
  rowValueMuted: {
    fontSize: 14,
    marginLeft: 8,
    opacity: 0.7,
  },
  dangerRow: {
    minHeight: ROW_MIN_HEIGHT,
    paddingVertical: ROW_PADDING_V,
    paddingHorizontal: ROW_PADDING_H,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dangerZone: {
    marginTop: 32,
    marginHorizontal: LIST_HORIZONTAL,
    borderRadius: Platform.OS === 'ios' ? 10 : 4,
    overflow: 'hidden',
  },
});

export { LIST_HORIZONTAL, ROW_PADDING_H, ROW_PADDING_V };
