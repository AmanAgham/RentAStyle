import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {useHistory,useParams} from "react-router-dom";
import Product from "./Product";
import TopSlider from "./TopSlider";
import swal from 'sweetalert';
import PageNextIcon from '@rsuite/icons/PageNext';
import PagePreviousIcon from '@rsuite/icons/PagePrevious';

function AllProduct(props){
    const [products,setProducts]=useState([])
    const [totalPage,setTotalPage]=useState(0)
    const {pcat,subcat}=useParams()
    const {pname}=useParams()
    const state=useSelector((state)=>state);
    const [item,setItem]=useState({})
    const [qty,setQty]=useState(1)
    const dispatch=useDispatch()
    const history=useHistory()

    const [showDialog,setShowDialog]=useState("modal fade")
    const [display,setDisplay]=useState("none")
    
    const showModal=(prod)=>{
        console.log("Child call parent")
        setShowDialog("modal fade show")
        setDisplay("block")
        setItem(prod)
    }

    const [search,setSearch]=useState([]);
    const searchItemByNAme=(e)=>{
       console.log(e);
       console.log(products[0]); 
       setSearch(products.filter((p)=>{
        if(p.pname.toUpperCase().includes(e.target.value.toUpperCase()))
        {
            console.log(pname);
            <Product key={p.prodid} x={p} showModal={showModal} />
        }  
    })) 


    }


    const checkItem =(prodid)=>{
        return state.cart.findIndex(x=>x.prodid===prodid)<0
    }

    const closeDialog=()=>{        
        setShowDialog("modal fade")
        setDisplay("none")
    }

    const loadDataFromServer=(page=0,pagesize=8)=>{
        axios.get("http://localhost:8080/api/products/paginated?page="+page+"&pagesize="+pagesize)
            .then(resp=>{
                console.log(resp.data.data.total)
                setProducts(resp.data.data.plist)
                setTotalPage(Math.ceil(resp.data.data.total/pagesize))
                console.log(products)
            })
    }

    // useEffect(() => {loadDataFromServer()},[])

    useEffect(()=>{
        console.log(pcat,subcat)
        if(pcat !== undefined){
            axios.get("http://localhost:8080/api/products/cats?cat="+pcat+"&subcat="+subcat)
            .then(resp=>{
                console.log(resp.data)
                setProducts(resp.data.data)
                console.log(products)
            })
        }
        else {
            loadDataFromServer()
        }
    },[pcat,subcat])
    const addToCart=item=>{  
        if(sessionStorage.getItem("userid")==null){
            swal({
                title: "Warning",
                text: "Please login first to buy product",
                icon: "warning",
                button: "ok",
              });
            history.push("/clogin")
        }
        else if(sessionStorage.getItem("role")!=="customer"){
            swal({
                title: "Warning",
                text: "Only customer can buy product",
                icon: "warning",
                button: "ok",
              });
        }      
        else{            
            if(checkItem(item.prodid))
            {     
                showModal() 
                setDisplay("none")
                setShowDialog("modal fade") 
                item.qty=qty         
                dispatch({type:'AddItem',payload:item})
                swal({
                    title: "Success",
                    text: "Item added to cart successfully",
                    icon: "success",
                    button: "ok",
                  });
            }
            else{                
                swal({
                    title: "Warning",
                    text: "Item already in cart",
                    icon: "warning",
                    button: "ok",
                  });
            }
        }
    }




    /*88888888888888888888888888888888888*/

    useEffect(()=>{
        console.log(pname)
        if(pname !== undefined){
            axios.get("http://localhost:8080/api/products/pname?pname="+pname)
            .then(resp=>{
                console.log(resp.data)
                setProducts(resp.data.data)
                console.log(products)
            })
        }
        else {
            loadDataFromServer()
        }
    },[pname])


    const handlePageClick=({selected:selectedPage})=>{
        loadDataFromServer(selectedPage)
    }
    
    return (
        <>                 
        <TopSlider/>
        <div className="container-fluid" style={{width:"92%"}}>
            <div className="card shadow bg-transparent rounded">
                <div className="card-body">
                
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search your products here"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={searchItemByNAme}/>


                <ReactPaginate 
                    previousLabel=<PagePreviousIcon/>
                    nextLabel=<PageNextIcon/>
                    containerClassName={"pagination"}
                    pageCount={totalPage}
                    onPageChange={handlePageClick}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"} />
                    <div className="row">

                    {products.map(x=>(
                        <Product key={x.prodid} x={x} showModal={showModal} />
                    ))}
                    </div>
                    
                </div>
            </div> 
            {display=="block"?( 
            <div className={showDialog} style={{zIndex:"1000",display:display}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Add to Cart</h5>
                            <button onClick={closeDialog} className="close">&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex">
                                <img src={"http://localhost:8080/"+item.photo} style={{width:"200px"}}/>
                                <div className="ml-3">
                                    <h4 className="p-2 text-warning">{item.pname}</h4>
                                    <h5 className="px-2">Brand: {item.brand}</h5>
                                    <h5 className="px-2">Category: {item.pcat}</h5>
                                    <h5 className="px-2">Seller: {item.sellerName}</h5>
                                    <h5 className="px-2">Price: &#8377; {item.price}</h5>
                                    <input type="number" min="1" value={qty} onChange={e=>setQty(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={e=>addToCart(item)} className="btn btn-warning btn-sm">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>) : ""}
        </div>
        </>
    )
}

export default AllProduct;