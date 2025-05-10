# Write your MySQL query statement below
SELECT employee_id, department_id
FROM Employee e
WHERE primary_flag = 'Y' OR
NOT EXISTS(
    SELECT * FROM Employee
    WHERE e.employee_id = employee_id
    and e.department_id <> department_id);