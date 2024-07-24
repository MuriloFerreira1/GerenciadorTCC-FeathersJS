// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const usuarios = sequelizeClient.define('usuarios', {
    id:{
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    RM: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    CPF: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    isAluno: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    isAdministrador: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    isVerified: { 
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    verifyToken: { 
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    verifyExpires: { 
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    },
    verifyChanges: { 
      type: DataTypes.BLOB,
      allowNull: true,
      defaultValue: null
    },
    resetToken: { 
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null 
    },
    resetExpires: { 
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    }
  
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (usuarios as any).associate = function (models: any): void {
    usuarios.belongsToMany(models.areas, {
      through: "Area_professor",
      foreignKey: "Professor_id"
    });
    usuarios.hasMany(models.projetos,{
      foreignKey: "Professor_id"
    });
    usuarios.belongsTo(models.projetos,{
      foreignKey: "Projeto_id"
    });
  };

  return usuarios;
}
