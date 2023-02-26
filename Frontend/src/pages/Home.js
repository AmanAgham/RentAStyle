import React from "react";

const Home = () =>{
    return(
        <>
         <section className="home-wrapper-1 py-2">
        <div className="container-xxl">
        <div className="row">
        <div className="col-12">
        <div className="main-banner-content p-3">
            <img src="images/Hania-Aamir.jpeg" className="img-fluid rounded-3" alt="main banner1"></img>
        </div>
        </div>
        </div>   
        </div>   
        </section>

        <section className="home-wrapper-2 py-2">
        <div className="container-xxl">
        <div className="row">
        <div className="col-12">
        <div className="main-banner-content p-3">
            <img src="images/b2.png" className="img-fluid rounded-3" alt="main banner2"></img>
        </div>
        </div>
        </div>   
        </div>   
        </section>

        <section className="home-wrapper-3 py-2">
        <div className="container-xxl">
        <div className="row">
        <div className="col-6">
        <div className="main-banner-content p-3">
            <img src="images/For_Her.jpg" className="img-fluid rounded-3" alt="main banner"></img>
        </div>
        </div>
        <div className="col-6">
        <div className="main-banner-content p-3">
            <img src="images/For_Him.jpg" className="img-fluid rounded-3" alt="main banner"></img>
        </div>
        </div>
        </div>   
        </div>   
        </section>

        <section className="home-wrapper-4 py-2">
        <div className="container-xxl">
        <div className="row">
        <div className="col-6">
        <div className="main-banner-content p-3">
            <img src="images/b3.jpg" className="img-fluid rounded-3" alt="main banner"></img>
        </div>
        </div>
        <div className="col-6">
        <div className="main-banner-content p-3">
            <img src="images/b4.png" className="img-fluid rounded-3" alt="main banner"></img>
        </div>
        </div>
        </div>   
        </div>   
        </section>
        </>
    );
};

export default Home;