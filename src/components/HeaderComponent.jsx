import { Link } from "react-router";
import companyLogo from "../assets/companyLogo.webp";



function HeaderComponent() {


    return(
        <>
            <section className="leftHeader">
                {/* <Link to="/">Home</Link> */}
                <Link to="/">
                    <img src={companyLogo} alt="Small company logo that navigates to start page." id="smallCompanyLogo" />
                </Link>
            </section>

            <section className="rightHeader">
                <Link to="/all-dogs">All Dogs</Link>
                <Link to="/all-owners">All Owners</Link>
                <Link to="/all-activities">All Activities</Link>
            </section>
        </>
    )
}

export default HeaderComponent;