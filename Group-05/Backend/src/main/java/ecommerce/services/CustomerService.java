package ecommerce.services;

import java.util.List;

import javax.validation.Valid;

import ecommerce.entities.Customer;
import ecommerce.models.ForgotPasswordDTO;

public interface CustomerService {
	Customer registerCustomer(Customer cust);

	List<Customer> allCustomers();

	Customer findById(int id);

	Customer validate(String userid, String pwd);

	boolean verifyUserId(String userid);

	void updateProfile(Customer cust);

	Customer forgotPassword(@Valid ForgotPasswordDTO emailDto);
}
