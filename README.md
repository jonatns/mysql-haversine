# mysql-haversine
Mysql haversine query generator.

## Install

```bash
npm install mysql-haversine
```

## Basic usage

Given your coordinates it compares the circular distance from you with each coordinate in the given database table.

```js

var mysqlHaversine = require('mysql-haversine');

var query = mysqlHaversine.query(100, 'stores', 18.370531, -66.143399, 'ASC');

```

# API

```js

mysqlHaversine(distance, table_name, your_latitude, your_longitude, order_by)

```

It compares the circular distance from your coordinates with each coordinate in the given db table.
It only returns the results of the ones that are less than or equal to the given distance(km) and orders them ascending(ASC) or descending(DESC).

distance = max radius to query of the circle around your coordinate(km)<br />
table_name = name of the the database table<br />
your_latitude = your current latitude<br />
your_longitude your current longitude<br />
order_by = how you want to order the results(ASC or DESC)
