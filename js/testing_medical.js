const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест

class Quiz {


	constructor(type, questions, results) {
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions.sort(() => Math.random() - 0.5).slice(0, 10);;



		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index) {
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if (value >= 1) {
			correct = index;
		}
		else {
			//Иначе ищем, какой ответ может быть правильным
			for (let i = 0; i < this.questions[this.current].answers.length; i++) {
				if (this.questions[this.current].answers[i].value >= 1) {
					correct = i;
					break;
				}
			}
		}



		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next() {


		this.current++;

		if (this.current >= this.questions.length) {
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End() {
		for (let i = 0; i < this.results.length; i++) {
			if (this.results[i].Check(this.score)) {
				this.result = i;
			}
		}
	}
}

//Класс, представляющий вопрос
class Question {
	constructor(text, answers) {
		this.text = text;
		this.answers = answers;
	}

	Click(index) {

		return this.answers[index].value;
	}
}

//Класс, представляющий ответ
class Answer {
	constructor(text, value) {
		this.text = text;
		this.value = value;
	}
}

//Класс, представляющий результат
class Result {
	constructor(text, value) {
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value) {
		if (this.value <= value) {
			return true;
		}
		else {
			return false;
		}
	}
}

//Массив с результатами
const results =
	[
		new Result("Ваша оценка 2", 0),
		new Result("Ваша оценка 2", 1),
		new Result("Ваша оценка 2", 2),
		new Result("Ваша оценка 2", 3),
		new Result("Ваша оценка 2", 4),
		new Result("Ваша оценка 2", 5),
		new Result("Ваша оценка 3", 6),
		new Result("Ваша оценка 4", 7),
		new Result("Ваша оценка 5", 8),
		new Result("Ваша оценка 5", 9),
		new Result("Ваша оценка 5", 10)
	];




//Массив с вопросами
const questions =
	[

		new Question("Наружный массаж сердца создает кровообращение, обеспечивающее до:",
			[
				new Answer(" 80% кровотока", 0),
				new Answer("50% кровотока", 0),
				new Answer("30% кровотока", 1),

			]),
		new Question("Искусственное кровообращение обеспечивается сжиманием сердца:",
			[
				new Answer("между грудиной и ребрами", 0),
				new Answer(" между грудиной и позвоночником", 1),
				new Answer(" между диафрагмой и грудиной", 0),

			]),

		new Question("При наружном массаже сердца ладони располагаются на:",
			[
				new Answer("верхней трети грудины", 0),
				new Answer("границе средней и нижней трети грудины", 1),
				new Answer("границе верхней и средней трети грудины", 0),

			]),

		new Question("Показания к закрытому массажу сердца: ",
			[
				new Answer(" остановка дыхания", 0),
				new Answer("остановка кровообращения", 1),
				new Answer("отсутствие сознания", 0),

			]),

		new Question("Признаки клинической смерти:",
			[
				new Answer("нарушение ритма дыхания, судороги, цианоз", 0),
				new Answer("отсутствие сознания, расширенные зрачки, аритмия", 0),
				new Answer("отсутствие сознания, дыхания, пульса на сонных артериях", 1),

			]),

		new Question("Алгоритм действий при СЛР:",
			[
				new Answer(" массаж сердца, ИВЛ, обеспечение проходимости дыхательных путей", 0),
				new Answer(" прекардиальный удар", 0),
				new Answer("обеспечение проходимости дыхательных путей, проверка дыхания массаж сердца, ИВЛ", 1),

			]),

		new Question("Стадии умирания:",
			[
				new Answer("судороги, кома, смерть", 0),
				new Answer("потеря сознания, агония, клиническая смерть", 0),
				new Answer("предагония, терминальная пауза, агония, клиническая смерть", 1),

			]),

		new Question(" Критерии эффективности СЛР:",
			[
				new Answer("восстановление сознания, дыхания, АД", 0),
				new Answer("сужение зрачков, появление пульса на сонных артериях, дыхания", 1),
				new Answer("подъем АД, двигательная активность", 0),

			]),

		new Question("Принцип АСВ:",
			[
				new Answer("массаж сердца, интубация, ИВЛ", 0),
				new Answer("обеспечение проходимости дыхательных путей, массаж сердца, ИВЛ", 1),
				new Answer("ИВЛ, дефибрилляция, массаж сердца", 0),

			]),

		new Question(" Сроки прекращения реанимации:",
			[
				new Answer("15 минут", 0),
				new Answer("30 минут", 1),
				new Answer("90 минут", 0),

			]),

		new Question("Показания для проведения СЛР:",
			[
				new Answer("терминальная стадия неизлечимой болезни", 0),
				new Answer("биологическая смерть", 0),
				new Answer("клиническая смерть", 1),

			]),

		new Question("Прием Геймлиха это:",
			[
				new Answer("резкий удар по спине", 0),
				new Answer("резкий толчок в живот под диафрагму", 1),
				new Answer("резкий толчок в грудную клетку", 0),

			]),

		new Question("Соотношение вдоха и массажа при проведении СЛР :",
			[
				new Answer("1:15", 0),
				new Answer("2:10", 0),
				new Answer("2:30", 1),

			]),

		new Question("Смещение грудины при массаже сердца на глубину:",
			[
				new Answer("5 см", 1),
				new Answer("2-3 см", 0),
				new Answer("1-2 см", 0),

			]),

		new Question("Частота вдохов при СЛР:",
			[
				new Answer("6-8 в минуту", 0),
				new Answer("10-12 в минуту", 1),
				new Answer("20-24 в минуту", 0),

			]),

		new Question("Тройной прием Сафара:",
			[
				new Answer("повернуть на бок, выдвинуть нижнюю челюсть", 0),
				new Answer("запрокинуть голову, выдвинуть нижнюю челюсть, открыть рот", 1),
				new Answer("отсосать содержимое, ввести роторасширитель, зажать ноздри", 0),

			]),

		new Question("Показания к прямому массажу сердца:",
			[
				new Answer("отсутствие пульса на сонных артериях", 0),
				new Answer("остановка сердца в кардиологическом отделении", 0),
				new Answer("остановка сердца во время полостной операции", 1),

			]),

		new Question("Для проведения ИВЛ мешком 'АМБУ' или 'рот в рот' :",
			[
				new Answer("повернуть голову на бок, ввести воздуховод", 0),
				new Answer("открыть рот, ввести языкодержатель", 0),
				new Answer("запрокинуть голову, выдвинуть нижнюю челюсть, открыть рот", 1),

			]),

		new Question("Препараты выбора при СЛР:",
			[
				new Answer("адреналин, кордарон", 1),
				new Answer("промедол, кордиамин", 0),
				new Answer("кофеин, мезатон", 0),

			]),

		new Question("Частота компрессий при СЛР:",
			[
				new Answer("120 в минуту", 1),
				new Answer("90 в минуту", 0),
				new Answer("60 в минуту", 0),

			]),

		new Question("Прекращение реанимации возможно:",
			[
				new Answer("если устал реаниматолог", 0),
				new Answer("если нет эффекта в течении 30 минут", 1),
				new Answer("при отсутствии медикаментов", 0),

			]),

		new Question("Продолжительность клинической смерти:",
			[
				new Answer("2-4 минуты", 0),
				new Answer("3-6 минут", 1),
				new Answer("8-10 минут", 0),

			]),

		new Question("Показания для применения приема Геймлиха:",
			[
				new Answer("аспирация", 0),
				new Answer("инородное тело в верхних дыхательных путях", 1),
				new Answer("инородное тело в пищеводе", 0),

			]),

		new Question("Осложнения при проведении СЛР:",
			[
				new Answer("перелом грудины", 1),
				new Answer("перелом позвоночника", 0),
				new Answer("перелом носа", 0),

			]),

		new Question("В предагональном состоянии:",
			[
				new Answer("дыхание не нарушено, АД повышено", 0),
				new Answer("дыхание поверхностное, пульс нитевидный, АД резко снижено", 1),
				new Answer("АД не определяется, аритмия, судороги", 0),

			]),

		new Question("Признаки биологической смерти:",
			[
				new Answer("трупные пятна, трупное окоченение", 1),
				new Answer("фибрилляция желудочков, зрачки расширены", 0),
				new Answer("кома, аритмия, АД не определяется", 0),

			]),

		new Question("Методы введения адреналина при СЛР:",
			[
				new Answer("внутримышечная инъекция, подкожная инъекция", 0),
				new Answer("внутривенная инъекция, внутрикостно", 1),
				new Answer("внутрисердечно", 0),

			]),

		new Question("СЛР не показана: ",
			[
				new Answer("при отсутствии медикаментов", 0),
				new Answer("если с момента смерти прошло 3 минуты", 0),
				new Answer("в терминальной стадии неизлечимой болезни", 1),

			]),

		new Question("Что не является основным признаком состояния клинической смерти:",
			[
				new Answer("отсутствие пульсации на сонной артерии", 0),
				new Answer("отсутствие дыхания", 0),
				new Answer("бледность кожных покровов", 1),

			]),

		new Question("Период клинической смерти в условиях гипотермии (30-31 С) составляет:",
			[
				new Answer("пятнадцать минут", 0),
				new Answer("три минуты", 0),
				new Answer(" десять минут", 1),

			]),

		new Question("Не относится к механизмам остановки кровообращения:",
			[
				new Answer("электромеханическая диссоциация («неэффективное сердце»)", 0),
				new Answer("фибрилляция желудочков и мерцательная желудочковая тахикардия", 0),
				new Answer("кардиогенный шок", 1),

			]),

		new Question("Повторные введения адреналина при сердечно-легочной реанимации осуществляют каждые: ",
			[
				new Answer("три-пять минут", 1),
				new Answer("шесть-семь минут", 0),
				new Answer("две минуты", 0),

			]),

		new Question("Характерный для поражения электротоком механизм остановки кровообращения:",
			[
				new Answer("электромеханическая диссоциация", 0),
				new Answer("асистолия", 0),
				new Answer("фибрилляция желудочков", 1),

			]),

		new Question("Введение гидрокарбоната натрия показано при:",
			[
				new Answer("декомпенсированном метаболическом ацидозе", 1),
				new Answer("декомпенсированном респираторном ацидозе", 0),
				new Answer("компенсированном метаболическом алкалозе", 0),

			]),

		new Question("На оценку состояния пострадавшего при сердечно-легочной реанимации дается: ",
			[
				new Answer("1 минута", 1),
				new Answer("1 секунда", 0),
				new Answer("3 минyты", 0),

			]),

		new Question("После остановки кровообращения зрачок расширяется через: ",
			[
				new Answer("1 минуту", 1),
				new Answer("3 минуты", 0),
				new Answer("15 секунд", 0),

			]),

		new Question("«Кошачий глаз» это:",
			[
				new Answer("признак биологической смерти", 1),
				new Answer(" симптом аллергической реакции", 0),
				new Answer("симптом клинической смерти", 0),

			]),

		new Question("«Тройной прием Сафара» это:",
			[
				new Answer("способ освобождения дыхательных путей", 1),
				new Answer("способ массажа сердца", 0),
				new Answer("способ внутривенной инфузии", 0),

			]),

		new Question("Низкоамплитудная синусоидальная кривая на ЭКГ это:",
			[
				new Answer("асистолия", 0),
				new Answer("фибрилляция желудочков мелковолновая", 1),
				new Answer(" фибрилляция желудочков крупноволновая", 0),

			]),

		new Question("Сердечно-легочную реанимацию начинают:",
			[
				new Answer("с обеспечения проходимости дыхательных путей", 1),
				new Answer(" с дефибрилляции", 0),
				new Answer("с массажа сердца", 0),

			]),

		new Question("При наличии трахеостомы ИВЛ проводится:",
			[
				new Answer("методом «рот в рот»", 0),
				new Answer(" методом «рот в нос»", 0),
				new Answer("через трахеостомическую трубку", 1),

			]),

		new Question(" При подозрении на травму шейного отдела позвоночника: ",
			[
				new Answer("не интубируют трахею", 0),
				new Answer("не разгибают шею во время интубации трахеи", 1),
				new Answer("не очищают ротоглотку", 0),

			]),


		new Question("Первая попытка монофазной дефибрилляции у взрослых начинается с разряда:",
			[
				new Answer("200 Дж", 1),
				new Answer("300 Дж", 0),
				new Answer("360 Дж", 0),

			]),

		new Question(" Что такое коникотомия:",
			[
				new Answer(" рассечение или прокалывание перстневидно-щитовидной связки для введения канюли в трахею", 1),
				new Answer(" рассечение трахеи между кольцами для введения трахеостомической трубки", 0),
				new Answer("пункция коленного сустава", 0),

			])
	];





//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update() {
	//Проверяем, есть ли ещё вопросы
	if (quiz.current < quiz.questions.length) {
		// document.getElementById("repeat").setAttribute("hidden", 'true');
		const button = document.getElementById("repeat");
		button.style.display = "none";
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}

		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else {
		//Если это конец, то выводим результат
		const button = document.getElementById("repeat");
		button.style.display = '';
		// document.getElementById("repeat").removeAttribute("hidden");

		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Правильных ответов: " + quiz.score;
	}
}

function Init() {
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for (let i = 0; i < btns.length; i++) {
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) {
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for (let i = 0; i < btns.length; i++) {
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if (quiz.type == 1) {
		if (correct >= 0) {
			btns[correct].className = "button button_correct";
		}

		if (index != correct) {
			btns[index].className = "button button_wrong";
		}
	}
	else {
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 2000);


}


