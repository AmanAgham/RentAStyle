# RentAStyle

## Title:
System Requirement Specification for Online Renting of clothes and Shoes

## Team: 
Direct Customer (Customer, Admin), Architect,System Analyst.

## Objective (Purpose):
The online Renting software is an cloud-based solution. This software is for renting Clothing item on web application is intended to provide complete solutions for Admin as well as customers through a single get way using the internet.It will enable Admin to manage the inventory, customer to browse through the portal and get them on rent online without having to visit the shop physically. The administration module will enable a system administrator to manage the inventory.

The online shopping system will use the internet as the sole method for selling goods to its consumers.

## Scope:
This system allows the customer’s to maintain their cart for add or remove the product over the internet.
This system allows the customer to track his record and show the purchase record history
This System allows Admin to update his inventory of his store, tracks the delivery records of the customers.
This System allows Admin to see its salesrecord.


## Definitions:
	SRS- Software Requirement Specification
        GUI- Graphical User Interface
        Stackholder- The person who will participate in system
        Ex. Customer, Administrator, Visitor etc


## Functional Requirements:

Login Access will be given to Customer and Admin.

-Customer Login:

-Admin Login:



Any annonymous User will be able to view different products avaialble for rent. Any User will be able to select categories to view products avaialble. 


Admin will be to track and maintain stock of products available for sale. Staff will be able to raise request for product updatation from product inventory.

System will maintain shopping cart for each registered consumer to maintain list of items selected by him/her. Consumer will be able view all items from shopping 
cart. Shopping Cart will present product details, number of items of product selected by consumer rental price, rent duration and total. Registered Customer will 
be able to place an order with the help of Shopping cart maintained by the system. Registered Customer will be able to review order and if required cancel placed 
order within 24 hours. Registered customer get orders history. Registered customer can get details of order from orderes been placed. Consumer will be provided 
options for payment such as through internet banking or UPI or Online payment option. Consumer will have to fill their payment related information. Consumer will 
be redirected to payment gateway for secure payment transaction. On successful payment processing using payment gateway system will notify consumer about transaction and order placement status. Customer will be able to track their order status. Customer will be able track deliver using unique dispatcher id presented. Customer 
will be able to accept and initiate to return delivery based on the time alloted. Customer will able to submit feedback about product they recived. Customer will 
able to get details about product orders placed. Customer will be cancel his placed order within 24 hours. Customer will be able to update his/ her personal information. Customer will be to manage his profile maintained by system. Customer will be able change his credentails if required. Customer will be able to update
his payment related information.

Admin will be able to get details of orders of a particular Customer. Admin will be able to cancel , reject or approve orders been placed by consumer due to some policies of Business. Admin will be able to summarize the orders been placed and the order rejected from Order Processing of System They will also have provision 
to get Business insight by observing daily, mothly and yearly orders placed and which product is been in demand for that particular time slot. Admin will be informed about bussiness operations through reports and dashboard. Dashboard will provide information using graph, score cards, key perfomance indicators as well Grid data prestation.



## NonFunctional Requirement:

### Security
		Each stakeholder will be able to access system through authentication process.		
		System will provide access to  the content , operations using Role based security (Authorization) (Permissions based on Role)
		System will automatically log of  all stakeholder after some time due to inactiveness.
		System  will internally maintain secure communiction channel between Servers ( Web Servers, App Servers, database Server).
		Sensitive data will be always encrypted across communication.
		User proper firewall to protect servers from out side fishing, velnerable attacks.


### Reliability
		The system will backup business data on regular basis and recover in short time duration to keep system operational
		Continous updates are maintained , continous Adminstration is done to keep system operational.

### Maintainability:
		A Commercial database software will be used to maintain System data Persistence.
		A readymade Web Server will be installed to host online payroll system(Web Site) to management server capabilities.
		IT operations team will easily monitor and configure System using Adminstrative tools provided by Servers.

### Portablility:
		  PDA: Portable Device Application
		  System will provide portable User Interface ( HTML, CSS, JS) through  users will be able to access online payroll system.
		  System can be deployed to single server, multi server, to any OS, Cloud (Azure or AWS or GCP)

### Modularity:
		 System will designed and developed using reusable, independent or dependent business senarios in the form of modules.
		 These modules will be loosely coupled and highly cohesive.
	
### Safety:
		
		System will be secure from malicious attack, fishing.
		System functionalilites are protected from outside with prper firewall configuration.
		System will be always kept updated with latest anit virus software.
		Bussiness data will be backed up periodically to ensure safty of data using increamental back up strategy.
		Role based security will be applied for Application data and operations accessibility.
