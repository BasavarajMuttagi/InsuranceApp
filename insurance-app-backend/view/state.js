const DatabaseMongoose = require("../repository/DB")
const DB = new DatabaseMongoose()

class State{
    constructor(state){
        this.state = state
        this.cities = []
        this.isActive = true
    }

  static async createState(state){
        const newstate = new State(state)
        const newstateRecord = await DB.createState(newstate)
        return newstateRecord
   }

  static async addStateToCountry(countryObjectId,stateObjectId){
    const newAddStateToCountry = await DB.addStateToCountry(countryObjectId,stateObjectId)
    return newAddStateToCountry
 }
 
 static async getOneState(stateObjectId){
  const getOneStateRecord = await DB.getOneState(stateObjectId)
  return getOneStateRecord
}

static async getAllStates(){
  const getOneStateRecord = await DB.getAllStates()
  return getOneStateRecord
}

static async findOneState(state){
  const Record = await DB.findOneState(state)
  return Record
}

}

module.exports = State