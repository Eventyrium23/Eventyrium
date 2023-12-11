
module.exports = (sequelize, DataTypes) => {
    const Admins = sequelize.define(
        "Admin",
        {
            adminName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            token: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            projects:{
                type:DataTypes.STRING,
                allowNull:false
            }
        },

        { timestamps: false }
    );
    return Admins;
};

