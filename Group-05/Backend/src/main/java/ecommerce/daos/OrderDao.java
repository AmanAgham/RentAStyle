package ecommerce.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.entities.Customer;
import ecommerce.entities.Order;

@Repository
public interface OrderDao extends JpaRepository<Order, Integer> {
	
	List<Order> findByCustomer(Customer customer);

}
