/**
 * Placeholder profile data — app-agnostic, no persistence.
 * Replace with real API/context in your app.
 */

export interface ProfileData {
  avatarUri: string | null;
  firstName: string;
  lastName: string;
  username: string;
  bio: string;
  email: string;
  phone: string;
  region: string;
  language: string;
  timeZone: string;
  accountCreatedAt: string;
  accountStatus: string; // plan / role / tier
}

export interface SessionItem {
  id: string;
  deviceName: string;
  platform: string;
  lastActive: string;
  isCurrent?: boolean;
}

export interface SecurityPrivacyState {
  biometricEnabled: boolean;
  twoFactorEnabled: boolean;
  profileVisibility: boolean;
  activityVisibility: boolean;
}

export const defaultProfile: ProfileData = {
  avatarUri: null,
  firstName: 'Alex',
  lastName: 'User',
  username: 'alexuser',
  bio: 'Short bio goes here.',
  email: 'alex@example.com',
  phone: '+1 234 567 8900',
  region: 'United States',
  language: 'English',
  timeZone: 'America/New_York',
  accountCreatedAt: 'Jan 15, 2024',
  accountStatus: 'Free',
};

export const defaultSessions: SessionItem[] = [
  { id: '1', deviceName: 'iPhone 15', platform: 'iOS', lastActive: 'Now', isCurrent: true },
  { id: '2', deviceName: 'Chrome on Mac', platform: 'Web', lastActive: '2 hours ago' },
  { id: '3', deviceName: 'Android Device', platform: 'Android', lastActive: 'Yesterday' },
];

export const defaultSecurityPrivacy: SecurityPrivacyState = {
  biometricEnabled: false,
  twoFactorEnabled: false,
  profileVisibility: true,
  activityVisibility: true,
};

export const defaultActivity = {
  lastLogin: 'Today at 2:30 PM',
  activitySummary: 'Active this week',
};
