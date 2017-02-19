# Benchmark for yeps and yeps-router

For testing you need **ab**

## How to install

    npm i
    
## How to run

    npm t

## Results:

### Middleware test:

* [koa2](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/koa2_middleware.txt)
* [express](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/express_middleware.txt)
* [http](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/http_middleware.txt)
* [yeps](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/yeps_middleware.txt)


### Router test:

#### First router match:
    
* [koa2](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/koa2_route_first.txt)
* [express](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/express_route_first.txt)
* [yeps](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/yeps_route_first.txt)


#### Last router match:
    
* [koa2](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/koa2_route_last.txt)
* [express](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/express_route_last.txt)
* [yeps](https://raw.githubusercontent.com/evheniy/yeps-benchmark/master/reports/yeps_route_last.txt)


## Links 

* [yeps](https://github.com/evheniy/yeps) - YEPS
* [yeps-promisify](https://github.com/evheniy/yeps-promisify) - YEPS kernel
* [yeps-router](https://github.com/evheniy/yeps-router) - YEPS promise based router
* [yeps-error](https://github.com/evheniy/yeps-error) - YEPS 404/500 error handler
* [yeps-redis](https://github.com/evheniy/yeps-redis) - YEPS promise based redis client
* [yeps-logger](https://github.com/evheniy/yeps-logger) - YEPS Async logger - winston
* [yeps-boilerplate](https://github.com/evheniy/yeps-boilerplate) - YEPS app boilerplate