
module.exports = (sequelize, DataTypes) => {
    const FeedBacks = sequelize.define(
        "FeedBack",
        {
            feed: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },

        { timestamps: false }
    );
    return FeedBacks;
};

