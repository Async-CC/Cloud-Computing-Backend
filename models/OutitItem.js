function createOutfitItemDb (sequelize, DataTypes) {
    const OutfitItem = sequelize.define('OutfitItem', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        outfitId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Outfits',
            key: 'id',
          },
          allowNull: false,
        },
      },
      {
        tableName: "OutfitItem",
      });

      return OutfitItem;
}

module.exports = createOutfitItemDb;