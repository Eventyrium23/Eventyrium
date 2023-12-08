module.exports = (sequelize, DataTypes)=>{
    const Packs = sequelize.define(
        "packs",
        {
         img:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          package_name:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          description:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          price:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          max_guests:{
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
        { timestamps: false }
      );
      return Packs;  

    };
    