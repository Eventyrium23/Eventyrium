module.exports = (sequelize, DataTypes) => {
  const Selection = sequelize.define(
    "Selection",
    {
      userI: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      itemType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },

    { timestamps: false }
  );

  return Selection;
};
