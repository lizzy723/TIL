### A. Database

* Create DB: 새로운 DB 만들기
    ```sql
    CREATE DATABASE databasename;
    ```

* Drop DB: DB 지우기
    ```sql
    DROP DATABASE databasename;
    ```

* Backup DB: 디스크에 DB 쓰기
    ```sql
    BACKUP DATABASE databasename
    TO DISK = 'filepath';
    ```

    ```sql
    --지난 백업 이후로 변한 부분만 저장. 
    BACKUP DATABASE databasename
    TO DISK = 'filepath'
    WITH DIFFERENTIAL;
    ```
<br> 

### B. Table
* Create Table
  * 데이터 타입은 [여기](https://www.w3schools.com/sql/sql_datatypes.asp)를 참조하기. 
  * Table을 처음 만들면 record가 하나도 없으므로, `insert into`로 채우기

    ```sql
    CREATE TABLE table_name (
        column1 datatype,
        column2 datatype,
        column3 datatype,
       ....
    );
    ```

    아래와 같이 기존에 존재하는 테이블로부터 새로운 테이블을 만들수도 있다. 

    ```sql
    CREATE TABLE new_table_name AS
        SELECT column1, column2,...
        FROM existing_table_name
        WHERE ....;
    ```

* Drop Table: Table 지우기

    ```sql
    DROP TABLE table_name;
    ```

    Table은 남겨두고, Table 안에 있는 모든 record 지우기

    ```sql
    TRUNCATE TABLE table_name;
    ```

* Alter Table: 기존의 table에서 column을 더하고, 없애고, 수정하는 방법.

    - Add column

        ```sql
        ALTER TABLE table_name
        ADD column_name datatype;
        ```

    - Drop column

        ```sql
        ALTER TABLE table_name
        DROP COLUMN column_name;
        ```

    - Modify column: data type 변경하기

        ```sql
        ALTER TABLE table_name
        MODIFY COLUMN column_name datatype;
        ```
<br> 

### C. Constraints, Not Null, Unique

* Constraints<br>
  `CREAT TABLE`로 처음 만들때 설정하거나, `ALTER TABLE`로 수정. 만약 contraint를 어기는 query가 들어오면 aborted!
    ```sql
    CREATE TABLE table_name (
        column1 datatype constraint,
        column2 datatype constraint,
        column3 datatype constraint,
        ....
    );
    ```
    - `NOT NULL` - Ensures that a column cannot have a NULL value
    - `UNIQUE` - Ensures that all values in a column are different
    - `PRIMARY KEY` - A combination of a `NOT NULL` and `UNIQUE`. Uniquely identifies each row in a table
    - `FOREIGN KEY` - Prevents actions that would destroy links between tables
    - `CHECK` - Ensures that the values in a column satisfies a specific condition
    - `DEFAULT` - Sets a default value for a column if no value is specified
    - `CREATE INDEX` - Used to create and retrieve data from the database very quickly

* Not Null<br>
  `Not Null` constraint를 쓰면, null값이 이 컬럼에는 들어갈 수 없다. 

    ```sql
    #테이블 만들때 constraint도 같이 만들기
    CREATE TABLE Persons (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255) NOT NULL,
        Age int
    );

    --constraint 추가하기
    ALTER TABLE Persons
    MODIFY Age int NOT NULL;
    ```

* Unique <br>
  `UNIQUE` constraints 와 `PRIMARY KEY` 모두 그 컬럼에는 모든 값이 서로 달라야한다. `UNIQUE` constraints 는 한 테이블 내 여러번 사용가능하지만,  `PRIMARY KEY` 컬럼은 하나만 가능하다. 

    ```sql
    #테이블 만들때 constraint도 같이 만들기
    CREATE TABLE Persons (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255),
        Age int,
        UNIQUE (ID)
    );

    #constraint 추가하기
    ALTER TABLE Persons
    ADD UNIQUE (ID);
    ```

    ```sql
    #constraint 빼기
    ALTER TABLE Persons
    DROP INDEX UC_Person
    ```
<br> 

### D. Key

* Primary Key <br>
  Primary keys must contain `UNIQUE` values, and cannot contain `NULL` values. + 테이블당 하나만 가능.

    ```sql
    #테이블 만들때 constraint도 같이 만들기
    CREATE TABLE Persons (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255),
        Age int,
        PRIMARY KEY (ID)
    );
    ```

    ```sql
    #constraint 추가하기
    ALTER TABLE Persons
    ADD PRIMARY KEY (ID);
    ```

    ```sql
    #constraint 빼기
    ALTER TABLE Persons
    DROP PRIMARY KEY;
    ```

* Foreign Key <br> 

    The `FOREIGN KEY` constraint prevents invalid data from being inserted into the foreign key column, because it has to be one of the values contained in the parent table.

    - parent table(`Persons`): 고객 정보를 담고 있는 PersonID가 primary key인 table
    - proband table(`Orders`): 이 테이블의 foreign key인 PersonID는 parent table의 PersonID만 넣을 수 있다.

    ```sql
    #테이블 만들때 constraint도 같이 만들기
    CREATE TABLE Orders (
        OrderID int NOT NULL,
        OrderNumber int NOT NULL,
        PersonID int,
        PRIMARY KEY (OrderID),
        FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
    );

    #constraint 추가하기
    ALTER TABLE Orders
    ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
    ```

    ```sql
    #constraint 빼기
    ALTER TABLE Orders
    DROP FOREIGN KEY FK_PersonOrder;
    ```
<br> 

### E. Datatypes

* Check: 컬럼 값의 범위를 제한.

    ```sql
    #테이블 만들때 constraint도 같이 만들기
    CREATE TABLE Persons (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255),
        Age int,
        CHECK (Age>=18)
    );

    #constraint 추가하기
    ALTER TABLE Persons
    ADD CHECK (Age>=18);

    #constraint 빼기
    ALTER TABLE Persons
    DROP CONSTRAINT CHK_PersonAge;
    ```

* Default: default 값을 설정하는 constraint

    ```sql
    #테이블 만들때 constraint도 같이 만들기
    CREATE TABLE Persons (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255),
        Age int,
        City varchar(255) DEFAULT 'Sandnes'
    );

    #다음과 같이 날짜를 default로 설정할 수도 있다.
    CREATE TABLE Orders (
        ID int NOT NULL,
        OrderNumber int NOT NULL,
        OrderDate date DEFAULT GETDATE()
    );
    ```

    ```sql
    #constraint 추가하기
    ALTER TABLE Persons
    ALTER City SET DEFAULT 'Sandnes';
    ```

    ```sql
    #constraint 빼기
    ALTER TABLE Persons
    ALTER City DROP DEFAULT;
    ```

* Index: index를 사용하면 table의 자료를 더 빨리 가져올 수 있다. 

    ```sql
    CREATE INDEX index_name
    ON table_name (column1, column2, ...);

    #unique를 사용하면 duplicate는 쓸 수 없다. 
    CREATE UNIQUE INDEX index_name
    ON table_name (column1, column2, ...);
    ```

    ```sql
    #index 빼기
    ALTER TABLE table_name
    DROP INDEX index_name;
    ```

* Auto Increment

    ```sql
    CREATE TABLE Persons (
        Personid int NOT NULL AUTO_INCREMENT,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255),
        Age int,
        PRIMARY KEY (Personid)
    );
    ```

    - 1부터 시작하지만, `ALTER TABLE Persons AUTO_INCREMENT=100;` 이렇게 하면 100부터 시작한다.
    - 새로운 record를 추가할때 auto increment 컬럼은 따로 값을 주지 않아도 된다.

        ```sql
        INSERT INTO Persons (FirstName,LastName)
        VALUES ('Lars','Monsen');
        ```

* Dates

    - `DATE` - format YYYY-MM-DD
    - `DATETIME` - format: YYYY-MM-DD HH:MI:SS
    - `TIMESTAMP` - format: YYYY-MM-DD HH:MI:SS
    - `YEAR` - format YYYY or YY

    → `WHERE` 문을 작성할때 format을 맞춰서 작성해야한다. 

    e.g. `SELECT * FROM Orders WHERE OrderDate='2008-11-11'`

    - 날짜만 뽑기

        ```sql
        SELECT ANIMAL_ID, NAME, date_format(DATETIME, '%Y-%m-%d')  AS 날짜
        FROM ANIMAL_INS
        ORDER BY ANIMAL_ID
        ```
<br> 

### F. Etc

* Views

    - 가상 table(=view) 만들기

        ```sql
        CREATE VIEW view_name AS
        SELECT column1, column2, ...
        FROM table_name
        WHERE condition;

        SELECT * FROM [Brazil Customers];
        ```

    - view 수정하기

        ```sql
        CREATE OR REPLACE VIEW view_name AS
        SELECT column1, column2, ...
        FROM table_name
        WHERE condition;
        ```

    - view 삭제하기

        ```sql
        DROP VIEW view_name;
        ```

* with recursive <br>

    메모리 상에 가상의 테이블 저장

    ```sql
    WITH RECURSIVE 테이블명 AS(
    SELECT 초기값 AS 컬럼 별명1
    UNION ALL
    SELECT 컬럼 별명1 계산식 FROM 테이블명 WHERE 제어문)
    ```

    ```sql
    --0~23까지 값을 가지는 가상 테이블 생성
    WITH RECURSIVE TIME AS(
    SELECT 0 AS h
    UNION ALL
    SELECT h+1 FROM TIME WHERE h < 23)

    SELECT * FROM TIME;
    ```

    ```sql
    --table join까지 추가
    WITH RECURSIVE TIME AS(
    SELECT 0 AS h
    UNION ALL
    SELECT h+1 FROM TIME WHERE h < 23)

    SELECT h, COUNT(HOUR(DATETIME)) AS COUNT
    FROM ANIMAL_OUTS RIGHT JOIN TIME 
    ON (HOUR(DATETIME) = h)
    GROUP BY h;
    ```
