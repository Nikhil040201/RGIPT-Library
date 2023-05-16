import logo from './Images/RGIPT-Logo.png'
import NavBar from "./NavBar";

function Header() {
    return (
        <>
            {/* Header */}
            <section id="header">
                <table className="header-table" cellSpacing="20">
                    <tbody>
                        <tr>
                            <td><img className="rgipt-logo" src={logo} alt="RGIPT Logo" /></td>
                            <td className="heading-table-data">
                                <h1>Rajiv Gandhi Institute of Petroleum Technology <br />Jais, Amethi</h1>
                                <h3>An Institute of National Importance</h3>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <h2>Virtual Library</h2>
                <hr />
                <NavBar />

            </section>
            <div className="text-wrap">
            <h1 className='running'>Welcome to Virtual Library of RGIPT</h1>
            <h1 className='running'>Welcome to Virtual Library of RGIPT</h1>
            <h1 className='running'>Welcome to Virtual Library of RGIPT</h1>
            <h1 className='running'>Welcome to Virtual Library of RGIPT</h1>
            </div>
                {/* <marquee className="running"></marquee> */}
        </>
    )
}

export default Header