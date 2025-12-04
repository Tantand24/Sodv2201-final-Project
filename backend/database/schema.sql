-- Simple SQL Server schema for Bow Course Registration
-- Run this in SQL Server Management Studio before starting the backend.

IF DB_ID('BowCourseRegistration') IS NULL
BEGIN
  CREATE DATABASE BowCourseRegistration;
END;
GO

USE BowCourseRegistration;
GO

-- Students table
IF OBJECT_ID('students', 'U') IS NOT NULL DROP TABLE students;
IF OBJECT_ID('programs', 'U') IS NOT NULL DROP TABLE programs;
IF OBJECT_ID('courses', 'U') IS NOT NULL DROP TABLE courses;
IF OBJECT_ID('registrations', 'U') IS NOT NULL DROP TABLE registrations;
IF OBJECT_ID('contact_messages', 'U') IS NOT NULL DROP TABLE contact_messages;
GO

CREATE TABLE students (
  StudentID INT IDENTITY(1,1) PRIMARY KEY,
  FirstName NVARCHAR(50) NOT NULL,
  LastName NVARCHAR(50) NOT NULL,
  Email NVARCHAR(100) NOT NULL UNIQUE,
  Phone NVARCHAR(20),
  Birthday DATE,
  Department NVARCHAR(50) NOT NULL,
  ProgramCode NVARCHAR(20) NOT NULL,
  Username NVARCHAR(50) NOT NULL UNIQUE,
  PasswordHash NVARCHAR(255) NOT NULL,
  IsAdmin BIT NOT NULL DEFAULT 0
);
GO

CREATE TABLE programs (
  ProgramCode NVARCHAR(20) PRIMARY KEY,
  Name NVARCHAR(100) NOT NULL,
  Term NVARCHAR(20) NOT NULL,
  Description NVARCHAR(255),
  StartDate DATE,
  EndDate DATE,
  FeesDomestic DECIMAL(10,2),
  FeesInternational DECIMAL(10,2)
);
GO

CREATE TABLE courses (
  CourseID INT IDENTITY(1,1) PRIMARY KEY,
  CourseCode NVARCHAR(20) NOT NULL UNIQUE,
  Name NVARCHAR(100) NOT NULL,
  Term NVARCHAR(20) NOT NULL,
  Description NVARCHAR(255),
  StartDate DATE,
  EndDate DATE,
  ProgramCode NVARCHAR(20) NOT NULL
    REFERENCES programs(ProgramCode)
);
GO

CREATE TABLE registrations (
  RegistrationID INT IDENTITY(1,1) PRIMARY KEY,
  StudentID INT NOT NULL
    REFERENCES students(StudentID),
  CourseID INT NOT NULL
    REFERENCES courses(CourseID),
  Term NVARCHAR(20) NOT NULL,
  RegisteredAt DATETIME NOT NULL DEFAULT GETDATE(),
  CONSTRAINT UQ_StudentCourseTerm UNIQUE (StudentID, CourseID, Term)
);
GO

CREATE TABLE contact_messages (
  MessageID INT IDENTITY(1,1) PRIMARY KEY,
  StudentID INT NOT NULL
    REFERENCES students(StudentID),
  Subject NVARCHAR(100) NOT NULL,
  Message NVARCHAR(MAX) NOT NULL,
  CreatedAt DATETIME NOT NULL DEFAULT GETDATE()
);
GO

-- Sample program data based on the assignment description
INSERT INTO programs (ProgramCode, Name, Term, Description, StartDate, EndDate, FeesDomestic, FeesInternational)
VALUES
('SD-DIP', 'Software Development - Diploma (2 years)', 'Winter',
 'A comprehensive two-year software development diploma program designed to equip students with practical skills.',
 '2024-09-05', '2026-06-15', 9254.00, 27735.00),
('SD-PD', 'Software Development - Post-Diploma (1 year)', 'Winter',
 'Jumpstart your tech career with our one-year post-diploma program in software development.',
 '2024-09-05', '2025-06-15', 7895.00, 23675.00);
GO

-- Sample course data
INSERT INTO courses (CourseCode, Name, Term, Description, StartDate, EndDate, ProgramCode)
VALUES
('SODV1101', 'Introduction to Web Programming', 'Winter', 'Basics of HTML, CSS and web concepts.', '2025-01-10', '2025-04-20', 'SD-DIP'),
('SODV1201', 'Web Programming', 'Winter', 'Frontend development with React.', '2025-01-10', '2025-04-20', 'SD-DIP'),
('SODV2201', 'Fullstack Web Development', 'Winter', 'Frontend and backend integration.', '2025-01-10', '2025-04-20', 'SD-DIP'),
('SODV2101', 'Rapid Application Development', 'Winter', 'Desktop application development with C#.', '2025-01-10', '2025-04-20', 'SD-DIP');
GO

-- Create a default admin account (password: Admin123!)
DECLARE @AdminHash NVARCHAR(255);
-- This value should be generated using bcrypt in Node, but for demo purposes
-- you can update it later from the backend or set it manually.
SET @AdminHash = 'REPLACE_WITH_HASHED_PASSWORD';
INSERT INTO students (FirstName, LastName, Email, Phone, Birthday, Department, ProgramCode, Username, PasswordHash, IsAdmin)
VALUES ('System', 'Admin', 'admin@bowvalley.ca', '0000000000', '1990-01-01', 'SD', 'SD-DIP', 'admin', @AdminHash, 1);
GO
