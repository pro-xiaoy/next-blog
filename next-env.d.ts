/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.png" {
  const value: any;
  export default value;
}
type Posts = {
  arttitle: String;
  content: String;
  date: String;
  title: String;
}