import { DataSource } from "typeorm";
import { Country } from "./entities/Country";

export default new DataSource({
  type: "sqlite",
  database: "sqlite",
  synchronize: true,
  entities: [Country],
  logging: ["query", "error"],
});
