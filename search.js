const data = fetch("url")

const filterdata = data.filter(item => Object.values(item).some((val, search) => String(val).toLowerCase().includes(search.toLowerCase())))