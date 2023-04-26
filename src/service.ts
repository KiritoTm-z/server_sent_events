import http from 'http';

http.createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type":"text/event-stream",
      "Cache-Control":"no-cache",
      "Connection":"keep-alive",
      "Access-Control-Allow-Origin": '*',
    });
    res.write("retry: 10000\n");
    res.write("event: foo\n");
    res.write("data: " + '自定义事件 foo' + "\n\n");
    res.write("event: bar\n");
    res.write("data: " + '自定义事件 bar' + "\n\n");

    let i = 0
    const str = `当牵牛花初开的时节，葬礼的号角就已吹响，但是太阳，他每时每刻都是夕阳也都是旭日，当他熄灭着走下山去收尽苍凉惨照之际，正是他在另一面燃烧着爬上山 巅布散烈烈朝晖之时，那一天，我也将沉静着走下山去，扶着我的拐杖。有一天，在某一处山洼里，势必会跑上来一个欢蹦的孩子，抱着他的玩具。\n当然，那不是我。 但是，那不是我吗？\n——史铁生《我与地坛》`
    const store = str.split('')

    const interval = setInterval(async () => {
      res.write("data: " + `${store[i]}` + "\n\n");
      i++
      if (i === store.length) {
        res.write("event: over\n");
        res.write("data: " + 'over事件 over' + "\n\n");
        clearInterval(interval);
      }
    }, 100);

    req.socket.addListener("close", function () {
      clearInterval(interval);
    });
}).listen(9527, "127.0.0.1");