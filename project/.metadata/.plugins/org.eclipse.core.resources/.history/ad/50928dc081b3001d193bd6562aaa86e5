package pojos;

import java.time.LocalDate;
import javax.persistence.*;//JPA : Java EE specs
//user : one , parent , inverse : since DOES NOT FK

@Entity
@Table(name = "users_tbl")
public class User extends BaseEntity {
	@Column(name = "first_name", length = 20)
	private String firstName;
	@Column(name = "last_name", length = 20)
	private String lastName;
	@Column(length = 30, unique = true) // => unique constraint
	private String email;
	@Column(length = 20, nullable = false) // => NOT NULL
	private String password;
	@Enumerated(EnumType.STRING) // => col : varchar => enum const name
	@Column(name = "user_role", length = 20)
	private Role userRole;
	private LocalDate dob;
	// User 1--->1 Cart
	@OneToOne(mappedBy = "customer", cascade = CascadeType.ALL, 
			fetch = FetchType.LAZY, orphanRemoval = true)
	private ShoppingCart cart;

	public User() {
		// TODO Auto-generated constructor stub
	}

	public User(String firstName, String lastName, String email, String password, Role userRole, LocalDate dob) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.userRole = userRole;
		this.dob = dob;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getUserRole() {
		return userRole;
	}

	public void setUserRole(Role userRole) {
		this.userRole = userRole;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public ShoppingCart getCart() {
		return cart;
	}

	public void setCart(ShoppingCart cart) {
		this.cart = cart;
	}
	//add a helper method to establish bi dir link between User n Cart
	public void addCart(ShoppingCart cart)
	{
		this.setCart(cart);//parent ---> child
		cart.setCustomer(this);//child ---> parent
	}
	
	@Override
	public String toString() {
		return "User Id " + getId() + " [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", userRole=" + userRole + ", dob=" + dob + "]";
	}

}
