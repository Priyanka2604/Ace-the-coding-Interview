# Write your MySQL query statement below
WITH helper AS (
    SELECT 
        d.name Department, 
        e.name Employee, 
        e.salary Salary,
        DENSE_RANK() OVER (PARTITION BY d.id ORDER BY e.salary DESC) AS Srank
    FROM Employee e
    JOIN Department d
    ON e.departmentId = d.id
)
SELECT Department, Employee, Salary
FROM helper
WHERE Srank < 4;