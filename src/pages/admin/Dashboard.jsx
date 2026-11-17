import Calendary from "../../components/admin/Calendary";
import DashboardCards from "../../components/admin/DashboardCards";
import SalesChart from "../../components/admin/SalesChart";

export default function Dashboard() {
    return (
        <main>
            <DashboardCards />
            <div className="container-fluid px-3">
                <div className="row g-3 align-items-stretch">
                    <div className="col-12 col-lg-6">
                        <Calendary />
                    </div>
                    <div className="d-none d-md-block col-12 col-lg-6">
                        <SalesChart />
                    </div>
                </div>
            </div>
        </main>
    );
}
