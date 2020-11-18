module.exports = {
  host: 'localhost',
  username: 'pguser',
  password: 'pgpassword',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define:{
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}