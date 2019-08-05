Alter procedure usp_GetProjectDetails
as
begin

Declare @TempProject table(Project_ID int, Project varchar(50), Priority int ,StartDate date, EndDate date, TaskCount int)

;With projectDetails as (

	select P.Project_ID, P.Project, P.Priority,P.StartDate, P.EndDate,
	(Select count(T.Parent_ID)) as TaskCount from  TProject P
	left join TTask T on P.Project_ID = T.Project_ID
	group by P.Project_ID, P.Project,P.Priority,P.StartDate, P.EndDate

)

insert into @TempProject
select * from projectDetails

;With Completed as (

	select 
		T.Project_ID, 
		(select count(T.Project_ID)) as TaskCCount
	from TTask T
	group by T.Project_ID, T.Status
	having Status = 'COM'
)

Select P.Project_ID, P.Project, P.Priority, P.StartDate, P.EndDate, P.TaskCount, T.TaskCCount
from @TempProject P
left join Completed T on P.Project_ID = T.Project_ID


end

