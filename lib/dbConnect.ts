import type { Connection, ConnectOptions } from "mongoose";
import { createConnection } from "mongoose";

const  options: ConnectOptions = {
  appName: 'dooka',
};

let connection: Connection;

export default function dbConnect(uri: string) {
  if (connection) {
    return connection;
  }

  connection = createConnection(uri, options);
  return connection;
}