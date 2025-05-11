# Write your MySQL query statement below
SELECT product_id, 10 AS price
FROM Products
GROUP BY product_id
HAVING MIN(change_date) > '2019-08-16'
UNION
SELECT p.product_id, p.new_price AS price
FROM Products p
JOIN (
    SELECT product_id, MAX(change_date) AS latest_date
    FROM Products
    WHERE change_date <= '2019-08-16'
    GROUP BY product_id
) sub ON p.product_id = sub.product_id AND p.change_date = sub.latest_date;