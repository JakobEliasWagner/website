

export const Footer = () => {
    return (
    <div>
        <div className="container-fluid text-center text-md-left footer-dark">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Jakob Elias Wagner</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="https://jakob-wagner.com">jakob-wagner.com</a></li>
                        <li><a href="li">LinkedIn</a></li>
                        <li><a href="#!">Github</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2024 Copyright:
            <a href="https://jakob-wagner.com"> jakob-wagner.com</a>
        </div>
    </div>
    );
}