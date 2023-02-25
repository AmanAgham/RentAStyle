package com.app.pojos;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "carts")
public class ShoppingCart extends BaseEntity {
	
	@Column(name = "total_items")
	private int totalItems;
	
	@Column(name = "total_cart_price")
	private double totalCartPrice;
	
	@Column(name = "created_on")
	@CreationTimestamp
	private LocalDateTime createdOn;
	
	@Column(name = "updated_on")
	@UpdateTimestamp
	private LocalDateTime updatedOn;
	
	// Cart 1--->1 User	
	@OneToOne
	@JoinColumn(name = "customer_id") // to specify FK col name
	private User customer;
	
	// Cart 1<----->* CartItem
	//cart : one , parent , inverse
	@OneToMany(mappedBy = "cart",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Product> products = new ArrayList<>();
	
	public ShoppingCart() {
		// TODO Auto-generated constructor stub
	}

	public int getTotalItems() {
		return totalItems;
	}

	public void setTotalItems(int totalItems) {
		this.totalItems = totalItems;
	}

	public double getTotalCartPrice() {
		return totalCartPrice;
	}

	public void setTotalCartPrice(double totalCartPrice) {
		this.totalCartPrice = totalCartPrice;
	}

	public LocalDateTime getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}

	public LocalDateTime getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(LocalDateTime updatedOn) {
		this.updatedOn = updatedOn;
	}

	public User getCustomer() {
		return customer;
	}

	public void setCustomer(User customer) {
		this.customer = customer;
	}

	
	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	@Override
	public String toString() {
		return "ShoppingCart [totalItems=" + totalItems + ", totalCartPrice=" + totalCartPrice + ", createdOn="
				+ createdOn + ", updatedOn=" + updatedOn + ", customer=" + customer + "]";
	}
	
	
}