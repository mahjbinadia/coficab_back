module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "09946789",
    DB: "cofiCabdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };