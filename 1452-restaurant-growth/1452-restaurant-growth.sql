# Write your MySQL query statement below
/*SELECT DISTINCT visited_on, 
        SUM(amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount, 
        ROUND(AVG(amount) OVER (ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW), 2) AS average_amount
FROM Customer
ORDER BY visited_on;*/
select distinct visited_on,
        sum(amount) over w as amount,
        round((sum(amount) over w)/7, 2) as average_amount
    from customer
    WINDOW w AS ( 
            order by visited_on
            range between interval 6 day PRECEDING and current row
    )
    Limit 6, 999
