// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// fontWeight : [false,"light","regular","medium","bold"]
export default function data() {
    const Url = ({ link }) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <MDBox lineHeight={1}>
                <MDTypography display="block" variant="button" fontWeight="light"> 
                    {link}
                </MDTypography>
            </MDBox>
        </MDBox>
    );

    const Job = ({ title }) => (
        <MDBox lineHeight={1} textAlign="left">
            <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
                {title}
            </MDTypography>
        </MDBox>
    );

    return {
        columns: [
            { Header: "ID", accessor: "id", align: "left" },
            { Header: "Long URL", accessor: "url", width: "45%", align: "left" },
            { Header: "Expiry", accessor: "expiry", align: "center" },
            { Header: "status", accessor: "status", align: "center" },
            { Header: "hits", accessor: "hits", align: "center" },
            { Header: "action", accessor: "action", align: "center" },
        ],

        rows: [
            {
                id: <Job title="1" />,
                url: <Url image={team2} link="www.google.com" />,
                status: (
                    <MDBox ml={-1}>
                        <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
                    </MDBox>
                ),
                expiry: <Job title="2" />,
                hits: <Job title="99" />,
                action: (
                    <MDTypography component="a" href="#" variant="caption" color="primary" fontWeight="medium">
                        Delete
                    </MDTypography>
                ),
            },
            {
                id: <Job title="2" />,
                url: <Url image={team2} link="www.facebook.com" />,
                status: (
                    <MDBox ml={-1}>
                        <MDBadge badgeContent="close" color="primary" variant="gradient" size="sm" />
                    </MDBox>
                ),
                expiry: <Job title="2" />,
                hits: <Job title="23" />,
                action: (
                    <MDTypography component="a" href="#" variant="caption" color="primary" fontWeight="medium">
                        Delete
                    </MDTypography>
                ),
            },
        ],
    };
}
