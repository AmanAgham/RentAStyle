
CREATE TABLE Customer
(
UserID int primary key,
Password varchar(255),
FirstName varchar(255),
LastName varchar(255),
Address varchar(255),
State varchar(255),
City varchar(255),
Pincode int,
Email varchar(255),
Phone int
);


CREATE TABLE Admin
(
UserID int,
Password varchar(255),
FirstName varchar(255),
LastName varchar(255),
Email varchar(255),
Phone int);

CREATE TABLE Product
(
 ProductID varchar(50) primary key,
 Description varchar(50),
 Price int,
 Size varchar(25),
 product_condition varchar(50),
 Quantity int
);


CREATE TABLE Categories(
Categories_id varchar(50) primary key,
Categories_Name varchar(25),
product_id varchar(25),
Constraint pi_pk foreign key(product_id) references Product(ProductID)
);


CREATE TABLE Cart
(
 CartId int primary key,
 UserID int,
 Constraint uu_pk foreign key(UserID) references Customer(UserID),
 ProductID varchar(50),
 Constraint pi1_pk foreign key(ProductID) references Product(ProductID)
);

CREATE TABLE Cust_Order
(
 OrderId int primary key,
 Order_Date Date,
 Total_Cost Double(10,2),
 Renting_Duration int,
 CartId int,
 Constraint ci_pk foreign key(CartId) references Cart(CartId)
);


CREATE TABLE Reviews
(
 ReviewId int primary key,
 Product_Name varchar(50),
 UserID int,
 ProductID varchar(50),
 Constraint ui1_pk foreign key(UserID) references Customer(UserID),
 Constraint pi3_pk foreign key(ProductID) references Product(ProductID)
);

CREATE TABLE Purchase
(
 purchase_id int primary key,
 purchase_date Date,
 renting_date Date,
 OrderId int ,
 Constraint oi_pk foreign key(OrderId) references Cust_Order(OrderId),
 CartId int,
 Constraint ci_pk foreign key(CartId) references Cart(CartId)
);


CREATE TABLE Payment
(
 Payment_id int primary key,
 Payment_date Date,
 payment_amount double(15,2),
 Payment_method varchar(50),
 payment_status varchar(50),
 OrderId int,
 Constraint oi1_pk foreign key(OrderId) references Cust_Order(OrderId),
 CartId int,
 Constraint ci_pk foreign key(CartId) references Cart(CartId)
);


CREATE TABLE Shipping(
 Shipping_id int primary key,
 Shipping_date Date,
 Shipping_cost double(15,2),
 Payment_carrier varchar(50),
 OrderId int,
 Tracking_id int,
 Constraint oi2_pk foreign key(OrderId) references Cust_Order(OrderId)
);
