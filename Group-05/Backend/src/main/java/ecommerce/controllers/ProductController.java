package ecommerce.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.entities.Product;
import ecommerce.entities.Seller;
import ecommerce.models.ProductDTO;
import ecommerce.models.ProductPagedResponseDTO;
import ecommerce.models.ProductResponseDTO;
import ecommerce.models.Response;
import ecommerce.services.ProductService;
import ecommerce.services.SellerService;

@CrossOrigin
@RestController
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	private ProductService productService;

	@Autowired
	private SellerService sellerService;

	@PostMapping
	public ResponseEntity<?> saveProduct(ProductDTO dto) {
		System.out.println(dto);
		Product product = ProductDTO.toEntity(dto);
		Seller seller = sellerService.findById(dto.getSellerId());
		product.setSeller(seller);
		productService.addProduct(product, dto.getPic());
		return ResponseEntity.status(HttpStatus.OK).body(product);
	}

	@PutMapping("{id}")
	// Removing @PathVariable("id")
	public ResponseEntity<?> updateProduct(@RequestBody Product product, @PathVariable int id) {
		System.out.println(product);
		productService.updateProduct(product);
		return ResponseEntity.status(HttpStatus.OK).body(product);
	}

	@GetMapping("{id}")
	// Removing @PathVariable("id")
	public ResponseEntity<?> findProduct(@PathVariable int id) {
		Product product = productService.findProductById(id);
		return Response.success(ProductResponseDTO.fromEntity(product));
	}

	@GetMapping
	public ResponseEntity<?> findAllProducts(Optional<Integer> sellerid) {
		List<ProductResponseDTO> result = new ArrayList<ProductResponseDTO>();
		if (sellerid.isPresent()) {
			System.out.println(sellerid);
			for (Product p : productService.findProducts(sellerid.get())) {
				result.add(ProductResponseDTO.fromEntity(p));
			}

		} else {
			for (Product p : productService.allProducts()) {
				result.add(ProductResponseDTO.fromEntity(p));
			}
		}

		return Response.success(result);
	}

	@GetMapping("/paginated")
	public ResponseEntity<?> paginatedProducts(int page, int pagesize) {
		List<ProductResponseDTO> result = new ArrayList<ProductResponseDTO>();
		Page<Product> data = productService.allProductsPaginated(page, pagesize);
		data.forEach(item -> {
			result.add(ProductResponseDTO.fromEntity(item));
		});
		ProductPagedResponseDTO resp = new ProductPagedResponseDTO();
		resp.setPagesize(pagesize);
		resp.setCurrent(page);
		resp.setTotal(data.getTotalElements());
		resp.setPlist(result);
		return Response.success(resp);
	}

	@GetMapping("cats")
	public ResponseEntity<?> findCategoryProducts(String cat, String subcat) {
		List<ProductResponseDTO> result = new ArrayList<ProductResponseDTO>();

		for (Product p : productService.categoryProducts(cat, subcat)) {
			result.add(ProductResponseDTO.fromEntity(p));
		}

		return Response.success(result);
	}

	@DeleteMapping("{id}")
	// Removing @PathVariable("id")
	public ResponseEntity<?> deleteProduct(@PathVariable int id) {
		productService.deleteProduct(id);
		return Response.status(HttpStatus.OK);
	}
}
