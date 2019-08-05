create table TParentTask
(
	Parent_ID int identity(1,1) not null primary key,
	Parent_Task varchar(500)
)

create table TProject
(
	Project_ID int identity(1,1) not null primary key,
	Project varchar(500),
	StartDate datetime,
	EndDate datetime,
	[Priority] int
)

create table TTask
(
	Task_ID  int identity(1,1) not null primary key,
	Parent_ID int foreign key references TParentTask(Parent_ID),
	Project_ID int foreign key references TProject(Project_ID),
	Task varchar(500),
	StartDate datetime,
	EndDate datetime,
	[Priority] int,
	[Status] varchar(10)
)

create table TUser
(
	[User_ID]  int identity(1,1) not null primary key,
	FirstName varchar(500),
	LastName varchar(500),
	Employee_ID int,
	Project_ID int foreign key references TProject(Project_ID),
	Task_ID int foreign key references TTask(Task_ID),
)
