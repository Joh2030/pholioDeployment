import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { PersonCheck, Globe2, Tags } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
// import clients from "../../assets/clients.jpg";
import shop from "../../assets/shop.jpg";
// import galleries from "../../assets/galleries.jpg";
// import albums from "../../assets/albums.jpg";
import Banner from "../../assets/bannervid.mp4";
// import laptop from "../../assets/laptop.png";
import Galleries from "../../assets/galleries.jpg";
import "../../App.css";
import "../../components/landingpage/landingpage.css";
import Footer from "../../components/landingpage/Footer";
import LandingNavbar from "../../components/landingpage/LandingNavbar";

const HomePage = () => {
  return (
    <div>
      <LandingNavbar />
      <header className="landingheader">
        <video className="landingbanner" loop autoPlay muted>
          <source src={Banner} type="video/mp4"></source>
        </video>

        <div className="bannercontent">
          <div className="pgt">
            <h1 className="page-title"> Create Beautiful</h1>
            <h1 className="page-title"> Photo Galleries </h1>
          </div>
          {/* <hr className="lpdivider" /> */}
          <div className="ttext">
            <h2 className="title-text">Unlimited Galleries for all of your</h2>
            <h2 className="title-text">Clients in one place</h2>
            <Link to="/register">
              {" "}
              <button className="startnowbtn">Start for free</button>
            </Link>
          </div>
        </div>
      </header>

      <div className="intro">
        <h2 className="sec1title">Everything you need in one place</h2>
        <div className="introtext">
          <p>
            We offer photographers a simple solution to showcase their images to
            clients. Create unlimited galleries in just a few easy steps and let
            your clients see all their photoshoots at a glance. Your clients
            have never had an easier time viewing their pictures. Increase your
            image sales and strenghten your customer retention with our nice and
            clean design that perfectly stages your pictures!
          </p>
          <img src={Galleries} alt="shop dashboard" width="500" />
        </div>
        <Link to="/register">
          {" "}
          <Button variant="btn" className="startnowbtn mx-3 mt-4">
            Create your free Account
          </Button>
        </Link>
        <hr className="divider" />
      </div>

      <div className="sec2">
        <div className="featurette">
          <div className="feature col">
            <div className="person-icon p-3"> </div>
            <PersonCheck className="fs-1" />
            <h4 className="mt-4">Easy to use</h4>
            <p>
              Our clear and organized design ensures that not only you but also
              your clients find the navigation incredibly simple!
            </p>
          </div>

          <div className="feature col">
            <div className="domain-icon p-3"></div>
            <Globe2 className="fs-1" />
            <h4 className="mt-4">Manage your Clients</h4>
            <p>
              Manage all of your clients in one place! Every client has their
              own password-protected area to view their galleries.
            </p>
          </div>
          <div className="feature col">
            <div className="preise-icon p-3"></div>
            <Tags className="fs-1" />
            <h4 className="mt-4">Multiple Galleries</h4>
            <p>
              Create as many galleries as you want for each of your clients! Set
              a different price per image in each gallery.
            </p>
          </div>
        </div>
      </div>

      <div className="intro">
        <h2 className="sec1title"> Are you a Client? </h2>
        <div className="introtext">
          <img src={shop} alt="shop dashboard" width="500" />

          <p>
            You just had an amazing photoshoot with your favourite photographer
            and want to see the moments he has captured?
            <br />
            Discover the ultimate gallery experience tailored for you! Browse
            through your personalized galleries, showcasing the brilliant work
            your photographer captured.
            <br /> With a user-friendly interface, relive every moment at a
            glance. Elevate your image viewing and cherish unforgettable
            memories.{" "}
          </p>
        </div>
        <Link to="/clogin">
          {" "}
          <Button variant="btn" className="startnowbtn mx-3 mt-4">
            Login as a Client
          </Button>
        </Link>
        <hr className="divider" />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
