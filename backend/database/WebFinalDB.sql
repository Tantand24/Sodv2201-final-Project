USE master;
GO

IF  DB_ID('WebAppDB') IS NOT NULL
    DROP DATABASE WebAppDB;
GO

CREATE DATABASE WebAppDB;
GO

USE WebAppDB;
GO

CREATE TABLE "User" (
	UserID INT PRIMARY KEY IDENTITY,
	"Status" NVARCHAR(10),
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    Email NVARCHAR(100),
    Phone NVARCHAR(15),
    Birthday DATE,
    Username NVARCHAR(100),
    Password NVARCHAR(200) -- should be hashed
);

CREATE TABLE Program (
	ProgramID INT PRIMARY KEY IDENTITY,
	ProgramCode NVARCHAR(6),
	ProgramName NVARCHAR(500),
	Term NVARCHAR(50),
    Duration INT,
    "Description" NVARCHAR(MAX),
    StartDate DATE,
    EndDate DATE,
    FeesDomestic DECIMAL(10,2),
	FeesInternational DECIMAL(10,2)
);

CREATE TABLE Department (
	DepartmentID INT PRIMARY KEY IDENTITY,
	ProgramID INT NOT NULL,
	DepartmentName NVARCHAR(50),

	CONSTRAINT FK_Department_ProgramID FOREIGN KEY (ProgramID) REFERENCES Program(ProgramID)
);

CREATE TABLE Course (
	"Subject" NVARCHAR(4),
	CourseNumber INT,
	PRIMARY KEY ("Subject", CourseNumber),

	CourseName NVARCHAR(500),
	Term NVARCHAR(50),
	StartDate DATE,
    EndDate DATE,
	"Description" NVARCHAR(MAX),
);

CREATE TABLE Student (
	StudentID INT PRIMARY KEY IDENTITY,
	UserID INT NOT NULL,
	DepartmentID INT NOT NULL,
	ProgramID INT NOT NULL,

	CONSTRAINT FK_Student_DepartmentID FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID),
	CONSTRAINT FK_Student_ProgramID FOREIGN KEY (ProgramID) REFERENCES Program(ProgramID),
	CONSTRAINT FK_Student_UserID FOREIGN KEY (UserID) REFERENCES "User"(UserID)
);

CREATE TABLE CourseRegistry (
	"Subject" NVARCHAR(4),
	CourseNumber INT NOT NULL,
	StudentID INT NOT NULL,
	PRIMARY KEY ("Subject", CourseNumber, StudentID),
	CONSTRAINT FK_CourseRegistry_CourseID FOREIGN KEY ("Subject", CourseNumber) REFERENCES Course("Subject", CourseNumber),
	CONSTRAINT FK_CourseRegistry_StudentID FOREIGN KEY (StudentID) REFERENCES Student(StudentID)
);

CREATE TABLE ContactForm (
	ContactFormID INT IDENTITY,
	StudentID INT NOT NULL,
	"Message" NVARCHAR(MAX),
	PublishDate DATETIME
)

/*
 * Bridge Tables
 */

CREATE TABLE StudentProgram (
	StudentID INT NOT NULL,
	ProgramID INT NOT NULL,
	PRIMARY KEY (StudentID, ProgramID),
	CONSTRAINT FK_StudentProgram_StudentID FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
	CONSTRAINT FK_StudentProgram_ProgramID FOREIGN KEY (ProgramID) REFERENCES Program(ProgramID)
);


CREATE TABLE CourseProgram (
	"Subject" NVARCHAR(4),
	CourseNumber INT NOT NULL,
	ProgramID INT NOT NULL,
	PRIMARY KEY ("Subject", CourseNumber, ProgramID),
	CONSTRAINT FK_CourseProgram_CourseID FOREIGN KEY ("Subject", CourseNumber) REFERENCES Course("Subject", CourseNumber),
	CONSTRAINT FK_CourseProgram_ProgramID FOREIGN KEY (ProgramID) REFERENCES Program(ProgramID)
);





/*
 * MOCK PROGRAM AND COURSE DATA
 */
 
INSERT INTO Program (ProgramCode, ProgramName, Term, "Description", StartDate, EndDate, FeesDomestic, FeesInternational)
VALUES
	('SD-D', 'Software Development - Diploma', 'Winter', 'A comprehensive two-year software development diploma program designed to equip students...', '2024-09-05', '2026-06-15', 9254, 27735),
	('SD-PD', 'Software Development - Post Diploma', 'Winter', 'Jumpstart your tech career with our one-year post-diploma program in software development...', '2024-09-05', '2025-06-15', 7895, 23675);
GO

INSERT INTO Course ("Subject", CourseNumber, CourseName, Term, StartDate, EndDate, "Description")
VALUES
	('DATA', 2201, 'Relational Databases', 'Fall', '2025-09-02', '2025-12-18', 'In this course learners use Structured Query Language (SQL) on commercial relational databases.'),
	('MGMT', 1104, 'Project Management in Software Development', 'Fall', '2025-09-02', '2025-12-18', 'This course introduces the fundamental principles necessary for successful management of software projects.'),
	('SODV', 2101, 'Rapid Application Development', 'Fall', '2025-09-02', '2025-12-18', 'This course introduces programming techniques supported by a visual rapid application development environment including forms, controls, user-defined classes and objects. '),
	('SODV', 2201, 'Web Programming', 'Fall', '2025-09-02', '2025-12-18', 'This course gives learners the opportunity to enhance and enrich their skills in web programming.'),
	('SODV', 2202, 'Object Oriented Programming', 'Fall', '2025-09-02', '2025-12-18', 'In this course, learners explore object-oriented design concepts and techniques.')
GO