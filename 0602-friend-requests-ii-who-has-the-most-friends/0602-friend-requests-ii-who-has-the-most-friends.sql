# Write your MySQL query statement below
WITH CTE AS(
    SELECT requester_id AS id FROM RequestAccepted
    UNION ALL
    SELECT accepter_id AS id FROM RequestAccepted
)
SELECT id, count(*) num 
FROM CTE
GROUP BY 1
ORDER BY 2 DESC
LIMIT 1;