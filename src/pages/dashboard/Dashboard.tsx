import { useLocation, useNavigate } from "react-router";
// import FeatureView from "../../components/featureView/FeatureView";
import Header from "../../components/header/Header";
// import HorizontalDivider from "../../components/hzDivider/HorizontalDivider";
// import ProductView from "../../components/productview/ProductView";
// import { productMockData } from "../../mockdata/ProductMockData";

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogout = () => {
    };

    return (
        <div>
            <Header />
            {/* <FeatureView />
            <ProductView productList={productMockData.slice(0, 4)} sectionTitle="NEW ARRIVALS" />
            <HorizontalDivider />
            <ProductView productList={productMockData.slice(0, 4)} sectionTitle="TOP SELLING" /> */}
            <div className="h-80"></div>
            <div className="h-80"></div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard