import { connect } from "mongoose";

export const startConnection = async () => {
  try {
    const db = await connect("mongodb://localhost/crud-vue");
    console.log(db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
