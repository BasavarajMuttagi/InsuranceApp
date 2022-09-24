const DatabaseMongoose = require("../repository/DB")
const DB = new DatabaseMongoose()

class PlanType{
    constructor(plantype){
        this.plantype = plantype
        this.plans = []
        this.isActive = true
    }
    static async createPlanType(plantype){
      const  newPlanType = new PlanType(plantype)
      const newPlanTypeRecord = await DB.createPlanType(newPlanType)
      return newPlanTypeRecord
    }

    static async getAllPlanType(){
        const PlanTypeRecords = await DB.getAllPlanTypes()
        return PlanTypeRecords
    }
    static async getOnePlanType(planTypeObjectId){
        const PlanTypeRecords = await DB.getOnePlanType(planTypeObjectId)
        return PlanTypeRecords
    }

    static async findOnePlanType(planType){
        const PlanTypeRecords = await DB.findOnePlanType(planType)
        return PlanTypeRecords
    }

    static async addPlanToPlanType(planTypeObjectId,planObjectId){
        const PlanTypeRecords = await DB.addPlanToPlanType(planTypeObjectId,planObjectId)
        return PlanTypeRecords
    }
    static async toggleSwitch(planTypeId,currentState){
        const PlanTypeRecords = await DB.toggleSwitch(planTypeId,currentState)
        return PlanTypeRecords
    }
    static async updatePlanType(planTypeId,property,value){
        const PlanTypeRecords = await DB.updatePlanType(planTypeId,property,value)
        return PlanTypeRecords
    }
}

module.exports = PlanType