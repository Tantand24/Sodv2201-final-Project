import { poolPromise } from "../config/db";
import sql from 'mssql'

<<<<<<< Updated upstream
<<<<<<< Updated upstream
//user = gets all courses under specifed username
export const getAllUserCourses = async (username) => {
    const pool = await poolPromise;

    const result = await pool.request()
        .input('username', sql.VarChar, username)
        .query('SELECT course FROM USERS WHERE username = @username');
    return result.recordset;
}

//user = adds a new user to the database
export const registerUser = async (username, password, firstName, lastName, email, phone, birthday, department, program) => {
    const pool = await poolPromise;

    await pool.request()
        .input('username', sql.VarChar, username)
        .input('password', sql.VarChar, password)
        .input('firstName', sql.VarChar, firstName)
        .input('lastName', sql.VarChar, lastName)
        .input('email', sql.VarChar, email)
        .input('phone', sql.VarChar, phone)
        .input('birthday', sql.DateTime, birthday)
        .input('department', sql.VarChar, department)
        .input('program', sql.VarChar, program)
        .query('INSERT INTO Users (username, password, firstName, lastName, email, phone, birthday, department, program) VALUES (@username, @password, @firstName, @lastName, @email, @phone, @birthday, @department, @program)')
=======
=======
>>>>>>> Stashed changes
// Example: get a single user by username
export const getUserByUsername = async (username) => {
  const pool = await poolPromise;

  // TODO: change 'Users', 'username', and other column names
  const result = await pool
    .request()
    .input('username', sql.VarChar, username)
    .query(`
      SELECT TOP 1 *
      FROM Users       -- TODO: replace with your real table name
      WHERE username = @username
    `);

  return result.recordset[0]; // undefined if not found
};

export const getAllStudent = async () => {
  const pool = await poolPromise;

  const result = await pool
  .request()
  .query(`
    `)
}

export const getAllcourse = async () => {
  const pool = await poolPromise;

  const result = await pool
  .request()
  .query(`
    `)
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}