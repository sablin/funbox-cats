# Тестовое задание на позицию начинающего разработчки в компанию FunBox

Ответы на вопросы:

### 1. Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:

-- пользователя - у пользователя не должно возникать проблем с просмотром страниц на любых устройствах. Сайт на который заходит пользователь должен загружаться максимально быстро, не зависимо от качества интрнет-соединения;  
-- менеджера проекта - верстка должна быть сделана быстро с максимальным соответствием макету. При хорошей верстки должно быть выявлено минимум багов на стадии тестирования проекта;  
-- дизайнера - хорошая верстка точно совпадает с макетом который дизайнер сделал;  
-- верстальщика - в хорошей верстке присутствует компонентный подход, отсутствует лишнее дублирование кода. Правки при необходимости вносятся легко. В хорошей верстке применяется понятная методология наименования классов (например БЭМ);  
-- клиентского программиста - в верстке сразу понятно где какие элементы приложения находятся. Грамотно прописаны классы с понятными именами.;  
-- серверного программиста - для серверного программиста сама верстка не сильно важна(если он занимается разработкой апи). Если же верстка интегрируется например в сайт на php, то в хорошей верстке так же можно быстро разобаться, где и что находится.

### 2. Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

Верстка таких проектов обязательно должна происходить в рамках какой-то методологии + компонентный подход для предотвращения дублирования кода. Бывает что несколько страниц могут верстать разные люди и у них должен быть единый подход к написанию кода. Так же для таких проектов следует использовать систему контроля версий(github/gitlab и подобные). Если над проектом работает несколько человек то необходимо проводить митинги, для синхронизации работы и быстрого решения возможных проблем.

У меня был опыт работы по БЭМ, опыт работы с компонентами в рамках разработки проектов под React. Проводили ежедневные 15 минутные митинги для обсуждения текущего хода работ. Работал с gitlab в рамках командной разработки.

### 3. Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

Сейчас все разрабатываемые сайты являются адаптивным. То есть сайт подстраивается под ширину экрана на котором его открывают. Для этого используются медиа-запросы. Так же, чтобы сайт корректно отображался в разных браузерах необходимо использовать префиксы для некоторых css свойств.

Адаптивную верстку я конечно делал, для тестирования отображения на различных разрешения экрана использовать стандартные инструменты разработчика google chrome.  
По поводу префиксов: ранее использовал gulp и там подключал PostCSS, который автоматически добавлял нужные префиксы при сборке. В Вебпаке соответсвенно автопрефиксы так же можно настроить.

### 4. Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода

Если это простой проект, то сильно помогают lifeserver, emmit, консоль разработчика для отладки кода. В более сложных проектах помогает вебпак для автоматизации сборки, cra для быстрого развертывания реакт проектов, различные сниппеты для ускорения работы(например rsc для развертывания компонентов).

### 5. Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

Во первых открою страницу в требуемых версиях браузеров для воспроизведения проблемы. После воспроизведения буду смотреть какие стили прописаны для элементов(если доступа к коду нету - буду делать это через консоль разработчика). Там же попробую исправить, после чего предоставлю информацию в каких стилях была проблема и что необходимо поправить.

Клиенты часто скидывают свои сайты и просят посмотреть что там не так - в основном пользуюсь именно таких подходом как описал выше, чтобы перед началом работ и установкой стоимость понять в чем вообще проблема.

### 6. Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

Для начала стоит уточнить у дизайнера этот момент. Либо он доработает макет под описание всех кейсов, либо скажет что там простой эффект и объяснит что должно быть, для полного понимания картины.

### 7. Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS-верстка или что-то ещё? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

В основном это либо youtube(https://youtube.com/c/UlbiTV https://youtube.com/c/PhilipFabianek и подобные) либо документация. Плюс конечно stackoverflow для поиска решений проблем. Хотел бы развиваться в js программировании, во фронтнде без верски никуда, но интересно более глубоко изучать js, заниматься программированием каких-то серьезных сервисов и систем. Так же читаю и изучаю материалы по тему дизайна интрфейса и создания востребованных продуктов - я считаю классно когда ты не только разрабатываешь, но и сам понимаешь как сделать продукт лучше и можешь привнести реальную пользу своими знаниями. Ну а если вне it - нравится тема космоса, астрономии. В рамках хобби заказал себе чпу станок для обработки дерева - буду новое хобби развивать:)

### 8. Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Зовут меня Саша, 31 год. Долгое время разработка для меня была больше хобби, занимался ей в качестве подработок в свободное время. Основная же моя специальность была - управление проектами и продуктами. Занимался работой с командой и заказчиками, составлял ТЗ, бэклоги и прочее. Но в последнее время все больше в голову приходила мысль что хочу полностью посвятить себя разработке. Мне это интереснее и я чувствую что могу очень хорошо развиться в этом направлении. Ну и собственно решил на 4м десятке полностью сменить карьерный трек. Ранее занимался версткой, разработкой небольших программ на js(калькуляторы и подобные вещи), в последнее время активно изучаю реакт.
Из того что ранее разрабатывал: https://ton-m.ru/, https://drviki.ru/, http://avixis.ru/ и множество других небольших проектов. Так же на реакте делал личные кабинеты магазинов и сам сайт(он на фласке) https://azato.ru/ и сейчас в работе сервис ruizzi.ru.

# Информация по запуску проета.

Проект созда с использованием Create React App. (https://github.com/facebook/create-react-app).

После скачивания вам необходимо перейти в папку проекта и выполнить установку всех пакетов командой npm install. После чего с помощью команды npm start вы можете логально запустить проект на сводобном порту. Дополнительные команды:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
