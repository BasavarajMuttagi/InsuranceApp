const DatabaseMongoose = require("../repository/DB")
const DB = new DatabaseMongoose()
class Plan{
    constructor(interestRate,planType,planId,planName,planImage,planDescription,policyTermMin,policyTermMax,minAge,maxAge,minInvestment,maxInvestment,agentCommissionForReg,agentCommissionForImt){
        this.planType = planType
        this.planId = planId
        this.planName = planName
        this.planImage = planImage
        this.planDescription = planDescription
        this.policyTermMin = policyTermMin
        this.policyTermMax = policyTermMax
        this.minAge = minAge
        this.maxAge = maxAge
        this.minInvestment = minInvestment
        this.maxInvestment = maxInvestment
        this.agentCommissionForReg = agentCommissionForReg
        this.agentCommissionForImt = agentCommissionForImt
        this.documents  = []
        this.isActive = true
        this.interestRate = interestRate
    }

    static async createPlan(interestRate,planType,planId,planName,planImage,planDescription,policyTermMin,policyTermMax,minAge,maxAge,minInvestment,maxInvestment,agentCommissionForReg,agentCommissionForImt){
    
        const newPlanObject  = new Plan(interestRate,planType,planId,planName,planImage,planDescription,policyTermMin,policyTermMax,minAge,maxAge,minInvestment,maxInvestment,agentCommissionForReg,agentCommissionForImt)
        const newPlanObjectRecord = await DB.createPlan(newPlanObject)
        return newPlanObjectRecord
    }

    static async getAllPlans(){
        const PlanRecords = await DB.getAllPlans()
        return PlanRecords
    }
    
    static async getOnePlan(planId){
        const PlanRecords = await DB.getOnePlan(planId)
        return PlanRecords
    }
    static async toggleSwitch(planId,currentState){
        const PlanRecords = await DB.toggleSwitchPlan(planId,currentState)
        return PlanRecords
    }
    static async updatePlanProperties(planId,property,value){
        const PlanRecords = await DB.updatePlanProperties(planId,property,value)
        return PlanRecords
    }

    static async findOnePlan(planName){
        const PlanRecords = await DB.findOnePlan(planName)
        return PlanRecords
    }

}

module.exports = Plan