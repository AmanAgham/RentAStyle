package ecommerce.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.entities.Order;
import ecommerce.entities.OrderDetails;

@Repository
public interface OrderDetailsDao extends JpaRepository<OrderDetails, Integer> {
	
	List<OrderDetails> findByOrder(Order order);
	
}
