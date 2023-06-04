import React from "react";
import ReportCard from "../components/ReportCard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const server_addr = import.meta.env.VITE_SERVER_ADDR

function LrmiYear(){
    const params = useParams()
    const [reports, setReports] = React.useState([])
    const [isLoading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function getReports(){
            setLoading(true)
            const result = await axios.get(`${server_addr}api/lrmi/${params.year}`)
            setReports(result.data)
            setLoading(false)
        }
        getReports()
    }, [])

    async function deleteReport(id) {
        const result = await axios.delete(`${server_addr}api/lrmi/${id}`)
    }

    const reportCards = reports.map(report => (
        <ReportCard
            key={report.id}
            _id={report.id}
            source={report.url}
            year={report.year}
            quarter={report.quarter}
            handleDelete={deleteReport}
        />
    ))

    return (
        <main>
            <h1>LRMI {params.year} Reports</h1>
            <Link to="/lrmi" className="regular-button">{"< Back"}</Link>
            {isLoading && <Loader /> }
            {reportCards}
        </main>
    )
}

export default LrmiYear;