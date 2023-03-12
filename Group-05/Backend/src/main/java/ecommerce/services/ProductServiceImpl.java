package ecommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import ecommerce.daos.ProductDao;
import ecommerce.entities.Product;
import ecommerce.utils.StorageService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private StorageService storageService;
	
	@Autowired
	private SellerService sellerService;

	@Override
	public void addProduct(Product p, MultipartFile pic) {
		// TODO Auto-generated method stub
		String photo = storageService.store(pic);
		p.setPhoto(photo);
		productDao.save(p);
	}

	@Override
	public List<Product> findProducts(int sellerId) {
		// TODO Auto-generated method stub
		return productDao.findBySeller(sellerService.findById(sellerId), Sort.by(Sort.Direction.DESC, "prodid"));
	}

	@Override
	public void updateProduct(Product p) {
		Product pp = productDao.getById(p.getProdid());
		p.setSeller(pp.getSeller());
		productDao.save(p);
	}

	@Override
	public void deleteProduct(int prodid) {
		// TODO Auto-generated method stub
		Product p = productDao.getById(prodid);
		productDao.delete(p);
	}

	@Override
	public List<Product> allProducts() {
		// TODO Auto-generated method stub
		return productDao.findAll(Sort.by(Sort.Direction.DESC, "prodid"));
	}

	@Override
	public Product findProductById(int prodid) {
		// TODO Auto-generated method stub
		return productDao.getById(prodid);
	}

	@Override
	public List<Product> categoryProducts(String pcat, String subcat) {
		// TODO Auto-generated method stub
		return productDao.findByPcatAndSubcat(pcat, subcat, Sort.by(Sort.Direction.DESC, "prodid"));
	}

	@Override
	public Page<Product> allProductsPaginated(int page, int pagesize) {
		Page<Product> prods = productDao.findAll(PageRequest.of(page, pagesize, Sort.by(Direction.DESC, "prodid")));
		System.err.println(prods.getSize());
		return prods;
	}
}
