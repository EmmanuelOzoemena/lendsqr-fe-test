export type UserStatus = 'Inactive' | 'Pending' | 'Blacklisted' | 'Active';

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: UserStatus;
}