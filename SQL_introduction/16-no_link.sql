--script lists all records of the table second_table if name is not null
SELECT 'score', 'name'
FROM 'second_table'
WHERE 'name' != ""
ORDER BY 'score' DESC;