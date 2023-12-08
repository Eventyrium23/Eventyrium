
module.exports = (sequelize, DataTypes) => {
    const Deco = sequelize.define(
      "Deco",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        stock: {
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
  
  