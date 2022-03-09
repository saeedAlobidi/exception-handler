import {    createConnection,ConnectionOptions,Connection,} from 'typeorm';
import DbConstraint from './Application/Constraints/DbMigrationConstraint'

  async function migrationDB(){
   const config = new DbConstraint();
      let connection: Connection;
      connection = await createConnection(config);
      await connection.synchronize(true);
      
      await connection.runMigrations({
       transaction: 'all',
      });
  }


  // Identity migration table
  migrationDB()