/// <reference types="next" />
/// <reference types="next/types/global" />
import * as next from 'next';

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


declare module 'next' {
  import { Session } from 'next-iron-session';

  interface NextApiRequest {
    session: Session
  }
}
