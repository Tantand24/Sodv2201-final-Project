import { poolPromise } from "../config/db";
import sql from 'mssql'

//student = gets all courses under specifed studentID
export const getAllUserCourses = async (studentID) => {
    const pool = await poolPromise;

    const result = await pool.request()
        .input('studentID', sql.Int, studentID)
        .query('SELECT * FROM registrations WHERE studentID = @studentID');
    return result.recordset;
}

//student = adds a new user to the database
export const registerStudent = async (Username, PasswordHash, FirstName, LastName, Email, Phone, Birthday, Department, ProgramCode) => {
    const pool = await poolPromise;

    await pool.request()
        .input('Username', sql.VarChar, Username)
        .input('PasswordHash', sql.VarChar, PasswordHash)
        .input('FirstName', sql.VarChar, FirstName)
        .input('LastName', sql.VarChar, LastName)
        .input('Email', sql.VarChar, Email)
        .input('Phone', sql.VarChar, Phone)
        .input('Birthday', sql.Date, Birthday)
        .input('Department', sql.VarChar, Department)
        .input('ProgramCode', sql.VarChar, ProgramCode)
        .query('INSERT INTO students (Username, PasswordHash, FirstName, LastName, Email, Phone, Birthday, Department, ProgramCode) VALUES (@Username, @PasswordHash, @FirstName, @LastName, @Email, @Phone, @Birthday, @Department, @ProgramCode)')
}

//Admin 
// Example: get a single user by username
export const getUserByUsername = async (Username) => {
  const pool = await poolPromise;

  // TODO: change 'Users', 'username', and other column names
  const result = await pool.request()
    .input('Username', sql.VarChar, Username)
    .query(`
      SELECT TOP 1 *
      FROM students
      WHERE Username = @Username
    `);

  return result.recordset[0]; // undefined if not found
};

//Admin
//Gets all the students registered in the database
export const getAllStudent = async () => {
  const pool = await poolPromise;

  const result = await pool.request()
    .query(`
        SELECT *
        FROM students`);

  return result.recordset;
};

//Admin
//Deletes course specified by CourseCode
export const deleteCourse = async (CourseCode) => {
  const pool = await poolPromise;

  const result = await pool.request()
    .input('CourseCode', sql.VarChar, CourseCode)
    .query('DELETE FROM courses WHERE CourseCode = @CourseCode')
};

//Admin
//Updates course specified by CourseID
export const updateCourse = async (CourseID, CourseCode, Name, Term, Description, StartDate, EndDate, ProgramCode) => {
  const pool = await poolPromise;

  const result = await pool.request()
    .input('CourseID', sql.VarChar, CourseID)
    .input('CourseCode', sql.VarChar, CourseCode)
    .input('Name', sql.VarChar, Name)
    .input('Term', sql.VarChar, Term)
    .input('Description', sql.VarChar, Description)
    .input('StartDate', sql.Date, StartDate)
    .input('EndDate', sql.Date, EndDate)
    .input('ProgramCode', sql.VarChar, ProgramCode)
    .query(`UPDATE courses SET 
      CourseCode = @CourseCode, 
      Name = @Name,
      Term = @Term,
      Description = @Description,
      StartDate = @StartDate,
      EndDate = @EndDate,
      ProgramCode = @ProgramCode
      WHERE CourseID = @CourseID`)
};

//Admin
//Gets all registered courses in the database
export const getAllcourse = async () => {
  const pool = await poolPromise;

  const result = await pool.request()
  .query(`SELECT * FROM courses`);

  return result.recordset;
}

//Admin
//Gets all the contact Messages in the database
export const getAllContactMessages = async () => {
  const pool = await poolPromise;

  const result = await pool.request()
  .query(`SELECT * FROM contact_messages`);

  return result.recordset;
}