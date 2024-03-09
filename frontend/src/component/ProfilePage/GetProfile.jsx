import React from 'react'
import "../../Styles/style.css";
import "../../Styles/demo.css";
import { useGetProfile } from '../../Hooks/getProfile';

const GetProfile = () => {
    const {data} = useGetProfile();
    console.log("data" ,data);


  return (
    <>
      <div>
        <div class="ScriptTop">
          <div class="rt-container">
            <div class="col-rt-4" id="float-right"></div>
          </div>
        </div>

        <header class="ScriptHeader">
          <div class="rt-container">
            <div class="col-rt-12">
              <div class="rt-heading">
                <h1>Athelete Profile Page Design </h1>
                <p>A responsive Athelete profile page design.</p>
              </div>
            </div>
          </div>
        </header>

        <section>
          <div class="rt-container">
            <div class="col-rt-12">
              <div class="Scriptcontent">
                <div class="student-profile py-4">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="card shadow-sm">
                          <div class="card-header bg-transparent text-center">
                            <img
                              class="profile_img"
                              src="https://source.unsplash.com/600x300/?student"
                              alt="student dp"
                            ></img>
                            <h3>Ishmam Ahasan Samin:{data.name}</h3>
                          </div>
                          <div class="card-body">
                            <p class="mb-0">
                              <strong class="pr-1">Athlete location:</strong>
                              321000001{data.city}
                            </p>
                            <p class="mb-0">
                              <strong class="pr-1">
                                Athelete skill level:
                              </strong>
                              4{data.skillLevel}
                            </p>
                            <p class="mb-0">
                              <strong class="pr-1">
                                Athelete interested sports:
                              </strong>
                              A{data.interestedSports}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-8">
                        <div class="card shadow-sm">
                          <div class="card-header bg-transparent border-0">
                            <h3 class="mb-0">
                              <i class="far fa-clone pr-1"></i>General
                              Information
                            </h3>
                          </div>
                          <div class="card-body pt-0">
                            <table class="table table-bordered">
                              <tr>
                                <th width="30%">Weight</th>
                                <td width="2%">:</td>
                                <td>125</td>
                              </tr>
                              <tr>
                                <th width="30%">Height</th>
                                <td width="2%">:</td>
                                <td>2020</td>
                              </tr>
                              <tr>
                                <th width="30%">Gender</th>
                                <td width="2%">:</td>
                                <td>Male</td>
                              </tr>
                              <tr>
                                <th width="30%">Religion</th>
                                <td width="2%">:</td>
                                <td>Hindu</td>
                              </tr>
                              <tr>
                                <th width="30%">Country</th>
                                <td width="2%">:</td>
                                <td>India</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                        <div style={{ height: "26px" }}></div>
                        <div class="card shadow-sm">
                          <div class="card-header bg-transparent border-0">
                            <h3 class="mb-0">
                              <i class="far fa-clone pr-1"></i>Other Information
                            </h3>
                          </div>
                          <div class="card-body pt-0">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default GetProfile


// import React from 'react'
// import "./style.css"
// import "./demo.css"
// const Playerprofile = () => {
//   return (
//     <div>
//       <div class="ScriptTop">
//     <div class="rt-container">
//         <div class="col-rt-4" id="float-right">
 
//         </div>
//     </div>
// </div>

// <header class="ScriptHeader">
//     <div class="rt-container">
//     	<div class="col-rt-12">
//         	<div class="rt-heading">
//             	<h1>Athelete Profile Page Design </h1>
//                 <p>A responsive Athelete profile page design.</p>
//             </div>
//         </div>
//     </div>
// </header>

// <section>
//     <div class="rt-container">
//           <div class="col-rt-12">
//               <div class="Scriptcontent">
              

// <div class="student-profile py-4">
//   <div class="container">
//     <div class="row">
//       <div class="col-lg-4">
//         <div class="card shadow-sm">
//           <div class="card-header bg-transparent text-center">
//             <img class="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp"></img>
//             <h3>Ishmam Ahasan Samin</h3>
//           </div>
//           <div class="card-body">
//             <p class="mb-0"><strong class="pr-1">Athlete location:</strong>321000001</p>
//             <p class="mb-0"><strong class="pr-1">Athelete skill level:</strong>4</p>
//             <p class="mb-0"><strong class="pr-1">Athelete interested sports:</strong>A</p>
//           </div>
//         </div>
//       </div>
//       <div class="col-lg-8">
//         <div class="card shadow-sm">
//           <div class="card-header bg-transparent border-0">
//             <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
//           </div>
//           <div class="card-body pt-0">
//             <table class="table table-bordered">
//               <tr>
//                 <th width="30%">Weight</th>
//                 <td width="2%">:</td>
//                 <td>125</td>
//               </tr>
//               <tr>
//                 <th width="30%">Height</th>
//                 <td width="2%">:</td>
//                 <td>2020</td>
//               </tr>
//               <tr>
//                 <th width="30%">Gender</th>
//                 <td width="2%">:</td>
//                 <td>Male</td>
//               </tr>
//               <tr>
//                 <th width="30%">Religion</th>
//                 <td width="2%">:</td>
//                 <td>Hindu</td>
//               </tr>
//               <tr>
//                 <th width="30%">Country</th>
//                 <td width="2%">:</td>
//                 <td>India</td>
//               </tr>
//             </table>
//           </div>
//         </div>
//         <div style={{ height: '26px' }}></div>
//         <div class="card shadow-sm">
//           <div class="card-header bg-transparent border-0">
//             <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Other Information</h3>
//           </div>
//           <div class="card-body pt-0">
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

           
//     		</div>
// 		</div>
//     </div>
// </section>

//     </div>
//   )
// }

 