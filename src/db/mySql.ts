import { DataSource } from "typeorm";
import { AppDataSource } from "../config/data.source";
import { logger } from "../utils/logger";
import { DB_NAME, DB_PORT } from "../config/config";

export const mySqlConnection = async (): Promise<DataSource> => {
  try {
    logger.info(`==============================`);
    logger.info(`======URL: ${DB_PORT}=========`);
    logger.info(`======URL: ${DB_NAME}=========`);
    logger.info(`==============================`);

    return await AppDataSource.initialize();
  } catch (error) {
    console.log("🚀 ~ file: mySql.ts:8 ~ mySqlConnection ~ error:", error);
    throw new Error(`Error trying to connect with MYSQL`);
  }
};
