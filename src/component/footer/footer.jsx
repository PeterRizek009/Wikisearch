import React from "react";
import './footer.css'
const Footer = () => {
    return (<>
        <footer className="text-center text-white shadow mt-5">
            <div className="container-fluid pt-4 " >

                <section className="mb-4" >
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/peter-rezik-a84408123/" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>

                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/PeterRizek009" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
                </section>

            </div>
            <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a className="text-white" href="#!">Peter Rezik</a>
            </div>
        </footer>
    </>
    );
}

export default Footer;