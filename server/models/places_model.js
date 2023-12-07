module.exports = (sequelize, DataTypes) => {
  const Places = sequelize.define(
    "Place",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );

  return Places;
};
