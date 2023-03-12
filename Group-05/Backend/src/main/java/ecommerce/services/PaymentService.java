package ecommerce.services;

import ecommerce.entities.Payment;

public interface PaymentService {
	Payment savePayment(Payment payment);

	Payment findPaymentById(int id);
}
