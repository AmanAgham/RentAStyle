
function Product(props){
    const {x,showModal}=props

    return (
        <div className="col-sm-3" key={x.prodid}>
            <div className="card text-center text-white mb-3  bg-transparent" style={{boxShadow:"0 0 1px 1px black"}}>
                <div className="card-header p-1 border-bottom border-dark">
                    <h5>{x.pname}</h5>
                </div>
                <div className="card-body py-1">
                <img style={{width:"90%",height:"250px",marginBottom:"10px"}} src={"http://localhost:8080/"+x.photo} className="img-thumnail" />
                <h6 className="float-left">Brand :{x.brand}</h6>                
                <h6 className="float-right">Price: &#8377; {x.price}</h6>                           
                </div>
                <div className="card-footer p-1 border-top border-dark m-2">
                    <button type="button" class="btn btn-outline-warning" onClick={e=>showModal(x)}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Product;