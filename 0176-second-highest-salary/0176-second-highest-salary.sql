# Write your MySQL query statement below
SELECT IFNULL((
    SELECT salary 
    FROM (
        SELECT DISTINCT salary 
        FROM Employee
        ORDER BY SALARY DESC
        ) AS temp
    LIMIT 1 OFFSET 1
    ), NULL) AS SecondHighestSalary;