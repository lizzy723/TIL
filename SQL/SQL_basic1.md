### A. SQL basic

1. Introduction to SQL
    - **RDBMS** : Relational Database Management System.
    - The data in RDBMS is stored in database objects called **tables.** A table is a collection of related data entries and it consists of columns and rows.
    - A **field** is a **column** in a table that is designed to maintain specific information about every record in the table.
    - A **record**, also called a **row**, is each individual entry that exists in a table.

2. SQL Syntax

    - SQL keyword는 case sensitive하지 않다.
    - semicolon이 필수인 database system도 있다. 일단 semicolon은 standard way to separate each SQL **statement** in database systems 이다.
    - 가장 중요한 SQL command 몇개 알아보자.

        ```sql
        SELECT #extracts data from a database
        UPDATE #updates data in a database
        DELETE #deletes data from a database
        INSERT INTO #inserts new data into a database
        CREATE DATABASE #creates a new database
        ALTER DATABASE #modifies a database
        CREATE TABLE #creates a new table
        ALTER TABLE #modifies a table
        DROP TABLE #deletes a table
        CREATE INDEX #creates an index (search key)
        DROP INDEX #deletes an index
        ```

<br>

### B. `SELECT`, `WHERE`, `Order By`, Operators(`And`, `Or`, `Not`), and `Null`

1. `SELECT` statement

    - column(field)를 가져온다. 
      ```sql
      SELECT column1, column2, ...
      FROM table_name;
      ```
      
    - 모든 컬럼을 가져오고 싶을땐, `SELECT * FROM table_name;` 
      ```sql
      #Select all the "different values" from the Country column in the Customers table.
      SELECT DISTINCT Country FROM Customers

      #unique value의 수를 세어준다. 
      SELECT COUNT(DISTINCT Country) FROM Customers;
      #The SELECT DISTINCT statement is used to return only distinct (different) values.
      ```

2. `WHERE` clause

    - specified condition을 만족하는 record만 추출한다. 
    - `SELECT`, `UPDATE`, `DELETE` 등과 함께 사용할 수 있다. 
      ```sql
      SELECT column1, column2, ...
      FROM table_name
      WHERE condition;
      ```
    - text는 quote로 감싸고, numeric은 그냥 쓰면 된다. 
      ```sql
      #예시 1
      SELECT * FROM Customers
      WHERE Country='Mexico';

      #예시 2
      SELECT * FROM Customers
      WHERE CustomerID=1;
      ```
      <img width="600" alt="Screen Shot 2021-09-02 at 10 47 40 AM" src="https://user-images.githubusercontent.com/43725183/131768268-1f0dbe3b-7429-4b2a-83b0-81c7bbdaaf90.png">

3. `Order By` Keyword
    default는 오름차순 정렬. 내림차순으로 하고 싶을때는 `DESC`를 쓰도록! 
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    ORDER BY column1, column2, ... ASC|DESC;
    ```
    * `ORDER BY Country;` → 오름차순
    * `ORDER BY Country DESC;` → 내림차순
    * `ORDER BY Country ASC, CustomerName DESC;` → Country는 오름차순으로 CustomerName은 내림차순으로 정렬.

4. `And`, `Or`, `Not` Operators
    The WHERE clause can be combined with AND, OR, and NOT operators.
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition1 AND condition2 AND condition3 ...;
    #WHERE Country='Germany' AND City='Berlin';
    ```

    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition1 OR condition2 OR condition3 ...;
    #WHERE City='Berlin' OR City='München';
    ```

    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE NOT condition;
    #WHERE NOT Country='Germany';
    ```
5. `Null` Values
    no value일때 null 값이 사용된다. <br>
    기본적인 연산자 대신 `IS NULL` 과 `IS NOT NULL`을 사용할 수 있다. 
    ```sql
    #IS NULL
    SELECT column_names
    FROM table_name
    WHERE column_name IS NULL;
    ```

    ```sql
    #IS NOT NULL
    SELECT column_names
    FROM table_name
    WHERE column_name IS NOT NULL;
    ``` 
    
### C.Like, Wildcards, in, between 
### D. Insert into, update, delete, select top, limit, fetch..
### E. functions
