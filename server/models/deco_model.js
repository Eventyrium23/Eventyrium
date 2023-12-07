
module.exports = (sequelize, DataTypes) => {
    const Deco = sequelize.define(
      "Deco",
      {
        img: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        stack: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        
      },
  
      { timestamps: false }
    );
    return Deco;
  };
  
  