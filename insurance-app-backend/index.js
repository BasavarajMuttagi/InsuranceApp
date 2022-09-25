const express =  require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const nodemailer = require('nodemailer');
const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())




const Customer = require('./view/customer')
const Country = require('./view/country')
const State = require('./view/state')
const City = require('./view/city')
const PlanType = require('./view/plantype')
const Plan = require('./view/plan')
const Role = require('./view/role')
const Employee = require('./view/employee')
const Agent = require('./view/agent')
const Tax = require('./view/tax')

const Joi = require('joi')
const JWTPayload = require('./view/authentication')
const Helper = require('./view/Helper')
const Admin = require('./view/admin');
const Query = require('./view/query');
const Policy = require('./view/policy');
const Transaction = require('./view/transaction')


//done
app.post("/api/createCountry",async(req,resp)=>{
        const schema = Joi.object({
            country:Joi.string().min(3).required()
        })

        const {error,val} = schema.validate(req.body)
        if(error){
            resp.status(400).send(error.details[0].message);
            return;
        }

        const {country} = req.body
        const record = Country.findOneCountry(country)
        if(record !== false){
            resp.status(400).send('country Already Exists')
            return
        }
        const countryRecord = await Country.createCountry(country)
        console.log(countryRecord);
        resp.status(201).send(countryRecord)
        return
})

//done
app.post("/api/createState",async(req,resp)=>{
    const schema = Joi.object({
        state:Joi.string().min(3).required()
    })

    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }

    const {countryId,state} = req.body
    const record = State.findOneState(state)
    if(record !== false){
        resp.status(400).send('State Already Exists')
        return
    }

    const newStateRecord = await State.createState(state)
    const newStateAddedToCountryRecord  = await State.addStateToCountry(countryId,newStateRecord._id)
    resp.status(200).send(newStateAddedToCountryRecord)
    return
})


//done
app.post("/api/createCity",async(req,resp)=>{
    const schema = Joi.object({
        city:Joi.string().min(3).required()
    })

    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }

    const {stateId,city} = req.body
    const record = await City.findOneCity(city)
    if(record !== false){
        resp.status(400).send('City Already Exists')
        return
    }

    const newCityRecord = await City.createCity(city)
    const newCityAddedToStateRecord  = await City.addCityToState(stateId,newCityRecord._id)
    resp.status(200).send(newCityAddedToStateRecord)
    return
})


app.get("/api/getallcountries",async(req,resp)=>{
    const allCountriesRecord = await Country.getAllCountries()
    resp.status(200).send(allCountriesRecord)
    return
})


app.post("/api/getonecountry",async(req,resp)=>{
    const schema = Joi.object({
        countryId:Joi.string().required()
    })

    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }

    const {countryId} = req.body
    const oneCountryRecord = await Country.getOneCountry(countryId)
    if(oneCountryRecord === false){
        resp.status(400).send('Country Not Found!')
        return
    }
    resp.status(200).send(oneCountryRecord.states)
    return
})


app.post("/api/createplantype",async(req,resp)=>{
    const schema = Joi.object({
        plantype:Joi.string().required()
    })

    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }

    const {plantype} = req.body
    const Record = await PlanType.findOnePlanType(plantype)
    if(Record !== false){
        resp.status(400).send('PlanType Exists!')
        return
    }
    const planTypeRecord = await PlanType.createPlanType(plantype)
   
    resp.status(200).send(planTypeRecord)
    return
})


app.get("/api/getallplantypes",async(req,resp)=>{
    const allPlanTypesRecord = await PlanType.getAllPlanType()
    resp.status(200).send(allPlanTypesRecord)
    return
})


app.get("/api/getallplans",async(req,resp)=>{
    const allPlanTypesRecord = await Plan.getAllPlans()
    resp.status(200).send(allPlanTypesRecord)
    return
})

app.post("/api/getoneplan",async(req,resp)=>{
    const {planId} = req.body
    const onePlanRecord = await Plan.getOnePlan(planId)
    if(onePlanRecord === false){
        resp.status(400).send('Plan Not Found!')
        return
    }
    resp.status(200).send(onePlanRecord)
    return
})


app.post("/api/getoneadmin",async(req,resp)=>{
    const {userName} = req.body
    const oneAdminRecord = await Admin.getOneAdmin(userName)
    if(oneAdminRecord === false){
        resp.status(400).send('admin Not Found!')
        return
    }
    resp.status(200).send(oneAdminRecord)
    return
})

app.get("/api/getalladmins",async(req,resp)=>{
    const allAdminsRecord = await Admin.getAllAdmins()
    resp.status(200).send(allAdminsRecord)
    return
})

app.post("/api/getoneplantype",async(req,resp)=>{
    const schema = Joi.object({
        planTypeId:Joi.string().min(3).required()
    })

    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }

    const {planTypeId} = req.body
    const onePlanTypeRecord = await PlanType.getOnePlanType(planTypeId)
    if(onePlanTypeRecord === false){
        resp.status(400).send('plantype Not Found!')
        return
    }
    resp.status(200).send(onePlanTypeRecord)
    return

})


app.post("/api/getoneemployee",async(req,resp)=>{
    const schema = Joi.object({
        employeeId:Joi.string().min(3).required()
    })

    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }
    const {employeeId} = req.body
    const oneEmployeeRecord = await Employee.getOneEmployee(employeeId)
    if(oneEmployeeRecord === false){
        resp.status(400).send('employee Not Found!')
        return
    }
    resp.status(200).send(oneEmployeeRecord)
    return
})

app.post("/api/getoneemployeusingusername",async(req,resp)=>{
    const schema = Joi.object({
        userName:Joi.string().min(3).required()
    })
     console.log(req.body);

    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }

    const {userName} = req.body
    const oneEmployeeRecord = await Employee.getOneEmployeeUsingUserName(userName)
    if(oneEmployeeRecord === false){
        resp.status(400).send('employee Not Found!')
        return
    }
    resp.status(200).send(oneEmployeeRecord)
    return
})

app.post("/api/getonecustomer",async(req,resp)=>{
    const schema = Joi.object({
        userName:Joi.string().min(3).required()
    })

    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }

    const {userName} = req.body
    const oneCustomerRecord = await Customer.getOneCustomer(userName)
    if(oneCustomerRecord === false){
        resp.status(400).send('Customer Not Found!')
        return
    }
    resp.status(200).send(oneCustomerRecord)
    return
})

app.post("/api/getoneagent",async(req,resp)=>{
    const schema = Joi.object({
        agentId:Joi.string().min(3).required()
    })

    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }

    const {agentId} = req.body
    const oneAgentRecord = await Agent.getOneAgent(agentId)
    if(oneAgentRecord === false){
        resp.status(400).send('agent Not Found!')
        return
    }

    resp.status(200).send(oneAgentRecord)
    return
})

app.post("/api/getoneagentusingusername",async(req,resp)=>{
    const schema = Joi.object({
        userName:Joi.string().min(3).required()
    })

    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }
    const {userName} = req.body
    const oneAgentRecord = await Agent.getOneAgentUsingUserName(userName)
    if(oneAgentRecord === false){
        resp.status(400).send('agent Not Found!')
        return
    }

    resp.status(200).send(oneAgentRecord)
    return
})

app.post("/api/getonestate",async(req,resp)=>{
    const schema = Joi.object({
        stateId:Joi.string().min(3).required()
    })

    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }

    const {stateId} = req.body
    const oneStateRecord = await State.getOneState(stateId)
    if(oneStateRecord == false){
        resp.status(400).send('State Not Found!')
        return
    }

    resp.status(200).send(oneStateRecord[0].cities)
    return
})

app.post("/api/createplan",async(req,resp)=>{


    const {interestRate,planType,planId,planName,planImage,planDescription,policyTermMin,policyTermMax,minAge,maxAge,minInvestment,maxInvestment,agentCommissionForReg,agentCommissionForImt}= req.body
    const record = await Plan.findOnePlan(planName)
    if(record !== false){
        resp.status(400).send(false)
        return
    }
    const planRecord = await Plan.createPlan(interestRate,planType,planId,planName,planImage,planDescription,policyTermMin,policyTermMax,minAge,maxAge,minInvestment,maxInvestment,agentCommissionForReg,agentCommissionForImt)
    const planTypeRecord = await PlanType.addPlanToPlanType(planType,planRecord._id)
    resp.status(200).send(planTypeRecord)
    return
})

app.put("/api/toggleSwitch",async(req,resp)=>{
    const {planTypeId,currentState} = req.body
    const toggleSwitch = await PlanType.toggleSwitch(planTypeId,!currentState)
    resp.status(200).send(toggleSwitch)
    return
})

app.put("/api/toggleSwitchPlan",async(req,resp)=>{
    const {planId,currentState} = req.body
    const toggleSwitch = await Plan.toggleSwitch(planId,!currentState)
    resp.status(200).send(toggleSwitch)
    return
})

app.put("/api/toggleSwitchRole",async(req,resp)=>{
    const {roleObjectId,currentState} = req.body
    const toggleSwitchRole = await Role.toggleSwitchRole(roleObjectId,!currentState)
    resp.status(200).send(toggleSwitchRole)
    return
})

app.put("/api/toggleSwitchCustomer",async(req,resp)=>{
    const {customerId,currentState} = req.body
    const toggleSwitchCustomer = await Customer.toggleSwitchCustomer(customerId,!currentState)
    resp.status(200).send(toggleSwitchCustomer)
    return
})

app.put("/api/updateplan",async(req,resp)=>{
    const {planId,property,value} = req.body
    console.log(planId,property,value);
    const updatedRecord = await Plan.updatePlanProperties(planId,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})

app.put("/api/updatepolicy",async(req,resp)=>{
    const {policyObjectId,property,value} = req.body
    const updatedRecord = await Policy.updatePolicy(policyObjectId,property,value)
    resp.status(200).send(updatedRecord)
    return
})

app.put("/api/updateplantype",async(req,resp)=>{
    const {planTypeId,property,value} = req.body
    console.log(planTypeId,property,value);
    const updatedRecord = await PlanType.updatePlanType(planTypeId,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})

app.put("/api/updateagent",async(req,resp)=>{
    const {agentId,property,value} = req.body
    console.log(agentId,property,value);
    const updatedRecord = await Agent.updateOneAgent(agentId,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})
app.put("/api/updateagentusingusername",async(req,resp)=>{
    const {userName,property,value} = req.body
    console.log(userName,property,value);
    const updatedRecord = await Agent.updateOneAgentUsingUserName(userName,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})

app.put("/api/updateagentpushpayment",async(req,resp)=>{
    const {userName,property,value} = req.body
    console.log(userName,property,value);
    const updatedRecord = await Agent.updateOneAgentPushPayment(userName,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})

app.put("/api/updateemployeeusingusername",async(req,resp)=>{
    const {userName,property,value} = req.body
    console.log(userName,property,value);
    const updatedRecord = await Employee.updateOneEmployeeUsingUserName(userName,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})


app.put("/api/updateemployee",async(req,resp)=>{
    const {employeeId,property,value} = req.body
    console.log(employeeId,property,value);
    const updatedRecord = await Employee.updateOneEmployee(employeeId,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})

app.put("/api/updateadmin",async(req,resp)=>{
    const {adminId,property,value} = req.body
    console.log(adminId,property,value);
    const updatedRecord = await Admin.updateOneAdmin(adminId,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})


app.post("/api/updateadminpush",async(req,resp)=>{
    const {adminId,property,value} = req.body
    console.log(adminId,property,value);
    const updatedRecord = await Admin.updateAdminPush(adminId,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})

app.put("/api/updatecustomer",async(req,resp)=>{
    const {userName,property,value} = req.body
    console.log(userName,property,value);
    const updatedRecord = await Customer.UpdateOneCustomer(userName,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})

app.put("/api/updatecustomerpayment",async(req,resp)=>{
    const {userName,property,value} = req.body
    console.log(userName,property,value);
    const updatedRecord = await Customer.UpdateOneCustomerPayment(userName,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})

app.put("/api/updatetransaction",async(req,resp)=>{
    const {transactionObjectId,property,value} = req.body
    console.log(transactionObjectId,property,value);
    const updatedRecord = await Transaction.updateTransaction(transactionObjectId,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})



app.put("/api/addpolicy",async(req,resp)=>{
    const {userName,property,value} = req.body
    console.log(userName,property,value);
    const updatedRecord = await Customer.UpdateOneCustomerPolicy(userName,property,value)
    console.log(updatedRecord);
    resp.status(200).send(updatedRecord)
    return
})

app.put("/api/changepassword",async(req,resp)=>{

    const schema = Joi.object({
        userName:Joi.string().min(3).max(25).required(),
        password:Joi.string().min(3).required(),
        newPassword :Joi.string().min(3).required(),
        confirmPassword:Joi.string().min(3).required(),
    })
    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }
    const {userName,oldPassword,newPassword,confirmPassword} = req.body
    console.log(userName,oldPassword,newPassword,confirmPassword);
    if(newPassword!==confirmPassword){
        resp.status(200).send("Please Match Passwords")
        return  
    }
    const updatedRecord = await Admin.changePassword(userName,oldPassword,newPassword,confirmPassword)
    console.log(updatedRecord);
    resp.status(200).send('Password Updated ')
    return
})

// app.put("/api/changepasswordagent",async(req,resp)=>{
//     const {userName,oldPassword,newPassword,confirmPassword} = req.body
//     console.log(userName,oldPassword,newPassword,confirmPassword);
//     if(newPassword!==confirmPassword){
//         resp.status(200).send("Please Match Passwords")
//         return  
//     }
//     const updatedRecord = await Admin.changePassword(userName,oldPassword,newPassword,confirmPassword)
//     console.log(updatedRecord);
//     resp.status(200).send('Password Updated ')
//     return
// })

// app.put("/api/changepasswordemployee",async(req,resp)=>{
//     const {userName,oldPassword,newPassword,confirmPassword} = req.body
//     console.log(userName,oldPassword,newPassword,confirmPassword);
//     if(newPassword!==confirmPassword){
//         resp.status(200).send("Please Match Passwords")
//         return  
//     }
//     const updatedRecord = await Admin.changePassword(userName,oldPassword,newPassword,confirmPassword)
//     console.log(updatedRecord);
//     resp.status(200).send('Password Updated ')
//     return
// })
// app.put("/api/changepasswordcustomer",async(req,resp)=>{
//     const {userName,oldPassword,newPassword,confirmPassword} = req.body
//     console.log(userName,oldPassword,newPassword,confirmPassword);
//     if(newPassword!==confirmPassword){
//         resp.status(200).send("Please Match Passwords")
//         return  
//     }
//     const updatedRecord = await Customer.changePassword(userName,oldPassword,newPassword,confirmPassword)
//     console.log(updatedRecord);
//     resp.status(200).send('Password Updated ')
//     return
// })


app.post("/api/createRole",async(req,resp)=>{
    const {role} = req.body
    const roleRecord = await Role.createRole(role)
    console.log(roleRecord);
    resp.status(201).send(roleRecord)
    return
})



app.get("/api/getallroles",async(req,resp)=>{
    const allRolesRecord = await Role.getAllRoles()
    resp.status(200).send(allRolesRecord)
    return
})


app.post("/api/createemployee",async(req,resp)=>{
    const schema = Joi.object({
      
        role:Joi.string().min(3).required(),
        firstName:Joi.string().min(3).max(20).required(),
        lastName:Joi.string().min(3).max(20).required(),
        DOB:Joi.string().min(3).required(),
        userName:Joi.string().min(3).max(25).required(),
        password:Joi.string().min(3).required(),
        phone:Joi.number().min(10).required(),
        email:Joi.string().min(8).required(),
        state:Joi.string().min(3).max(16).required(),
        country:Joi.string().required(),
        address:Joi.string().min(3).max(25).required(),
        city:Joi.string().required()
  
    })
    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }
    const {role,firstName,lastName,DOB,userName,password,phone,email,state,country,address,city} = req.body
    console.log(req.body);
    const employeeRecord = await Employee.createEmployee(role,firstName,lastName,DOB,10,userName,password,phone,email,state,country,address,city)
    console.log(employeeRecord);
    resp.status(201).send('Employee Created!')
    return
})

app.post("/api/createagent",async(req,resp)=>{
    const schema = Joi.object({
        role:Joi.string().min(3).required(),
        firstName:Joi.string().min(3).max(20).required(),
        lastName:Joi.string().min(3).max(20).required(),
        DOB:Joi.string().min(3).required(),
        userName:Joi.string().min(3).max(25).required(),
        password:Joi.string().min(3).required(),
        phone:Joi.number().min(10).required(),
        email:Joi.string().min(8).required(),
        state:Joi.string().min(3).max(16).required(),
        country:Joi.string().required(),
        address:Joi.string().min(3).max(25).required(),
        city:Joi.string().required()
  
    })
    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }
    const {role,firstName,lastName,DOB,userName,password,phone,email,state,country,address,city} = req.body
    console.log(req.body);
    const agentRecord = await Agent.createAgent(role,firstName,lastName,DOB,10,userName,password,phone,email,state,country,address,city)
    console.log(agentRecord);
    resp.status(201).send('Agent Created')
    return
})

app.get("/api/getallemployees",async(req,resp)=>{
    const allEmployeesRecord = await Employee.getAllEmployees()
    resp.status(200).send(allEmployeesRecord)
    return
})

app.get("/api/getallagents",async(req,resp)=>{
    const allAgentsRecord = await Agent.getAllAgents()
    resp.status(200).send(allAgentsRecord)
    return
})

app.get("/api/getallqueries",async(req,resp)=>{
    const allQueriesRecord = await Query.getAllQueries()
    console.log(allQueriesRecord);
    resp.status(200).send(allQueriesRecord)
    return
})

app.get("/api/getadmin",async(req,resp)=>{
    const allEmployeesRecord = await Admin.getAllAdmins()
    resp.status(200).send(allEmployeesRecord)
    return
})

app.post("/api/createcustomer",async(req,resp)=>{
    const schema = Joi.object({
        agentUserName:Joi.string().min(3).allow(''),
        role:Joi.string().min(3).required(),
        firstName:Joi.string().min(3).max(20).required(),
        lastName:Joi.string().min(3).max(20).required(),
        DOB:Joi.string().min(3).required(),
        userName:Joi.string().min(3).max(25).required(),
        password:Joi.string().min(3).required(),
        phone:Joi.number().min(10).required(),
        email:Joi.string().min(8).required(),
        state:Joi.string().min(3).max(16).required(),
        country:Joi.string().required(),
        address:Joi.string().min(3).max(25).required(),
        city:Joi.string().required()
  
    })
    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }
    const {agentUserName,role,firstName,lastName,DOB,userName,password,phone,email,state,country,address,city} = req.body
    console.log(req.body);
    const customerRecord = await Customer.createCustomer(agentUserName,role,firstName,lastName,DOB,10,userName,password,phone,email,state,country,address,city)
    console.log(customerRecord);
    resp.status(201).send('created Account Successfully!')
    return
})


app.get("/api/getallcustomers",async(req,resp)=>{
    const allCustomersRecord = await Customer.getAllCustomers()
    resp.status(200).send(allCustomersRecord)
    return
})

app.post("/api/login",async(req,resp)=>{
    const schema = Joi.object({
        userName:Joi.string().min(3).max(25).required(),
        password:Joi.string().min(3).required(),
    })
    const {error,val} = schema.validate(req.body)
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }
    const {userName,password}= req.body
    console.log(userName,password + "the body");
    const record = await Helper.findCustomerInCollection(userName)
    console.log(record + 'found user');

        if(record === false){
            resp.status(400).send("Not a User")
            return 
        }
console.log(record + 'later');
    const passwordsuccess = await JWTPayload.comparePassword(password,record.credential.password)
   
    if(passwordsuccess == false)
    {
        resp.status(404).send("Wrong Credentials")
        return;
    }
 
    const newPayload = new JWTPayload(record)
    const newToken = newPayload.createToken();
    resp.cookie("myToken",newToken)
    console.log("Logged in  Successfully");
    console.log(record);
    resp.status(200).send(record.role.role);
    return
})


app.post("/api/logout",async(req,resp)=>{
    resp.cookie("myToken",'none',{
        expires: new Date(Date.now()+ 0*1000),
    })
    resp.status(200).send("User Logged out Successfully");
})


app.post("/api/sendmail",async(req,resp)=>{
    const {from,password,to,subject,description,attachment} = req.body
    console.log(req.body);
    let mailOptions ;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: from,
          pass: password
        }
      });

      if(attachment === ''){
      mailOptions   = {
            from: from,
            to: to,
            subject: subject,
            html: description
          };
      }
      else{
       mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: description,
        attachments: [{
          path: attachment
      }]     
      };
}
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          resp.status(400).send(error)
          return
        } else {
          console.log('Email sent: ' + info.response);
          resp.status(201).send(info.response)
          return
        }
      });


})


app.post("/api/createquery",async(req,resp)=>{
        const {role,userName,message} = req.body
        console.log(req.body);
        const queryRecord = await Query.createQuery(role,userName,message)
        resp.status(200).send(queryRecord);
        return 
})

// app.post("/api/replyquery",async(req,resp)=>{
//     const {userName,queryObjectId,query} = req.body
//     console.log( req.body);
//     const currentUser = await Helper.findCustomerInCollection(userName)
//     const queryRecord = await Query.createQuery(currentUser._id,query)
//     console.log(queryRecord._id);
//     const replyRecord = await Query.AddReplyQuery(queryObjectId,queryRecord._id)
//     console.log(replyRecord);
//     resp.status(200).send(replyRecord);
//     return
// })

app.post("/api/createpolicy",async(req,resp)=>{

    const {DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,installmentPaymentDates,transactionObjectId,planType,planName,requestSent} = req.body
   
    const currentUser = await Helper.findCustomerInCollection(customer)
    if(currentUser === false){
        resp.status(400).send("Not a User")
        return 
    }

    const record = Policy.findPolicyByUserName(customer)
    if(record !== false){
        resp.status(400).send("Policy Already Bought")
        return 
    }

    const policyRecord = await Policy.createPolicy(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,installmentPaymentDates,transactionObjectId,planType,planName,requestSent)
    const pushPolicy = await Customer.UpdateOneCustomerPolicy(customer,'policies',policyRecord._id)
    resp.status(200).send(pushPolicy);
    return 
})

app.post("/api/getonepolicy",async(req,resp)=>{
    const {policyObjectId} = req.body
    const policyRecord = await Policy.getOnePolicy(policyObjectId)
    resp.status(200).send(policyRecord);
    return 
})
app.get("/api/getallpolicies",async(req,resp)=>{
    console.log('Get Policies here');
    const policyRecord = await Policy.getAllPolicies()
    resp.status(200).send(policyRecord);
    return 
})

app.get("/api/gettax",async(req,resp)=>{
    const TaxRecord = await Tax.getTax()
    resp.status(200).send(TaxRecord);
    return 
})
app.post("/api/createtax",async(req,resp)=>{
    const {tax} = req.body
    const TaxRecord = await Tax.createTax(tax)
    resp.status(200).send(TaxRecord);
    return 
})

app.put("/api/updatetax",async(req,resp)=>{
    const TaxRecord = await Tax.updateTax()
    resp.status(200).send(TaxRecord);
    return 
})
app.get("/api/getalltransactions",async(req,resp)=>{
    const TransactionRecord = await Transaction.getallTransactions()
    resp.status(200).send(TransactionRecord);
    return 
})

app.post("/api/getparticulartransaction",async(req,resp)=>{
    const {property,value} = req.body
   
    const TransactionRecord = await Transaction.getparticularTransaction(property,value)
    resp.status(200).send(TransactionRecord);
    return 
})

app.post("/api/createtransaction",async(req,resp)=>{
    const {DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,planName,planType,agent,agentCommissionForImt,agentCommissionForReg,comissionAmount,premiumType,comissionAmountPaymentStatus,taxAmount,paymentMode,requestSent} = req.body
  
    const TransactionRecord = await Transaction.createTransaction(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,planName,planType,agent,agentCommissionForImt,agentCommissionForReg,comissionAmount,premiumType,comissionAmountPaymentStatus,taxAmount,paymentMode,requestSent)

    resp.status(200).send(TransactionRecord);
    return 
})

app.listen(8888,()=>{
    console.log('Listening At Port 8888');
    // Admin.createAdmin('6328a1e4dbfe780c9819e3cc','Basavaraj','M','24-08-2000','22','basu1234','basu@2000',7676791722,'basavaraj2770@gmail.com','KAR','IN','Keerti Nagar BIJAPUR','BIJAPUR')
})

