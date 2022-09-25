import {Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import AddCountry from './components/AdminDashBoard/AddCountry';
import AddStateToCountry from './components/AdminDashBoard/AddStateToCountry';
import AddCityToState from './components/AdminDashBoard/AddCityToState';
import CreatePlan from './components/AdminDashBoard/CreatePlan';
import CreatePlanType from './components/AdminDashBoard/CreatePlanType';
import ViewPlanType from './components/AdminDashBoard/ViewPlanType';
import ViewPlans from './components/AdminDashBoard/ViewPlans';
import Home from './components/Home/Home';
import Admin from './components/AdminDashBoard/Admin';
import Employee from './components/EmployeeDashBoard/Employee';
import CreateEmployee from './components/AdminDashBoard/CreateEmployee';
import CreateRole from './components/AdminDashBoard/createRole';
import Test from './components/AdminDashBoard/DropDown';
import Settings from './components/AdminDashBoard/Settings';
import SinglTypeRenderer from './components/AdminDashBoard/SingleTypeRenderer';
import CreateAgent from './components/AdminDashBoard/CreateAgent';
import ViewAgents from './components/AdminDashBoard/ViewAgents';
import ViewEmployees from './components/AdminDashBoard/ViewEmployees';
import Register from './components/Home/Register';
import ViewCustomers from './components/AdminDashBoard/ViewCustomers';
import Login from './components/Home/Login';
import Customer from './components/CustomerDashBoard/Customer';
import Agent from './components/AgentDashBoard/Agent';
import Cards from './components/AdminDashBoard/CardRenderer';
import CardMenuAgent from './components/AdminDashBoard/CardMenuAgent';
import CardMenuCustomer from './components/AdminDashBoard/CardMenuCustomer';
import CardMenuEmployee from './components/AdminDashBoard/CardMenuEmployee';
import CardMenuInsurancePlans from './components/AdminDashBoard/CardMenuInsurancePlans';
import CardMenuSettings from './components/AdminDashBoard/CardMenuSettings';
import EditPlan from './components/AdminDashBoard/EditPlan';
import EditPlanType from './components/AdminDashBoard/EditPlanType';
import EditAgent from './components/AdminDashBoard/EditAgent';
import EditEmployee from './components/AdminDashBoard/EditEmployee';
import CustomerQueries from './components/AdminDashBoard/CustomerQueries';
import MyAccount from './components/AdminDashBoard/MyAccount';
import EditAdmin from './components/AdminDashBoard/EditAdmin';
import ViewAdmin from './components/AdminDashBoard/Profile';
import ChangePassWord from './components/AdminDashBoard/ChangePassword';
import CardMenuAdmin from './components/AdminDashBoard/CardMenuAdmin';
import MarketingAgent from './components/AgentDashBoard/MarketingAgent';
import EditCustomer from './components/CustomerDashBoard/EditCustomer';
import ViewCustomer from './components/CustomerDashBoard/Profile';
import CreateQuery from './components/CustomerDashBoard/CreateQuery';
import Reply from './components/AdminDashBoard/Reply';
import BuyPlan from './components/CustomerDashBoard/BuyPlan';
import MyPolicies from './components/CustomerDashBoard/MyPolicies';
import DetailedViewOfPolicies from './components/CustomerDashBoard/DetailedViewOfPolicies';
import Payment from './components/CustomerDashBoard/Payment';
import WithDrawAmountInAgent from './components/AgentDashBoard/WithDrawAmount';
import ViewPolicyClaimsInAgent from './components/AgentDashBoard/ViewPolicyClaim';
import ViewComissionInAgent from './components/AgentDashBoard/ViewComission';
import ViewPolicyPaymentsInAgent from './components/AgentDashBoard/ViewPolicyPayments';
import ViewComissionWithDrawalInAgent from './components/AgentDashBoard/ViewComissionWithDrawal';
import ViewCustomersInAgent from './components/AgentDashBoard/ViewCustomers';
import AgentProfile from './components/AgentDashBoard/AgentProfile';
import CardMenuMyAccount from './components/AgentDashBoard/CardMenuMyAccount';
import CardMenuMyInsurance from './components/AgentDashBoard/CardMenuMyInsurance';
import CardMenuInsuranceInEmployee from './components/EmployeeDashBoard/CardMenuInsurance';
import CardMenuMyAgentInEmployee from './components/EmployeeDashBoard/CardMenuAgent';
import CardMenuMyAccountInEmployee from './components/EmployeeDashBoard/CardMenuMyAccount';
import EmployeeProfile from './components/EmployeeDashBoard/EmployeeProfile';
import EditEmployeeInEmployee from './components/EmployeeDashBoard/EditEmployee';
import EditAgentInAgent from './components/AgentDashBoard/EditAgent';
import CardMenuCustomerProfile from './components/CustomerDashBoard/CardMenuCustomerProfile';
import CardMenuInsuranceAccountInCustomer from './components/CustomerDashBoard/CardMenuInsuranceAccount';
import CardMenuInsurancePlansInCustomer from './components/CustomerDashBoard/CardMenuInsurancePlansInCustomer';
import CardMenuQueriesInCustomer from './components/CustomerDashBoard/CardMenuQueries';
import UploadDocuments from './components/CustomerDashBoard/UploadDocuments';
import ViewReply from './components/CustomerDashBoard/ViewReply';
import PremiumPayment from './components/CustomerDashBoard/PaymentPremium';
import InsuranceAccountInAgent from './components/AgentDashBoard/InsuranceAccount';
import WithDrawAmountApproval from './components/AdminDashBoard/WithDrawAmountApproval';
import ViewAllAgentCommissions from './components/AdminDashBoard/ViewAllAgentCommissions';
import PaymentReceipt from './components/CustomerDashBoard/PaymentReceipt';
import ChatsInAdmin from './components/chats';
import ChangePassword from './components/CustomerDashBoard/changepassword';
import ViewInsuranceAccountsInAdmin from './components/AdminDashBoard/ViewInsuranceAccounts';
import PolicyClaim from './components/CustomerDashBoard/PolicyClaim';
import PolicyClaimSettlement from './components/AdminDashBoard/PolicyClaimSettlement';




function App() {
  return (
    <Routes>
      <Route exact path='/addcountry' element={<AddCountry/>} />
      <Route exact path='/addstate' element={<AddStateToCountry/>} />
      <Route exact path='/addcity' element={<AddCityToState/>} />
      <Route exact path='/createplan' element={<CreatePlan/>} />
      <Route exact path='/createplantype' element={<CreatePlanType/>} />
      <Route exact path='/viewplantypes' element={<ViewPlanType/>} />
      <Route exact path='/viewplans' element={<ViewPlans/>} />
      <Route exact path='/createemployee' element={<CreateEmployee/>} />
      <Route exact path='/employee' element={<Employee/>} />
      <Route exact path='/admin' element={<Admin/>} />
      <Route exact path='/createrole' element={<CreateRole/>} />
      <Route exact path='/test' element={<Test/>} />
      <Route exact path='/settings' element={<Settings/>} />
      <Route exact path='/singlePlanTypeRender/:plantype' element={<SinglTypeRenderer/>} />
      <Route exact path='/createagent' element={<CreateAgent/>} />
      <Route exact path='/allagents' element={<ViewAgents/>} />
      <Route exact path='/allemployees' element={<ViewEmployees/>} />
      <Route  path='/register'>
        <Route exact path=':agent' element={<Register/>} />
        <Route exact path='' element={<Register/>} />
      </Route>

      <Route exact path='/allcustomers' element={<ViewCustomers/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/customer' element={<Customer/>} />

      <Route exact path='/cards' element={<Cards/>} />
      <Route exact path='/agentmenu' element={<CardMenuAgent/>} />
      <Route exact path='/customermenu' element={<CardMenuCustomer/>} />
      <Route exact path='/employeemenu' element={<CardMenuEmployee/>} />
      <Route exact path='/insuranceplansmenu' element={<CardMenuInsurancePlans/>} />
      <Route exact path='/settingsmenu' element={<CardMenuSettings/>} />
      <Route exact path='/editplan' element={<EditPlan/>} />
      <Route exact path='/editplantype' element={<EditPlanType/>} />
      <Route exact path='/editagent' element={<EditAgent/>} />
      <Route exact path='/editemployee' element={<EditEmployee/>} />
      <Route exact path='/queries' element={<CustomerQueries/>} />   
      <Route exact path='/myaccount' element={<MyAccount/>} />  
      <Route exact path='/editadmin' element={<EditAdmin/>} /> 
      <Route exact path='/profile' element={<ViewAdmin/>} /> 
      <Route exact path='/changepassword' element={<ChangePassWord/>} /> 
      <Route exact path='/adminmenu' element={<CardMenuAdmin/>} />
      <Route exact path='/agent' element={<Agent/>} />
      <Route exact path='/marketing' element={<MarketingAgent/>} />
      <Route exact path='/editcustomer' element={<EditCustomer/>} />
      <Route exact path='/customerprofile' element={<ViewCustomer/>} />
      <Route exact path='/createquery' element={<CreateQuery/>} />
      <Route exact path='/reply' element={<Reply/>} />
      <Route exact path='/buy' element={<BuyPlan/>} />
      <Route exact path='/mypolicies' element={<MyPolicies/>} />
      <Route exact path='/detailedview' element={<DetailedViewOfPolicies/>} />
      <Route exact path='/payment' element={<Payment/>} />

      <Route exact path='/withdrawamount' element={<WithDrawAmountInAgent/>} />
      <Route exact path='/viewpolicypayments' element={<ViewPolicyPaymentsInAgent/>} />
      <Route exact path='/viewpolicyclaims' element={<ViewPolicyClaimsInAgent/>} />
      <Route exact path='/viewcomission' element={<ViewComissionInAgent/>} />
      <Route exact path='/viewcomissionwithdrawal' element={<ViewComissionWithDrawalInAgent/>} />
      <Route exact path='/viewcustomers' element={<ViewCustomersInAgent/>} />
      <Route exact path='/agentprofile' element={<AgentProfile/>} />
      <Route exact path='/myaccountagentmenu' element={<CardMenuMyAccount/>} />
      <Route exact path='/myinsuranceagentmenu' element={<CardMenuMyInsurance/>} />


      <Route exact path='/agentmenuinemployee' element={<CardMenuMyAgentInEmployee/>} />
      <Route exact path='/insuranceemployeemenu' element={<CardMenuInsuranceInEmployee/>} />
      <Route exact path='/myaccountinemployee' element={<CardMenuMyAccountInEmployee/>} />
      
      <Route exact path='/employeeprofile' element={<EmployeeProfile/>} />
      <Route exact path='/editemployeeinemployee' element={<EditEmployeeInEmployee/>} />
      <Route exact path='/editagentinagent' element={<EditAgentInAgent/>} />


      
      <Route exact path='/customerprofilecardmenu' element={<CardMenuCustomerProfile/>} />
      <Route exact path='/insuranceaccountcustomermenu' element={<CardMenuInsuranceAccountInCustomer/>} />
      <Route exact path='/insuranceplanscustomermenu' element={<CardMenuInsurancePlansInCustomer/>} />
      <Route exact path='/customerqueriesmenu' element={<CardMenuQueriesInCustomer/>} />

      
      <Route exact path='/uploaddocuments' element={<UploadDocuments/>} />
      <Route exact path='/viewreply' element={<ViewReply/>} />
      <Route exact path='/premiumpayment' element={<PremiumPayment/>} />
      <Route exact path='/insuranceaccountsinagent' element={<InsuranceAccountInAgent/>} />
      <Route exact path='/commissionapproval' element={<WithDrawAmountApproval/>} />
      <Route exact path='/viewallagentcommissions' element={<ViewAllAgentCommissions/>} /> 
      <Route exact path='/paymentreceipt' element={<PaymentReceipt/>} />
      <Route exact path='/completechat' element={<ChatsInAdmin/>} />
      <Route exact path='/changepassword' element={<ChangePassword/>} />
      <Route exact path='/allinsuranceaccounts' element={<ViewInsuranceAccountsInAdmin/>} />
      <Route exact path='/policyclaim' element={<PolicyClaim/>} />
      <Route exact path='/policyclaimsettlement' element={<PolicyClaimSettlement/>} />
      <Route exact path='/' element={<Home/>} />
    </Routes>
  );
}

export default App;
