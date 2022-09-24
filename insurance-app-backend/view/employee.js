const uuid = require('uuid');
const Credential = require('./credential');
const DatabaseMongoose = require('../repository/DB');
const Helper = require('./Helper');
const DB = new DatabaseMongoose()

class Employee{
    constructor(role,firstName,lastName,DOB,age,credential,phone,email,state,country,address,city){
        this.employeeId = uuid.v4()
        this.role = role
        this.firstName = firstName
        this.lastName = lastName
        this.credential = credential
        this.DOB = DOB
        this.age = age
        this.city = city
        this.state = state
        this.country = country
        this.phone = phone
        this.email = email
        this.address = address
        this.isActive = true
    }

    static async  createAdmin(){
        const newCredentialRecord = await Credential.createCredential('Basu2000','Basu@2000')
        const newEmployee =  new Employee('admin','Basavaraj','M','24-08-2000','22',newCredentialRecord._id,7676791722,'basavaraj2770@gmail.com','KAR','IN','Keerti Nagar BIJAPUR')
        const newEmployeeRecord = await DB.createEmployee(newEmployee)
    }

    static async createEmployee(role,firstName,lastName,DOB,age,userName,password,phone,email,state,country,address,city){
        console.log(role,firstName,lastName,DOB,age,userName,password,phone,email,state,country,address,city);
        const newCredentialRecord = await Credential.createCredential(userName,password)
        const newEmployee = new Employee(role,firstName,lastName,DOB,age,newCredentialRecord._id,phone,email,state,country,address,city)
        console.log(newEmployee);
        const newEmployeeRecord = await DB.createEmployee(newEmployee)
        return newEmployeeRecord
    }
    static async getAllEmployees(){
        const AllEmployeesRecord = await DB.getAllEmployees()
        return AllEmployeesRecord
    }
    static async getOneEmployee(employeeObjectId){
        const OneEmployeesRecord = await DB.getOneEmployee(employeeObjectId)
        return OneEmployeesRecord
    }
    static async updateOneEmployee(employeeObjectId,property,value){
        const OneEmployeesRecord = await DB.updateEmployee(employeeObjectId,property,value)
        return OneEmployeesRecord
    }

    static async changePassword(userName,oldPassword,newPassword,confirmPassword){
        const user  = await DB.findUserInCollection(userName)
        const credentialObjectId = user.credential._id
        console.log(credentialObjectId + "credentialObjectId");
        const  hashedconfirmPassword = await Helper.getHashPassword(confirmPassword)
        const OneAdminRecord = await DB.changePassword(credentialObjectId,hashedconfirmPassword)
        return OneAdminRecord
    }

    static async getOneEmployeeUsingUserName(userName){
        const currentUser = await DB.findUserInCollection(userName)
        const OneEmployeesRecord = await DB.getOneEmployee(currentUser._id)
        return OneEmployeesRecord
    }
    static async updateOneEmployeeUsingUserName(userName,property,value){
        const currentUser = await DB.findUserInCollection(userName)
        const OneEmployeesRecord = await DB.updateEmployee(currentUser._id,property,value)
        return OneEmployeesRecord
    }
}

module.exports = Employee