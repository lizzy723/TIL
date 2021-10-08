### A. Aliases

* `AS` keyword로 table, column에 임시적인 이름을 줄 수 있다. 단 이 이름은 쿼리가 지속되는 동안만 존재한다. 

    ```sql
    #column에 이름 주기
    SELECT column_name AS alias_name
    FROM table_name;

    #table에 이름 주기
    SELECT column_name(s)
    FROM table_name AS alias_name;
    ```
* Alias for column example

    ```sql
    #example 1
    SELECT CustomerName AS Customer, ContactName AS [Contact Person]
    FROM Customers;

    #example 2
    SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address
    FROM Customers;

    #example 3
    SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address
    FROM Customers;
    ```

* Alias for table example

    ```sql
    SELECT o.OrderID, o.OrderDate, c.CustomerName
    FROM Customers AS c, Orders AS o
    WHERE c.CustomerName='Around the Horn' AND c.CustomerID=o.CustomerID;
    ```
    ```sql
    #아래와 같이 쓸 것을 c, o로 줄여서 나타냄
    SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName
    FROM Customers, Orders
    WHERE Customers.CustomerName='Around the Horn' AND Customers.CustomerID=Orders.CustomerID;
    ```
    <img width="1000" alt="Screen Shot 2021-09-06 at 9 30 12 AM" src="https://user-images.githubusercontent.com/43725183/132145753-0499bedf-78ed-4e54-a2ab-43402c49d040.png">

<br> 

### B. Join

* Join
  <img width="1000" alt="Screen Shot 2021-09-06 at 9 31 44 AM" src="https://user-images.githubusercontent.com/43725183/132145816-bf0fea3a-e854-4f06-a47c-7c6b3b86fb7d.png">
  - `(INNER) JOIN`: Returns records that have matching values in both tables
  - `LEFT (OUTER) JOIN`: Returns all records from the left table, and the matched records from the right table
  - `RIGHT (OUTER) JOIN`: Returns all records from the right table, and the matched records from the left table
  - `FULL (OUTER) JOIN`: Returns all records when there is a match in either left or right table

* **Inner Join** <br>
  Table1에 Table2를 더하는 중.
    ```sql
    SELECT column_name(s)
    FROM table1
    INNER JOIN table2
    ON table1.column_name = table2.column_name;
    
    #example
    SELECT Orders.OrderID, Customers.CustomerName
    FROM Orders
    INNER JOIN Customers 
    ON Orders.CustomerID = Customers.CustomerID;
    ```

    ```sql
    #table 3개 합치기 : (order + customer) + shipper
    SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
    FROM ((Orders
    INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
    INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
    ```
* **Left Join** <br>
  table1에 있는 record!!
    ```sql
    SELECT column_name(s)
    FROM table1
    LEFT JOIN table2
    ON table1.column_name = table2.column_name;
    ```

    ```sql
    #group by도 같이! 이름에 table 꼭 안 써도 된다. 

    SELECT h, COUNT(HOUR(DATETIME)) AS COUNT
    FROM ANIMAL_OUTS RIGHT JOIN TIME 
    ON (HOUR(DATETIME) = h)
    GROUP BY h;
    ```
* **Right Join** <br> 
  table2에 있는 record만!
    ```sql
    SELECT column_name(s)
    FROM table1
    RIGHT JOIN table2
    ON table1.column_name = table2.column_name;
    ```

* **Full Join** <br>
  table1, table2에 있는 모든 record!
    ```sql
    SELECT column_name(s)
    FROM table1
    FULL OUTER JOIN table2   //그냥 FULL JOIN해도 똑같다!
    ON table1.column_name = table2.column_name
    WHERE condition;
    ```
    <img width="716" alt="Screen Shot 2021-09-06 at 9 36 27 AM" src="https://user-images.githubusercontent.com/43725183/132145994-d2d75f31-0b83-47c5-8347-6d9533374572.png">

* **Self Join** <br> 
  하나의 테이블에서 Join하는 경우 self join을 사용한다. 

    ```sql
    SELECT column_name(s)
    FROM table1 T1, table1 T2
    WHERE condition;
    ```

    ```sql
    #Customers table에서 같은 도시 사람들 중 서로다른 pair는 어떻게 되는지 확인.
    SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
    FROM Customers A, Customers B
    WHERE A.CustomerID <> B.CustomerID
    AND A.City = B.City 
    ORDER BY A.City;
    ```
<br> 

### C. `Union`, `Group By`, `Having`

* `Union` operator<br> 
  rbind같은 역할. 따라서 (1) SELECT의 대상이 되는 column수가 동일해야하고, (2) 비슷한 data type이어야하며, (3) 컬럼의 순서가 동일해야한다.
    ```sql
    SELECT column_name(s) FROM table1
    UNION //UNION ALL
    SELECT column_name(s) FROM table2;
    ```

    만약 `UNION ALL`을 사용하면 duplicated row도 살린다. (그냥 UNION을 하면 duplicated row는 삭제됨)

    ```sql
    #Example 1 : WHERE과 함께 쓰기
    SELECT City, Country FROM Customers
    WHERE Country='Germany'
    UNION
    SELECT City, Country FROM Suppliers
    WHERE Country='Germany'
    ORDER BY City;

    #Example 2: 상수 column 추가하기
    SELECT 'Customer' AS Type, ContactName, City, Country
    FROM Customers
    UNION
    SELECT 'Supplier', ContactName, City, Country
    FROM Suppliers;
    #Example2에서 제일 첫번째 컬럼 Type은 Customers에서 온 record에는 'Customer'값이 들어가고, Suppliers에서 온 record에는 'Supplier'값이 들어간다. 
    ```
    
* `Group By` Statement <br> 
  aggregator로 `count()`, `max()`,`min()`, `sum()`, `avg()`등을 사용할 수 있다. 

    ```sql
    SELECT column_name(s)
    FROM table_name
    WHERE condition
    GROUP BY column_name(s)
    ORDER BY column_name(s);
    ```

    Aggregator를 select과 함께 쓴다.

    ```sql
    SELECT COUNT(CustomerID), Country
    FROM Customers
    GROUP BY Country;

    #order by까지 사용하기
    SELECT COUNT(CustomerID), Country
    FROM Customers
    GROUP BY Country
    ORDER BY COUNT(CustomerID) DESC;
    ```

    ```sql
    #Shipper별 order의 수
    SELECT Shippers.ShipperName, COUNT(Orders.OrderID) AS NumberOfOrders FROM Orders
    LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID
    GROUP BY ShipperName;
    ```
    
* `Having` Clause <br> 
  `WHERE` keyword는 aggregate function과 함께 쓰일 수 없다. 대신 `HAVING`을 쓴다. 

    ```sql
    SELECT column_name(s)
    FROM table_name
    WHERE condition
    GROUP BY column_name(s)
    HAVING condition
    ORDER BY column_name(s);
    ```

    ```sql
    #Example1
    SELECT COUNT(CustomerID), Country
    FROM Customers
    GROUP BY Country
    HAVING COUNT(CustomerID) > 5
    ORDER BY COUNT(CustomerID) DESC;
    ```
<br> 

### D. `Exists`, `Any`, `All`

* `Exists` Operator <br>
  특정 조건을 만족하는 record가 있으면 TRUE를 반환한다. 

    ```sql
    SELECT column_name(s)
    FROM table_name
    WHERE EXISTS
    (SELECT column_name FROM table_name WHERE condition);
    ```

    ```sql
    #example 1 다음을 만족하는 ProductName(from "Products" table)이 SupplierName(from "Suppliers" table)에 있는가
    SELECT SupplierName
    FROM Suppliers
    WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);
    ```
* `Any` operators

    ```sql
    SELECT column_name(s)
    FROM table_name
    WHERE column_name operator ANY
      (SELECT column_name
      FROM table_name
      WHERE condition);
      
    #example
    SELECT ProductName
    FROM Products
    WHERE ProductID = ANY
      (SELECT ProductID
      FROM OrderDetails
      WHERE Quantity = 10);
    ```

* `All` operators

    ```sql
    #select과 함께 쓰기
    SELECT ALL column_name(s)
    FROM table_name
    WHERE condition;
    ```

    ```sql
    #where 또는 having과 함께 쓰기
    SELECT column_name(s)
    FROM table_name
    WHERE column_name operator ALL
      (SELECT column_name
      FROM table_name
      WHERE condition);

    #example
    SELECT ProductName
    FROM Products
    WHERE ProductID = ALL
      (SELECT ProductID
      FROM OrderDetails
      WHERE Quantity = 10);
    ```
    
<br> 

### E. `Select Into`, `Insert into select`

* `Select Into` statement<br>
  원래 있던 table에서 (일부 column을 골라) 새로운 table 만들기

    ```sql
    SELECT column1, column2, column3, ... --*를 쓰면 모든 column
    INTO newtable [IN externaldb]
    FROM oldtable
    WHERE condition;
    ```

    ```sql
    ##example
    SELECT * INTO CustomersBackup2017 IN 'Backup.mdb'
    FROM Customers;
    ```

* `Insert into select` statement <br>
  원래 있던 table에서 (일부 column을 골라) 다른 table에 합치기

    ```sql
    INSERT INTO table2 (column1, column2, column3, ...)
    SELECT column1, column2, column3, ...   --*를 쓰면 모든 column을 의미
    FROM table1
    WHERE condition;

    ##example
    INSERT INTO Customers (CustomerName, City, Country)
    SELECT SupplierName, City, Country FROM Suppliers
    WHERE Country='Germany';
    ```
    
<br> 

### F. Case, Null functions

* `Case` statement

    ```sql
    CASE
        WHEN condition1 THEN result1
        WHEN condition2 THEN result2
        WHEN conditionN THEN resultN
        ELSE result
    END;
    ```

    ```sql
    #QualityText라는 컬럼이 새로 생긴다. SELECT 마지막에 콤마 필수!
    SELECT OrderID, Quantity,
    CASE
        WHEN Quantity > 30 THEN 'The quantity is greater than 30'
        WHEN Quantity = 30 THEN 'The quantity is 30'
        ELSE 'The quantity is under 30'
    END AS QuantityText
    FROM OrderDetails;
    ```

    ```sql
    #city순으로 정렬하되, city가 없는 경우 country순으로 정렬한다. 
    SELECT CustomerName, City, Country
    FROM Customers
    ORDER BY
    (CASE
        WHEN City IS NULL THEN Country
        ELSE City
    END);
    ```

* Null Functions
  * `IFNULL()`, `ISNULL()`, `COALESCE()`, and `NVL()` Functions
  * 여러행을 연산하는 중에 하나의 행에서 null 값이 있으면 null 값을 return 한다. 따라서
    ```sql
    SELECT ProductName, UnitPrice * (UnitsInStock + IFNULL(UnitsOnOrder, 0))
    FROM Products;
    ```
    이런식으로 null값이 있을경우 다른 값으로 대체할 수 있다.
  * 어떤 RDBMS쓰냐에 따라 함수가 다르니 자세한 부부은 웹 참조

<br> 

### G. Etc
* Stored procedures
    - 쿼리를 미리 작성해두고 여러번 반복해서 사용할 수 있다.

        ```sql
        #미리 작성
        CREATE PROCEDURE procedure_name
        AS
        sql_statement
        GO;

        #실행
        EXEC procedure_name;
        
        #example
        CREATE PROCEDURE SelectAllCustomers
        AS
        SELECT * FROM Customers
        GO;

        EXEC SelectAllCustomers;
        ```

    - parameter 전달도 가능하다.

        ```sql
        #미리 작성
        CREATE PROCEDURE SelectAllCustomers @City nvarchar(30)
        AS
        SELECT * FROM Customers WHERE City = @City
        GO;

        #실행
        EXEC SelectAllCustomers @City = 'London';
        ```

        ```sql
        #parameter 여러개
        CREATE PROCEDURE SelectAllCustomers @City nvarchar(30), @PostalCode nvarchar(10)
        AS
        SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode
        GO;

        EXEC SelectAllCustomers @City = 'London', @PostalCode = 'WA1 1DP';
        ```

* Comments
    - single line comments: `--`

        ```sql
        --Select all:
        SELECT * FROM Customers;
        ```

    - Multi-line comments start with `/*` and end with `*/`.

        ```sql
        /*Select all the columns
        of all the records
        in the Customers table:*/
        SELECT * FROM Customers;

        #이렇게도 사용가능.
        SELECT CustomerName, /*City,*/ Country FROM Customers;
        ```

* Operators
    - SQL Arithmetic Operators
      <img width="800" alt="Screen Shot 2021-09-06 at 9 50 36 AM" src="https://user-images.githubusercontent.com/43725183/132146549-84c01fdb-4df1-44d6-b751-8306697b4561.png">

    - SQL Bitwise Operators
      <img width="800" alt="Screen Shot 2021-09-06 at 9 51 10 AM" src="https://user-images.githubusercontent.com/43725183/132146564-06768785-04a8-4cfb-bee1-1cc35823ddb4.png">

    - SQL Comparison Operators
      <img width="800" alt="Screen Shot 2021-09-06 at 9 51 40 AM" src="https://user-images.githubusercontent.com/43725183/132146586-24ebd0f3-295b-4f83-a2de-879cb45a69ad.png">

    - SQL Compound Operators
      <img width="800" alt="Screen Shot 2021-09-06 at 9 52 16 AM" src="https://user-images.githubusercontent.com/43725183/132146620-7f79d566-5a88-448b-b2c1-1126f2386d53.png">

    - SQL Logical Operators
      <img width="800" alt="Screen Shot 2021-09-06 at 9 52 40 AM" src="https://user-images.githubusercontent.com/43725183/132146645-f9e8ef46-515f-45e5-a057-e7e29ec30eff.png">  

<br>

### Notes
* W3Schools SQL tutorial: https://www.w3schools.com/sql/default.asp
