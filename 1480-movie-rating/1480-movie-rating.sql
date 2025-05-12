# Write your MySQL query statement below
SELECT name AS results FROM (SELECT COUNT(r.rating), u.name FROM MovieRating r
JOIN Users u
ON r.user_id = u.user_id
GROUP BY r.user_id
ORDER BY COUNT(r.rating) DESC,  u.name 
LIMIT 1) AS temp
UNION ALL
SELECT title AS results FROM (SELECT m.title, AVG(r.rating) 
FROM MovieRating r
JOIN Movies m
ON r.movie_id = m.movie_id
AND r.created_at >= '2020-02-01' AND r.created_at <= '2020-02-29'
GROUP BY r.movie_id
ORDER BY AVG(r.rating) DESC, m.title
LIMIT 1) AS temp2;