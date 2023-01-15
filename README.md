# Renting Shoes and Cloths

##Document:
System Requirement Specification Document

## Title:
System Requirement Specification for Payroll Management System

## Team: 
Direct Customer (Employee,HR & Manager), Architect,System Analyst.

## Objective (Purpose):
Payroll software is an on-premises or cloud-based solution. This system manages, maintains, and automates payments to employees. Robust, integrated, and properly configured payroll software will  help Transflower maintain compliance with tax laws and other financial regulations, and reduce costs.
The payroll system web application is intended to provide complete payroll structure for employee. It will enable HR to generate salaries of all employees. Employees can login into this payroll portal for monitoring their own salary structure .
		
## Scope:
This System allows HR to maintain the employee details by modifying their salary structure.
The System  will be able to show structure of salaries through Customized dashboard for various department employees.
This system will allow employees to view their salary updates.


## Definitions:
	PMS: Payroll Management System
	Portal: Personalized Online Web Application
	KPI:Key Performance Indicator
	Dashboard: Personalized information presented using  BI techniques such as grid, score card, graph, KPI

## Functional Requirements:

Login Access will be given to HR,Employee & Manager.

-HR Login:

Authorized HR officer will first need to login with correct credentials to access our payroll system.
Modification access is limited only to HR person.
HR will specify the basic salary structure of employees from all the departments.Whenever company policies are revised, salary structure will be updated accordingly for all employees.
Time sheet will be provided to the HR by Manager on monthly basis.It will basically elaborate details about employee bio,punch-in time & punch-out time,leave record.
Accoring to the time sheet report, salary will be calculated & payment will be released.
If any Employee raises the query related to the payment issue , HR will request the Manager for that particular Employee Report.
System will have settings option through which we can add the new admin or change the login credentials.

-Employee Login:

Authorized Employee will first need to login with correct credentials.
Employee can view his salary structure & can check the monthly salary status.
Employees can download their salary receipt if the salary is successful.Otherwise, they can raise the complaint to the HR in case of any payment issue .
Employee won't have modification access.

-Manager Login:

Manager will first need to login with correct credentials.
Manager can view the salary structure of all employees.
Employee Report will be provided to the HR by the Manager on demand.
Manager won't have modification access.

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
