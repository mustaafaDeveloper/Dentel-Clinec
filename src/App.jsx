import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Layout from "./components/layout";

import Patient from "./pages/patient/patient";
import Addpatinents from "./pages/patient/addpatinents";
import PatientProfile from "./pages/patient/patientProfile";

import Appoientment from "./pages/appoientment/appoientment";
import AddAppoientmnet from "./pages/appoientment/addAppoientmnet";


import Doctores from "./pages/doctores/doctores";
import Adddoctores from "./pages/doctores/adddoctores";
import Detaildoctores from "./pages/doctores/detaildoctores";

import DentelExamination from "./pages/dentelExamination/dentelExamination";
import AddExamination from "./pages/dentelExamination/addExamination";


import Treatments from "./pages/treatments/treatments";
import AddTreatments from "./pages/treatments/addTreatments";
import DetailTreatment from "./pages/treatments/detailTreatment";


import Medical_Servises from "./pages/medical_Servises/medical_Servises";

import Prescriptions from "./pages/prescriptions/prescriptions";
import DetailPrescriptions from "./pages/prescriptions/detailPrescriptions";

import Billing_payments from "./pages/billing_payments/billing_payments";
import AddFoctor from "./pages/billing_payments/addFoctor";
import AddPayment from "./pages/billing_payments/addPayment";
import DatailFoctor from "./pages/billing_payments/detailFoctor";

import Laboratory from "./pages/laboratory/laboratory";
import CreateOrders from "./pages/laboratory/createOrders";

import Inventory from "./pages/inventory/inventory";
import Products from "./pages/inventory/products";
import Transcriptions from "./pages/inventory/transcriptions";
import Suppliers from "./pages/inventory/suppliers";

import Expenses from "./pages/expenses/expenses";
import Reporets from "./pages/reporets/reporets";
import User_role from "./pages/user_role/user_role";
import Settings from "./pages/settings/settings";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />

          <Route path="/patients" element={<Patient />} />
          <Route path="/patients/create" element={<Addpatinents />} />
          <Route path="/patients/:id" element={<PatientProfile />} />

          <Route path="/appoientment" element={<Appoientment />} />
          <Route path="/appoientment/create" element={<AddAppoientmnet />} />


          <Route path="/doctores" element={<Doctores />} />
          <Route path="/doctores/create" element={<Adddoctores />} />
          <Route path="/doctores/:id" element={<Detaildoctores />} />


          <Route path="/examinations" element={<DentelExamination />} />
          <Route path="/examinations/create" element={<AddExamination />} />


          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/create" element={<AddTreatments />} />
          <Route path="/treatments/:id" element={<DetailTreatment />} />


          <Route path="/services" element={<Medical_Servises />} />

          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/prescriptions/:id" element={<DetailPrescriptions />} />


          <Route path="/billing" element={<Billing_payments />} />
          <Route path="/billing/invoice/create" element={<AddFoctor />} />
          <Route path="/billing/payments" element={<AddPayment />} />
          <Route path="/billing/:id" element={<DatailFoctor />} />


          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/laboratory/orders/create" element={<CreateOrders />} />


          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/product" element={<Products />} />
          <Route path="/inventory/transactions" element={<Transcriptions />} />
          <Route path="/inventory/suppliers" element={<Suppliers />} />


          <Route path="/expenses" element={<Expenses />} />
          <Route path="/reporets" element={<Reporets />} />
          <Route path="/settings/users" element={<User_role />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
