# Write your MySQL query statement below
select s.product_id,f.first_year,s.quantity,s.price
 from sales s
join 
(select s.product_id,min(s.`year`) first_year 
from sales s
group by s.product_id) f 
on s.product_id = f.product_id and s.`year` = f.first_year