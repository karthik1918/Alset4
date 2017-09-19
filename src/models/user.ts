export class AppUser {
  name: string;
  displayName: string;
  emailId: string;
  locked: boolean;
  
  constructor(displayName?: string) {
    this.displayName = displayName;
  }
}