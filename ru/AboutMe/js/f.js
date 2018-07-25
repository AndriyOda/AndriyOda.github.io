/ *!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Включает Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation и другие участники
 * Выпущено по лицензии MIT
 * https://jquery.org/license
 *
 * Дата: 2018-01-20T17: 24Z
 * /
(функция (глобальная, фабричная) {

	«использовать строгую»;

	if (typeof module === "object" && typeof module.exports === "object") {

		// Для сред CommonJS и CommonJS, в которых правильное «окно»
		// присутствует, запустите фабрику и запустите jQuery.
		// Для сред, которые не имеют «окна» с «документом»
		// (например, Node.js), выставляем фабрику как module.exports.
		// Это подчеркивает необходимость создания реального «окна».
		// например, var jQuery = require ("jquery") (окно);
		// См. Билет # 14549 для получения дополнительной информации.
		module.exports = global.document?
			фабрика (глобальная, истинная):
			функция (w) {
				если (! w.document) {
					throw new Error («jQuery требует окна с документом»);
				}
				return factory (w);
			};
	} else {
		заводская (глобальная);
	}

// Пропускаем это, если окно еще не определено
}) (typeof window! == "undefined"? window: this, function (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// вызывать исключения, когда нестрогий код (например, ASP.NET 4.5) обращается к строгому режиму
// arguments.callee.caller (trac-13335). Но по состоянию на jQuery 3.0 (2016) строгий режим должен быть общим
// достаточно, чтобы все такие попытки охранялись в блоке try.
«использовать строгую»;

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (Object);

var support = {};

var isFunction = function isFunction (obj) {

      // Поддержка: Chrome <= 57, Firefox <= 52
      // В некоторых браузерах typeof возвращает «функцию» для элементов HTML <object>
      // (т. е. `typeof document.createElement (" object ") ===" function "`).
      // Мы не хотим классифицировать * любой * узел DOM как функцию.
      return typeof obj === "function" && typeof obj.nodeType! == "number";
  };


var isWindow = function isWindow (obj) {
		return obj! = null && obj === obj.window;
	};




	var preserveScriptAttributes = {
		тип: true,
		src: true,
		noModule: true
	};

	функция DOMEval (код, документ, узел) {
		doc = doc || документ;

		var i,
			script = doc.createElement ("script");

		script.text = code;
		if (node) {
			для (i в сохраненныхScriptAttributes) {
				if (node ​​[i]) {
					script [i] = node [i];
				}
			}
		}
		doc.head.appendChild (script) .parentNode.removeChild (скрипт);
	}


function toType (obj) {
	if (obj == null) {
		return obj + "";
	}

	// Поддержка: только Android <= 2.3 (функция RegExp)
	return typeof obj === "object" || typeof obj === "function"?
		class2type [toString.call (obj)] || «объект»:
		typeof obj;
}
/ * глобальный символ * /
// Определение этого глобального в .eslintrc.json создало бы опасность использования глобального
// неохраняемый в другом месте, кажется более безопасным определять глобальный только для этого модуля



вар
	version = "3.3.1",

	// Определите локальную копию jQuery
	jQuery = функция (селектор, контекст) {

		// Объект jQuery на самом деле является только конструктором init 'Enhanced'
		// Нужна инициализация, если вызывается jQuery (просто разрешите ошибку, если она не включена)
		return new jQuery.fn.init (селектор, контекст);
	},

	// Поддержка: только Android <= 4.0
	// Удостоверьтесь, что мы обрезаем спецификации и NBSP
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	// Текущая версия используемого jQuery
	jquery: версия,

	конструктор: jQuery,

	// Длина по умолчанию объекта jQuery равна 0
	длина: 0,

	toArray: function () {
		return slice.call (this);
	},

	// Получить элемент Nth в наборе согласованных элементов OR
	// Получить весь набор согласованных элементов как чистый массив
	get: function (num) {

		// Возвращаем все элементы в чистом массиве
		if (num == null) {
			return slice.call (this);
		}

		// Возвращаем только один элемент из набора
		return num <0? это [num + this.length]: this [num];
	},

	// Возьмите массив элементов и вставьте его в стек
	// (возврат нового набора согласованных элементов)
	pushStack: function (elems) {

		// Создаем новый набор элементов jQuery
		var ret = jQuery.merge (this.constructor (), elems);

		// Добавить старый объект в стек (в качестве ссылки)
		ret.prevObject = this;

		// Возвращаем новый набор элементов
		return ret;
	},

	// Выполнение обратного вызова для каждого элемента в согласованном наборе.
	each: function (callback) {
		return jQuery.each (это, обратный вызов);
	},

	map: function (callback) {
		return this.pushStack (jQuery.map (this, function (elem, i) {
			return callback.call (elem, i, elem);
		}));
	},

	slice: function () {
		return this.pushStack (slice.apply (это, аргументы));
	},

	first: function () {
		return this.eq (0);
	},

	last: function () {
		return this.eq (-1);
	},

	eq: функция (i) {
		var len = this.length,
			j = + i + (i <0≤len: 0);
		return this.pushStack (j> = 0 && j <len? [this [j]]: []);
	},

	end: function () {
		return this.prevObject || this.constructor ();
	},

	// Только для внутреннего использования.
	// Ведет себя как метод Array, а не как метод jQuery.
	двутолчковый,
	sort: arr.sort,
	сращивание: arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments [0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Обрабатываем ситуацию с глубокой копией
	if (typeof target === "boolean") {
		deep = target;

		// Пропустить логическое и целевое
		target = arguments [i] || {};
		я ++;
	}

	// Обрабатывать случай, когда цель - это строка или что-то (возможно в глубокой копии)
	if (typeof target! == "object" &&! isFunction (target)) {
		target = {};
	}

	// Расширять сам jQuery, если передан только один аргумент
	if (i === length) {
		target = this;
		я--;
	}

	for (; i <length; i ++) {

		// Имеем дело только с ненулевыми / неопределенными значениями
		if ((options = arguments [i])! = null) {

			// Расширение базового объекта
			для (имя в опциях) {
				src = target [name];
				copy = options [name];

				// Запретить бесконечный цикл
				if (target === copy) {
					Продолжать;
				}

				// Recurse, если мы объединяем простые объекты или массивы
				if (deep && copy && (jQuery.isPlainObject (копия) ||
					(copyIsArray = Array.isArray (копия)))) {

					if (copyIsArray) {
						copyIsArray = false;
						clone = src && Array.isArray (src)? src: [];

					} else {
						clone = src && jQuery.isPlainObject (src)? src: {};
					}

					// Никогда не перемещайте исходные объекты, клонируйте их
					target [name] = jQuery.extend (глубокий, клон, копия);

				// Не вводить неопределенные значения
				} else if (copy! == undefined) {
					target [name] = copy;
				}
			}
		}
	}

	// Возвращаем измененный объект
	return target;
};

jQuery.extend ({

	// Уникально для каждой копии jQuery на странице
	expando: "jQuery" + (версия + Math.random ()) .replace (/ \ D / g, ""),

	// Предположим, что jQuery готов без готового модуля
	isReady: true,

	error: function (msg) {
		throw new Error (msg);
	},

	noop: function () {},

	isPlainObject: function (obj) {
		var proto, Ctor;

		// Обнаружение очевидных негативов
		// Использовать toString вместо jQuery.type для захвата объектов хоста
		if (! obj || toString.call (obj)! == "[object Object]") {
			return false;
		}

		proto = getProto (obj);

		// Объекты без прототипа (например, `Object.create (null)`) равны
		if (! proto) {
			return true;
		}

		// Объекты с прототипом являются простыми, если они были построены глобальной функцией Object
		Ctor = hasOwn.call (proto, "constructor") && proto.constructor;
		return typeof Ctor === "function" && fnToString.call (Ctor) === ObjectFunctionString;
	},

	isEmptyObject: function (obj) {

		/ * eslint-disable no-unused-vars * /
		// См. Https://github.com/eslint/eslint/issues/6125
		var name;

		for (name in obj) {
			return false;
		}
		return true;
	},

	// Вычисляет скрипт в глобальном контексте
	globalEval: function (code) {
		DOMEval (код);
	},

	each: function (obj, callback) {
		var length, i = 0;

		if (isArrayLike (obj)) {
			length = obj.length;
			for (; i <length; i ++) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					ломать;
				}
			}
		} else {
			для (i в obj) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					ломать;
				}
			}
		}

		return obj;
	},

	// Поддержка: только Android <= 4.0
	trim: функция (текст) {
		return text == null?
			"":
			(текст + "") .replace (rtrim, "");
	},

	// результаты для внутреннего использования
	makeArray: функция (arr, results) {
		var ret = results || [];

		if (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "string"?
					[arr]: arr
				);
			} else {
				push.call (ret, arr);
			}
		}

		return ret;
	},

	inArray: function (elem, arr, i) {
		return arr == null? -1: indexOf.call (arr, elem, i);
	},

	// Поддержка: только Android <= 4.0, только PhantomJS 1
	// push.apply (_, arraylike) бросает на древний WebKit
	merge: function (first, second) {
		var len = + second.length,
			j = 0,
			i = first.length;

		for (; j <len; j ++) {
			first [i ++] = second [j];
		}

		first.length = i;

		возвращение сначала;
	},

	grep: function (elems, callback, invert) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect =! инвертировать;

		// Переходим через массив, сохраняем только элементы
		//, которые передают функцию валидатора
		for (; i <length; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				matches.push (elems [i]);
			}
		}

		возвратные совпадения;
	},

	// arg используется только для внутреннего использования
	map: function (elems, callback, arg) {
		var length, value,
			i = 0,
			ret = [];

		// Переходим через массив, переводя каждый из элементов в их новые значения
		if (isArrayLike (elems)) {
			length = elems.length;
			for (; i <length; i ++) {
				value = callback (elems [i], i, arg);

				if (значение! = null) {
					ret.push (значение);
				}
			}

		// Пройдите через каждую клавишу на объекте,
		} else {
			для (i в элемах) {
				value = callback (elems [i], i, arg);

				if (значение! = null) {
					ret.push (значение);
				}
			}
		}

		// Сглаживание любых вложенных массивов
		return concat.apply ([], ret);
	},

	// Глобальный счетчик GUID для объектов
	guid: 1,

	// jQuery.support не используется в Core, но другие проекты присоединяют их
	// свойств, чтобы он существовал.
	поддержка: поддержка
});

if (typeof Symbol === "function") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// Заполнение карты class2type
jQuery.each ("Логическая строка строковой функции Array Date RegExp Object Error Symbol" .split (""),
function (i, name) {
	class2type ["[object" + name + "]"] = name.toLowerCase ();
});

функция isArrayLike (obj) {

	// Поддержка: только реальный iOS 8.2 (не воспроизводимый в симуляторе)
	// `in` check используется для предотвращения ошибки JIT (gh-2145)
	// hasOwn здесь не используется из-за ложных негативов
	// относительно длины нодлиста в IE
	var length = !! obj && "length" в obj && obj.length,
		type = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		return false;
	}

	return type === "array" || длина === 0 ||
		typeof length === "number" && length> 0 && (length - 1) в obj;
}
var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation и другие участники
 * Выпущено по лицензии MIT
 * http://jquery.org/license
 *
 * Дата: 2016-08-08
 * /
(функция (окно) {

var i,
	поддержка,
	Expr,
	GetText,
	isXML,
	разметить,
	компиляции,
	Выбрать,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Локальные документы
	setDocument,
	документ,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	Матчи,
	содержит,

	// Данные, специфичные для экземпляра
	expando = "sizzle" + 1 * new Date (),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	sortOrder = function (a, b) {
		if (a === b) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Методы экземпляра
	hasOwn = ({}). hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Использовать урезанный indexOf, поскольку он быстрее, чем native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function (list, elem) {
		var i = 0,
			len = list.length;
		for (; i <len; i ++) {
			if (list [i] === elem) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked | selected | async | autofocus | autoplay | controls | defer | disabled | hidden | ismap | loop | multiple | open | readonly | required | scoped»,

	// Обычные выражения

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?: \\\\. | [\\ w-] | [^ \ 0 - \\ xa0]) +",

	// Селекторы атрибутов: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\ [" + whitespace + "* (" + identifier + ") (?:" + whitespace +
		// Оператор (захват 2)
		"* ([* ^ $ |! ~]? =)" + пробел +
		// «Значения атрибутов должны быть идентификаторами CSS [capture 5] или строками [capture 3 или capture 4]»
		«* (?: '((?:. \\\\ | [^ \\\\']) *) '| \ "((?:. \\\\ | [^ \\\\\"] ) *) \ "| (" + идентификатор + ")) |)" + пробел +
		"* \\]",

	pseudos = ":(" + identifier + ") (?: \\ ((" +
		// Чтобы уменьшить количество селекторов, нуждающихся в tokenize в preFilter, предпочитайте аргументы:
		// 1. процитировано (захват 3, захват 4 или захват 5)
		«( '((?:. \\\\ | [^ \\\\']) *) '| \ "((?:. \\\\ | [^ \\\\\"]) *) \ ") |" +
		// 2. простой (захват 6)
		"((?: \\\\. | [^ \\\\ () [\\]] |" + attributes + ") *) |" +
		// 3. что-нибудь еще (захват 2)
		". *" +
		") \\) |)",

	// Ведущее и неэкранированное конечное пустое пространство, захватывающее некоторые символы без пробелов, предшествующие последним
	rwhitespace = новый RegExp (пробелы + "+", "g"),
	rtrim = new RegExp ("^" + whitespace + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" + пробел + "+ $", "g "),

	rcomma = new RegExp ("^" + пробел + "*," + пробел + "*"),
	rcombinators = new RegExp ("^" + пробел + "* ([> + ~] |" + whitespace + ")" + whitespace + "*"),

	rattributeQuotes = new RegExp ("=" + whitespace + "* ([^ \\] '\"] *?) "+ пробел +" * \\] "," g "),

	rpseudo = новый RegExp (псевдо),
	ridentifier = новый RegExp ("^" + идентификатор + "$"),

	matchExpr = {
		«ID»: новый RegExp («^ # (« + идентификатор + »)»)
		«CLASS»: новый RegExp («^ \\. (« + Идентификатор + »)»)
		«TAG»: новый RegExp («^ (« + идентификатор + »| [*])»)
		«ATTR»: новые атрибуты RegExp («^» +),
		«PSEUDO»: новый RegExp («^» + pseudos),
		«CHILD»: новый RegExp («^ :( только | первый | последний | nth | nth-last) - (дочерний | из-типа) (?: \\ (" + whitespace +
			"* (even | odd | (([+ -] |) (\\ d *) n |)" + whitespace + "* (?: ([+ -] |)" + пробел +
			"* (\\ d +) |))" + пробел + "* \\) |)", "i"),
		"bool": новый RegExp ("^ (?:" + booleans + ") $", "i"),
		// Для использования в библиотеках, реализующих .is ()
		// Мы используем это для сопоставления POS в `select`
		"needsContext": новый RegExp ("^" + whitespace + "* [> + ~] |: (even | odd | eq | gt | lt | nth | first | last) (?: \\ (" +
			пробел + "* ((?: - \\ d)? \\ d *)" + whitespace + "* \\) |) (? = [^ -] | $)", "i")
	},

	rinputs = / ^ (?: input | select | textarea | button) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [native \ w /,

	// Легко-анализируемый / извлекаемый идентификатор или селектор TAG или CLASS
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = / [+ ~] /,

	// CSS ускользает
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ("\\\\ ([\\ da-f] {1,6}" + whitespace + "? | (" + whitespace + ") |.)", "ig"),
	funescape = function (_, escaped, escapedWhitespace) {
		var high = "0x" + экранированный - 0x10000;
		// NaN означает некодирование
		// Поддержка: Firefox <24
		// Обходная ошибочная цифровая интерпретация + "0x"
		return high! == высокий || escapedWhitespace?
			сбежал:
			высокий <0?
				// BMP-код
				String.fromCharCode (высокий + 0x10000):
				// Дополнительный код (суррогатная пара)
				String.fromCharCode (высокий) 10 | 0xD800, высокий и 0x3FF | 0xDC00);
	},

	// Сериализация строки / идентификатора CSS
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^ -? \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w -] / g,
	fcssescape = function (ch, asCodePoint) {
		if (asCodePoint) {

			// U + 0000 NULL становится U + FFFD ЗАМЕНА ХАРАКТЕРА
			if (ch === "\ 0") {
				return "\ uFFFD";
			}

			// Управляющие символы и (в зависимости от позиции) числа получают экранированные в виде кодовых точек
			return ch.slice (0, -1) + "\\" + ch.charCodeAt (ch.length - 1) .toString (16) + "";
		}

		// Другие потенциально-специальные символы ASCII получают обратную косую черту
		return "\\" + ch;
	},

	// Используется для iframes
	// См. SetDocument ()
	// Удаление обертки функций вызывает «Отказано в разрешении»
	// ошибка в IE
	unloadHandler = function () {
		setDocument ();
	},

	disabledAncestor = addCombinator (
		функция (elem) {
			return elem.disabled === true && ("form" в elem || "label" в элементе);
		},
		{dir: "parentNode", далее: "legend"}
	);

// Оптимизация для push.apply (_, NodeList)
пытаться {
	push.apply (
		(arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	);
	// Поддержка: Android <4.0
	// Обнаружение бесшумного нажатия.
	arr [preferredDoc.childNodes.length] .nodeType;
} catch (e) {
	push = {apply: arr.length?

		// Использование среза, если возможно
		function (target, els) {
			push_native.apply (target, slice.call (els));
		}:

		// Поддержка: IE <9
		// В противном случае добавьте напрямую
		function (target, els) {
			var j = target.length,
				i = 0;
			// Нельзя доверять NodeList.length
			while ((target [j ++] = els [i ++])) {}
			target.length = j - 1;
		}
	};
}

функция Sizzle (селектор, контекст, результаты, семя) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType по умолчанию - 9, поскольку контекст по умолчанию используется для документа
		nodeType = context? context.nodeType: 9;

	результаты = результаты || [];

	// Вернемся раньше от вызовов с неверным селектором или контекстом
	if (typeof selector! == "string" ||! selector ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		результаты возврата;
	}

	// Попробуйте выполнить ярлыки операций поиска (в отличие от фильтров) в документах HTML
	если (! семя) {

		if ((context? context.ownerDocument || context: preferredDoc)! == document) {
			setDocument (контекст);
		}
		context = context || документ;

		if (documentIsHTML) {

			// Если селектор достаточно прост, попробуйте использовать метод «get * By *» DOM
			// (кроме контекста DocumentFragment, где методы не существуют)
			if (nodeType! == 11 && (match = rquickExpr.exec (селектор))) {

				// ID-селектор
				if ((m = match [1])) {

					// Контекст документа
					if (nodeType === 9) {
						if ((elem = context.getElementById (m))) {

							// Поддержка: IE, Opera, Webkit
							// TODO: определение версий
							// getElementById может соответствовать элементам по имени вместо ID
							if (elem.id === m) {
								results.push (elem);
								результаты возврата;
							}
						} else {
							результаты возврата;
						}

					// Элемент контекста
					} else {

						// Поддержка: IE, Opera, Webkit
						// TODO: определение версий
						// getElementById может соответствовать элементам по имени вместо ID
						if (newContext && (elem = newContext.getElementById (m)) &&
							содержит (context, elem) &&
							elem.id === m) {

							results.push (elem);
							результаты возврата;
						}
					}

				// Тип селектора
				} else if (match [2]) {
					push.apply (results, context.getElementsByTagName (селектор));
					результаты возврата;

				// Селектор классов
				} else if ((m = match [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (results, context.getElementsByClassName (m));
					результаты возврата;
				}
			}

			// Воспользуйтесь функцией querySelectorAll
			if (support.qsa &&
				! compilerCache [селектор + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (селектор))) {

				if (nodeType! == 1) {
					newContext = context;
					newSelector = селектор;

				// qSA смотрит вне контекста Element, чего мы не хотим
				// Спасибо Эндрю Дупону за эту технику обхода
				// Поддержка: IE <= 8
				// Исключить элементы объекта
				} else if (context.nodeName.toLowerCase ()! == "object") {

					// Захват идентификатора контекста, сначала установив его, если необходимо
					if ((nid = context.getAttribute ("id"))) {
						nid = nid.replace (rcssescape, fcssescape);
					} else {
						context.setAttribute ("id", (nid = expando));
					}

					// Префикс каждого селектора в списке
					groups = tokenize (селектор);
					i = groups.length;
					в то время как я-- ) {
						группы [i] = "#" + nid + "" + toSelector (группы [i]);
					}
					newSelector = groups.join (",");

					// Расширение контекста для селекторов
					newContext = rsibling.test (selector) && testContext (context.parentNode) ||
						контекст;
				}

				if (newSelector) {
					пытаться {
						push.apply (результаты,
							newContext.querySelectorAll (newSelector)
						);
						результаты возврата;
					} catch (qsaError) {
					} в конце концов {
						if (nid === expando) {
							context.removeAttribute ("id");
						}
					}
				}
			}
		}
	}

	// Все остальные
	return select (selector.replace (rtrim, «$ 1»), контекст, результаты, семя);
}

/ **
 * Создание кеш-ключа с ограниченным размером
 * @returns {function (string, object)} Возвращает данные Object после сохранения его на себя с помощью
 * имя свойства (строка с суффиксом) и (если кеш больше Expr.cacheLength)
 * удаление самой старой записи
 * /
function createCache () {
	var keys = [];

	кеш функции (ключ, значение) {
		// Используйте (key + ""), чтобы избежать столкновения с собственными свойствами прототипа (см. Проблема № 157)
		if (keys.push (key + "")> Expr.cacheLength) {
			// Сохранять только последние записи
			Удалить кеш [keys.shift ()];
		}
		return (cache [key + ""] = значение);
	}
	обратный кэш;
}

/ **
 * Отметьте функцию для специального использования Sizzle
 * @param {Function} fn Функция для отметки
 * /
function markFunction (fn) {
	fn [expando] = true;
	return fn;
}

/ **
 * Поддержка тестирования с использованием элемента
 * @param {Function} fn Передал созданный элемент и возвращает логический результат
 * /
функция assert (fn) {
	var el = document.createElement ("fieldset");

	пытаться {
		return !! fn (el);
	} catch (e) {
		return false;
	} в конце концов {
		// Удалить из родителя по умолчанию
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}
		// выпуск памяти в IE
		el = null;
	}
}

/ **
 * Добавляет тот же обработчик для всех указанных атрибутов
 * @param {String} attrs Список атрибутов, разделенных пробелами
 * @param {Function} обработчик Метод, который будет применяться
 * /
функция addHandle (attrs, обработчик) {
	var arr = attrs.split ("|"),
		i = arr.length;

	в то время как я-- ) {
		Expr.attrHandle [arr [i]] = обработчик;
	}
}

/ **
 * Проверяет порядок двух братьев и сестер
 * @param {Element} a
 * @param {Элемент} b
 * @returns {Number} Возвращает меньше 0, если a предшествует b, больше 0, если a следует b
 * /
function siblingCheck (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Использовать IE sourceIndex, если он доступен на обоих узлах
	if (diff) {
		return diff;
	}

	// Проверяем, следует ли b
	if (cur) {
		while ((cur = cur.nextSibling)) {
			if (cur === b) {
				return -1;
			}
		}
	}

	вернуть? 1: -1;
}

/ **
 * Возвращает функцию, используемую в псевдонимах для типов ввода
 * @param {String} type
 * /
function createInputPseudo (type) {
	return function (elem) {
		var name = elem.nodeName.toLowerCase ();
		return name === "input" && elem.type === type;
	};
}

/ **
 * Возвращает функцию, используемую в псевдонимах для кнопок
 * @param {String} type
 * /
function createButtonPseudo (type) {
	return function (elem) {
		var name = elem.nodeName.toLowerCase ();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/ **
 * Возвращает функцию, используемую в псевдоях для: enabled /: disabled
 * @param {Boolean} отключен true для: disabled; false для: enabled
 * /
функция createDisabledPseudo (отключено) {

	// Известно: отключено ложное срабатывание: fieldset [disabled]> legend: nth-of-type (n + 2): can-disable
	return function (elem) {

		// Доступны только определенные элементы: enabled или: disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ("form" в elem) {

			// Проверяем унаследованную отключенность на соответствующих элементах, не связанных с отключением:
			// * перечислены связанные с формой элементы в отключенном поле
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * элементы опции в отключенной группе optgroup
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Все такие элементы имеют свойство «form».
			if (elem.parentNode && elem.disabled === false) {

				// Элементы опции откладываются к родительской optgroup, если они присутствуют
				if ("label" в elem) {
					if ("label" в элементе.parentNode) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Поддержка: IE 6 - 11
				// Используйте свойство ярлыка isDisabled для проверки отключенных предков fieldset
				return elem.isDisabled === disabled ||

					// Где нет isDisabled, проверьте вручную
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
						disabledAncestor (elem) === disabled;
			}

			return elem.disabled === disabled;

		// Попробуйте вывести элементы, которые нельзя отключить, прежде чем доверять отключенному свойству.
		// Некоторые жертвы попадают в нашу сеть (ярлык, легенда, меню, дорожка), но это не должно
		// даже существуют на них, не говоря уже о булевом значении.
		} else if ("label" в elem) {
			return elem.disabled === disabled;
		}

		// Остальные элементы не включены: enabled и: disabled
		return false;
	};
}

/ **
 * Возвращает функцию, используемую в псевдоопределениях для позиций
 * @param {Function} fn
 * /
function createPositionalPseudo (fn) {
	return markFunction (функция (аргумент) {
		аргумент = + аргумент;
		return markFunction (функция (семя, совпадения) {
			var j,
				matchIndexes = fn ([], seed.length, аргумент),
				i = matchIndexes.length;

			// Сопоставление элементов, найденных по указанным индексам
			в то время как я-- ) {
				if (seed [(j = matchIndexes [i])]) {
					seed [j] =! (соответствует [j] = seed [j]);
				}
			}
		});
	});
}

/ **
 * Проверяет узел на достоверность как контекст Sizzle
 * @param {Элемент | Object =} контекст
 * @returns {Element | Object | Boolean} Входной узел, если он допустим, в противном случае значение ложности
 * /
function testContext (контекст) {
	return context && typeof context.getElementsByTagName! == "undefined" && context;
}

// Выставляем опорные вары для удобства
support = Sizzle.support = {};

/ **
 * Обнаруживает узлы XML
 * @param {Элемент | Объект} elem Элемент или документ
 * @returns {Boolean} True iff elem - это не HTML-узел XML
 * /
isXML = Sizzle.isXML = function (elem) {
	// documentElement проверяется для случаев, когда он еще не существует
	// (например, загрузка iframes в IE - # 4833)
	var documentElement = elem && (elem.ownerDocument || elem) .documentElement;
	return documentElement? documentElement.nodeName! == "HTML": false;
};

/ **
 * Устанавливает связанные с документами переменные один раз на основе текущего документа
 * @param {Element | Object} [doc] Объект элемента или документа, используемый для установки документа
 * @returns {Object} Возвращает текущий документ
 * /
setDocument = Sizzle.setDocument = function (node) {
	var hasCompare, subWindow,
		doc = узел? node.ownerDocument || node: preferredDoc;

	// Вернемся раньше, если doc недействителен или уже выбран.
	if (doc === document || doc.nodeType! == 9 ||! doc.documentElement) {
		возвратный документ;
	}

	// Обновление глобальных переменных
	document = doc;
	docElem = document.documentElement;
	documentIsHTML =! isXML (документ);

	// Поддержка: IE 9-11, Edge
	// Доступ к документам iframe после выгрузки позволяет сбросить «отклоненные разрешения» (jQuery # 13936)
	if (preferredDoc! == document &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// Поддержка: IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ("выгрузить", unloadHandler, false);

		// Поддержка: только IE 9 - 10
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ("onunload", unloadHandler);
		}
	}

	/ * Атрибуты
	-------------------------------------------------- -------------------- * /

	// Поддержка: IE <8
	// Убедитесь, что getAttribute действительно возвращает атрибуты, а не свойства
	// (за исключением IE8 booleans)
	support.attributes = assert (function (el) {
		el.className = "i";
		return! el.getAttribute ("className");
	});

	/ * getElement (s) By *
	-------------------------------------------------- -------------------- * /

	// Проверяем, возвращает ли getElementsByTagName ("*") только элементы
	support.getElementsByTagName = assert (function (el) {
		el.appendChild (document.createComment (""));
		return! el.getElementsByTagName ("*"). length;
	});

	// Поддержка: IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Поддержка: IE <10
	// Проверяем, возвращает ли getElementById элементы по имени
	// Разбитые методы getElementById не подбирают программно заданные имена,
	// поэтому используйте обходной тест getElementsByName
	support.getById = assert (функция (el) {
		docElem.appendChild (el) .id = expando;
		return! document.getElementsByName || ! document.getElementsByName (expando) .length;
	});

	// Идентификатор фильтра и поиск
	if (support.getById) {
		Expr.filter ["ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			return function (elem) {
				return elem.getAttribute ("id") === attrId;
			};
		};
		Expr.find ["ID"] = функция (id, context) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				var elem = context.getElementById (id);
				вернуть elem? [elem]: [];
			}
		};
	} else {
		Expr.filter ["ID"] = function (id) {
			var attrId = id.replace (runescape, funescape);
			return function (elem) {
				var node = typeof elem.getAttributeNode! == "undefined" &&
					elem.getAttributeNode ( "ID");
				return node && node.value === attrId;
			};
		};

		// Поддержка: только IE 6-7
		// getElementById не является надежным как ярлык поиска
		Expr.find ["ID"] = функция (id, context) {
			if (typeof context.getElementById! == "undefined" && documentIsHTML) {
				var node, i, elems,
					elem = context.getElementById (id);

				если (elem) {

					// Проверка атрибута id
					node = elem.getAttributeNode ("id");
					if (node ​​&& node.value === id) {
						return [elem];
					}

					// Вернемся к getElementsByName
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++])) {
						node = elem.getAttributeNode ("id");
						if (node ​​&& node.value === id) {
							return [elem];
						}
					}
				}

				вернуть [];
			}
		};
	}

	// Тег
	Expr.find ["TAG"] = support.getElementsByTagName?
		функция (тег, контекст) {
			if (typeof context.getElementsByTagName! == "undefined") {
				return context.getElementsByTagName (tag);

			// Узлы DocumentFragment не имеют gEBTN
			} else if (support.qsa) {
				return context.querySelectorAll (тег);
			}
		}:

		функция (тег, контекст) {
			var elem,
				tmp = [],
				i = 0,
				// По счастливому совпадению на узлах DocumentFragment также появляется (сломанный) gEBTN
				results = context.getElementsByTagName (tag);

			// Отфильтровать возможные комментарии
			if (tag === "*") {
				while ((elem = results [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (elem);
					}
				}

				return tmp;
			}
			результаты возврата;
		};

	// Класс
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, context) {
		if (typeof context.getElementsByClassName! == "undefined" && documentIsHTML) {
			return context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// QSA и matchSelector support

	// matchesSelector (: active) сообщает false, когда true (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// qSa (: focus) сообщает false, когда true (Chrome 21)
	// Мы допускаем это из-за ошибки в IE8 / 9, которая вызывает ошибку
	// всякий раз, когда обращение к документу document.activeElement выполняется в iframe
	// Итак, мы разрешаем: фокус проходить через QSA все время, чтобы избежать IE-ошибки
	// См. Https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll))) {
		// Создаем регулярное выражение QSA
		// Стратегия Regex, принятая у Диего Перини
		assert (функция (el) {
			// Выберите значение для пустой строки с целью
			// Это значит, что IE не обрабатывает явно
			// установка атрибута boolean content,
			// поскольку его присутствие должно быть достаточно
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>" +
				"<select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<option selected = ''> </ option> </ select>";

			// Поддержка: IE8, Opera 11-12.16
			// Ничего не следует выбирать, когда пустые строки следуют за ^ = или $ = или * =
			// Атрибут test должен быть неизвестен в Opera, но «безопасен» для WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ("[msallowcapture ^ = '']"). length) {
				rbuggyQSA.push ("[* ^ $] =" + whitespace + "* (?: '' | \" \ ")");
			}

			// Поддержка: IE8
			// Логические атрибуты и «значение» обрабатываются неправильно
			if (! el.querySelectorAll ("[selected]"). length) {
				rbuggyQSA.push ("\\ [" + whitespace + "* (?: value |" + booleans + ")");
			}

			// Поддержка: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ("[id ~ =" + expando + "-]") .length) {
				rbuggyQSA.push ( "~ =");
			}

			// Webkit / Opera -: checked должен возвращать выбранные элементы опции
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 выдает ошибку здесь и не увидит более поздние тесты
			if (! el.querySelectorAll (": checked"). length) {
				rbuggyQSA.push ( ": проверено");
			}

			// Поддержка: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// Внутри страницы `selector # id sibling-combinator selector` не работает
			if (! el.querySelectorAll ("a #" + expando + "+ *") .length) {
				rbuggyQSA.push ( "# + [+ ~]..");
			}
		});

		assert (функция (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>" +
				"<select disabled = 'disabled'> <option /> </ select>";

			// Поддержка: Windows 8 Native Apps
			// Атрибуты типа и имени ограничены во время назначения .innerHTML
			var input = document.createElement ("input");
			input.setAttribute («тип», «скрытый»);
			el.appendChild (input) .setAttribute («имя», «D»);

			// Поддержка: IE8
			// Принудительная чувствительность к регистру атрибута name
			if (el.querySelectorAll ("[name = d]"). length) {
				rbuggyQSA.push ("name" + whitespace + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5 -: enabled /: отключено и скрытые элементы (скрытые элементы все еще включены)
			// IE8 выдает ошибку здесь и не увидит более поздние тесты
			if (el.querySelectorAll (": enabled"). length! == 2) {
				rbuggyQSA.push (": enabled", ": disabled");
			}

			// Поддержка: IE9-11 +
			// IE: отключенный селектор не забирает детей отключенных полей
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll (": disabled"). length! == 2) {
				rbuggyQSA.push (": enabled", ": disabled");
			}

			// Opera 10-11 не выбрасывает недопустимые псевдо-запятые
			el.querySelectorAll ( "* ,: х");
			rbuggyQSA.push ( "*:".);
		});
	}

	if ((support.matchesSelector = rnative.test ((matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		assert (функция (el) {
			// Проверяем, можно ли делать совпаденияSelector
			// на отключенном узле (IE 9)
			support.disconnectedMatch = matches.call (el, "*");

			// Это должно завершиться неудачей с исключением
			// Gecko не делает ошибку, вместо этого возвращает false
			matches.call (el, "[s! = '']: x");
			rbuggyMatches.push ("! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ("|"));
	rbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/* Содержит
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// Элемент содержит другой
	// Целенаправленная самоисключительная
	// Как и в случае, элемент не содержит себя
	содержит = hasCompare || rnative.test (docElem.contains)?
		функция (a, b) {
			var adown = a.nodeType === 9? a.documentElement: a,
				bup = b && b.parentNode;
			return a === bup || !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup):
					a.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
			));
		}:
		функция (a, b) {
			если (b) {
				while ((b = b.parentNode)) {
					if (b === a) {
						return true;
					}
				}
			}
			return false;
		};

	/ * Сортировка
	-------------------------------------------------- -------------------- * /

	// Сортировка порядка документов
	sortOrder = hasCompare?
	функция (a, b) {

		// Флаг для дублирования удаления
		if (a === b) {
			hasDuplicate = true;
			return 0;
		}

		// Сортировка по существованию метода, если только один вход имеет compareDocumentPosition
		var compare =! a.compareDocumentPosition -! b.compareDocumentPosition;
		если (ср.) {
			return compare;
		}

		// Вычисление позиции, если оба входа принадлежат одному документу
		compare = (a.ownerDocument || a) === (b.ownerDocument || b)?
			a.compareDocumentPosition (b):

			// В противном случае мы знаем, что они отключены
			1;

		// Отключенные узлы
		если (сравните & 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === compare)) {

			// Выберите первый элемент, связанный с нашим предпочтительным документом
			if (a === document || a.ownerDocument === preferredDoc && содержит (preferredDoc, a)) {
				return -1;
			}
			if (b === document || b.ownerDocument === preferredDoc && содержит (preferredDoc, b)) {
				return 1;
			}

			// Сохранение первоначального заказа
			return sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		return compare & 4? -1: 1;
	}:
	функция (a, b) {
		// Выходим раньше, если узлы идентичны
		if (a === b) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [b];

		// Беспомощные узлы являются либо документами, либо отключены
		если (! aup ||! bup) {
			вернуть документ ===? -1:
				b === документ? 1:
				aup? -1:
				bup? 1:
				sortInput?
				(indexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Если узлы являются братьями и сестрами, мы можем сделать быструю проверку
		} else if (aup === bup) {
			return siblingCheck (a, b);
		}

		// В противном случае нам нужны полные списки их предков для сравнения
		cur = a;
		while ((cur = cur.parentNode)) {
			ap.unshift (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp.unshift (cur);
		}

		// Спускаемся по дереву, ища несоответствие
		while (ap [i] === bp [i]) {
			я ++;
		}

		вернуть i?
			// Выполняем проверку брака, если узлы имеют общего предка
			siblingCheck (ap [i], bp [i]):

			// В противном случае сначала узлы в нашем документе сортируются
			ap [i] === preferredDoc? -1:
			bp [i] === preferredDoc? 1:
			0;
	};

	возвратный документ;
};

Sizzle.matches = function (expr, elements) {
	return Sizzle (expr, null, null, elements);
};

Sizzle.matchesSelector = function (elem, expr) {
	// Устанавливаем документы в случае необходимости
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	// Убедитесь, что селектора атрибутов указаны
	expr = expr.replace (rattributeQuotes, "= '$ 1']");

	if (support.matchesSelector && documentIsHTML &&
		! compilerCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		пытаться {
			var ret = matches.call (elem, expr);

			// Точки IE 9Selector возвращает false на отключенных узлах
			if (ret || support.disconnectedMatch ||
					// Также, отключенные узлы, как говорят, находятся в документе
					// фрагмент в IE 9
					elem.document && elem.document.nodeType! == 11) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle (expr, document, null, [elem]) .length> 0;
};

Sizzle.contains = function (context, elem) {
	// Устанавливаем документы в случае необходимости
	if ((context.ownerDocument || context)! == document) {
		setDocument (контекст);
	}
	return содержит (контекст, elem);
};

Sizzle.attr = function (elem, name) {
	// Устанавливаем документы в случае необходимости
	if ((elem.ownerDocument || elem)! == document) {
		setDocument (elem);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],
		// Не обманывайте свойствами Object.prototype (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, name,! documentIsHTML):
			не определено;

	return val! == undefined?
		val:
		support.attributes || ! documentIsHTML?
			elem.getAttribute (имя):
			(val = elem.getAttributeNode (имя)) && val.specified?
				val.value:
				ноль;
};

Sizzle.escape = function (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	throw new Error («Синтаксическая ошибка, нераспознанное выражение:» + msg);
};

/ **
 * Сортировка и удаление документов
 Результаты * @param {ArrayLike}
 * /
Sizzle.uniqueSort = функция (результаты) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Если мы не знаем *, мы можем обнаружить дубликаты, предположить их присутствие
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = results [i ++])) {
			if (elem === results [i]) {
				j = duplicates.push (i);
			}
		}
		тогда как (j--) {
			results.splice (дубликаты [j], 1);
		}
	}

	// Очистить ввод после сортировки для выпуска объектов
	// См. Https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	результаты возврата;
};

/ **
 * Функция полезности для извлечения текстового значения массива узлов DOM
 * @param {Array | Element} elem
 * /
getText = Sizzle.getText = function (elem) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {
		// Если нет nodeType, ожидается, что это массив
		while ((node ​​= elem [i ++])) {
			// Не пересекайте узлы комментариев
			ret + = getText (узел);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
		// Использовать textContent для элементов
		// использование innerText удалено для согласованности новых строк (jQuery # 11153)
		if (typeof elem.textContent === "string") {
			return elem.textContent;
		} else {
			// Перемещение своих детей
			для (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (elem);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		return elem.nodeValue;
	}
	// Не включать комментарии или узлы команд обработки

	return ret;
};

Expr = Sizzle.selectors = {

	// Может настраиваться пользователем
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	найти: {},

	относительный: {
		">": {dir: "parentNode", first: true},
		"": {dir: "parentNode"},
		"+": {dir: "previousSibling", first: true},
		"~": {dir: "previousSibling"}
	},

	preFilter: {
		«ATTR»: функция (совпадение) {
			match [1] = match [1] .replace (runescape, funescape);

			// Перемещаем заданное значение в соответствии с [3], независимо от того, цитируется ли оно или нет.
			match [3] = (соответствие [3] || соответствие [4] || соответствие [5] || "") .replace (runescape, funescape);

			if (match [2] === "~ =") {
				match [3] = "" + match [3] + "";
			}

			return match.slice (0, 4);
		},

		"CHILD": function (match) {
			/ * соответствует matchExpr ["CHILD"]
				1 тип (только | nth | ...)
				2 что (ребенок | типа)
				3 аргумент (даже | нечетный | \ d * | \ d * n ([+ -] \ d +)? | ...)
				4 xn-компонента аргумента xn + y ([+ -]? \ D * n |)
				5 знака xn-компонента
				6 x xn-компонент
				7 знак y-компонента
				8 y y-компонента
			* /
			match [1] = match [1] .toLowerCase ();

			if (match [1] .slice (0, 3) === "nth") {
				// nth- * требует аргумента
				если (! match [3]) {
					Sizzle.error (матч [0]);
				}

				// числовые параметры x и y для Expr.filter.CHILD
				// помним, что false / true cast соответственно 0/1
				match [4] = + (матч [4]? матч [5] + (матч [6] || 1): 2 * (матч [3] === "even" || match [3] === " странный" ) );
				match [5] = + ((совпадение [7] + совпадение [8]) || соответствие [3] === "нечетное");

			// другие типы запрещают аргументы
			} else if (match [3]) {
				Sizzle.error (матч [0]);
			}

			ответное совпадение;
		},

		«PSEUDO»: функция (совпадение) {
			var избыток,
				unquoted =! match [6] && match [2];

			if (matchExpr ["CHILD"]. test (match [0])) {
				return null;
			}

			// Принимаем цитируемые аргументы as-is
			если (совпадение [3]) {
				match [2] = match [4] || матч [5] || "";

			// Сбрасываем лишние символы из некотируемых аргументов
			} else if (unquoted && rpseudo.test (без кавычек) &&
				// Получить избыток от tokenize (рекурсивно)
				(избыток = токенизация (некорректная, истинная)) &&
				// перейти к следующей закрывающей круглой скобке
				(избыток = unquoted.indexOf (")", unquoted.length - избыток) - unquoted.length)) {

				// превышение - отрицательный индекс
				match [0] = match [0] .slice (0, избыток);
				match [2] = unquoted.slice (0, избыток);
			}

			// Возвращаем только захваты, требуемые методом псевдофильтра (тип и аргумент)
			return match.slice (0, 3);
		}
	},

	фильтр: {

		"TAG": function (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			return nodeNameSelector === "*"?
				function () {return true; }:
				функция (elem) {
					return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		},

		"CLASS": function (className) {
			var pattern = classCache [className + ""];

			обратная картина ||
				(pattern = new RegExp ("(^ |" + whitespace + ")" + className + "(" + whitespace + "| $)")) &&
				classCache (className, function (elem) {
					return pattern.test (typeof elem.className === "string" && elem.className || typeof elem.getAttribute! == "undefined" && elem.getAttribute ("class") || "");
				});
		},

		«ATTR»: функция (имя, оператор, проверка) {
			return function (elem) {
				var result = Sizzle.attr (elem, name);

				if (result == null) {
					return operator === "! =";
				}
				если (! оператор) {
					return true;
				}

				result + = "";

				return operator === "="? результат === check:
					operator === "! ="? результат! == проверка:
					operator === "^ ="? check && result.indexOf (check) === 0:
					operator === "* ="? check && result.indexOf (check)> -1:
					operator === "$ ="? check && result.slice (-check.length) === check:
					operator === "~ ="? ("" + result.replace (rwhitespace, "") + "") .indexOf (check)> -1:
					operator === "| ="? результат === check || result.slice (0, check.length + 1) === check + "-":
					ложный;
			};
		},

		"CHILD": function (type, what, argument, first, last) {
			var simple = type.slice (0, 3)! == "nth",
				forward = type.slice (-4)! == "last",
				ofType = what === "of-type";

			return first === 1 && last === 0?

				// Ярлык для: nth - * (n)
				функция (elem) {
					return !! elem.parentNode;
				}:

				function (elem, context, xml) {
					var cache, uniqueCache, externalCache, node, nodeIndex, start,
						dir = simple! == вперед? «nextSibling»: «previousSibling»,
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = false;

					если (родительский) {

						//: (first | last | only) - (child | of-type)
						если (простой) {
							while (dir) {
								node = elem;
								while ((node ​​= node [dir])) {
									if (ofType?
										node.nodeName.toLowerCase () === name:
										node.nodeType === 1) {

										return false;
									}
								}
								// Обратное направление для: only- * (если мы еще этого не сделали)
								start = dir = type === "only" &&! start && "nextSibling";
							}
							return true;
						}

						start = [вперед? parent.firstChild: parent.lastChild];

						// non-xml: nth-child (...) хранит данные кэша на `parent`
						if (forward && useCache) {

							// Ищем «elem» из ранее кэшированного индекса

							// ... в gzip-дружественном образе
							node = parent;
							externalCache = node [expando] || (node ​​[expando] = {});

							// Поддержка: только IE <9
							// Защищаем от клонированных свойств (jQuery gh-1709)
							uniqueCache = внешнийCache [node.uniqueID] ||
								(externalCache [node.uniqueID] = {});

							cache = uniqueCache [type] || [];
							nodeIndex = cache [0] === dirruns && cache [1];
							diff = nodeIndex && cache [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((node ​​= ++ nodeIndex && node && node [dir] ||

								// Возвращение к поиску `elem` с самого начала
								(diff = nodeIndex = 0) || start.pop ())) {

								// При обнаружении индексы кеша на `parent` и break
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [type] = [dirruns, nodeIndex, diff];
									ломать;
								}
							}

						} else {
							// Использовать индекс ранее кэшированного элемента, если он доступен
							if (useCache) {
								// ... в gzip-дружественном образе
								node = elem;
								externalCache = node [expando] || (node ​​[expando] = {});

								// Поддержка: только IE <9
								// Защищаем от клонированных свойств (jQuery gh-1709)
								uniqueCache = внешнийCache [node.uniqueID] ||
									(externalCache [node.uniqueID] = {});

								cache = uniqueCache [type] || [];
								nodeIndex = cache [0] === dirruns && cache [1];
								diff = nodeIndex;
							}

							// xml: nth-child (...)
							// или: nth-last-child (...) или: nth (-last)? - of-type (...)
							if (diff === false) {
								// Используйте тот же цикл, что и выше, для поиска `elem` с самого начала
								while ((node ​​= ++ nodeIndex && node && node [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									if ((ofType?
										node.nodeName.toLowerCase () === name:
										node.nodeType === 1) &&
										++ diff) {

										// Кэш индекса каждого найденного элемента
										if (useCache) {
											externalCache = node [expando] || (node ​​[expando] = {});

											// Поддержка: только IE <9
											// Защищаем от клонированных свойств (jQuery gh-1709)
											uniqueCache = внешнийCache [node.uniqueID] ||
												(externalCache [node.uniqueID] = {});

											uniqueCache [type] = [dirruns, diff];
										}

										if (node ​​=== elem) {
											ломать;
										}
									}
								}
							}
						}

						// Включить смещение, затем проверить размер цикла
						diff - = last;
						return diff === first || (diff% first === 0 && diff / first> = 0);
					}
				};
		},

		«PSEUDO»: функция (псевдо, аргумент) {
			// имена псевдокласса нечувствительны к регистру
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Приоритет по чувствительности к регистру в случае добавления пользовательских псевдостей с прописными буквами
			// Помните, что setFilters наследуется от псевдословий
			var args,
				fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("unsupported pseudo:" + pseudo);

			// Пользователь может использовать createPseudo, чтобы указать, что
			// необходимы аргументы для создания функции фильтра
			// точно так же, как Sizzle
			if (fn [expando]) {
				return fn (аргумент);
			}

			// Но поддерживаем поддержку старых подписей
			if (fn.length> 1) {
				args = [псевдо, псевдо, "", аргумент];
				return Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					markFunction (функция (семя, совпадения) {
						var idx,
							matched = fn (семя, аргумент),
							i = matched.length;
						в то время как я-- ) {
							idx = indexOf (семя, соответствует [i]);
							seed [idx] =! (соответствует [idx] = соответствует [i]);
						}
					}):
					функция (elem) {
						return fn (elem, 0, args);
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Потенциально сложный псевдос
		"not": markFunction (функция (селектор) {
			// Обрезаем селектор, переданный для компиляции
			// избегать обращения с ведущими и конечными
			// пробелы как комбинаторы
			var input = [],
				результаты = [],
				matcher = compile (selector.replace (rtrim, "$ 1"));

			return matcher [expando]?
				markFunction (функция (семя, совпадения, контекст, xml) {
					var elem,
						unmatched = matcher (семя, null, xml, []),
						i = seed.length;

					// Сопоставляем элементы, не совпадающие с `matcher`
					в то время как я-- ) {
						if ((elem = unmatched [i])) {
							seed [i] =! (соответствует [i] = elem);
						}
					}
				}):
				function (elem, context, xml) {
					input [0] = elem;
					matcher (input, null, xml, results);
					// Не сохраняем элемент (номер # 299)
					input [0] = null;
					return! results.pop ();
				};
		}),

		"has": markFunction (function (selector) {
			return function (elem) {
				return Sizzle (селектор, elem) .length> 0;
			};
		}),

		"содержит": markFunction (функция (текст) {
			text = text.replace (runescape, funescape);
			return function (elem) {
				return (elem.textContent || elem.innerText || getText (elem)) .indexOf (text)> -1;
			};
		}),

		// «Элемент представлен селектором: lang ()
		// основывается исключительно на значении языка элемента
		// будучи равным идентификатору C,
		// или начинаем с идентификатора C, за которым сразу следует «-».
		// Согласование C с языковым значением элемента выполняется без учета регистра.
		// Идентификатор C не должен быть допустимым именем языка. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (function (lang) {
			// Значение lang должно быть допустимым идентификатором
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ("unsupported lang:" + lang);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			return function (elem) {
				var elemLang;
				делать {
					if ((elemLang = documentIsHTML?
						elem.lang:
						elem.getAttribute ("xml: lang") || elem.getAttribute ("lang"))) {

						elemLang = elemLang.toLowerCase ();
						return elemLang === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				return false;
			};
		}),

		// Разное
		«target»: function (elem) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice (1) === elem.id;
		},

		"root": function (elem) {
			return elem === docElem;
		},

		"focus": function (elem) {
			return elem === document.activeElement && (! document.hasFocus || document.hasFocus ()) && !! (elem.type || elem.href || ~ elem.tabIndex);
		},

		// Булевы свойства
		"enabled": createDisabledPseudo (false),
		«disabled»: createDisabledPseudo (true),

		"checked": function (elem) {
			// В CSS3: checked должен возвращать как проверенные, так и выбранные элементы
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "input" && !! elem.checked) || (nodeName === "option" && !! elem.selected);
		},

		«selected»: function (elem) {
			// Доступ к этому свойству делает выбранные по умолчанию
			// параметры в Safari работают правильно
			if (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Содержание
		"empty": function (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: пуст отрицается элементом (1) или узлами содержимого (текст: 3; cdata: 4; entity ref: 5),
			// но не другими (комментарий: 8; инструкция по обработке: 7 и т. д.)
			// nodeType <6 работает, потому что атрибуты (2) не отображаются как дети
			для (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					return false;
				}
			}
			return true;
		},

		"parent": function (elem) {
			return! Expr.pseudos ["empty"] (elem);
		},

		// Элементы / типы ввода
		"header": function (elem) {
			return rheader.test (elem.nodeName);
		},

		"input": function (elem) {
			return rinputs.test (elem.nodeName);
		},

		"button": function (elem) {
			var name = elem.nodeName.toLowerCase ();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function (elem) {
			var attr;
			return elem.nodeName.toLowerCase () === "input" &&
				elem.type === "text" &&

				// Поддержка: IE <8
				// Появляются новые значения атрибута HTML5 (например, «поиск») с элементовым типом === "text"
				((attr = elem.getAttribute ("type")) == null || attr.toLowerCase () === "text");
		},

		// Постановка в коллекции
		«first»: createPositionalPseudo (function () {
			return [0];
		}),

		«last»: createPositionalPseudo (function (matchIndexes, length) {
			return [length - 1];
		}),

		"eq": createPositionalPseudo (function (matchIndexes, length, argument) {
			return [argument <0? аргумент + длина: аргумент];
		}),

		"even": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			для (; i <длина; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo (function (matchIndexes, length) {
			var i = 1;
			для (; i <длина; i + = 2) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argument <0? аргумент + длина: аргумент;
			для (; - i> = 0;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo (function (matchIndexes, length, argument) {
			var i = argument <0? аргумент + длина: аргумент;
			for (; ++ i <length;) {
				matchIndexes.push (i);
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Добавить псевдоним типа ввода / ввода
для (i в {radio: true, checkbox: true, file: true, password: true, image: true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
for (i in {submit: true, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// Легкий API для создания новых setFilters
функция setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = новый setFilters ();

tokenize = Sizzle.tokenize = function (selector, parseOnly) {
	var match, match, tokens, type,
		soFar, группы, preFilters,
		cached = tokenCache [селектор + ""];

	если (кэшировано) {
		return parseOnly? 0: cached.slice (0);
	}

	soFar = селектор;
	groups = [];
	preFilters = Expr.preFilter;

	while (soFar) {

		// Запятая и первый запуск
		если (! сопоставлено || (match = rcomma.exec (soFar))) {
			if (match) {
				// Не используйте конечные запятые как действительные
				soFar = soFar.slice (match [0] .length) || так далеко;
			}
			groups.push ((tokens = []));
		}

		matched = false;

		// Комбинаторы
		if ((match = rcombinators.exec (soFar))) {
			matchched = match.shift ();
			tokens.push ({
				значение: соответствует,
				// Комбинированные потоковые комбинаторы в пространстве
				type: match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matched.length);
		}

		// Фильтры
		для (введите в Expr.filter) {
			if ((match = matchExpr [type] .exec (soFar)) && (! preFilters [type] ||
				(match = preFilters [type] (match)))) {
				matchched = match.shift ();
				tokens.push ({
					значение: соответствует,
					тип: тип,
					матчей: матч
				});
				soFar = soFar.slice (matched.length);
			}
		}

		если (! сопоставлено) {
			ломать;
		}
	}

	// Возвращает длину недопустимого избытка
	// если мы просто разбираемся
	// В противном случае, выведите ошибку или верните маркеры
	return parseOnly?
		soFar.length:
		так далеко ?
			Sizzle.error (селектор):
			// Кэш-маркеры
			tokenCache (селектор, группы) .slice (0);
};

функция toSelector (токены) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for (; i <len; i ++) {
		селектор + = токены [i] .value;
	}
	селектор возврата;
}

функция addCombinator (совпадение, комбинатор, база) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || реж,
		checkNonElements = base && key === "parentNode",
		doneName = done ++;

	return combinator.first?
		// Проверяем ближайший элемент-предшественник / предшествующий элемент
		function (elem, context, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					return matcher (elem, context, xml);
				}
			}
			return false;
		}:

		// Проверяем против всех предков / предшествующих элементов
		function (elem, context, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// Мы не можем установить произвольные данные на узлах XML, поэтому они не используют кэширование комбинаторов
			if (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							return true;
						}
					}
				}
			} else {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						externalCache = elem [expando] || (elem [expando] = {});

						// Поддержка: только IE <9
						// Защищаем от клонированных свойств (jQuery gh-1709)
						uniqueCache = внешнийCache [elem.uniqueID] || (outerCache [elem.uniqueID] = {});

						if (skip && skip === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || эль;
						} else if ((oldCache = uniqueCache [key]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// Назначаем newCache, поэтому результаты обратно распространяются на предыдущие элементы
							return (newCache [2] = oldCache [2]);
						} else {
							// Повторное использование newcache, поэтому результаты обратно распространяются на предыдущие элементы
							uniqueCache [key] = newCache;

							// Соответствие означает, что мы закончили; сбой означает, что мы должны продолжать проверять
							if ((newCache [2] = matcher (elem, context, xml))) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher (matchers) {
	return matchers.length> 1?
		function (elem, context, xml) {
			var i = matchers.length;
			в то время как я-- ) {
				if (! matchers [i] (elem, context, xml)) {
					return false;
				}
			}
			return true;
		}:
		matchers [0];
}

функция multipleContexts (селектор, контексты, результаты) {
	var i = 0,
		len = contexts.length;
	for (; i <len; i ++) {
		Sizzle (селектор, контексты [i], результаты);
	}
	результаты возврата;
}

функция condense (unmatched, map, filter, context, xml) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map! = null;

	for (; i <len; i ++) {
		if ((elem = unmatched [i])) {
			if (! filter || filter (elem, context, xml)) {
				newUnmatched.push (elem);
				если (отображается) {
					map.push (i);
				}
			}
		}
	}

	return newUnmatched;
}

функция setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	return markFunction (функция (семя, результаты, контекст, xml) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			предсуществующий = results.length,

			// Получить исходные элементы из семени или контекста
			elems = seed || multipleContexts (селектор || "*", context.nodeType? [контекст]: контекст, []),

			// Prefilter, чтобы получить вход для сокетов, сохраняя карту для синхронизации результатов семян
			matcherIn = preFilter && (seed ||! selector)?
				конденсировать (elems, preMap, preFilter, context, xml):
				elems,

			matcherOut = совпадение?
				// Если у нас есть postFinder, или отфильтрованное семя, или не-семя postFilter или предшествующие результаты,
				postFinder || (seed? preFilter: существовавший ранее postFilter)?

					// ... необходима промежуточная обработка
					[]:

					// ... иначе использовать результаты напрямую
					Результаты :
				matcherIn;

		// Найти первичные совпадения
		if (matcher) {
			matcher (matcherIn, matcherOut, context, xml);
		}

		// Применить postFilter
		if (postFilter) {
			temp = condense (matcherOut, postMap);
			postFilter (temp, [], context, xml);

			// Невозможно совместить провальные элементы, переместив их обратно в matcherIn
			i = temp.length;
			в то время как я-- ) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = elem);
				}
			}
		}

		если (семя) {
			if (postFinder || preFilter) {
				if (postFinder) {
					// Получить окончательный matcherOut, сконденсировав это промежуточное звено в контексты postFinder
					temp = [];
					i = matcherOut.length;
					в то время как я-- ) {
						if ((elem = matcherOut [i])) {
							// Восстановить matcherIn, поскольку elem еще не является окончательным совпадением
							temp.push ((matcherIn [i] = elem));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// Перемещать согласованные элементы из семени в результаты, чтобы синхронизировать их
				i = matcherOut.length;
				в то время как я-- ) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (seed, elem): preMap [i])> -1) {

						seed [temp] =! (результаты [temp] = elem);
					}
				}
			}

		// Добавить элементы в результаты, через postFinder, если они определены
		} else {
			matcherOut = конденсировать (
				matcherOut === результаты?
					matcherOut.splice (существующий, matcherOut.length):
					matcherOut
			);
			if (postFinder) {
				postFinder (null, results, matcherOut, xml);
			} else {
				push.apply (результаты, matcherOut);
			}
		}
	});
}

функция matcherFromTokens (токены) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative [токены [0] .type],
		implicitRelative = leadingRelative || Expr.relative [""],
		i = leadRelative? 1: 0,

		// Базовый шаблон гарантирует, что элементы достижимы из контекста (ов) верхнего уровня
		matchContext = addCombinator (function (elem) {
			return elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (function (elem) {
			return indexOf (checkContext, elem)> -1;
		}, implicitRelative, true),
		matchers = [function (elem, context, xml) {
			var ret = (! leadingRelative && (xml || context! == outermostContext)) || (
				(checkContext = context) .nodeType?
					matchContext (elem, context, xml):
					matchAnyContext (elem, context, xml));
			// Избегайте зависания элемента (номер # 299)
			checkContext = null;
			return ret;
		}];

	for (; i <len; i ++) {
		if ((matcher = Expr.relative [токены [i] .type])) {
			matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} else {
			matcher = Expr.filter [токены [i] .type] .apply (null, tokens [i] .matches);

			// Возвращаем специальную информацию, видя позиционный соединитель
			if (matcher [expando]) {
				// Найдите следующий относительный оператор (если есть) для правильной обработки
				j = ++ i;
				for (; j <len; j ++) {
					if (Expr.relative [токены [j] .type]) {
						ломать;
					}
				}
				return setMatcher (
					i> 1 && elementMatcher (совпадения),
					i> 1 && toSelector (
						// Если предыдущий токен был комбинатором потомков, вставьте неявный любой элемент `*`
						tokens.slice (0, i - 1) .concat ({значение: токены [i - 2] .type === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					согласовани,
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((tokens = tokens.slice (j))),
					j <len && toSelector (токены)
				);
			}
			matchers.push (совпадение);
		}
	}

	return elementMatcher (matchers);
}

function matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = function (seed, context, xml, results, outermost) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// Мы должны всегда иметь либо семенные элементы, либо внешний контекст
				elems = seed || byElement && Expr.find ["TAG"] ("*", внешний),
				// Использовать целочисленные dirruns, если это самый внешний ответчик
				dirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				len = elems.length;

			если (внешний) {
				outermostContext = context === document || контекст || внешний;
			}

			// Добавление элементов, передающих элементMatchers непосредственно к результатам
			// Поддержка: IE <9, Safari
			// Свойства Tolerate NodeList (IE: "length"; Safari: <number>), соответствующие элементам по id
			for (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;
					if (! context && elem.ownerDocument! == document) {
						setDocument (elem);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, context || document, xml)) {
							results.push (elem);
							ломать;
						}
					}
					если (внешний) {
						dirruns = dirrunsUnique;
					}
				}

				// Отслеживание непревзойденных элементов для заданных фильтров
				if (bySet) {
					// Они пройдут все возможные совпадения
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// Удлинение массива для каждого элемента, согласованного или нет
					если (семя) {
						unmatched.push (elem);
					}
				}
			}

			// `i` теперь подсчет элементов, которые были выше, и добавление его к` matchchedCount`
			// делает последнее неотрицательным.
			согласованныйCount + = i;

			// Применить фильтры заданий к непревзойденным элементам
			// ПРИМЕЧАНИЕ. Это можно пропустить, если нет непревзойденных элементов (т. Е. `MatchchedCount`
			// равно `i`), если мы не посетили элементы _any_ в вышеуказанном цикле, потому что у нас есть
			// нет элементов и нет семян.
			// Приращение изначально строки «0» `i` позволяет` i` оставаться строкой только в том, что
			// case, что приведет к «00» `matchchedCount`, который отличается от` i`, но также
			// численно нуль.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((matcher = setMatchers [j ++])) {
					совпадение (unmatched, setMatched, context, xml);
				}

				если (семя) {
					// Повторно объединяем элементы, чтобы исключить необходимость сортировки
					if (согласованоCount> 0) {
						в то время как я-- ) {
							if (! (unmatched [i] || setMatched [i])) {
								setMatched [i] = pop.call (результаты);
							}
						}
					}

					// Убираем значения заполнитель индекса, чтобы получить только фактические совпадения
					setMatched = condense (setMatched);
				}

				// Добавить совпадения к результатам
				push.apply (результаты, setMatched);

				// Сегментные совпадения, совпадающие с несколькими успешными помощниками, обусловливают сортировку
				if (outermost &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (результаты);
				}
			}

			// Переопределение манипуляций с глобальными символами вложенными метками
			если (внешний) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			возврат невозможен;
		};

	return bySet?
		markFunction (superMatcher):
		superMatcher;
}

compile = Sizzle.compile = функция (селектор, совпадение / * Только внутреннее использование * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache [селектор + ""];

	if (! cached) {
		// Создаем функцию рекурсивных функций, которая может использоваться для проверки каждого элемента
		if (! match) {
			match = tokenize (селектор);
		}
		i = match.length;
		в то время как я-- ) {
			cached = matcherFromTokens (match [i]);
			if (cached [expando]) {
				setMatchers.push (кешированный);
			} else {
				elementMatchers.push (кешировано);
			}
		}

		// Кэш скомпилированной функции
		cached = compilerCache (селектор, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// Сохранить селектор и токенизацию
		cached.selector = селектор;
	}
	возврат кэша;
};

/ **
 * Функция выбора низкого уровня, которая работает с скомпилированным Sizzle
 * функции селектора
 * @param {String | Function} селектор Селектор или предварительно скомпилированный
 * функция выбора, построенная с помощью Sizzle.compile
 * @param {Element} контекст
 * @param {Array} [результаты]
 * @param {Array} [seed] Набор элементов для сопоставления с
 * /
select = Sizzle.select = function (селектор, контекст, результаты, семя) {
	var i, токены, токены, тип, find,
		compiled = typeof selector === "function" && selector,
		match =! seed && tokenize ((selector = compiled.selector || selector));

	результаты = результаты || [];

	// Старайтесь минимизировать операции, если в списке есть только один селектор и нет семян
	// (последнее из которых гарантирует нам контекст)
	if (match.length === 1) {

		// Уменьшить контекст, если ведущий составной селектор - это идентификатор
		tokens = match [0] = match [0] .slice (0);
		if (tokens.length> 2 && (токен = токены [0]). type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative [tokens [1] .type]) {

			context = (Expr.find ["ID"] (token.matches [0] .replace (runescape, funescape), контекст) || []) [0];
			if (! context) {
				результаты возврата;

			// Предварительно скомпилированные матчи все еще проверяют родословную, поэтому повышаем уровень
			} else if (скомпилировано) {
				context = context.parentNode;
			}

			selector = selector.slice (tokens.shift (). value.length);
		}

		// Получить набор семян для соответствия справа налево
		i = matchExpr ["needsContext"]. test (selector)? 0: tokens.length;
		в то время как я-- ) {
			токен = токены [i];

			// Прервать, если мы ударим комбинатора
			if (Expr.relative [(type = token.type)]) {
				ломать;
			}
			if ((find = Expr.find [type])) {
				// Поиск, расширение контекста для ведущих комбинаторов братьев и сестер
				if ((seed = find (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (токены [0] .type) && testContext (context.parentNode) || контекст
				))) {

					// Если семя пуст или не осталось токенов, мы можем вернуться раньше
					tokens.splice (i, 1);
					selector = seed.length && toSelector (токены);
					если (! selector) {
						push.apply (результаты, семена);
						результаты возврата;
					}

					ломать;
				}
			}
		}
	}

	// Компилируем и выполняем функцию фильтрации, если она не предоставляется
	// Предоставляем `match`, чтобы избежать повторной инициализации, если мы изменили селектор выше
	(скомпилированный компилятор (селектор, совпадение)) (
		семена,
		контекст,
		! DocumentIsHTML,
		Результаты,
		! контекст || rsibling.test (selector) && testContext (context.parentNode) || контекст
	);
	результаты возврата;
};

// Одноразовые задания

// Устойчивость сортировки
support.sortStable = expando.split (""). sort (sortOrder) .join ("") === expando;

// Поддержка: Chrome 14-35 +
// Всегда предполагаем дубликаты, если они не переданы в функцию сравнения
support.detectDuplicates = !! hasDuplicate;

// Инициализировать по умолчанию документ
setDocument ();

// Поддержка: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (исправлено в Chrome 27)
// Отдельные узлы смежно следуют * друг другу *
support.sortDetached = assert (function (el) {
	// Должен возвращать 1, но возвращает 4 (следующий)
	return el.compareDocumentPosition (document.createElement ("fieldset")) & 1;
});

// Поддержка: IE <8
// Запретить атрибут / свойство "интерполяция"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
если (! assert (функция (el) {
	el.innerHTML = "<a href='#'> </a>";
	return el.firstChild.getAttribute ("href") === "#";
})) {
	addHandle ("type | href | height | width", function (elem, name, isXML) {
		если (! isXML) {
			return elem.getAttribute (имя, имя.toLowerCase () === "type"? 1: 2);
		}
	});
}

// Поддержка: IE <9
// Использовать defaultValue вместо getAttribute ("value")
if (! support.attributes ||! assert (функция (el) {
	el.innerHTML = "<input />";
	el.firstChild.setAttribute ("значение", "");
	return el.firstChild.getAttribute ("value") === "";
})) {
	addHandle ("value", function (elem, name, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "input") {
			return elem.defaultValue;
		}
	});
}

// Поддержка: IE <9
// Использовать getAttributeNode для извлечения booleans, когда getAttribute лежит
если (! assert (функция (el) {
	return el.getAttribute ("disabled") == null;
})) {
	addHandle (booleans, function (elem, name, isXML) {
		var val;
		если (! isXML) {
			return elem [name] === true? name.toLowerCase ():
					(val = elem.getAttributeNode (имя)) && val.specified?
					val.value:
				ноль;
		}
	});
}

вернуть Sizzle;

})( окно );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Устаревшие
jQuery.expr [":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function (elem, dir, until) {
	var matchched = [],
		truncate = до! == undefined;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (truncate && jQuery (elem) .is (до)) {
				ломать;
			}
			matched.push (elem);
		}
	}
	возврат согласован;
};


var siblings = function (n, elem) {
	var matched = [];

	for (; n; n = n.nextSibling) {
		if (n.nodeType === 1 && n! == elem) {
			matched.push (n);
		}
	}

	возврат согласован;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName (elem, name) {

  return elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0>: \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ?: <\ / \ 1> |) $ / i);



// Реализуем идентичную функциональность для фильтра, а не
функция winnow (элементы, квалификатор, не) {
	if (isFunction (квалификатор)) {
		return jQuery.grep (элементы, функция (elem, i) {
			return !! qualifier.call (elem, i, elem)! == not;
		});
	}

	// Один элемент
	if (qualifier.nodeType) {
		return jQuery.grep (элементы, функция (elem) {
			return (elem === qualifier)! == not;
		});
	}

	// Arraylike элементов (jQuery, arguments, Array)
	if (typeof qualifier! == "string") {
		return jQuery.grep (элементы, функция (elem) {
			return (indexOf.call (qualifier, elem)> -1)! == not;
		});
	}

	// Отфильтровано непосредственно для простых и сложных селекторов
	return jQuery.filter (квалификатор, элементы, не);
}

jQuery.filter = function (expr, elems, not) {
	var elem = elems [0];

	если не ) {
		expr = ": not (" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		return jQuery.find.matchesSelector (elem, expr)? [elem]: [];
	}

	return jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
		return elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	find: function (selector) {
		var i, ret,
			len = this.length,
			self = this;

		if (typeof selector! == "string") {
			return this.pushStack (jQuery (selector) .filter (function () {
				для (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						return true;
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		для (i = 0; i <len; i ++) {
			jQuery.find (селектор, self [i], ret);
		}

		return len> 1? jQuery.uniqueSort (ret): ret;
	},
	фильтр: функция (селектор) {
		return this.pushStack (winnow (this, selector || [], false));
	},
	not: function (selector) {
		return this.pushStack (winnow (this, selector || [], true));
	},
	is: function (selector) {
		return !! winnow (
			это,

			// Если это позиционный / относительный селектор, проверьте членство в возвращаемом наборе
			// поэтому $ ("p: first"). is ("p: last") не вернет true для документа с двумя «p».
			typeof selector === "string" && rneedsContext.test (селектор)?
				jQuery (селектор):
				селектор || [],
			ложный
		) .length;
	}
});


// Инициализировать объект jQuery


// Центральная ссылка на корневой jQuery (документ)
var rootjQuery,

	// Простой способ проверить строки HTML
	// Приоритет #id над <тегом>, чтобы избежать XSS через location.hash (# 9521)
	// Строгое распознавание HTML (# 11290: должно начинаться с <)
	// Ярлык простой #id для скорости
	rquickExpr = / ^ (?: \ s * (<[\ w \ W] +>) [^>] * | # ([\ w -] +)) $ /

	init = jQuery.fn.init = function (селектор, контекст, корень) {
		var match, elem;

		// HANDLE: $ (""), $ (null), $ (undefined), $ (false)
		если (! selector) {
			верните это;
		}

		// Метод init () принимает альтернативный rootjQuery
		// поэтому migrate может поддерживать jQuery.sub (gh-2101)
		root = корень || rootjQuery;

		// Обработка строк HTML
		if (typeof selector === "string") {
			if (selector [0] === "<" &&
				селектор [selector.length - 1] === ">" &&
				selector.length> = 3) {

				// Предположим, что строки, начинающиеся и заканчивающиеся на <>, являются HTML и пропускают проверку регулярного выражения
				match = [null, selector, null];

			} else {
				match = rquickExpr.exec (селектор);
			}

			// Матч html или убедитесь, что для #id не указан контекст
			if (match && (match [1] ||! context)) {

				// HANDLE: $ (html) -> $ (массив)
				if (match [1]) {
					context = context instanceof jQuery? context [0]: контекст;

					// Возможность запуска скриптов верна для back-compat
					// Преднамеренно позволяет вызывать ошибку, если parseHTML отсутствует
					jQuery.merge (это jQuery.parseHTML (
						матч [1],
						context && context.nodeType? context.ownerDocument || контекст: документ,
						правда
					));

					// HANDLE: $ (html, реквизит)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (контекст)) {
						для (совпадение в контексте) {

							// Свойства контекста называются методами, если это возможно
							if (isFunction (это [матч])) {
								этот [матч] (контекст [матч]);

							// ... и иначе заданы как атрибуты
							} else {
								this.attr (match, context [match]);
							}
						}
					}

					верните это;

				// HANDLE: $ (# id)
				} else {
					elem = document.getElementById (совпадение [2]);

					если (elem) {

						// Внедрить элемент непосредственно в объект jQuery
						это [0] = elem;
						this.length = 1;
					}
					верните это;
				}

			// HANDLE: $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (context || root) .find (селектор);

			// HANDLE: $ (expr, context)
			// (что эквивалентно: $ (context) .find (expr)
			} else {
				return this.constructor (контекст) .find (селектор);
			}

		// HANDLE: $ (DOMElement)
		} else if (selector.nodeType) {
			этот [0] = селектор;
			this.length = 1;
			верните это;

		// HANDLE: $ (функция)
		// Ярлык для подготовки документа
		} else if (isFunction (селектор)) {
			return root.ready! == undefined?
				root.ready (селектор):

				// Выполнять немедленно, если готово нет
				селектор (jQuery);
		}

		return jQuery.makeArray (селектор, это);
	};

// Дайте функции init прототип jQuery для последующего создания экземпляра
init.prototype = jQuery.fn;

// Инициализировать центральную ссылку
rootjQuery = jQuery (документ);


var rparentsprev = / ^ (?: родители | prev (?: До | Все)) /,

	// Методы гарантируют получение уникального набора при запуске с уникального набора
	savedUnique = {
		дети: правда,
		содержимое: true,
		next: true,
		prev: true
	};

jQuery.fn.extend ({
	имеет: function (target) {
		var target = jQuery (target, this),
			l = target.length;

		return this.filter (function () {
			var i = 0;
			для (; i <l; i ++) {
				if (jQuery.contains (это, цели [i])) {
					return true;
				}
			}
		});
	},

	ближайший: функция (селекторы, контекст) {
		var cur,
			i = 0,
			l = this.length,
			сопоставлено = [],
			target = typeof selectors! == "string" && jQuery (selectors);

		// Позиционные селектора никогда не совпадают, поскольку контекст _selection_
		if (! rneedsContext.test (селекторы)) {
			для (; i <l; i ++) {
				for (cur = this [i]; cur && cur! == context; cur = cur.parentNode) {

					// Всегда пропускать фрагменты документа
					if (cur.nodeType <11 && (цели?
						target.index (cur)> -1:

						// Не пропускайте неэлементы в Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, селекторы))) {

						matched.push (cur);
						ломать;
					}
				}
			}
		}

		return this.pushStack (matched.length> 1? jQuery.uniqueSort (соответствует): соответствует);
	},

	// Определить положение элемента в наборе
	index: function (elem) {

		// Нет аргументов, возвращаемый индекс в родительском
		если (! elem) {
			return (this [0] && this [0] .parentNode)? this.first (). prevAll (). length: -1;
		}

		// Индекс в селекторе
		if (typeof elem === "string") {
			return indexOf.call (jQuery (elem), это [0]);
		}

		// Найдите положение нужного элемента
		return indexOf.call (это,

			// Если он получает объект jQuery, используется первый элемент
			elem.jquery? elem [0]: elem
		);
	},

	add: function (селектор, контекст) {
		return this.pushStack (
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (селектор, контекст))
			)
		);
	},

	addBack: function (selector) {
		return this.add (selector == null?
			this.prevObject: this.prevObject.filter (селектор)
		);
	}
});

функция sibling (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	return cur;
}

jQuery.each ({
	parent: function (elem) {
		var parent = elem.parentNode;
		return parent && parent.nodeType! == 11? parent: null;
	},
	родители: function (elem) {
		return dir (elem, "parentNode");
	},
	parentsUntil: function (elem, i, until) {
		return dir (elem, "parentNode", до);
	},
	next: function (elem) {
		return sibling (elem, "nextSibling");
	},
	prev: function (elem) {
		return sibling (elem, "previousSibling");
	},
	nextAll: function (elem) {
		return dir (elem, "nextSibling");
	},
	prevAll: function (elem) {
		return dir (elem, "previousSibling");
	},
	nextUntil: function (elem, i, until) {
		return dir (elem, "nextSibling", до);
	},
	prevUntil: function (elem, i, until) {
		return dir (elem, "previousSibling", до);
	},
	братья и сестры: функция (elem) {
		return siblings ((elem.parentNode || {}) .firstChild, elem);
	},
	children: function (elem) {
		возвращение братьев и сестер (elem.firstChild);
	},
	содержание: функция (elem) {
        if (nodeName (elem, "iframe")) {
            return elem.contentDocument;
        }

        // Поддержка: только для IE 9-11, только для iOS 7, Android Browser <= 4.3 только
        // Обращаем шаблонный элемент как обычный в браузерах, который
        // не поддерживаем его.
        if (nodeName (elem, "template")) {
            elem = elem.content || эль;
        }

        return jQuery.merge ([], elem.childNodes);
	}
}, function (name, fn) {
	jQuery.fn [имя] = функция (до, селектор) {
		var matchched = jQuery.map (это, fn, до);

		if (name.slice (-5)! == "Until") {
			selector = до;
		}

		if (selector && typeof selector === "string") {
			matched = jQuery.filter (селектор, согласованный);
		}

		if (this.length> 1) {

			// Удаление дубликатов
			if (! GuarantUnique [name]) {
				jQuery.uniqueSort (соответствует);
			}

			// Обратный порядок для родителей * и пред-производных
			if (rparentsprev.test (имя)) {
				matched.reverse ();
			}
		}

		return this.pushStack (соответствует);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// Преобразование форматированных строк в Object-formatted
функция createOptions (параметры) {
	var object = {};
	jQuery.each (options.match (rnothtmlwhite) || [], function (_, flag) {
		object [flag] = true;
	});
	возвращаемый объект;
}

/ *
 * Создайте список обратных вызовов, используя следующие параметры:
 *
 * options: дополнительный список разделенных пробелами опций, которые изменят способ
 * ведет себя список обратного вызова или более традиционный объект опции
 *
 * По умолчанию список обратных вызовов будет действовать как список обратных вызовов событий и может быть
 * «уволен» несколько раз.
 *
 * Возможные варианты:
 *
 * один раз: гарантирует, что список обратного вызова может быть запущен только один раз (например, отложенное)
 *
 * память: будет отслеживать предыдущие значения и будет вызывать любые обратные вызовы
 * после того, как список был уволен сразу с последним "запомненным"
 * значения (например, отложенные)
 *
 * unique: гарантирует, что обратный вызов может быть добавлен только один раз (нет дубликата в списке)
 *
 * stopOnFalse: прерывать вызовы, когда обратный вызов возвращает false
 *
 * /
jQuery.Callbacks = function (options) {

	// Преобразование параметров из строкового формата в формат Object при форматировании
	// (сначала проверяем кеш)
	options = typeof options === "string"?
		createOptions (параметры):
		jQuery.extend ({}, опции);

	var // Флаг, чтобы узнать, запущен ли список
		стрельба,

		// Последнее значение огни для списков без переписки
		Память,

		// Флаг, чтобы узнать, был ли уже запущен список
		уволят,

		// Флаг для предотвращения стрельбы
		заблокирован,

		// Фактический список обратных вызовов
		list = [],

		// Очередь данных выполнения для повторяемых списков
		queue = [],

		// Индекс текущего обратного вызова обжига (изменен путем добавления / удаления по мере необходимости)
		firingIndex = -1,

		// Обратные вызовы Firewall
		fire = function () {

			// Обеспечение однократного обжига
			заблокировано = заблокировано || options.once;

			// Выполнять обратные вызовы для всех ожидающих выполнения,
			// соблюдение переопределений firingIndex и изменений времени выполнения
			fired = firing = true;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift ();
				while (++ firingIndex <list.length) {

					// Запускаем обратный вызов и проверяем досрочное завершение
					if (list [firingIndex] .apply (память [0], память [1]) === false &&
						options.stopOnFalse) {

						// Переходим к концу и забываем данные, поэтому .add не перезапускает
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Забудьте о данных, если мы с ним закончим
			if (! options.memory) {
				memory = false;
			}

			firing = false;

			// Убираем, если мы закончили стрельбу
			если (заблокировано) {

				// Сохраняем пустой список, если у нас есть данные для будущих вызовов добавления
				if (memory) {
					list = [];

				// В противном случае этот объект будет потрачен
				} else {
					list = "";
				}
			}
		},

		// Фактический объект обратных вызовов
		self = {

			// Добавить обратный вызов или набор обратных вызовов в список
			add: function () {
				if (list) {

					// Если у нас есть память из прошлого прогона, мы должны запускать после добавления
					if (memory &&! firing) {
						firingIndex = list.length - 1;
						queue.push (память);
					}

					(функция add (args) {
						jQuery.each (args, function (_, arg) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && toType (arg)! == "string") {

								// Означать рекурсивно
								add (arg);
							}
						});
					}) (аргументы);

					if (memory &&! firing) {
						Огонь();
					}
				}
				верните это;
			},

			// Удаление обратного вызова из списка
			remove: function () {
				jQuery.each (аргументы, функция (_, arg) {
					индекс var;
					while ((index = jQuery.inArray (arg, list, index))> -1) {
						list.splice (индекс, 1);

						// Обработка индексов обжига
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				верните это;
			},

			// Проверяем, включен ли данный вызов в списке.
			// Если аргумент не задан, возвращайте, имеет ли список обратные вызовы.
			имеет: функцию (fn) {
				return fn?
					jQuery.inArray (fn, list)> -1:
					list.length> 0;
			},

			// Удаление всех обратных вызовов из списка
			empty: function () {
				if (list) {
					list = [];
				}
				верните это;
			},

			// Отключить .fire и .add
			// Прервать любые текущие / ожидающие исполнения
			// Очистить все обратные вызовы и значения
			disable: function () {
				locked = queue = [];
				list = memory = "";
				верните это;
			},
			disabled: function () {
				return! list;
			},

			// Отключить .fire
			// Также отключите .add, если у нас нет памяти (так как это не повлияет)
			// Прервать любые ожидающие исполнения
			lock: function () {
				locked = queue = [];
				if (! memory &&! firing) {
					list = memory = "";
				}
				верните это;
			},
			locked: function () {
				return !! locked;
			},

			// Вызов всех обратных вызовов с заданным контекстом и аргументами
			fireWith: function (context, args) {
				if (! locked) {
					args = args || [];
					args = [context, args.slice? args.slice (): args];
					queue.push (args);
					если (! стрельба) {
						Огонь();
					}
				}
				верните это;
			},

			// Вызов всех обратных вызовов с данными аргументами
			fire: function () {
				self.fireWith (это, аргументы);
				верните это;
			},

			// Чтобы узнать, были ли вызовы вызваны хотя бы один раз
			fired: function () {
				return !! уволен;
			}
		};

	вернуть себя;
};


Функция Identity (v) {
	return v;
}
функция Thrower (ex) {
	бросить ex;
}

функция acceptValue (значение, разрешение, отклонение, noValue) {
	метод var;

	пытаться {

		// Проверяем перспективный аспект, чтобы привилегировать синхронное поведение
		if (значение && isFunction ((method = value.promise))) {
			method.call (значение) .done (разрешить) .fail (reject);

		// Другие последующие
		} else if (значение && isFunction ((method = value.then))) {
			method.call (значение, разрешение, отклонение);

		// Другие не-теги
		} else {

			// Контролируем аргументы `resolve`, позволяя Array # slice cast boolean` noValue` целому числу:
			// * false: [значение] .slice (0) => resolve (value)
			// * true: [значение] .slice (1) => resolve ()
			resolve.apply (undefined, [value] .slice (noValue));
		}

	// Для Promises / A +, конвертировать исключения в отклонения
	// Поскольку jQuery.when не распаковывает thenables, мы можем пропустить дополнительные проверки, появляющиеся в
	// Отложено #, чтобы условно подавить отклонение.
	} catch (значение) {

		// Поддержка: только для Android 4.0
		// Строгие функции режима, вызываемые без .call / .apply, получают контекст глобального объекта
		reject.apply (undefined, [value]);
	}
}

jQuery.extend ({

	Отсрочка: функция (func) {
		var tuples = [

				// действие, добавление слушателя, обратные вызовы,
				// .... then обработчики, индекс аргумента, [конечное состояние]
				[«уведомлять», «прогресс», jQuery.Callbacks («память»)
					jQuery.Callbacks («память»), 2],
				["разрешить", "сделать", jQuery.Callbacks ("once memory"),
					jQuery.Callbacks ("once memory"), 0, "resolved"],
				["reject", "fail", jQuery.Callbacks ("once memory"),
					jQuery.Callbacks («некогда память»), 1, «отклонено»]
			],
			state = "pending",
			обещание = {
				state: function () {
					возвратное состояние;
				},
				always: function () {
					deferred.done (аргументы) .fail (аргументы);
					верните это;
				},
				«catch»: function (fn) {
					return agreement.then (null, fn);
				},

				// Сохранение канала для обратной совместимости
				pipe: function (/ * fnDone, fnFail, fnProgress * /) {
					var fns = arguments;

					return jQuery.Deferred (function (newDefer) {
						jQuery.each (кортежи, функция (i, кортеж) {

							// Корректировка кортежей (прогресс, выполнение, сбой) для аргументов (сделано, выполнено, выполнено)
							var fn = isFunction (fns [tuple [4]]) && fns [tuple [4]];

							// deferred.progress (function () {bind to newDefer или newDefer.notify})
							// deferred.done (function () {bind to newDefer или newDefer.resolve})
							// deferred.fail (function () {bind to newDefer или newDefer.reject})
							отложенный [кортеж [1]] (функция () {
								var return = fn && fn.apply (это, аргументы);
								if (возвращается && isFunction (возвращается.промисс)) {
									returned.promise ()
										.progress (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} else {
									newDefer [tuple [0] + "With"] (
										это,
										fn? [возвращено]: аргументы
									);
								}
							});
						});
						fns = null;
					}) .promise ();
				},
				затем: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					(глубина, отсрочка, обработчик, специальный) {
						return function () {
							var that = this,
								args = аргументы,
								mightThrow = function () {
									var вернулся, затем;

									// Поддержка: Обещания / A + раздел 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Игнорировать попытки двойного разрешения
									if (глубина <maxDepth) {
										вернуть;
									}

									return = handler.apply (что, args);

									// Поддержка: Обещания / A + раздел 2.3.1
									// https://promisesaplus.com/#point-48
									if (возвращается === deferred.promise ()) {
										throw new TypeError («Последующее самосогласование»);
									}

									// Поддержка: Обещания / A + разделы 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Получить `then` только один раз
									then = return &&

										// Поддержка: Обещания / A + раздел 2.3.4
										// https://promisesaplus.com/#point-64
										// Проверять объекты и функции только для возможности
										(typeof возвращен === "object" ||
											typeof возвращен === "function") &&
										returned.then;

									// Обрабатываем возвращаемый thenable
									if (isFunction (then)) {

										// Специальные процессоры (уведомлять) просто ждут разрешения
										if (special) {
											then.call (
												вернулся,
												разрешить (maxDepth, отложенное, Identity, специальное),
												разрешить (maxDepth, отложенное, Thrower, специальное)
											);

										// Нормальные процессоры (разрешить) также перехватывают ход
										} else {

											// ... и игнорировать более старые значения разрешения
											maxDepth ++;

											then.call (
												вернулся,
												разрешить (maxDepth, отложенное, Identity, специальное),
												разрешить (maxDepth, отложенный, Thrower, специальный),
												Разрешить (maxDepth, отложенное, Identity,
													Отложено.notifyWith)
											);
										}

									// Обработка всех других возвращаемых значений
									} else {

										// Только заменяющие обработчики передают контекст
										// и несколько значений (неспецифическое поведение)
										if (обработчик! == Identity) {
											что = undefined;
											args = [возвращается];
										}

										// Обработать значение (ы)
										// Процесс по умолчанию разрешен
										(special || offferve.resolveWith) (что, args);
									}
								},

								// Только обычные процессоры (разрешить) исключают и исключают исключения
								process = special?
									mightThrow:
									function () {
										пытаться {
											mightThrow ();
										} catch (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// Поддержка: Обещания / A + раздел 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Игнорировать исключения после разрешения
											if (глубина + 1> = maxDepth) {

												// Только заменяющие обработчики передают контекст
												// и несколько значений (неспецифическое поведение)
												if (обработчик! == Thrower) {
													что = undefined;
													args = [e];
												}

												Отложено.rejectWith (что, args);
											}
										}
									};

							// Поддержка: Обещания / A + раздел 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Повторно разрешать обещания немедленно уклониться от ложного отказа от
							// последующие ошибки
							if (глубина) {
								обработать();
							} else {

								// Вызов дополнительного крючка для записи стека, в случае исключения
								// поскольку он иначе теряется, когда выполнение переходит в async
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (процесс);
							}
						};
					}

					return jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						кортежи [0] [3] .add (
							разрешить(
								0,
								newDefer,
								isFunction (onProgress)?
									в процессе :
									Идентичность,
								newDefer.notifyWith
							)
						);

						// выполнил_handlers.add (...)
						кортежи [1] [3] .add (
							разрешить(
								0,
								newDefer,
								isFunction (onFulfilled)?
									onFulfilled:
									тождественность
							)
						);

						// reject_handlers.add (...)
						кортежи [2] [3] .add (
							разрешить(
								0,
								newDefer,
								isFunction (onRejected)?
									onRejected:
									метатель
							)
						);
					}) .promise ();
				},

				// Получаем обещание для этого отложенного
				// Если предоставлен obj, к объекту добавляется аспект обещания
				Обещают: function (obj) {
					return obj! = null? jQuery.extend (obj, обещание): обещание;
				}
			},
			отложен = {};

		// Добавить методы, специфичные для списка
		jQuery.each (кортежи, функция (i, кортеж) {
			var list = tuple [2],
				stateString = tuple [5];

			// prom.progress = list.add
			// prom.done = list.add
			// prom.fail = list.add
			[tuple [1]] = list.add;

			// Управление состоянием
			if (stateString) {
				list.add (
					function () {

						// state = "разрешено" (т.е. выполнено)
						// state = "reject"
						state = stateString;
					},

					// reject_callbacks.disable
					// выполненный_callbacks.disable
					tuples [3 - i] [2] .disable,

					// reject_handlers.disable
					// выполнил_handlers.disable
					tuples [3 - i] [3] .disable,

					// progress_callbacks.lock
					кортежи [0] [2] .lock,

					// progress_handlers.lock
					кортежи [0] [3] .lock
				);
			}

			// progress_handlers.fire
			// выполненный_handlers.fire
			// reject_handlers.fire
			list.add (кортеж [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			отложенный [tuple [0]] = function () {
				отложен [tuple [0] + «With»] (это === отложенное? undefined: this, arguments);
				верните это;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			отложенный [кортеж [0] + «С»] = list.fireWith;
		});

		// Сделать отложенное обещание
		обещание (обещание);

		// Вызов данной функции, если есть
		if (func) {
			func.call (отсрочка, отсрочка);
		}

		// Все сделано!
		возврат отложен;
	},

	// Отложенный помощник
	когда: function (singleValue) {
		вар

			// подсчет незавершенных подчиненных
			Остальные = arguments.length,

			// подсчет необработанных аргументов
			i = остальное,

			// подчиненные данные выполнения
			resolveContexts = Array (i),
			resolveValues ​​= slice.call (аргументы),

			// мастер отложен
			master = jQuery.Deferred (),

			// подчиненная фабрика обратного вызова
			updateFunc = function (i) {
				return function (value) {
					resolveContexts [i] = this;
					resolveValues ​​[i] = arguments.length> 1? slice.call (arguments): значение;
					если (! (--remaining)) {
						master.resolveWith (resolveContexts, resolveValues);
					}
				};
			};

		// Одиночные и пустые аргументы принимаются как Promise.resolve
		если (осталось <= 1) {
			acceptValue (singleValue, master.done (updateFunc (i)) .resolve, master.reject,
				!осталось );

			// Используйте .then () для разворачивания вторичных thenables (см. Gh-3000)
			if (master.state () === "pending" ||
				isFunction (resolveValues ​​[i] && resolveValues ​​[i]. then)) {

				return master.then ();
			}
		}

		// Несколько аргументов агрегируются как элементы массива Promise.all
		в то время как я-- ) {
			acceptValue (resolveValues ​​[i], updateFunc (i), master.reject);
		}

		return master.promise ();
	}
});


// Обычно это указывает на ошибку программиста во время разработки,
// предупреждать о них как можно скорее, а не проглатывать их по умолчанию.
var rerrorNames = / ^ (Eval | Internal | Range | Reference | Синтаксис | Тип | URI) Ошибка $ /;

jQuery.Deferred.exceptionHook = функция (ошибка, стек) {

	// Поддержка: только IE 8 - 9
	// Консоль существует, когда инструменты разработчика открыты, что может произойти в любое время
	if (window.console && window.console.warn && error && rerrorNames.test (error.name)) {
		window.console.warn ("jQuery.Deferred exception:" + error.message, error.stack, stack);
	}
};




jQuery.readyException = function (error) {
	window.setTimeout (function () {
		ошибка выброса;
	});
};




// Отложенная версия DOM готова
var readyList = jQuery.Deferred ();

jQuery.fn.ready = function (fn) {

	readyList
		.then (fn)

		// Wrap jQuery.readyException в функции, чтобы поиск
		// происходит во время обработки ошибок вместо обратного вызова
		// постановка на учет.
		.catch (функция (ошибка) {
			jQuery.readyException (ошибка);
		});

	верните это;
};

jQuery.extend ({

	// Является ли DOM готовым к использованию? Установите значение true, как только оно произойдет.
	isReady: false,

	// Счетчик, чтобы отслеживать, сколько элементов ждать до
	// готово событие срабатывает. См. # 6781
	readyWait: 1,

	// Обрабатывать, когда DOM готов
	ready: function (wait) {

		// Отменить, если есть ожидающие трюки или мы уже готовы
		if (wait === true? --jQuery.readyWait: jQuery.isReady) {
			вернуть;
		}

		// Помните, что DOM готов
		jQuery.isReady = true;

		// Если нормальное событие DOM Ready запускается, уменьшается и ждет, если необходимо,
		if (wait! == true && --jQuery.readyWait> 0) {
			вернуть;
		}

		// Если есть связанные функции, выполнить
		readyList.resolveWith (document, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// Готовый обработчик событий и метод самоочистки
функция завершена () {
	document.removeEventListener ("DOMContentLoaded", завершено);
	window.removeEventListener («нагрузка», завершена);
	jQuery.ready ();
}

// Поймайте случаи, когда вызывается $ (document) .ready ()
// после того, как событие браузера уже произошло.
// Поддержка: только IE <= 9 - 10
// Старое IE иногда сигнализирует «интерактивно» слишком рано
if (document.readyState === "complete" ||
	(document.readyState! == "loading" &&! document.documentElement.doScroll)) {

	// Обработайте его асинхронно, чтобы позволить скриптам возможность задержать готовность
	window.setTimeout (jQuery.ready);

} else {

	// Использовать обратный вызов полезного события
	document.addEventListener («DOMContentLoaded», завершено);

	// Откат к window.onload, который всегда будет работать
	window.addEventListener («нагрузка», завершена);
}




// Многофункциональный метод получения и установки значений коллекции
// Значение / s может быть выполнено, если оно является функцией
var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Устанавливает множество значений
	if (toType (ключ) === "object") {
		chainable = true;
		для (i в ключе) {
			доступ (elems, fn, i, key [i], true, emptyGet, raw);
		}

	// Устанавливает одно значение
	} else if (значение! == undefined) {
		chainable = true;

		если (! isFunction (значение)) {
			raw = true;
		}

		if (bulk) {

			// Массовые операции выполняются против всего набора
			if (raw) {
				fn.call (elems, value);
				fn = null;

			// ... кроме случаев выполнения значений функции
			} else {
				bulk = fn;
				fn = function (elem, key, value) {
					return bulk.call (jQuery (elem), значение);
				};
			}
		}

		если (fn) {
			for (; i <len; i ++) {
				п (
					elems [i], key, raw?
					стоимость :
					value.call (elems [i], i, fn (elems [i], key))
				);
			}
		}
	}

	если (цепной) {
		возвратные элементы;
	}

	// Получает
	if (bulk) {
		return fn.call (elems);
	}

	вернуть len? fn (elems [0], key): emptyGet;
};


// Соответствует пунктирной строке для верблюжьей
var rmsPrefix = / ^ - ms- /,
	rdashAlpha = / - ([az]) / g;

// Используется camelCase в качестве обратного вызова для замены ()
функция fcamelCase (все, буква) {
	return letter.toUpperCase ();
}

// Преобразование помечено в camelCase; используемый css и модулями данных
// Поддержка: IE <= 9 - 11, Edge 12 - 15
// Microsoft забыла перехватить префикс своего поставщика (# 9572)
function camelCase (string) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = функция (владелец) {

	// Принимает только:
	// - Узел
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Объект
	// - Любые
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




функция Data () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	cache: function (owner) {

		// Проверяем, имеет ли объект владельца уже кеш
		var value = owner [this.expando];

		// Если нет, создайте
		if (! value) {
			value = {};

			// Мы можем принимать данные для неэлементных узлов в современных браузерах,
			// но мы не должны, см. # 8335.
			// Всегда возвращаем пустой объект.
			if (acceptData (владелец)) {

				// Если это узел, который вряд ли будет стягиваться или зацикливаться
				// использование простого назначения
				if (owner.nodeType) {
					владелец [this.expando] = значение;

				// Иначе защищаем его в неперечислимом свойстве
				// настраиваемый должен быть правдой, чтобы позволить этому свойству
				// удаляется при удалении данных
				} else {
					Object.defineProperty (владелец, this.expando, {
						значение: значение,
						настраиваемый: true
					});
				}
			}
		}

		возвращаемое значение;
	},
	set: function (owner, data, value) {
		var prop,
			cache = this.cache (владелец);

		// Управление: [владелец, ключ, значение] args
		// Всегда используйте ключ camelCase (gh-2257)
		if (typeof data === "string") {
			cache [camelCase (data)] = значение;

		// Handle: [owner, {properties}] args
		} else {

			// Скопировать свойства один за другим в объект кеша
			для (prop в данных) {
				cache [camelCase (prop)] = data [prop];
			}
		}
		обратный кэш;
	},
	get: function (владелец, ключ) {
		return key === undefined?
			this.cache (владелец):

			// Всегда используйте ключ camelCase (gh-2257)
			владелец [этот.expando] && владелец [этот.expando] [camelCase (ключ)];
	},
	доступ: функция (владелец, ключ, значение) {

		// В случаях, когда:
		//
		// 1. Не указан ключ
		// 2. Был указан строковый ключ, но значение не указано
		//
		// Возьмем «прочитанный» путь и позволим методу get определить
		// какое значение для возврата, соответственно:
		//
		// 1. Весь объект кеша
		// 2. Данные, хранящиеся в ключе
		//
		if (ключ === undefined ||
				((ключ && typeof ключ === "строка") && значение === undefined)) {

			return this.get (владелец, ключ);
		}

		// Если ключ не является строкой или оба ключа и значение
		// указываются, устанавливаются или расширяются (существующие объекты) с помощью:
		//
		// 1. Объект свойств
		// 2. Ключ и значение
		//
		this.set (владелец, ключ, значение);

		// Поскольку путь «set» может иметь две возможные точки входа
		// возвращает ожидаемые данные на основе того, какой путь был выполнен [*]
		возвращаемое значение! == undefined? значение: ключ;
	},
	remove: function (владелец, ключ) {
		var i,
			cache = owner [this.expando];

		if (cache === undefined) {
			вернуть;
		}

		if (ключ! == undefined) {

			// Поддержка массива или разделенной пробелом строки ключей
			if (Array.isArray (ключ)) {

				// Если ключ - это массив ключей ...
				// Мы всегда устанавливаем ключи camelCase, поэтому удалим это.
				key = key.map (camelCase);
			} else {
				key = camelCase (ключ);

				// Если существует ключ с пробелами, используйте его.
				// В противном случае создайте массив, сопоставляя не-пробелы
				key = ключ в кеше?
					[ключ]:
					(key.match (rnothtmlwhite) || []);
			}

			i = key.length;

			в то время как я-- ) {
				Удалить кеш [key [i]];
			}
		}

		// Удалите расширение, если нет данных
		if (ключ === undefined || jQuery.isEmptyObject (cache)) {

			// Поддержка: Chrome <= 35 - 45
			// Эффективность Webkit & Blink при удалении свойств
			// из узлов DOM, поэтому вместо undefined
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (ошибка ограничена)
			if (owner.nodeType) {
				владелец [this.expando] = undefined;
			} else {
				удалить владельца [this.expando];
			}
		}
	},
	hasData: function (owner) {
		var cache = owner [this.expando];
		return cache! == undefined &&! jQuery.isEmptyObject (cache);
	}
};
var dataPriv = new Data ();

var dataUser = new Data ();



// Резюме реализации
//
// 1. Принудительно использовать поверхность API и семантическую совместимость с ветвью 1.9.x
// 2. Улучшить ремонтопригодность модуля за счет уменьшения объема хранилища
// пути к одному механизму.
// 3. Используйте один и тот же механизм для поддержки «частных» и «пользовательских» данных.
// 4. _Never_ выставлять «личные» данные в код пользователя (TODO: Drop _data, _removeData)
// 5. Избегайте подвергать детали реализации объектам пользователя (например, свойства expando)
// 6. Обеспечить четкий путь для обновления реализации до WeakMap в 2014 году

var rbrace = / ^ (?: \ {[\ w \ W] * \} \ \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

функция getData (данные) {
	if (data === "true") {
		return true;
	}

	if (data === "false") {
		return false;
	}

	if (data === "null") {
		return null;
	}

	// Только преобразовать в число, если оно не меняет строку
	if (data === + data + "") {
		return + data;
	}

	if (rbrace.test (данные)) {
		return JSON.parse (данные);
	}

	возвращать данные;
}

функция dataAttr (elem, key, data) {
	var name;

	// Если ничего не было найдено внутренне, попробуйте получить любую
	// данные из атрибута data-* HTML5
	if (data === undefined && elem.nodeType === 1) {
		name = "data-" + key.replace (rmultiDash, "- $ &") .toLowerCase ();
		data = elem.getAttribute (имя);

		if (typeof data === "string") {
			пытаться {
				data = getData (данные);
			} catch (e) {}

			// Удостоверьтесь, что мы установили данные, чтобы они не были изменены позже.
			dataUser.set (elem, key, data);
		} else {
			data = undefined;
		}
	}
	возвращать данные;
}

jQuery.extend ({
	hasData: function (elem) {
		return dataUser.hasData (elem) || dataPriv.hasData (elem);
	},

	data: function (elem, name, data) {
		return dataUser.access (elem, name, data);
	},

	removeData: function (elem, name) {
		dataUser.remove (elem, name);
	},

	// TODO: теперь все обращения к _data и _removeData были заменены
	// с прямыми вызовами методов dataPriv, они могут быть устаревшими.
	_data: function (elem, name, data) {
		return dataPriv.access (elem, name, data);
	},

	_removeData: function (elem, name) {
		dataPriv.remove (elem, name);
	}
});

jQuery.fn.extend ({
	data: function (key, value) {
		var i, имя, данные,
			elem = this [0],
			attrs = elem && elem.attributes;

		// Получает все значения
		if (ключ === undefined) {
			if (this.length) {
				data = dataUser.get (elem);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					в то время как я-- ) {

						// Поддержка: только IE 11
						// Элементы attrs могут быть пустыми (# 14894)
						если (attrs [i]) {
							name = attrs [i] .name;
							if (name.indexOf ("data-") === 0) {
								name = camelCase (name.slice (5));
								dataAttr (elem, name, data [name]);
							}
						}
					}
					dataPriv.set (elem, "hasDataAttrs", true);
				}
			}

			возвращать данные;
		}

		// Устанавливает несколько значений
		if (typeof ключ === "object") {
			return this.each (function () {
				dataUser.set (это, ключ);
			});
		}

		return access (this, function (value) {
			данные var;

			// Вызывающий объект jQuery (совпадение элементов) не пуст
			// (и, следовательно, на этом элементе появляется [0]), а
			// Параметр `value` не был определен. Пустой объект jQuery
			// приведет к `undefined` для elem = this [0], который будет
			// генерируем исключение, если делается попытка прочитать кеш данных.
			if (elem && value === undefined) {

				// Попытка получить данные из кеша
				// Ключ всегда будет camelCased в Data
				data = dataUser.get (elem, key);
				if (data! == undefined) {
					возвращать данные;
				}

				// Попытка «обнаружить» данные в
				// Пользовательские данные HTML5 - * attrs
				data = dataAttr (elem, key);
				if (data! == undefined) {
					возвращать данные;
				}

				// Мы очень старались, но данных не существует.
				вернуть;
			}

			// Устанавливаем данные ...
			this.each (function () {

				// Мы всегда сохраняем ключ camelCased
				dataUser.set (это, ключ, значение);
			});
		}, null, value, arguments.length> 1, null, true);
	},

	removeData: function (key) {
		return this.each (function () {
			dataUser.remove (это, ключ);
		});
	}
});


jQuery.extend ({
	queue: function (elem, type, data) {
		var queue;

		если (elem) {
			type = (type || "fx") + "queue";
			queue = dataPriv.get (elem, type);

			// Ускорение деактивации путем быстрого выхода, если это просто поиск
			if (data) {
				if (! queue || Array.isArray (данные)) {
					queue = dataPriv.access (elem, type, jQuery.makeArray (данные));
				} else {
					queue.push (данные);
				}
			}
			очередь возврата || [];
		}
	},

	dequeue: function (elem, type) {
		type = type || "FX";

		var queue = jQuery.queue (elem, type),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, type),
			next = function () {
				jQuery.dequeue (elem, type);
			};

		// Если очередь fx выгружена, всегда удаляйте контрольный счетчик прогресса
		if (fn === "inprogress") {
			fn = queue.shift ();
			startLength--;
		}

		если (fn) {

			// Добавить контрольный сигнал прогресса, чтобы предотвратить появление очереди fx
			// автоматически отменяется
			if (type === "fx") {
				queue.unshift ("inprogress");
			}

			// Очистить последнюю функцию остановки очереди
			delete hooks.stop;
			fn.call (elem, next, hooks);
		}

		if (! startLength && hooks) {
			hooks.empty.fire ();
		}
	},

	// Не public - генерировать объект queueHooks или возвращать текущий
	_queueHooks: function (elem, type) {
		var key = type + "queueHooks";
		return dataPriv.get (elem, key) || dataPriv.access (elem, key, {
			empty: jQuery.Callbacks ("once memory") .add (function () {
				dataPriv.remove (elem, [type + "queue", key]);
			})
		});
	}
});

jQuery.fn.extend ({
	queue: function (type, data) {
		var setter = 2;

		if (typeof type! == "string") {
			data = type;
			type = "fx";
			setter--;
		}

		if (arguments.length <setter) {
			return jQuery.queue (этот [0], тип);
		}

		return data === undefined?
			это :
			this.each (function () {
				var queue = jQuery.queue (это, тип, данные);

				// Обеспечьте крючки для этой очереди
				jQuery._queueHooks (это, тип);

				if (type === "fx" && queue [0]! == "inprogress") {
					jQuery.dequeue (это, тип);
				}
			});
	},
	dequeue: function (type) {
		return this.each (function () {
			jQuery.dequeue (это, тип);
		});
	},
	clearQueue: function (type) {
		return this.queue (тип || "fx", []);
	},

	// Получить обещание, разрешенное, когда очереди определенного типа
	// опустели (по умолчанию это тип fx)
	обещание: function (type, obj) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred (),
			элементы = это,
			i = this.length,
			resolve = function () {
				если (! (--count)) {
					defer.resolveWith (элементы, [элементы]);
				}
			};

		if (typeof type! == "string") {
			obj = тип;
			type = undefined;
		}
		type = type || "FX";

		в то время как я-- ) {
			tmp = dataPriv.get (элементы [i], type + "queueHooks");
			if (tmp && tmp.empty) {
				подсчитывать ++;
				tmp.empty.add (разрешить);
			}
		}
		разрешить();
		return defer.promise (obj);
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/) .source;

var rcssNum = новый RegExp ("^ (?: ([+ -]) = |) (" + pnum + ") ([az%] *) $", "i");


var cssExpand = ["Top", "Right", "Bottom", "Left"];

var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree может быть вызван из функции jQuery # filter;
		// в этом случае элемент будет вторым аргументом
		elem = el || эль;

		// Встроенный стиль козырей всех
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// В противном случае проверьте вычисленный стиль
			// Поддержка: Firefox <= 43 - 45
			// Отключенные элементы могут иметь вычисленный дисплей: none, поэтому сначала убедитесь, что elem is
			// в документе.
			jQuery.contains (elem.ownerDocument, elem) &&

			jQuery.css (elem, "display") === "none";
	};

var swap = function (elem, options, callback, args) {
	var ret, имя,
		old = {};

	// Запомните старые значения и вставьте новые
	для (имя в опциях) {
		old [name] = elem.style [name];
		elem.style [name] = options [name];
	}

	ret = callback.apply (elem, args || []);

	// Отменить старые значения
	для (имя в опциях) {
		elem.style [name] = old [name];
	}

	return ret;
};




функция adjustCSS (elem, prop, valueParts, tween) {
	var adjust, scale,
		maxIterations = 20,
		currentValue = tween?
			function () {
				return tween.cur ();
			}:
			function () {
				return jQuery.css (elem, prop, "");
			},
		initial = currentValue (),
		unit = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// Начальное вычисление значения требуется для возможных несовпадений элементов
		initialInUnit = (jQuery.cssNumber [prop] || unit! == "px" && + initial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == unit) {

		// Поддержка: Firefox <= 54
		// Уменьшить целевое значение итерации для предотвращения помех от верхних границ CSS (gh-2144)
		initial = initial / 2;

		// Целевые единицы, сообщенные jQuery.css
		единица = единица || initialInUnit [3];

		// Итеративно аппроксимируем из ненулевой начальной точки
		initialInUnit = + initial || 1;

		while (maxIterations--) {

			// Оцениваем и обновляем наше лучшее предположение (удвоение угадывает, что нуль).
			// Закончить, если масштаб равен или пересекает 1 (что делает старый * новый продукт неположительным).
			jQuery.style (elem, prop, initialInUnit + unit);
			if ((1 - масштаб) * (1 - (scale = currentValue () / initial || 0.5)) <= 0) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (elem, prop, initialInUnit + unit);

		// Удостоверьтесь, что мы обновляем свойства твинов позже
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + начальная || 0;

		// Применяем относительное смещение (+ = / - =), если указано
		adjust = valueParts [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2]:
			+ valueParts [2];
		если (tween) {
			tween.unit = единица;
			tween.start = initialInUnit;
			tween.end = скорректировано;
		}
	}
	возврат скорректирован;
}


var defaultDisplayMap = {};

функция getDefaultDisplay (elem) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [имя_узла];

	if (display) {
		обратный дисплей;
	}

	temp = doc.body.appendChild (doc.createElement (nodeName));
	display = jQuery.css (temp, "display");

	temp.parentNode.removeChild (temp);

	if (display === "none") {
		display = "block";
	}
	defaultDisplayMap [имя_узла] = отображение;

	обратный дисплей;
}

функция showHide (элементы, шоу) {
	var display, elem,
		значения = [],
		index = 0,
		length = elements.length;

	// Определить новое отображаемое значение для элементов, которые необходимо изменить
	for (; index <length; index ++) {
		elem = elements [index];
		if (! elem.style) {
			Продолжать;
		}

		display = elem.style.display;
		если (показать) {

			// Поскольку мы вынуждаем видимость по каскадным скрытым элементам, немедленное (и медленное)
			// проверка требуется в этом первом цикле, если у нас нет непустого отображаемого значения (либо
			// встроенный или обновленный)
			if (display === "none") {
				values ​​[index] = dataPriv.get (elem, "display") || ноль;
				if (! values ​​[index]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree (elem)) {
				values ​​[index] = getDefaultDisplay (elem);
			}
		} else {
			if (display! == "none") {
				значения [index] = "none";

				// Помним, что мы переписываем
				dataPriv.set (elem, "display", display);
			}
		}
	}

	// Устанавливаем отображение элементов во втором цикле, чтобы избежать постоянной переплавки
	for (index = 0; index <length; index ++) {
		if (values ​​[index]! = null) {
			elements [index] .style.display = values ​​[index];
		}
	}

	возвратные элементы;
}

jQuery.fn.extend ({
	show: function () {
		return showHide (это, правда);
	},
	hide: function () {
		return showСкрыть (это);
	},
	toggle: function (state) {
		if (typeof состояние === "boolean") {
			состояние возврата? this.show (): this.hide ();
		}

		return this.each (function () {
			if (isHiddenWithinTree (this)) {
				jQuery (this) .show ();
			} else {
				jQuery (this) .hide ();
			}
		});
	}
});
var rcheckableType = (/ ^ (?: checkbox | radio) $ / i);

var rtagName = (/ <([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] +) / i);

var rscriptType = (/ ^ $ | ^ модуль $ | \ / (?: java | ecma) script / i);



// Мы должны закрыть эти теги для поддержки XHTML (# 13200)
var wrapMap = {

	// Поддержка: только IE <= 9
	option: [1, "<select multiple = 'multiple'>", "</ select>"],

	// Синтаксические анализаторы XHTML не волшебным образом вставляют элементы в
	// То же самое, что и парсеры-суп-теги. Поэтому мы не можем сокращать
	// это, опуская <tbody> или другие необходимые элементы.
	thead: [1, "<table>", "</ table>"],
	col: [2, "<table> <colgroup>", "</ colgroup> </ table>"],
	tr: [2, "<table> <tbody>", "</ tbody> </ table>"],
	td: [3, "<table> <tbody> <tr>", "</ tr> </ tbody> </ table>"],

	_default: [0, "", ""]
};

// Поддержка: только IE <= 9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


функция getAll (контекст, тег) {

	// Поддержка: только IE <= 9 - 11
	// Используйте typeof, чтобы избежать вызова метода нулевого аргумента на объектах хоста (# 15151)
	var ret;

	if (typeof context.getElementsByTagName! == "undefined") {
		ret = context.getElementsByTagName (тег || "*");

	} else if (typeof context.querySelectorAll! == "undefined") {
		ret = context.querySelectorAll (тег || "*");

	} else {
		ret = [];
	}

	if (tag === undefined || tag && nodeName (контекст, тег)) ​​{
		return jQuery.merge ([context], ret);
	}

	return ret;
}


// Отметить скрипты как уже оцененные
функция setGlobalEval (elems, refElements) {
	var i = 0,
		l = elems.length;

	для (; i <l; i ++) {
		dataPriv.set (
			elems [i],
			"GlobalEval",
			! refElements || dataPriv.get (refElements [i], "globalEval")
		);
	}
}


var rhtml = / <| & #? \ w +; /;

function buildFragment (elems, context, scripts, selection, ignored) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment (),
		nodes = [],
		i = 0,
		l = elems.length;

	для (; i <l; i ++) {
		elem = elems [i];

		if (elem || elem === 0) {

			// Добавление узлов напрямую
			if (toType (elem) === "object") {

				// Поддержка: только Android <= 4.0, только PhantomJS 1
				// push.apply (_, arraylike) бросает на древний WebKit
				jQuery.merge (узлы, elem.nodeType? [elem]: elem);

			// Преобразование не-html в текстовый узел
			} else if (! rhtml.test (elem)) {
				nodes.push (context.createTextNode (elem));

			// Преобразование html в узлы DOM
			} else {
				tmp = tmp || fragment.appendChild (context.createElement ("div"));

				// Уничтожение стандартного представления
				tag = (rtagName.exec (elem) || ["", ""]) [1] .toLowerCase ();
				wrap = wrapMap [tag] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter (elem) + wrap [2];

				// Спускаемся через обертки к нужному контенту
				j = wrap [0];
				тогда как (j--) {
					tmp = tmp.lastChild;
				}

				// Поддержка: только Android <= 4.0, только PhantomJS 1
				// push.apply (_, arraylike) бросает на древний WebKit
				jQuery.merge (узлы, tmp.childNodes);

				// Запомните контейнер верхнего уровня
				tmp = фрагмент.firstChild;

				// Убедитесь, что созданные узлы потеряны (# 12392)
				tmp.textContent = "";
			}
		}
	}

	// Удаление обертки из фрагмента
	fragment.textContent = "";

	i = 0;
	while ((elem = nodes [i ++])) {

		// Пропускаем элементы уже в коллекции контекста (trac-4087)
		if (selection && jQuery.inArray (elem, selection)> -1) {
			if (игнорируется) {
				ignored.push (elem);
			}
			Продолжать;
		}

		contains = jQuery.contains (elem.ownerDocument, elem);

		// Добавить в фрагмент
		tmp = getAll (фрагмент.appendChild (elem), "script");

		// Сохранять историю оценки скриптов
		if (содержит) {
			setGlobalEval (tmp);
		}

		// Захват исполняемых файлов
		if (скрипты) {
			j = 0;
			while ((elem = tmp [j ++])) {
				if (rscriptType.test (elem.type || "")) {
					scripts.push (elem);
				}
			}
		}
	}

	возвратный фрагмент;
}


(функция () {
	var fragment = document.createDocumentFragment (),
		div = fragment.appendChild (document.createElement ("div")),
		input = document.createElement ("ввод");

	// Поддержка только Android 4.0 - 4.3
	// Проверьте состояние потерянного, если имя установлено (# 11217)
	// Поддержка: Windows Web Apps (WWA)
	// `name` и` type` должны использовать .setAttribute для WWA (# 14901)
	input.setAttribute («тип», «радио»);
	input.setAttribute ("checked", "checked");
	input.setAttribute ("имя", "t");

	div.appendChild (ввод);

	// Поддержка: только для Android <= 4.1
	// Older WebKit не клонирует проверенное состояние правильно в фрагментах
	support.checkClone = div.cloneNode (true) .cloneNode (true) .lastChild.checked;

	// Поддержка: только IE <= 11
	// Удостоверьтесь, что textarea (и флажок) defaultValue правильно клонирован
	div.innerHTML = "<textarea> x </ textarea>";
	support.noCloneChecked = !! div.cloneNode (true) .lastChild.defaultValue;
}) ();
var documentElement = document.documentElement;



вар
	rkeyEvent = / ^ ключ /,
	rmouseEvent = / ^ (?: mouse | указатель | contextmenu | drag | drop) | click /,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue () {
	return true;
}

функция returnFalse () {
	return false;
}

// Поддержка: только IE <= 9
// См. # 13393 для получения дополнительной информации
Функция safeActiveElement () {
	пытаться {
		return document.activeElement;
	} catch (err) {}
}

function on (elem, types, selector, data, fn, one) {
	var origFn, тип;

	// Типы могут представлять собой карту типов / обработчиков
	if (typeof types === "object") {

		// (типы-Объект, селектор, данные)
		if (typeof selector! == "string") {

			// (типы-объект, данные)
			data = data || селектор;
			selector = undefined;
		}
		для (тип типа) {
			on (elem, type, selector, data, types [type], one);
		}
		return elem;
	}

	if (data == null && fn == null) {

		// (types, fn)
		fn = селектор;
		data = selector = undefined;
	} else if (fn == null) {
		if (typeof selector === "string") {

			// (типы, селектор, fn)
			fn = данные;
			data = undefined;
		} else {

			// (типы, данные, fn)
			fn = данные;
			data = селектор;
			selector = undefined;
		}
	}
	if (fn === false) {
		fn = returnFalse;
	} else if (! fn) {
		return elem;
	}

	if (one === 1) {
		origFn = fn;
		fn = function (event) {

			// Может использовать пустой набор, поскольку событие содержит информацию
			jQuery (). off (событие);
			return origFn.apply (это, аргументы);
		};

		// Использовать тот же самый указатель, чтобы вызывающий мог удалить с помощью origFn
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid ++);
	}
	return elem.each (function () {
		jQuery.event.add (это, типы, fn, данные, селектор);
	});
}

/ *
 * Вспомогательные функции для управления событиями - не часть открытого интерфейса.
 * Репозиторий для библиотеки addEvent Дина Эдвардса для многих идей.
 * /
jQuery.event = {

	Глобальный: {},

	add: function (elem, types, handler, data, selector) {

		var handleObjIn, eventHandle, tmp,
			события, t, handleObj,
			специальные, обработчики, тип, пространства имен, origType,
			elemData = dataPriv.get (elem);

		// Не добавляем события в noData или узлы text / comment (но допускаем простые объекты)
		if (! elemData) {
			вернуть;
		}

		// Caller может передать объект пользовательских данных вместо обработчика
		если ( handler.handler) {
			handleObjIn = обработчик;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Убедитесь, что недействительные селектора выбрасывают исключения во время прикрепления
		// Оценить элемент documentElement в случае, если elem - неэлементный узел (например, документ)
		if (selector) {
			jQuery.find.matchesSelector (documentElement, selector);
		}

		// Удостоверьтесь, что у обработчика есть уникальный идентификатор, используемый для поиска / удаления его позже
		if (! handler.guid) {
			handler.guid = jQuery.guid ++;
		}

		// Инициируем структуру события и основной обработчик элемента, если это первый
		if (! (events = elemData.events)) {
			events = elemData.events = {};
		}
		if (! (eventHandle = elemData.handle)) {
			eventHandle = elemData.handle = function (e) {

				// Отмените второе событие jQuery.event.trigger () и
				// когда вызывается событие после выгрузки страницы
				return typeof jQuery! == "undefined" && jQuery.event.triggered! == e.type?
					jQuery.event.dispatch.apply (elem, arguments): undefined;
			};
		}

		// Обработка нескольких событий, разделенных пробелом
		types = (types || "") .match (rnothtmlwhite) || [""];
		t = типы.length;
		тогда как (t--) {
			tmp = rtypenamespace.exec (типы [t]) || [];
			type = origType = tmp [1];
			namespaces = (tmp [2] || "") .split (".") .sort ();

			// Там * должен * быть типом, без присоединения обработчиков пространства имен
			если (! type) {
				Продолжать;
			}

			// Если событие меняет свой тип, используйте специальные обработчики событий для измененного типа
			special = jQuery.event.special [type] || {};

			// Если выбран селектор, определите тип события adi, иначе заданный тип
			type = (selector? special.delegateType: special.bindType) || тип;

			// Обновление специального значения на основе нового типа сброса
			special = jQuery.event.special [type] || {};

			// handleObj передается всем обработчикам событий
			handleObj = jQuery.extend ({
				тип: тип,
				origType: origType,
				данные: данные,
				обработчик: обработчик,
				guid: handler.guid,
				селектор: селектор,
				needsContext: selector && jQuery.expr.match.needsContext.test (селектор),
				namespace: namespaces.join (".")
			}, handleObjIn);

			// Инициализируем очередь обработчика событий, если мы первый
			if (! (handlers = events [type])) {
				handlers = events [type] = [];
				handlers.delegateCount = 0;

				// Использовать только addEventListener, если обработчик специальных событий возвращает false
				if (! special.setup ||
					special.setup.call (elem, data, namespaces, eventHandle) === false) {

					if (elem.addEventListener) {
						elem.addEventListener (тип, eventHandle);
					}
				}
			}

			if (special.add) {
				special.add.call (elem, handleObj);

				if (! handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Добавить в список обработчика элемента, делегаты впереди
			if (selector) {
				handlers.splice (handlers.delegateCount ++, 0, handleObj);
			} else {
				handlers.push (handleObj);
			}

			// отслеживать, какие события когда-либо использовались, для оптимизации событий
			jQuery.event.global [type] = true;
		}

	},

	// Отсоедините событие или набор событий от элемента
	remove: function (elem, types, handler, selector, mappedTypes) {

		var j, origCount, tmp,
			события, t, handleObj,
			специальные, обработчики, тип, пространства имен, origType,
			elemData = dataPriv.hasData (elem) && dataPriv.get (elem);

		if (! elemData ||! (events = elemData.events)) {
			вернуть;
		}

		// Один раз для каждого типа.namespace в типах; тип может быть опущен
		types = (types || "") .match (rnothtmlwhite) || [""];
		t = типы.length;
		тогда как (t--) {
			tmp = rtypenamespace.exec (типы [t]) || [];
			type = origType = tmp [1];
			namespaces = (tmp [2] || "") .split (".") .sort ();

			// Отключить все события (в этом пространстве имен, если предусмотрено) для элемента
			если (! type) {
				для (тип событий) {
					jQuery.event.remove (elem, type + types [t], обработчик, селектор, true);
				}
				Продолжать;
			}

			special = jQuery.event.special [type] || {};
			type = (selector? special.delegateType: special.bindType) || тип;
			handlers = events [type] || [];
			tmp = tmp [2] &&
				новый RegExp ("(^ | \\.)" + namespaces.join ("\\. (?:. * \\. |)") + "(\\. | $)");

			// Удаление совпадающих событий
			origCount = j = handlers.length;
			тогда как (j--) {
				handleObj = обработчики [j];

				if ((mappedTypes || origType === handleObj.origType) &&
					( ! handler || handler.guid === handleObj.guid) &&
					(! tmp || tmp.test (handleObj.namespace)) &&
					(! selector || selector === handleObj.selector ||
						селектор === "**" && handleObj.selector)) {
					handlers.splice (j, 1);

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if (special.remove) {
						special.remove.call (elem, handleObj);
					}
				}
			}

			// Удаление общего обработчика событий, если мы удалили что-то, и больше не существует обработчиков
			// (избегает возможности бесконечной рекурсии при удалении специальных обработчиков событий)
			if (origCount &&! handlers.length) {
				if (! special.teardown ||
					special.teardown.call (elem, namespaces, elemData.handle) === false) {

					jQuery.removeEvent (elem, type, elemData.handle);
				}

				удалить события [тип];
			}
		}

		// Удалите данные и expando, если они больше не используются
		if (jQuery.isEmptyObject (события)) {
			dataPriv.remove (elem, "handle events");
		}
	},

	отправка: функция (nativeEvent) {

		// Создаем записываемый jQuery.Event из собственного объекта события
		var event = jQuery.event.fix (nativeEvent);

		var i, j, ret, match, handleObj, handlerQueue,
			args = new Array (arguments.length),
			handlers = (dataPriv.get (это, «события») || {}) [event.type] || [],
			special = jQuery.event.special [event.type] || {};

		// Используйте исправленный jQuery.Event, а не родное событие (только для чтения)
		args [0] = событие;

		для (i = 1; i <arguments.length; i ++) {
			args [i] = arguments [i];
		}

		event.delegateTarget = this;

		// Вызов крюка preDispatch для отображаемого типа и пусть он залог при необходимости
		if (special.preDispatch && special.preDispatch.call (это, событие) === false) {
			вернуть;
		}

		// Определение обработчиков
		handlerQueue = jQuery.event.handlers.call (это событие, обработчики);

		// Запуск делегатов первым; они могут прекратить распространение под нами
		i = 0;
		while ((сопоставлено = handlerQueue [i ++]) &&! event.isPropagationStopped ()) {
			event.currentTarget = matchched.elem;

			j = 0;
			while ((handleObj = matched.handlers [j ++]) &&
				! event.isImmediatePropagationStopped ()) {

				// Триггерное событие должно либо 1) не иметь пространства имен, либо 2) иметь пространство имен (имен)
				// подмножество или равное числу в связанном событии (оба пространства не могут иметь пространства имен).
				if (! event.rnamespace || event.rnamespace.test (handleObj.namespace)) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ((jQuery.event.special [handleObj.origType] || {}) .handle ||
						handleObj.handler) .apply (matched.elem, args);

					if (ret! == undefined) {
						if ((event.result = ret) === false) {
							event.preventDefault ();
							event.stopPropagation ();
						}
					}
				}
			}
		}

		// Вызов hook для postDispatch для отображаемого типа
		if (special.postDispatch) {
			special.postDispatch.call (это событие);
		}

		return event.result;
	},

	обработчики: функция (событие, обработчики) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Найти обработчики делегатов
		if (delegateCount &&

			// Поддержка: IE <= 9
			// Черные дыры SVG <use> деревья экземпляров (trac-13180)
			cur.nodeType &&

			// Поддержка: Firefox <= 42
			// Подавлять зависящие от спецификации клики, указывающие кнопку непервичного указателя (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Поддержка: только IE 11
			// ... но не стрелка «клики» радиовходов, которые могут иметь `button` -1 (gh-2343)
			! (event.type === "click" && event.button> = 1)) {

			for (; cur! == this; cur = cur.parentNode || this) {

				// Не проверять не-элементы (# 13208)
				// Не обрабатываем клики по отключенным элементам (# 6911, # 8165, # 11382, # 11764)
				if (cur.nodeType === 1 &&! (event.type === "click" && cur.disabled === true)) {
					matchedHandlers = [];
					matchedSelectors = {};
					for (i = 0; i <delegateCount; i ++) {
						handleObj = обработчики [i];

						// Не конфликтуем с свойствами Object.prototype (# 13203)
						sel = handleObj.selector + "";

						if (сопоставленоSelectors [sel] === undefined) {
							Соответствующие выборки [sel] = handleObj.needsContext?
								jQuery (sel, this) .index (cur)> -1:
								jQuery.find (sel, this, null, [cur]) .length;
						}
						if (соответствие выбранным [sel]) {
							matchedHandlers.push (handleObj);
						}
					}
					if (matchedHandlers.length) {
						handlerQueue.push ({elem: cur, обработчики: matchedHandlers});
					}
				}
			}
		}

		// Добавление оставшихся (непосредственно связанных) обработчиков
		cur = this;
		if (delegateCount <handlers.length) {
			handlerQueue.push ({elem: cur, обработчики: handlers.slice (delegateCount)});
		}

		return handlerQueue;
	},

	addProp: function (name, hook) {
		Object.defineProperty (jQuery.Event.prototype, name, {
			перечислимый: true,
			настраиваемый: true,

			get: isFunction (hook)?
				function () {
					if (this.originalEvent) {
							возвратный крюк (this.originalEvent);
					}
				}:
				function () {
					if (this.originalEvent) {
							return this.originalEvent [name];
					}
				},

			set: function (value) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );