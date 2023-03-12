package ecommerce.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ecommerce.entities.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Integer> {

}
