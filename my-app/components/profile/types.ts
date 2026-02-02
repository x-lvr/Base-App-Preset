/**
 * Shared types for profile UI components.
 * Strict typing — no any.
 */

import type { ReactNode } from "react";

export interface ProfileSectionProps {
  /** Section header (uppercase, secondary color) */
  title?: string;
  /** Optional icon to display next to title */
  titleIcon?: ReactNode;
  /** Section content */
  children: ReactNode;
}

export interface ProfileGroupProps {
  /** Group content (rows) */
  children: ReactNode;
  /** Optional background color override */
  backgroundColor?: string;
}

export interface ProfileRowBaseProps {
  /** Left label */
  label: string;
  /** Label color from theme: text, accent, or destructive */
  labelColorName?: "text" | "accent" | "destructive";
  /** Show disclosure indicator (›) when row navigates */
  showDisclosure?: boolean;
  /** Optional right-side value text */
  value?: string;
  /** Value uses secondary (muted) style */
  valueSecondary?: boolean;
  /** Optional custom right element (e.g. Switch) */
  rightElement?: ReactNode;
  /** Optional left icon element */
  leftIcon?: ReactNode;
  /** Row has bottom border (except last in group) */
  hasBorder?: boolean;
  /** Border color (from theme separator) */
  borderColor?: string;
  /** Pressable — e.g. for navigation */
  onPress?: () => void;
  /** Accessibility */
  accessibilityLabel?: string;
  accessibilityRole?: "button" | "none";
}

export type ProfileRowProps = ProfileRowBaseProps;
