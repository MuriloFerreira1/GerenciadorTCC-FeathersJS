// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const projetos = sequelizeClient.define('projetos', {
    id:{
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    aceito:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (projetos as any).associate = function (models: any): void {
    projetos.belongsTo(models.areas,{
      foreignKey: "Area_id"
    })
    projetos.belongsTo(models.usuarios, {
      foreignKey: "Professor_id"
    })
    projetos.hasMany(models.usuarios,{
      foreignKey: "Projeto_id"
    })
  };

  return projetos;
}
