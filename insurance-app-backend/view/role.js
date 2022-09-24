const DatabaseMongoose = require('../repository/DB');
const DB = new DatabaseMongoose()

class Role{
    constructor(role){
        this.role = role
        this.isActive = true
    }

    static async createRole(role){
        const newrole = new Role(role)
        const newroleRecord = await DB.createRole(newrole)
        return newroleRecord
    }
   
    static async getAllRoles(){
        const roleRecords = await DB.getAllRoles()
        return roleRecords
    }

    static async toggleSwitchRole(roleObjectId){
        const roleRecords = await DB.toggleSwitchRole(planTypeId,currentState)
        return roleRecords
    }
}


module.exports = Role

