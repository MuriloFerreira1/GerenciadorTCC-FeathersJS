// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const areas = sequelizeClient.define('areas', {
    id:{
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (areas as any).associate = function (models: any): void {
    areas.belongsToMany(models.usuarios,{
      through: "Area_professor",
      foreignKey: "Area_id"
    })
    areas.hasMany(models.projetos, {
      foreignKey: "Area_id"
    })
  };

  return areas;
}
