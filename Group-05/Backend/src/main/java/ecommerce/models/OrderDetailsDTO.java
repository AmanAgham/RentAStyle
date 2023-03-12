package ecommerce.models;

import org.springframework.beans.BeanUtils;

import ecommerce.entities.OrderDetails;
import ecommerce.entities.Product;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class OrderDetailsDTO {

	private int id;

	private Product product;

	private int qty;

	public static OrderDetailsDTO fromEntity(OrderDetails entity) {
		OrderDetailsDTO dto = new OrderDetailsDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}
	
	
	
}
