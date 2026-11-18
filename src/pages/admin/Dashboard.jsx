import Calendary from "../../components/admin/Calendary";
import DashboardCards from "../../components/admin/DashboardCards";
import SalesChart from "../../components/admin/SalesChart";
import "../../assets/css/Admin.css";

export default function Dashboard() {
    return (
        <main className="dashboard-container">
            <div className="dashboard-content">
                
                <DashboardCards />
                
                <div className="container-fluid px-3 mt-4">
                    <div className="row g-3 align-items-stretch">
                        <div className="col-12 col-lg-6">
                            <Calendary />
                        </div>
                        <div className="d-none d-md-block col-12 col-lg-6">
                            <SalesChart />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
