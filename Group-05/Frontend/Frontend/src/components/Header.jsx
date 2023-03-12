import { useSelector } from "react-redux";


function Header(){
    const state=useSelector((state)=>state);
    console.log("Header ",state.loggedin.Username)
    return (
        <div className="jumbotron p-3 mb-0 rounded-0 bg-transparent text-white">
            <h5 style={{marginBottom: "-10px"}}><marquee style={{color: "white"}}>Welcome !!! We have a Great News for You !!!
            The festive season is right around the corner and that can only mean one thing: 
            discounts, discounts and discounts. Renovate your home, upgrade your wardrobe or 
            gift a loved one: our special discounts will make it hard for you to resist picking 
            more than just one product. So get started right away !!!
                </marquee></h5>
            <div className="clearfix"></div>
        </div>
    )
}

export default Header;

