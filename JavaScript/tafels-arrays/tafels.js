const tables = [2,4,6,8];

tables.forEach(table => {
    for(let i = 1; i <= 10; i++) {
        console.log(`${i} x ${table} = ${i * table}`);
    }
})