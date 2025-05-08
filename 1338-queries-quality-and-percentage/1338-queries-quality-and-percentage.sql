# Write your MySQL query statement below
SELECT  q.query_name, ROUND(AVG(q.rating/q.position), 2) AS quality, 
        ROUND((SELECT COUNT(rating) FROM Queries WHERE rating<3 AND q.query_name = query_name)/
        COUNT(rating)*100,2) AS poor_query_percentage
FROM Queries q
GROUP BY q.query_name;
