document.getElementById('output').innerHTML = '10';

setTimeout(function () {
    document.getElementById('output').innerHTML = '9';
    setTimeout(function () {
        document.getElementById('output').innerHTML = '8';
        setTimeout(function () {
            document.getElementById('output').innerHTML = '7';
            setTimeout(function () {
                document.getElementById('output').innerHTML = '6';
                setTimeout(function () {
                    document.getElementById('output').innerHTML = '5';
                    setTimeout(function () {
                        document.getElementById('output').innerHTML = '4';
                        setTimeout(function () {
                            document.getElementById('output').innerHTML = '3';
                            setTimeout(function () {
                                document.getElementById('output').innerHTML = '2';
                                setTimeout(function () {
                                    document.getElementById('output').innerHTML = '1';
                                    setTimeout(function () {
                                        document.getElementById('output').innerHTML = 'Happy Independence!';
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
