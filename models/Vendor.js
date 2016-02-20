module.exports = function ( sequelize, DataTypes ) {
  var Vendor = sequelize.define( "Vendor", {
    name : {
      type: DataTypes.STRING( 255 ),
      allowNull: false,
      unique: true
    },

    password : {
      type: DataTypes.STRING( 255 ),
      allowNull: false,
      unique: false
    },
    phone : {
      type: DataTypes.STRING( 20 ),
      allowNull: false,
      unique: false
    },
    email : {
      type: DataTypes.STRING( 255 ),
      allowNull: false,
      unique: true
    },
    website : {
      type: DataTypes.STRING( 255 ),
      allowNull: true,
      unique: true
    },
    description : {
      type: DataTypes.STRING( 500 ),
      allowNull: false,
      unique: false
    },
    company_pic : {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    classMethods: {
      associate: function ( models ) {
        Vendor.hasMany( models.Product );
        Vendor.belongsTo( models.Event );
      }
    }
  });
  return Vendor;
};