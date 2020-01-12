var started = false;
var handle = null;
modem.setTech(modem.Tech.GSM_LTE);


sync.setSyncPeriod('2 min');

function turnOnLED() {
    io.led(true);
    timers.single(3000, () => {
        io.led(false);
    });
}

io.press(() => {

    if (started === false) {
        turnOnLED();

        // handle = timers.repeat('60s', () => {
        location.startUpdates((position) => {
            cloud.enqueue('position', position);

        }, { minInterval: 60 /* s */, minDistance: 0/* m */, timeout: 0 /* s */ });

        // })
        started = true;
        print("started");
        cloud.enqueue("status", { 'started': true }, {});


    } else {
        location.stop();
        //     handle.stop();
        started = false;
        print("stoped");
    }
})

cloud.onReceive(message => {
    if (message.type === 'position') {
        timers.count(300, 4, () => {
            flag = !flag;
            io.led(flag);
        })

    }
})


sensors.accel.onMotion((inMotion) => {
    if (inMotion && started === true) {
        turnOnLED();

    }
})

