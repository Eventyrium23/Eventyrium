
module.exports = (sequelize, DataTypes) => {
    const Food = sequelize.define(
      "Food",
      {
        img: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        specialite: {
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
    return Food;
  };
  
  