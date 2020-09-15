(function () {

    let // Позиции, которые необходимо найти дешевле
        Items = [
            {
                // Заголовок правила, при срабатывании которого он покажется
                'title': 'HDD 4TB+',
                // Адрес страницы с товарами, с упорядочиванием по цене
                'url': 'https://www.ozon.ru/category/kompyutery-i-komplektuyushchie-15690/?text=4Tb&from_global=true&sorting=price',
                // Цена, до которой сработает правило показа дешевого товара
                'price': 6000,
                // Поисковые слова, которые точно должны быть в заголовке товара
                'words': '4 ТБ'
            }/*,
            {
                'title': 'HDD 6TB+',
                'url': 'https://www.ozon.ru/category/kompyutery-i-komplektuyushchie-15690/?from_global=true&text=6Tb&sorting=price',
                'price': 8000,
                'words': '6 ТБ'
            },
            {
                'title': 'SSD 480',
                'url': 'https://www.ozon.ru/category/ssd-nakopiteli-15712/?text=ssd+480gb&sorting=price&from_global=true',
                'price': 3000,
                'words': 'SSD 480'
            },
            {
                'title': 'SSD 960+',
                'url': 'https://www.ozon.ru/category/kompyutery-i-komplektuyushchie-15690/?sorting=price&from_global=true&text=ssd+960gb',
                'price': 6000,
                'words': 'SSD 960'
            },
            {
                'title': 'Шоколад MARSSIA темный 54%',
                'url': 'https://www.ozon.ru/search/?from_global=true&text=Шоколад+MARSSIA+темный+54',
                'price': 173,
                'words': 'Шоколад MARSSIA темный 54'
            },
            {
                'title': 'Merci Шоколад c марципаном, 112 г',
                'url': 'https://www.ozon.ru/category/produkty-pitaniya-9200/?from_global=true&text=Merci+шоколад+марципан',
                'price': 135,
                'words': 'Merci шоколад марципан'
            },
            {
                'title': 'BioMio таблетки для посудомойки',
                'url': 'https://www.ozon.ru/category/tabletki-dlya-posudomoechnyh-mashin-31532/?from_global=true&text=BioMio+таблетки&sorting=price',
                'price': 424,
                'words': 'Таблетки BioMio'
            },
            {
                'title': 'BioMio порошок цветной',
                'url': 'https://www.ozon.ru/search/?text=BioMio+цветного&sorting=price&from_global=true',
                'price': 355,
                'words': 'BioMio порошок цвет'
            },
            {
                'title': 'Шармэль зефир классический в шоколаде, 75 г',
                'url': 'https://www.ozon.ru/search/?text=Шармэль+зефир+75&sorting=price&from_global=true',
                'price': 60,
                'words': 'Шармэль зефир 75'
            },
            {
                'title': 'FELIX',
                'url': 'https://www.ozon.ru/search/?text=Felix+24&from_global=true',
                'price': 400,
                'words': 'Felix 24 кош'
            },
            {
                'title': 'GOURMET 24',
                'url': 'https://www.ozon.ru/search/?from_global=true&text=gourmet+24+85+г',
                'price': 500,
                'words': 'Gourmet 24 85'
            },
            {
                'title': 'GOURMET 12',
                'url': 'https://www.ozon.ru/search/?text=Gourmet+12&from_global=true',
                'price': 299,
                'words': 'Gourmet 12'
            },
            {
                'title': 'Peroni Молочный цветок 250',
                'url': 'https://www.ozon.ru/search/?from_global=true&text=Peroni+Молочный+цветок+250',
                'price': 459,
                'words': 'Peroni Молочный цветок 250'
            },
            {
                'title': 'Purina one 1,5 кошек',
                'url': 'https://www.ozon.ru/search/?text=purina+one+1%2C5+кошек&from_global=true',
                'price': 454,
                'words': 'Purina one 1,5 кошек'
            },
            {
                'title': 'Sheba 85 24',
                'url': 'https://www.ozon.ru/search/?text=sheba+85+24&from_global=true',
                'price': 513,
                'words': 'Sheba 85 24'
            },
            {
                'title': 'cat chow 1,5',
                'url': 'https://www.ozon.ru/category/korm-dlya-koshek-12348/?text=cat+chow+1%2C5&sorting=price&from_global=true',
                'price': 355,
                'words': 'cat chow 1,5'
            },
            {
                'title': 'cat chow 1,5 подарок',
                'url': 'https://www.ozon.ru/search/?from_global=true&text=cat+chow+1%2C5+подарок',
                'price': 433,
                'words': 'cat chow 1,5 подарок'
            },
            {
                'title': 'dr clauder 415',
                'url': 'https://www.ozon.ru/search/?text=dr+clauder+415&from_global=true',
                'price': 72,
                'words': 'dr clauder 415'
            },
            {
                'title': 'Dreamies мятные',
                'url': 'https://www.ozon.ru/category/korm-dlya-koshek-12348/?text=Dreamies+мят&from_global=true',
                'price': 51,
                'words': 'Dreamies мят'
            },
            {
                'title': 'friskies 85',
                'url': 'https://www.ozon.ru/category/korm-dlya-koshek-12348/?text=friskies+85&from_global=true',
                'price': 18,
                'words': 'friskies 85'
            },
            {
                'title': 'friskies 85 24',
                'url': 'https://www.ozon.ru/category/korm-dlya-koshek-12348/?text=friskies+85+24&from_global=true',
                'price': 407,
                'words': 'friskies 85 24'
            },
            {
                'title': 'landor 200',
                'url': 'https://www.ozon.ru/search/?text=landor+200&from_global=true',
                'price': 114,
                'words': 'landor 200'
            }*/
        ],
        selectItem = 'div:not(.soldOut)>span:contains("₽")',
        background = 'body',
        jq = document.createElement('script'),
        debug = false,
        ItemsGet = function () {

            // Вывод даты и времени запроса
            getDate();

            // Перебираем правила срабатывания
            $.each(Items, function () {

                let Item = $(this).get(0);

                // Получаем данные страницы
                $.get(Item.url, function (data) {

                    let oFail = {fail: true}, // Эта конструкция нужна для передачи значения по ссылке объекту
                        found = $(data).find(selectItem);

                    // Вывод кол-ва позиций или предупреждении о возможном изменении в DOM
                    testItemCount(found.length);

                    // Перебираем все позиции с поиском минимальной цены (иногда в ozon упорядочивание не срабатывает)
                    found.each(function (i) {

                        if (debug) console.log('Перебор позиций происходит.');

                        // Определяем название позиции
                        let NameTile = $(this).parent().parent().parent().parent().find('.tile-hover-target').eq(1).text().trim();

                        // Проверка на соответствие поисковой фразе
                        if (testKeyWords(Item.words.split(' '), NameTile) === true) return; // Аналог continue для each

                        // Если проверка ранее прошла, то  проверяем цену товара
                        return testPrice(Number($(this).html().replace(/\D+/g, "")), Item.price, NameTile, $(this), oFail, Interval);

                    });

                    if (oFail.fail) console.log('"' + Item.title + '"- получено/не обнаружено...');

                });

            });

        },
        getDate = function () {

            let D = new Date(),
                M = D.getMonth() + 1;

            console.log(D.getDate() + '.' + (M > 9 ? M : '0' + M) + '.' + D.getFullYear() + ' ' + D.getHours() + ':' + D.getMinutes());

        },
        testItemCount = function (x) {

            console.log('---');
            if (x === 0) {
                console.log('%cВозможно что-то изменилось в DOM. Если сообщение появляется массово, то нужен тест селекторов.', consoleStyles.warn);
            } else {
                console.log('Позиций: ', x);
            }

        },
        testKeyWords = function (keyWords, NameTile) {

            let RetContinue = false;

            NameTile = NameTile.toLowerCase();

            $.each(keyWords, function (index, word) {

                word = word.toLowerCase();

                if (debug) {
                    console.log('Название продукции в lowercase: ', NameTile);
                    console.log('Текущая подстрока(слово) поиска lowercase: ', word);
                }

                if (NameTile.indexOf(word) === -1) {
                    RetContinue = true;
                    if (debug) console.log('Подстрока: ~', word, "~ НЕ найдена в ~", NameTile, "~");
                    return false;
                } else {
                    if (debug) console.log('Подстрока: ~', word, "~ найдена в ~", NameTile, "~");
                }

            });

            return RetContinue;

        },
        /**
         * receivedPrice - Цена товара полученная с сайта
         * maxPrice - Цена от которой и выше, товар не интересует
         * NameTile - Название товара
         * item - Объект js товара на сайте
         * oFail - Для передачи по ссылке значение fail для остановки скрипта
         * receivedPrice - Цена товара полученная с сайта
         * Interval - интервал запуска для отключения дальнейшего просмотра если что-то нашлось
         */
        testPrice = function (receivedPrice, maxPrice, NameTile, item, oFail, Interval) {

            if (debug) console.log('Цена товара:', receivedPrice);

            if (receivedPrice < maxPrice) {

                oFail.fail = false;

                clearInterval(Interval);

                let elm = $(background),
                    elmb = elm.css('background-color');

                console.log('Товар: ', NameTile);
                console.log('Цена: ', receivedPrice);
                console.log('URL: ', 'https://www.ozon.ru' + item.parent().parent().parent().parent().find('a').attr('href'));

                setInterval(function () {

                    if (elm.css('background-color') == elmb) {
                        elm.css('background-color', 'rgb(255, 0, 0)');
                    } else {
                        elm.css('background-color', elmb);
                    }

                }, 500);

                getSound();

                return false;

            }

        },
        getSound = function () {

            OSC.type = "sine";
            OSC.frequency.value = 440;
            OSC.connect(AC.destination);
            OSC.start(AC.currentTime);
            OSC.stop(AC.currentTime + 2);

        },
        AC = new AudioContext(),
        OSC = AC.createOscillator(),
        Interval = setInterval(function () {
            ItemsGet();
        }, 60000 * 5),
        consoleStyles = {
            'warn': 'padding: 0 .5rem; background: crimson; font: 1.6em/1 Arial; color: white;'
        };

    jq.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
    document.getElementsByTagName('body')[0].appendChild(jq);
    setTimeout(function () {
        ItemsGet();
    }, 2000);

})();
