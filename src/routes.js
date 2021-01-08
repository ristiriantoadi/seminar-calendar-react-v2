/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Dashboard from "views/Dashboard.jsx";
// import Notifications from "views/Notifications.jsx";
// import Seminar from "views/Seminar.jsx";
import SeminarMahasiswa from "views/Seminar";
import Icons from "views/Icons.jsx";
// import Typography from "views/Typography.jsx";
// import TableList from "views/Tables.jsx";
// import Maps from "views/Map.jsx";
// import UserPage from "views/User.jsx";
// import UpgradeToPro from "views/Upgrade.jsx";
// import Mahasiswa from "views/Mahasiswa.jsx";
// import TambahSeminar from "views/TambahSeminar.jsx";
import ProposalSeminar from "views/ProposalSeminar.jsx";

var routes = [
  {
    path: "/seminar",
    name: "Jadwal Seminar",
    icon: "nc-icon nc-bell-55",
    // component: Seminar,
    component:SeminarMahasiswa,
    layout: "/admin"
  },
  {
    path: "/proposal-seminar",
    name: "Proposal Seminar",
    icon: "nc-icon nc-bell-55",
    component: ProposalSeminar,
    layout: "/admin"
  }
  // {
  //   path: "/pengajuan-seminar",
  //   name: "Pengajuan Seminar",
  //   icon: "nc-icon nc-diamond",
  //   component: TambahSeminar,
  //   layout: "/admin"
  // },
  // {
  //   path: "/daftar-pengajuan-seminar",
  //   name: "Konfirmasi Seminar",
  //   icon: "nc-icon nc-diamond",
  //   component: Mahasiswa,
  //   layout: "/admin"
  // }
  // {
  //   path: "/user-page",
  //   name: "Profil Pengguna",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "List Tabel",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Tipografi",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin"
  // }
];
export default routes;
