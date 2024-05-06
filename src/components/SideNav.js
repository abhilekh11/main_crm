import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import companyLogo from "./avatar5.png";
function SideNav() {
  ////// Hide And Show/////
  const [line, setline] = useState("none");
  const [lead1, setlead] = useState("block");
  const [callManageshow, setcallManageshow] = useState("none");
  const [sms, setsms] = useState("none");
  const [wtsp, setwtsp] = useState("none");
  const [apis, setapis] = useState("none");
  const [Report1, setReport1] = useState("none");



  const openclose = () => { 
    if (line === 'none') {
      setline("block")
    } else {
      setline("none")
    }
  }
  const lead = () => {
    if (lead1 === 'none') {
      setlead("block")
      setcallManageshow("none")
      setsms("none")
      setwtsp("none")
      setapis("none")
      setReport1("none")
    } else {
      setlead("none")
    }
  }
  const callManage = () => {
    if (callManageshow === 'none') {
      setcallManageshow("block")
      setlead("none")
      setsms("none")
      setwtsp("none")
      setapis("none")
      setReport1("none")
    } else {
      setcallManageshow("none")
    }
  }
  const smsManage = () => {
    if (sms === 'none') {
      setsms("block")
      setcallManageshow("none")
      setlead("none")
   
      setwtsp("none")
      setapis("none")
      setReport1("none")
    } else {
      setsms("none")
    }
  }
  const wtspManage = () => {
    if (wtsp === 'none') {
      setwtsp("block")
      setsms("none")
      setcallManageshow("none")
      setlead("none")
   
     
      setapis("none")
      setReport1("none")
    } else {
      setwtsp("none")
    }
  }

  const allapi = () => {
    if (apis === 'none') {
      setapis("block")
      setwtsp("none")
      setsms("none")
      setcallManageshow("none")
      setlead("none")
      setReport1("none")
    } else {
      setapis("none")
    }
  }
  const Report=()=>{
    if (Report1 === 'none') {
      setReport1("block")
      
      setapis("none")
      setwtsp("none")
      setsms("none")
      setcallManageshow("none")
      setlead("none")
     
    } else {
      setReport1("none")
    }
  }
  ////// Hide And Show///////
 
 
  const [activeItem, setActiveItem] = useState('home');
  const nevigate = useNavigate();
  // Function to handle menu item clicks
  const handleItemClick = (itemName) => {
    nevigate(`/${itemName}`);
    setActiveItem(itemName);
  };
  useEffect(()=>{
    const pathname = window.location.pathname;
    const parts = pathname.split('/');
    const lastPart = parts[parts.length - 1];
    setActiveItem(`${lastPart}`)
  },[]);
  return (
    <div>
      <side className="main-sidebar sidebar-dark-primary bg-menu-theme elevationes-4">
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel ">
           
           <div className="image">
             <div class="image pull-center">
               <img src={companyLogo} alt="BigCo Inc. logo" />
               <div className="welcome_agent">
                     <h4>Welcome</h4>
                     <p>{localStorage.getItem("agent_name")}({localStorage.getItem("role")})</p>
                  </div>
             </div>
           </div>
            
         </div>
         <div className="scroll-bar-wrap">
            <div className="scroll-box">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">


              <li className="nav-item">
                <ul className="nav nav-treeview">
                  <li className="nav-item"  >
                    <Link to="/home" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link">
                      <i className="fa fa-circle nav-icon" />
                      Top Navigation + Sidebar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to=" " className="nav-link">
                      <i className="fa fa-circle nav-icon" />
                      Boxed
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to=""
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      Fixed Sidebar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to=""
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      Fixed Sidebar <small>+ Custom Area</small>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to=""
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      Fixed Navbar
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to=""
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      Fixed Footer
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to=" "
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      Collapsed Sidebar
                    </Link>
                  </li>
                </ul>
              </li>
              {localStorage.getItem("role") === 'admin' ? (<>

                <li className="nav-item">
                  <a href="javascript:void(0);" className={activeItem === 'home' ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleItemClick('home')}
                  >
                    <i className="nav-icon fas fa fa-home" />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={lead}>
                    <i className="nav-icon fas fa fa-user-md" />
                    Lead
                    <i className="fas fa-angle-left right" />
                  </Link>
                  <ul className="nav nav-treeview" style={{ display: lead1 }}>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'Addlead' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('Addlead')}>
                        <p>Add Lead</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'leads' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('leads')}>
                        <p>All Leads</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'followupleads' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('followupleads')}>
                        <p> Followup Leads</p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'newlead' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('newlead')}>
                        <p> New Leads</p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'importedlead' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('importedlead')}>
                        <p> Imported Lead</p>
                      </a>
                    </li>


                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link " onClick={callManage}>
                    <i className="nav-icon fas fa fa fa-cog" />
                    Call Manage
                    <i className="fas fa-angle-left right" />
                  </Link>
                  <ul className="nav nav-treeview" style={{ display: callManageshow }}>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'ManageEmployee' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('ManageEmployee')}>
                        <p>Employees</p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'employeesreport' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('employeesreport')}>
                        <p> Employees Report</p>
                      </a>
                    </li>

                  </ul>
                </li>
                {/* manage sms start */}
                <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={smsManage}>
                    <i className="nav-icon fas fa fa fa-cog" />
                    SMS Panel
                    <i className="fas fa-angle-left right" />
                  </Link>
                  <ul className="nav nav-treeview" style={{ display: sms }}>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'GroupSms' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('GroupSms')}>
                        <p>Compose SMS</p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'History' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('History')}>
                        <p> SMS Report</p>
                      </a>
                    </li>



                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'buysms' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('buysms')}>
                        <p> SMS Pack</p>
                      </a>
                    </li>



                  </ul>
                </li>
                {/* manage sms end */}
                {/* manage Wtsp start */}
                <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={wtspManage}>
                    <i className="nav-icon fas fa fa fa-cog" />
                    What's App
                    <i className="fas fa-angle-left right" />
                  </Link>
                  <ul className="nav nav-treeview" style={{ display: wtsp }}>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'GroupSmsWtsp' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('GroupSmsWtsp')}>
                        <p>Compose What's App</p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'HistoryWtsp' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('HistoryWtsp')}>
                        <p> What's App Report</p>
                      </a>
                    </li>



                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'BuysmsWtsp' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('BuysmsWtsp')}>
                        <p> What's App Pack</p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'BusinessWA' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('BusinessWA')}>
                        <p>Business WA</p>
                      </a>
                    </li>

                    {/* <li className="nav-item">
                  <a   href="javascript:void(0);" className={activeItem === 'buysms' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('buysms')}>
                      <p> Setting</p>   
                    </a>
                  </li> */}

                  </ul>
                </li>
                {/* manage Wtsp end */}
                <li className="nav-item">
                  <a href="javascript:void(0);" className={activeItem === 'UploadContent' ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleItemClick('UploadContent')}>
                    <i className="nav-icon far fa-credit-card" />
                    Contact's
                  </a>
                </li>
                {/* Api  */}
                <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={allapi}>
                    <i className="nav-icon fas fa fa fa-cog" />
                    Api
                    <i className="fas fa-angle-left right" />
                  </Link>
                  <ul className="nav nav-treeview" style={{ display: apis }}>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'housingapi' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('housingapi')}>
                        <p>Housing Api</p>
                      </a>
                    </li>



                  </ul>
                </li>
                {/* Api */}
                <li className="nav-item">
                  <a href="javascript:void(0);" className={activeItem === 'productservices' ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleItemClick('productservices')}>
                    <i className="nav-icon far fa-credit-card" />
                    Product & Services
                  </a>
                </li>


                {/* <li className="nav-item">
                  <a href="javascript:void(0);" className={activeItem === 'Report' ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleItemClick('Report')}>
                    <i className="nav-icon far fa-file" />
                    Report
                  </a>
                </li> */}


                {/* for report  */}
                <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={Report}>
                    <i className="nav-icon fas fa fa-user-md" />
                    Report 
                    <i className="fas fa-angle-left right" />
                  </Link>
                  <ul className="nav nav-treeview" style={{ display: Report1 }}>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'Incomereport' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('Incomereport')}>
                        <p>Manage Report</p>  
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'Callreport' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('Callreport')}>
                        <p>Callreport</p>
                      </a>
                    </li>

                  </ul>
                </li>
                {/* for report */}


                <li className="nav-item">
                  <a href="javascript:void(0);"
                    className={activeItem === 'Setting' ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleItemClick('Setting')}
                  >
                    <i className="nav-icon far fa fa-cog" />
                    Setting
                  </a>
                </li>

              </>) : localStorage.getItem("role") === 'user' ? (
                <>
                  <li className="nav-item">
                    <a href="javascript:void(0);" className={activeItem === 'home' ? 'nav-link active' : 'nav-link'}
                      onClick={() => handleItemClick('home')}

                    >
                      <i className="nav-icon fas fa fa-home" />
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link" onClick={lead}>
                      <i className="nav-icon fas fa fa-user-md" />
                      Lead
                      <i className="fas fa-angle-left right" />
                    </Link>
                    <ul className="nav nav-treeview" style={{ display: lead1 }}>
                      <li className="nav-item">
                        <a
                          href="javascript:void(0);" className={activeItem === 'Addlead' ? 'nav-link active' : 'nav-link'}
                          onClick={() => handleItemClick('Addlead')}
                        >
                          <p>Add Lead</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="javascript:void(0);" className={activeItem === 'leads' ? 'nav-link active' : 'nav-link'}
                          onClick={() => handleItemClick('leads')}
                        >
                          <p>All Leads</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="javascript:void(0);" className={activeItem === 'followupleads' ? 'nav-link active' : 'nav-link'}
                          onClick={() => handleItemClick('followupleads')}
                        >
                          <p> Followup Leads</p>
                        </a>
                      </li>

                      <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'newlead' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('newlead')}>
                        <p> New Leads</p>
                      </a>
                    </li>

                      <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'importedlead' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('importedlead')}>
                        <p> Imported Lead</p>
                      </a>
                    </li>

                    </ul>
                  </li>

                  <li className="nav-item" style={{ display:'none' }}>
                    <Link to="#" className="nav-link" onClick={callManage}>
                      <i className="nav-icon fas fa fa fa-cog" />
                      Call  Manage
                      <i className="fas fa-angle-left right" />
                    </Link>
                    <ul className="nav nav-treeview" style={{ display: callManageshow }}>
                      <li className="nav-item">
                        <a href="javascript:void(0);" className={activeItem === 'ManageEmployee' ? 'nav-link active' : 'nav-link'}
                          onClick={() => handleItemClick('ManageEmployee')}>
                          <p>Employees</p>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          href="javascript:void(0);" className={activeItem === 'employeesreport' ? 'nav-link active' : 'nav-link'}
                          onClick={() => handleItemClick('employeesreport')}
                        >
                          <p> Employees Report</p>
                        </a>
                      </li>

                    </ul>
                  </li>
                </>
              ) : (<>
                <li className="nav-item">
                  <a href="javascript:void(0);" className={activeItem === 'home' ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleItemClick('home')}
                  >
                    <i className="nav-icon fas fa fa-home" />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={lead}>
                    <i className="nav-icon fas fa fa-user-md" />
                    Lead
                    <i className="fas fa-angle-left right" />
                  </Link>
                  <ul className="nav nav-treeview" style={{ display: lead1 }}>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'Addlead' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('Addlead')}>
                        <p>Add Lead</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'leads' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('leads')}>
                        <p>All Leads</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'followupleads' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('followupleads')}>
                        <p> Followup Leads</p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'newlead' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('newlead')}>
                        <p> New Leads</p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'importedlead' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('importedlead')}>
                        <p> Imported Lead</p>
                      </a>
                    </li>

                    {/* <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'newlead' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('newlead')}>
                        <p> New Leads</p>
                      </a>
                    </li> */}
                  </ul>
                </li>
                <li className="nav-item" >
                  <Link to="#" className="nav-link" onClick={callManage}>
                    <i className="nav-icon fas fa fa fa-cog" />
                    Call Manage 
                    <i className="fas fa-angle-left right" />
                  </Link>
                  <ul className="nav nav-treeview" style={{ display: callManageshow }}>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'ManageEmployee' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('ManageEmployee')}>
                        <p>Employees</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'employeesreport' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('employeesreport')}>
                        <p> Employees Report</p>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* manage sms start */}
                <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={smsManage}>
                    <i className="nav-icon fas fa fa fa-cog" />
                    SMS Panel
                    <i className="fas fa-angle-left right" />
                  </Link>
                  <ul className="nav nav-treeview" style={{ display: sms }}>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'GroupSms' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('GroupSms')}>
                        <p>Compose SMS</p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'History' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('History')}>
                        <p> SMS Report</p>
                      </a>
                    </li>



                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'buysms' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('buysms')}>
                        <p> SMS Pack</p>
                      </a>
                    </li>



                  </ul>
                </li>
                {/* manage sms end */}
                {/* manage Wtsp start */}
                <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={wtspManage}>
                    <i className="nav-icon fas fa fa fa-cog" />
                    What's App
                    <i className="fas fa-angle-left right" />
                  </Link>
                  <ul className="nav nav-treeview" style={{ display: wtsp }}>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'GroupSmsWtsp' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('GroupSmsWtsp')}>
                        <p>Compose What's App</p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'HistoryWtsp' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('HistoryWtsp')}>
                        <p> What's App Report</p>
                      </a>
                    </li>



                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'BuysmsWtsp' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('BuysmsWtsp')}>
                        <p> What's App Pack</p>
                      </a>
                    </li>

                    {/* <li className="nav-item">
                  <a   href="javascript:void(0);" className={activeItem === 'buysms' ? 'nav-link active' : 'nav-link'}
                  onClick={() => handleItemClick('buysms')}>
                      <p> Setting</p>   
                    </a>
                  </li> */}

                  </ul>
                </li>
                {/* manage Wtsp end */}
                <li className="nav-item">
                  <a href="javascript:void(0);" className={activeItem === 'UploadContent' ? 'nav-link active' : 'nav-link'}
                    onClick={() => handleItemClick('UploadContent')}>
                    <i className="nav-icon far fa-credit-card" />
                    Contact's
                  </a>
                </li>


                 {/* for report  */}
                 <li className="nav-item">
                  <Link to="#" className="nav-link" onClick={Report}>
                    <i className="nav-icon fas fa fa-user-md" />
                    Report 
                    <i className="fas fa-angle-left right" />
                  </Link>
                  <ul className="nav nav-treeview" style={{ display: Report1 }}>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'Incomereport' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('Incomereport')}>
                        <p>Manage Report</p>  
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className={activeItem === 'Callreport' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleItemClick('Callreport')}>
                        <p>Callreport</p>
                      </a>
                    </li>

                  </ul>
                </li>
                {/* for report */}

              </>)}


            </ul>
          </nav>
        </div> </div> </div>
      </side>

    </div>
  );
}

export default SideNav;
