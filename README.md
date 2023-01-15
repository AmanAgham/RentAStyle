# Renting Shoes and Cloths

## Title:
System Requirement Specification for Customer Shopping and Admin to track its eventory 

## Team: 
Direct Customer (Customer, Admin(Employee/owner)), Architect,System Analyst.

## Objective (Purpose):
Shopping software is an on-premises or cloud-based solution for Clothing item shop web application is intended to provide complete solutions for Admin as well as customers through a single get way using the internet.It will enable Admin to setup online shops, customer to browse through the shop and purchase them online 
without having to visit the shop physically. The administration module will enable a system administrator toapprove and reject requests for new shops and maintain various lists of shop category. The Robust, integrated, and properly configured payroll software will  help Admin to maintain compliance with tax laws and other financial regulations, and reduce costs.

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



sir-----
Any annonymous User will be able to view different products avaialble for sale. Any User will be able select product to view from categories avaialble. Registered shoppers will be able promote thier product for sale by adding products to the product catalog maintained by System. Staff will be able to approve or reject request for adding or removing products from product catalog by shoppers. Staff will be to track and maintain stock of products available for sale. Staff will be able to raise reqests for product updatation from product inventory.

Shopper will be able request to add new product to product catalog maintained by system. Sales Team will be able to approve or eject request raised by shopper for adding or removing products from product catalog.

Shopper will be able to update product details which have been already added to product catalog. Shoppers, sales team will be informed well in advaned about low stock or out of stock of products in product catalog. Product listing will be provided based their category, sale, quantity, likes, recommendations. Consumer will be able to add or remove products from shopping cart. System will maintain shopping cart for each consumer to maintain list of items selected by him/her. Consumer will be able view all items from shopping cart. Shopping Cart will present product details, number of items of product selected by consumer with price and total. Consumer will be able procees for Order placement. Registered Customer will be able place an order with the help of Shopping cart maintained by system. Registered Customer will be able to cancel placed order within 24 hours. Registered customer get orders history. Registered customer can get details of order from orderes been placed. Sales team will be able get details of orders of a particular Customer. Sales team will be able to cancel , reject or approve orders been placed by consumer due to some policies of Business. BOD will be able to summary of orders been placed , rejected from Oroder PRocessing of System. BOD will get Business insight by observing daily operations with the of getting orders information. Consumer will be provided options for payment such as through internet banking or UPI or Online payment option. Consumer will asked to submit their payment related information.Consumer will be redirected to payment gateway for secure payment transaction.On successful payment processing using payment gateway system will notify consumer about transaction and order placement status. Customer will be able track order status. Customer will be able track deliver using unique dispatcher id presented. Customer will be able accept or return delivery based on quality received. Delivery person will be able get delivery details sothat he / she can deliver product to customer end. Delivery person will be able to change the status of product delivered. Delivery vendor will be ablt to list all product delivery to be done by their staff. Sales team will be able to monitor shipment done by their vendors. Sales team will be able to track product delivery for particular customer. Customer will able to submit feedback about product they recived. Customer will able to get details about product orders placed. Customer will be cancel his placed order within 24 hours. Customer will be able to update his/ her personal information. Customer will be to manage his profile maintained by system. Customer will be able change his credentails if required. Customer will be notified about order status, delivery status through SMS, Email communication. Customer will get complete information about his orders, likes, comments, details through a dashboard. Customer will be able to update his payment related information. System will present dashboard for Customers, Vendors, Suppliers as well as BOD. Dashboard will provide information using graph, score cards, key perfomance indicators as well Grid data prestation. BOD will be informed about bussiness operations through reports. Customer will be able get thier purchase realted infomation using Customer Dashboard. Shopper will be able track thier product sale being done through online shopping portal/





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
		
		Online Payroll System will be secure from malicious attack, fishing.
		Online Payroll System functionalilites are protected from outside with prper firewall configuration.
		Online Payroll System will be always kept updated with latest anit virus software.
		Bussiness data will be backed up periodically to ensure safty of data using increamental back up strategy.
		Role based security will be applied for Application data and operations accessibility.
		




# database creation


Whenever you start a project, there are two things that you need to keep in mind — Scalability and Performance.
If your database is not capable enough to handle the bulk of data and the number of users, it can lead to serious issues like latency, crash, imbalance and so on. Hence, choosing the right database is a very important step in any project.
Therefore, when choosing a relational database for your project, there are a few things that you need to keep in mind:

1). Scalability: The database that you select should be capable enough to handle the bulk of data and number of users. The scalability refers to how well it can scale as your project grows. It should be able to scale vertically and horizontally, depending upon the requirement.

2). Availability: Availability refers to how reliable the database is or how often it is up and running. The more stable and consistent the database is, the better it is.

3). Durability: Durability refers to how well it can handle failures or crashes. The more robustly it handles failures or crashes, the better it is.

4). Query Capabilities: Query capabilities refer how well can it perform complex queries to retrieve data from different tables within seconds. The faster it performs queries, the better it is.

5). Maintenance: Maintenance refers to how easy or difficult it is to maintain and manage this database across servers or devices. The easier it is to maintain, the better it is.

6). Cost: Cost refers to how expensive or inexpensive this database is compared to other available options in the market.
