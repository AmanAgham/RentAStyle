package ecommerce.services;

import java.util.List;

import ecommerce.entities.Order;
import ecommerce.entities.OrderDetails;

public interface OrderdetailService {

	void saveOrderDetails(OrderDetails od);
	
	OrderDetails findById(int id);
	
	List<OrderDetails> findByOrder(Order order);
	
}
