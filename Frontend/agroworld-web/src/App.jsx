import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Products from './components/Products'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Seedfacility from './components/Seedfacility'
import Cropfacility from './components/Cropfacility'
import Vegetablefacility from './components/Vegetablefacility'
import Sellseed from './components/Sellseed'
import Purchaseseed from './components/Purchaseseed'
import Sellcrop from './components/Sellcrop'
import Purchasecrop from './components/Purchasecrop'
import Sellvegetable from './components/Sellvegetable'
import Purchasevegetable from './components/Purchasevegetable'
import Adminlogin from './components/Adminlogin'
import Adminhome from './components/Adminhome'
import Adminorder from './components/Adminorder'
import Adminprofile from './components/Adminprofile'
import Adminfeedbox from './components/Adminfeedbox'
import Adminproduct from './components/Adminproduct'
import Adminservice from './components/Adminservice'
import Adminseedfacility from './components/Adminseedfacility'
import Admincropfacility from './components/Admincropfacility'
import Adminvegetablefacility from './components/Adminvegetablefacility'
import Adminseeddata from './components/Adminseeddata'
import Admincropdata from './components/Admincropdata'
import Adminvegetabledata from './components/Adminvegetabledata'
import Vegetableorder from './components/Vegetableorder'
import Croporder from './components/Croporder'
import Seedorder from './components/Seedorder'
import Productorder from './components/Productorder'
import Myorder from './components/Myorder'
import Adminaddfacility from './components/Adminaddfacility'
import Adminaddfarming from './components/Adminaddfarming'
import Farmingfacility from './components/Farmingfacility'
import Farmingorder from './components/Farmingorder'
import Profilecrop from './components/Profilecrop'
import Profilevegetable from './components/Profilevegetable'
import Profileseed from './components/Profileseed'
import Profileproduct from './components/Profileproduct'
import Profilefarming from './components/Profilefarming'
import Profileseedprd from './components/Profileseedprd'
import Profilecropprd from './components/Profilecropprd'
import Profilevegetableprd from './components/Profilevegetableprd'
import Adminprofilecrop from './components/Adminprofilecrop'
import Adminprofilevegetable from './components/Adminprofilevegetable'
import Adminprofileseed from './components/Adminprofileseed'
import Adminprofileproduct from './components/Adminprofileproduct'
import Adminprofilefarming from './components/Adminprofilefarming'
import Adminremainseed from './components/Adminremainseed'
import Adminremaincrop from './components/Adminremaincrop'
import Adminremainvegetable from './components/Adminremainvegetable'
import Adminremainprd from './components/Adminremainprd'
import Adminremainother from './components/Adminremainother'
import Vegetableorderallocate from './components/Vegetableorderallocate'
import Seedorderallocate from './components/Seedorderallocate'
import Croporderallocate from './components/Croporderallocate'
import Productorderallocate from './components/Productorderallocate'
import Farmingorderallocate from './components/Farmingorderallocate'
import SeedAllocatedAdmin from './components/SeedAllocatedAdmin'
import CropAllocatedAdmin from './components/CropAllocatedAdmin'
import VegetableAllocatedAdmin from './components/VegetableAllocatedAdmin'
import ProductAllocatedAdmin from './components/ProductAllocatedAdmin'
import FarmingAllocatedAdmin from './components/FarmingAllocatedAdmin'
import SeedAllocatedUser from './components/SeedAllocatedUser'
import CropAllocatedUser from './components/CropAllocatedUser'
import VegetableAllocatedUser from './components/VegetableAllocatedUser'
import ProductAllocatedUser from './components/ProductAllocatedUser'
import FarmingAllocatedUser from './components/FarmingAllocatedUser'
import ServicemanLogin from './components/ServicemanLogin'
import Servicemansignup from './components/Servicemansignup'
import Servicehome from './components/Servicehome'
import ServiceProfile from './components/ServiceProfile'
import ServiceSeedAllocate from './components/ServiceSeedAllocate'
import ServiceCropAllocate from './components/ServiceCropAllocate'
import ServiceVegetableAllocate from './components/ServiceVegetableAllocate'
import ServiceProductAllocate from './components/ServiceProductAllocate'
import ServiceFarmingAllocate from './components/ServiceFarmingAllocate'
function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/service' element={<Service/>}/>
<Route path='/product' element={<Products/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/seedfacility' element={<Seedfacility/>}/>
<Route path='/cropfacility' element={<Cropfacility/>}/>
<Route path='/vegetablefacility' element={<Vegetablefacility/>}/>
<Route path='/sellseeds' element={<Sellseed/>}/>
<Route path='/purchaseseeds' element={<Purchaseseed/>}/>
<Route path='/sellcrop' element={<Sellcrop/>}/>
<Route path='/purchasecrop' element={<Purchasecrop/>}/>
<Route path='/sellvegetable' element={<Sellvegetable/>}/>
<Route path='/purchasevegetable' element={<Purchasevegetable/>}/>
<Route path='/adminlogin' element={<Adminlogin/>}/>
<Route path='/adminhome' element={<Adminhome/>}/>
<Route path='/adminorder' element={<Adminorder/>}/>
<Route path='/adminservice' element={<Adminservice/>}/>
<Route path='/adminproduct' element={<Adminproduct/>}/>
<Route path='/adminfeedbox' element={<Adminfeedbox/>}/>
<Route path='/adminprofile' element={<Adminprofile/>}/>
<Route path='/adminseedfacility' element={<Adminseedfacility/>}/>
<Route path='/admincropfacility' element={<Admincropfacility/>}/>
<Route path='/adminvegetablefacility' element={<Adminvegetablefacility/>}/>
<Route path='/adminseeddata' element={<Adminseeddata/>}/>
<Route path='/admincropdata' element={<Admincropdata/>}/>
<Route path='/adminvegetabledata' element={<Adminvegetabledata/>}/>
<Route path='/vegetableorder/:id' element={<Vegetableorder/>}/>
<Route path='/croporder/:id' element={<Croporder/>}/>
<Route path='/seedorder/:id' element={<Seedorder/>}/>
<Route path='/productorder/:id' element={<Productorder/>}/>
<Route path='/farmingorder/:id' element={<Farmingorder/>}/>
<Route path='/myorder' element={<Myorder/>}/>
<Route path='/adminaddfacility' element={<Adminaddfacility/>}/>
<Route path='/adminaddfarmingmaterial' element={<Adminaddfarming/>}/>
<Route path='/farmingmaterialsfacility' element={<Farmingfacility/>}/>
<Route path='/profilecrop' element={<Profilecrop/>}/>
<Route path='/profilevegetable' element={<Profilevegetable/>}/>
<Route path='/profileseed' element={<Profileseed/>}/>
<Route path='/profileproduct' element={<Profileproduct/>}/>
<Route path='/profilefarming' element={<Profilefarming/>}/>
<Route path='/profileseedproduct' element={<Profileseedprd/>}/>
<Route path='/profilecropproduct' element={<Profilecropprd/>}/>
<Route path='/profilevegetableproduct' element={<Profilevegetableprd/>}/>
<Route path='/adminprofilecrop' element={<Adminprofilecrop/>}/>
<Route path='/adminprofilevegetable' element={<Adminprofilevegetable/>}/>
<Route path='/adminprofileseed' element={<Adminprofileseed/>}/>
<Route path='/adminprofileproduct' element={<Adminprofileproduct/>}/>
<Route path='/adminprofilefarming' element={<Adminprofilefarming/>}/>

<Route path='/profileseedproductremainadmin' element={<Adminremainseed/>}/>
<Route path='/profilecropproductremainadmin' element={<Adminremaincrop/>}/>
<Route path='/profilevegetableproductremainadmin' element={<Adminremainvegetable/>}/>
<Route path='/alladminprddata' element={<Adminremainprd/>}/>
<Route path='/alladminotherdata' element={<Adminremainother/>}/>
<Route path='/allocatevegetableorder/:id' element={<Vegetableorderallocate/>}/>
<Route path='/allocateseedorder/:id' element={<Seedorderallocate/>}/>
<Route path='/allocatecroporder/:id' element={<Croporderallocate/>}/>
<Route path='/allocateproductorder/:id' element={<Productorderallocate/>}/>
<Route path='/allocatefarmingorder/:id' element={<Farmingorderallocate/>}/>
<Route path='/profileseedproductallocatedadmin' element={<SeedAllocatedAdmin/>}/>
<Route path='/profilecropproductallocatedadmin' element={<CropAllocatedAdmin/>}/>
<Route path='/profilevegetableproductallocatedadmin' element={<VegetableAllocatedAdmin/>}/>
<Route path='/profileproductallocatedadmin' element={<ProductAllocatedAdmin/>}/>
<Route path='/profilefarmingallocatedadmin' element={<FarmingAllocatedAdmin/>}/>
<Route path='/profileseedproductallocateduser' element={<SeedAllocatedUser/>}/>
<Route path='/profilecropproductallocateduser' element={<CropAllocatedUser/>}/>
<Route path='/profilevegetableproductallocateduser' element={<VegetableAllocatedUser/>}/>
<Route path='/profileproductallocateduser' element={<ProductAllocatedUser/>}/>
<Route path='/profilefarmingallocateduser' element={<FarmingAllocatedUser/>}/>
<Route path='/servicesignup' element={<Servicemansignup/>}/>
<Route path='/servicelogin' element={<ServicemanLogin/>}/>
<Route path='/servicehome' element={<Servicehome/>}/>
<Route path='/serviceprofile' element={<ServiceProfile/>}/>
<Route path='/profileseedproductallocatedservice' element={<ServiceSeedAllocate/>}/>
<Route path='/profilecropproductallocatedservice' element={<ServiceCropAllocate/>}/>
<Route path='/profilevegetableproductallocatedservice' element={<ServiceVegetableAllocate/>}/>
<Route path='/profileproductallocatedservice' element={<ServiceProductAllocate/>}/>
<Route path='/profilefarmingallocatedservice' element={<ServiceFarmingAllocate/>}/>
        </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default App
