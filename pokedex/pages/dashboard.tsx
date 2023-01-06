import MainDashboard from "../components/Main";
import Aside from "../components/Aside";
import { DashboardBody } from "../components/Dasboard";

export default function Dashboard() {
  return (
    <>
      <DashboardBody>
        <Aside></Aside>
        <MainDashboard></MainDashboard>
      </DashboardBody>
    </>
  );
}
