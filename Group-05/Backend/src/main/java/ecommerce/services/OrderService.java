package ecommerce.services;

import java.util.List;

import ecommerce.entities.Customer;
import ecommerce.entities.Order;

public interface OrderService {

	Order saveOrder(Order order);
	List<Order> getAllOrders();
	List<Order> getCustomerOrders(Customer customer);
	Order findById(int id);
}
