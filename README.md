[See demo](https://kanistra50.github.io/Neolent/)

# Store_Orders
Task for Neolent (SPA, AngularJS, ui-router, Bootstrap)

Open this project using Open Server


---------------------------------------------------------------------------------------------------
Нужно написать SPA приложение на фреймворке AngularJS с использованием angular-ui/ui-router.
Приложение должно использовать localStorage в качестве хранилища данных.
При открытии новой вкладки должен автоматически создаваться новый пользователь с автоинкрементным id. Каждый пользователь должен уметь создавать платежи.

В приложении должно быть как минимум 2 страницы:
страница платежей;  страница  пользователя.  

Страница платежей
------------------------------------------------
Страница платежей должна выполнять функции:
-Создавать платеж
-Просматривать список платежей в таблице
-Фильтровать список платежей
-Редактировать платежи

Создание платежа
 Новый платеж должен создаваться при введении в  элементы <input> суммы и основания и нажатию кнопки сохранения.
 Сумма - обязательное поле, должно содержать только валидные суммы, например, 12 или 23,45.
 Основание - обяательное поле, должно содержать любой текст.
 Кроме этих полей платеж должен иметь свой идентификатор и 
 Знать о своем создателе. 

Просмотр списка платежей в таблице
 Таблица платежей должна отображать все платежи всех пользователей. 
 При создании нового платежа на странице, он должен моментально появится в таблице. 
 В таблице должны быть столбцы: идентификатор, сумма и основание. 
 Последней строкой таблицы должна быть строка итогов, которая будет отображать сумму и количество платежей в таблице.

Фильтр платежей
 На странице должен быть простой фильтр, реализуемый элементом <select>, позволяющий выбрать отображать в таблице только платежи конкретного пользователя, выбранного в этом списке либо все сразу. 
 Изменения в таблице при изменении фильтра должны происходить моментально.

Редактор платежей
 Редактор платежа может открываться двумя способами: кликом на строку этого платежа в таблице или указанием в URL идентификатора платежа, например, example.com/payments/1.
 Редактор платежа представляет собой поля для редактирования суммы и основания платежа.
 Требования по валидации полей соответствуют таковым при создании платежа.
 Данные должны сохраняться по нажатию на Enter либо клику вне редактируемого поля.


Страница пользователя
-----------------------------------------
 На странице пользователя должно быть доступно к изменению имя пользователя. Принцип сохранения  - как на предыдущей странице. 
Верстка

 Страницы не должны иметь скролл, скролл должен появляться в самой таблице и/или редакторе платежей при необходимости. В остальном для верстки можно использовать, например, Twitter Bootstrap, при этом не обязательно, требования к интерфейсу - максимальная простота и понятность.

При разработке можно использовать любые дополнительные библиотеки. Оцениваться будет качество и оптимальность решений, а не количество внедренных фич.
