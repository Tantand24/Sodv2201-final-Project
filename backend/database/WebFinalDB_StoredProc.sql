USE WebAppDB;
GO

/*
 * UNIVERSAL FEATURES
 */

CREATE PROC DashboardInfo (@UserStatus NVARCHAR(50) = NULL, @ID INT)
AS
BEGIN
SET NOCOUNT ON;
	BEGIN TRY
		IF @UserStatus = 'Student'
			BEGIN
				SELECT U.FirstName, U."Status", S.StudentID, D.DepartmentName, P.ProgramName, P.ProgramCode
				FROM "User" AS U 
				JOIN Student AS S ON U.UserID = S.UserID
				JOIN Department AS D ON S.DepartmentID = D.DepartmentID
				JOIN Program AS P ON D.ProgramID = P.ProgramID
				WHERE S.StudentID = @ID
			END
		ELSE
			BEGIN
				SELECT FirstName, "Status"
				FROM "User"	
				WHERE UserID = @ID
			END
	END TRY

	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
		THROW 50001, @ErrorMessage, 1;
	END CATCH
END
GO

CREATE PROC ViewProfile (@UserStatus NVARCHAR(50) = NULL, @ID INT)
AS
BEGIN
SET NOCOUNT ON;
	BEGIN TRY
		BEGIN
			SELECT FirstName + ' ' + LastName AS [Student Name], "Status", Email, Phone, Birthday, Username 
			FROM "User"
			WHERE UserID = @ID
		END
	END TRY

	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
		THROW 50001, @ErrorMessage, 1;
	END CATCH
END
GO

/*
 * STUDENT FEATURES
 */

CREATE PROC RegisterForCourse (@SubjectName NVARCHAR(4), @CourseNum INT, @SID INT)
AS
BEGIN
SET NOCOUNT ON;
	BEGIN TRY
		DECLARE @MAX_COURSE INT

		SET @MAX_COURSE = 5;

		IF (SELECT COUNT(*) FROM CourseRegistry WHERE StudentID = @SID) <= @MAX_COURSE
		BEGIN
			IF EXISTS (
				SELECT 1 FROM CourseRegistry 
				WHERE "Subject" = @SubjectName
				AND CourseNumber = @CourseNum
				AND StudentID = @SID
			)
			BEGIN
				;THROW 50002,'This Student is already registered to this course', 1;
			END

			INSERT INTO CourseRegistry ("Subject", CourseNumber, StudentID)
			VALUES ( @SubjectName, @CourseNum, @SID);
		END
		ELSE
		BEGIN
			;THROW 50003, 'Student cannot have more than 5 courses', 1;
		END
			
	END TRY

	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
		DECLARE @ErrorNumber INT = ERROR_NUMBER();
		DECLARE @ErrorState INT = ERROR_STATE();
		THROW @ErrorNumber, @ErrorMessage, @ErrorState;
	END CATCH
END
GO

CREATE PROC SubmitContactForm(@SID INT, @StudentMessage NVARCHAR(500))
AS
BEGIN
SET NOCOUNT ON;
	BEGIN TRY
		INSERT INTO ContactForm (StudentID, "Message", PublishDate)
		VALUES (@SID, @StudentMessage, GETDATE());
	END TRY
	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
		THROW 50001, @ErrorMessage, 1;
	END CATCH
END
GO


/*
 * ADMIN FEATURES
 */

CREATE PROC CreateCourse (@SubjectName NVARCHAR(4), @CourseNum INT, @C_Name NVARCHAR(20), @CourseTerm NVARCHAR(50), @Desc NVARCHAR(500))
AS
BEGIN
SET NOCOUNT ON;
	BEGIN TRY
		INSERT INTO Course ("Subject", CourseNumber, CourseName, Term, "Description")
		VALUES (@SubjectName, @CourseNum, @C_Name, @CourseTerm, @Desc)
	END TRY

	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
		THROW 50001, @ErrorMessage, 1;
	END CATCH
END
GO

CREATE PROC EditCourse (@SubjectName NVARCHAR(4), @CourseNum INT, @C_Name NVARCHAR(20), @CourseTerm NVARCHAR(50), @Desc NVARCHAR(500))
AS
BEGIN
SET NOCOUNT ON;
	BEGIN TRY
		UPDATE Course
		SET
			CourseName = @C_Name,
			Term = @CourseTerm,
			"Description" = @Desc
		WHERE "Subject" = @SubjectName AND CourseNumber = @CourseNum
	END TRY

	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
		THROW 50001, @ErrorMessage, 1;
	END CATCH
END
GO

CREATE PROC DeleteCourse (@SubjectName NVARCHAR(4), @CourseNum INT)
AS
BEGIN
SET NOCOUNT ON;
	BEGIN TRY
		DELETE FROM Course WHERE "Subject" = @SubjectName AND CourseNumber = @CourseNum
	END TRY

	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
		THROW 50001, @ErrorMessage, 1;
	END CATCH
END
GO

CREATE PROC ViewRegisteredStudents (@ProgramToView NVARCHAR(50))
AS
BEGIN
SET NOCOUNT ON;
	BEGIN TRY
		SELECT U.LastName + ', ' + U.FirstName AS [Student Name], P.ProgramName
		FROM StudentProgram AS SP
		JOIN Student AS S ON SP.StudentID = S.StudentID
		JOIN "User" AS U ON S.UserID = U.UserID
		JOIN Program AS P ON SP.ProgramID = P.ProgramID
		WHERE P.ProgramName = @ProgramToView
	END TRY

	BEGIN CATCH
		DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
		THROW 50001, @ErrorMessage, 1;
	END CATCH
END
GO