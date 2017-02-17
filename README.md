# Benchmark for yeps and yeps-router

For testing you need to install **ab** and run:

    npm i && npm t

## Results:

ab -c 100 -n 50000 for each library:


Koa2:
* [middleware](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/koa2_middleware.txt)
* [first router](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/koa2_route_first.txt)
* [last router](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/koa2_route_last.txt)

Express:
* [middleware](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/express_middleware.txt)
* [first router](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/express_route_first.txt)
* [last router](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/express_route_last.txt)

Http:
* [middleware](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/http_middleware.txt)

YEPS:
* [middleware](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/yeps_middleware.txt)
* [first router](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/yeps_route_first.txt)
* [last router](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/yeps_route_last.txt)
