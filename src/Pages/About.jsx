import React from 'react';
import '../Styles/about.css';

const About = () => {
  return (
    <>
      <div className="container About">
        <div className="About-img">
          <img className="img-fluid" src="./image/myPic.png" alt="" />
        </div>
        <div className="About_Discription">
          <img src="./image/logo3.png" alt="" />
          <p>
            CryptoBD Is a website made y me koushik Nag shuvo where you can see
            all the details about all cryptocurrencies. Check out the charts and
            add them to your profile.
            <br /> Here I use Coingeko Api to fetch all the real-time data of
            cryptocurrencies. Also I use context API to manage all the global
            states. and firebase authentication.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
