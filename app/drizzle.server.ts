import { Resource } from "sst";
import { drizzle } from "drizzle-orm/aws-data-api/pg";
import { migrate } from "drizzle-orm/aws-data-api/pg/migrator";
import { RDSDataClient } from "@aws-sdk/client-rds-data";

export const db = drizzle(new RDSDataClient({}), {
  database: Resource.MyDb.database,
  secretArn: Resource.MyDb.secretArn,
  resourceArn: Resource.MyDb.clusterArn
});

await migrate(db, { migrationsFolder: "app/drizzle" });