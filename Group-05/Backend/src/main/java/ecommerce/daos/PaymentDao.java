package ecommerce.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import ecommerce.entities.Payment;

public interface PaymentDao extends JpaRepository<Payment, Integer> {

}
