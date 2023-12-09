module.exports = (sequelize, DataTypes) => {
    const Invitation = sequelize.define(
      "invitation",
      {
        id: {
            primaryKey: true,
           type: DataTypes.INTEGER,
           autoIncrement : true,
        },
        receiver: {
          type: DataTypes.STRING,
        },
        sender: {
          type: DataTypes.STRING,
        },
      avenue :{
        type : DataTypes.STRING,
      },
      status :{
        type:  DataTypes.STRING,
    }

      }
    );
    return Invitation;
  };
  
  