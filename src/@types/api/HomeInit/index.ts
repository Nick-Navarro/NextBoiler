export interface HomepageInitResponseData {
  dataResponseType: "homepage_init";

  // example of some dummy data
  user: {
    _id: string;
    fullName: string;
    username: string;
    email: string;
  };
}
