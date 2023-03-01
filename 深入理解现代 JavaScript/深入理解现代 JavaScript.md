# 深入理解现代 JavaScript



## 序

如果你是前端开发人员，想要了解在过去几年中被添加到 JavaScript 的最新特性，以及未来如何在语言不断发展的过程中掌握最新动态，那么本书非常适合你！

## 前言

`Hello`，大家好，我是 `Sunday`。

今天我们来看一本讲解现代 `JavaScript` 的书籍，叫做《**深入理解现代 JavaScript**》，副标题是《JavaScript 新特性与编程最佳实践》，作者 `T J 克罗德`

 `JavaScript` 最初只是一个在网页上编写简单交互的脚本语言，自 `2009 年 12 月 ES5` 发布之后，`JavaScript` 才真正得到了广泛的应用。在最近的几年中，`JavaScript` 更是一直占据编程语言开发榜首的位置（数据来自 `octoverse.github.com`，直达链接：https://octoverse.github.com/2022/top-programming-languages）

<img src="%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E7%8E%B0%E4%BB%A3%20JavaScript.assets/image-20230219103939462.png" alt="image-20230219103939462" style="zoom:33%;" />

自 `2015 年` 之后之后，`TC 39 技术委员会` 开始保持了 **每年一次** 的版本的迭代，为 `JavaScript` 注入了大量的全新特性。

有过开发经验的小伙伴应该可以感知到，最近几年来 `ES6、ES7、ES8...` 各种新的 `ECMAScript` 版本规范接踵而来，让我们应接不暇。

每一个版本都会带来大量全新的特性，比如 `ESM、Map、Set、反射、代理、迭代器、生成器......` 。

而这些新的特性，很多都成为了 **面试** 或者 **工作** 中的高频难点。

所以对于我们这些开发者来说，这些全新特性，就成了我们必须要掌握的内容。

那么下面就让我们一起，拿出一个小时的时间，跟随作者 `T J 克罗德`，一起 **深入理解现代 JavaScript ** 吧！



## 概述

整本书一共分为 `19 个章节`，我把这十九个章节分为了六个部分，以帮助大家来捋清楚整本书的脉络：

- 第一章：想要了解现在 `JavaScript` 的新特性，那么首先我们需要先搞明白一些专业名词。比如 `TC 39 ` 是什么意思？ `ES6 与 ES2015 有什么关系`？把这些搞明白之后，才方便我们后续的学习。
- 第二章 - 第四章：作者按照 **变量 、函数、类** 这样 **以小到大** 的顺序，一步一步的讲解了自 `ES6` 之后的全新特性。其中会有我们所熟悉的 `let、const`。也会有一些我们不太熟悉的概念，比如 `TDZ、“rest”参数、类继承、newTarget` 等等。并且最重要的是，从这一章开始存在一个 **旧习换新** 的环节，这个环节告诉我们 **如何用新语法代替之前的旧习惯**
- 第五章 - 第七章：这是三个章节主要讲解了 **对象** 相关的内容，从 **对象的新特性开始** 讲到 **普通对象的不可迭代性**，**依据迭代器，讲到生成器**，最后又插入了对象结构的概念。
- 第八章 - 第九章：这两个章节主要以异步为主。以 `Promise` 作为切入点，引出 **异步函数、异步迭代器、异步生成器以及 `for await of`** 的概念。
- 第十章 - 第十四章：主要以传统概念的新增为主。比如：针对传统字符串拼接，新增的 **模板字符串**、针对于传统数组，新增的 **类型化数组**、针对模块化，新增的 **ESM** 、针对反射，代理需求而新增的 **`Proxy` 和 `Reflect`**，以及 `Map、Set、WeakMap、WeakSet` 等概念。
- 第十五章 - 第十九章：以零碎的概念为主，比如 **新的正则标志、共享内存、Bigint、取幂运算、空值合并** 等知识点。以及 **未来展望** 等正在进行的改进。



## 第一章：ES2015~ES2020 及后续版本的新特性

在第一章中，主要包含三块内容，其目的是为了同步一些基本的名词和概念，以便后续的学习。

如果大家比较细心的话，那么应该会注意到咱们在视频中提到过多次的 `TC39`，那么这个 `TC39` 指的是什么意思呢？

所谓 `TC39` 指的是 **TC39 技术委员会**，他们主要 **负责《通用、跨平台、与供应商无关的编程语言  ECMAScript 的标准化》**。也就是说，`JavaScript 的标准` 就是 `TC39 委员会` 定制的。

而这个标准，从 `2015 年` 之后，每年都会有一个版本的更新。而描述这些版本的方式主要有两种 **ES版本号（ES6、ES7）、ES年份（ES2015、ES2016）**

那么这个版本号和年份之间有什么关系呢？

很多小伙伴会把 **ES6 当做是 2016 年之后的新增特性**，这个是 **不对的**。所谓的 `ES6` 代表的是 **2015 年 ECMAScript 的第六版**，用版本号来说，被称作 `ES6`，但是如果用年份来表示，那就是 `ES2015`。

同理所谓的 `ES7`，指的是 **2016 年 ECMAScript 的第七版**，年份号为 `ES2016`。以此类推。

所以大家以后千万不要把 `ES6` 当做是 `2016年` 之后发布的内容咯~~

而对于 `TC39` 来说，在制定新的 `JavaScript 标准` 时，是具备一个明确的流程的，这个流程一共被分为 **5 个阶段**。这 5 个阶段咱们没有必要详细去说，但是咱们需要知道的是 **整个标准的制定流程是有非常严格标准的，并不是 “拍脑袋” 决定的**。

> 同时，这个流程对于我们这些开发者而言，也是可以参与进去的，如果大家想要参与到标准制定中，那么可以看下书中第一章的内容，里面有详细介绍。

而对于 `TC39` 来说，它们在提交制定标准时，来必须要遵循一个核心思想，那就是 **别毁坏 Web（Don't break the web）**。也就是 **新语法，必须保证兼容性。**

当新的语法被发布之后，一些浏览器可能没有办法及时支持新的语法，所以这个时候就需要使用到 `Babel` 了。`Babel` 可以把新的标准语法降级为被浏览器兼容的语法版本。

比如，我现在想要把 `ES6` 语法应用到 `IE 11` 浏览器上，那么就可以按照脑图的方式进行（注意：版本号）。



## 第二章：块级作用域声明： let 和 const

`let 和 const` 是 `ES6` 之后新增的声明变量的方式。这两个关键字虽然算是 `ES6` 新特性，但是我相信对于大多数的小伙伴来说它已经不是一个新鲜的东西了。在实际开发中，我们早已经对它们进行了大量的使用。

但是，很多情况下，**应用和掌握** 通常是两个概念。下面咱们就来看看 `let 和 const`，看看里面是否有大家的知识盲点。

对于现在的 `JavaScript` 来说，声明变量的方式一共有三种：

- `var`：变量，会跳出块级作用域
- `let`：变量，不会跳出块级作用域
- `const`：常量，不会跳出块级作用域

这里有一个块级作用域的概念。

所谓块级作用域指的是 **两个大括号中间的内容**，比如 `for 循环、if、函数` 只要存在 `{}` 那么都会生成块级作用域。

那么按照刚才我们所说的三种声明变量关键字的区别，如下代码的运行结果也就不意外了：

```js
if (true) {
  var msg1 = 'var 变量'
  let msg2 = 'let 变量'
  const msg3 = 'const 变量'
}

console.log(msg1); // var 变量
console.log(msg2); // Uncaught ReferenceError: msg2 is not defined
console.log(msg3); // Uncaught ReferenceError: msg3 is not defined
```

除了块级作用域之外，`var` 和 `let、const` 在特性上也有一些区别。这个区别主要体现在两个方面 **变量提升、暂时性死区（`TDZ`）**

咱们先来看变量提升。对于 `var` 声明的变量而言，会存在变量提升的概念，也就是可以 **先使用、后定义**，咱么来看这段代码：

```js
console.log(msg) // undefined （并不会报错）
var msg = 'hello world'
```

在这段代码中，`msg` 变量先被使用，后声明。虽然打印了 `undefined`，但是它并不会报错。

原因是因为，以上代码会被编译为以下形式：

```js
var msg
console.log(msg) // undefined
msg = 'hello world'
```

即 **msg 变量的定义会被提升到最前面**。而这种形式就叫做 **变量提升**。

但是如果我们使用 `let 或 const` 来代替 `var` 的话，因为 `let、const` 不具备变量提升，所以就会抛出对应的错误：

```js
console.log(msg2); // Uncaught ReferenceError: Cannot access 'msg2' before initialization
let msg2 = 'hello word'
```

而这样的错误，就被叫做 **暂时性死区（ temporal dead zone，简称TDZ ）。**



### 旧习换新

在开头的时候咱们说过从第二章开始，都会有一个 **旧习换新** 的环节，这里的旧习换新主要包含两点：

- 第一点是 **不要使用 `var`，改用 `let` 和 `const`**：因为无论是 **跳出块级作用域也好，还是变量提升也好**，在标准图灵完备的编程语言中，都不是一个应该具备的特性。
- 第二点是 **缩小变量的作用域，从而提升可维护性**：想要理解这句话，可能需要具备一定的编程经验。如果大家不是很理解的话，那么可以想象一下 **一万行代码的文件和一百行代码的文件** 哪个更好维护？我们始终需要谨记 **代码越少，越容易维护**。所以 **缩小你的作用域空间，减少逻辑的复杂度。**



## 第三章：函数的新特性

函数作为 `JavaScript 世界` 的 **一等公民**，是我们在实际项目开发中，无时无刻不在使用的东西。

在这一章中，咱们主要从 **参数、this 指向、构造函数** 这三个方面来去说明函数的新特性。



### 参数

函数的参数分为两种 **形参、实参**。所谓形参指的是 **定义函数时指定的形式参数**。所谓实参指的是 **调用函数时，传递的实际参数。**

而在定义形参时，我们可以通过 **赋值符 =** 的形式，为形参指定 **默认值**。这表示 **如果没有传递对应的实参，则该形参默认为该值**

```js
function fn(name = '张三') {
  console.log(name); // 张三
}
fn()
```

这个默认值可以为 **任意的单一表达式**，比如我们可以指定一个 **立即执行的箭头函数**，那么此时默认值会为该函数的值：

```js
// 箭头函数：() => '李四'
// (() => '李四')() 表示立即执行的箭头函数
function fn(name = (() => '李四')()) {
  console.log(name);
}
fn()
```

在 `JavaScript` 中，函数的实参和形参并不要求是一一对应的。也就是说 **实参的数量可以超过形参的数量**。那么在这种情况下，如果我们想要获取到 **多余的实参**，一共有两种方式：

- 第一种是传统的 `arguments `，但是它并不是通用的，在箭头函数中无法使用

  ```js
  function fn(name) {
    console.log(arguments); // ['张三', 30, '男', callee: ƒ, Symbol(Symbol.iterator): ƒ]
  }
  
  const fn = (name) => {
    console.log(arguments); // Uncaught ReferenceError: arguments is not defined
  }
  
  fn('张三', 30, '男')
  ```

- 第二种是 `ES6 之后` 新增的 **“rest” 参数**，它是通用的，表示 **接收所有的剩余参数**

  ```js
  function fn(name, ...args) {
    console.log(args); // [30, '男']
  }
  
  const fn = (name, ...args) => {
    console.log(args); // [30, '男']
  }
  
  fn('张三', 30, '男')
  ```



### this 指向

针对 `this` 指向，指的是 **普通函数和箭头函数** 下的 `this` 指向问题。

这应该是一个 **面试** 时的高频问点。当大家遇到这样的问题时，大多数时候只需要从三个方面进行回答即可：

- 首先第一个方面是 **普通函数的 this 指向**：针对于普通函数而言，`this` 指向调用方

  ```js
  function fn() {
    console.log(this); // window
  }
  fn() // window.fn()
  ```

- 然后是箭头函数：针对于箭头函数而言，不会修改 `this` 指向，即 **this 指向上层作用域中的 this** 

  ```js
  const person = {
    name: '张三',
    fn() {
      console.log(this); // person
  
      const subFn = () => {
        console.log(this); // 指向上层作用域（fn）中的 this
      }
      subFn()
    }
  }
  person.fn()
  ```

- 最后是 `call、apply、bind` 这三个 `API`：它们都可以在 **普通函数** 中修改 `this` 指向，`this` 指向它们的第一个参数

  ```js
  const person = {
    name: '张三'
  }
  
  const fn = () => {
    console.log(this); // window  箭头函数永远不会修改 this 指向
  }
  
  function fn2() {
    console.log(this); // person
  }
  
  fn.apply(person)
  fn2.call(person)
  fn.bind(person)()
  ```



### 构造函数

构造函数通常指 **首字母大写的普通函数** 。也就是说：**箭头函数永远不可以作为构造函数使用**

```js
function Person(name) {
  // this 指向实例对象
  this.name = name
}
const p = new Person('张三')
console.log(p); // Person {name: '张三'}


const Person2 = (name) => {
  // this 指向 window
  this.name = name
}
const p2 = new Person2('张三')
console.log(p2); // Uncaught TypeError: Person2 is not a constructor
```



### 旧习换新

这一章的旧习换新主要包含四点内容，也是对本章重点内容的总结：

- 首选是关于箭头函数和普通函数的使用场景： **不想修改 this 指向时，使用箭头函数。需要改变 this 的指向时，使用普通函数**
- 其次是关于参数默认值：**使用参数默认值，而不要使用代码为参数赋初始值**
- 第三是关于剩余参数： **使用 rest 参数替代 arguments 关键字** 来获取剩余参数



## 第四章：类

针对于第四章而言，从名字到内容都非常的纯粹，一个字 **类**。

那么对于这一章的内容，让我们从一个问题开始：我们常说 **JavaScript 实际上没有类，只是用原型来模拟了类？是这样的吗？**

答案是 **当然不是**。其实从 `ES2015` 之后，`ECMAScript` 标准为 `JavaScript` 提供了 **类** 的概念。它并不是原型的模拟，只是 **可以用原型来模拟类而已**。

那么下面咱们就来看看 `ES2015` 之后的 **类语法**



### 类语法

类语法分为 **创建** 和 **使用** 两部分。

咱们先来看类的创建：

```js
const fnName = 'fn' + Math.floor(Math.random() * 1000)
class Color {
  // 一个《构造函数》
  constructor(r = 0, g = 0, b = 0) {
    // 三个《数据属性》
    this.r = r
    this.g = g
    this.b = b
  }

  // 一个《访问器属性》
  get rgb() {
    // 可通过 实例.rgb 访问
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }

  set rgb(val) {
    // 为 r、g、b 赋值
    // 可通过 实例.rgb = xx 访问
  }

  // 一个《原型方法》
  toString() {
    return `重写的原型方法：${this.rgb}`
  }

  // 一个静态方法
  static fromCss(r, g, b) {
    // 利用 new this 可以直接得到 Color 实例
    return new this(r, g, b)
  }

  // 动态方法名
  [fnName]() {
    return `动态方法名为：${fnName}`
  }
}
```

在这段代码中，我们通过类语法 `class` 创建了一个类 `Color`，这里大家注意，根据规范 **类名首字母应该大写**。这里的代码我已经写好了注释，大家可以在这里暂停来查看下对应的代码内容。

而如果想要使用类的话，那么必须要通过 `new` 关键字来进行使用：

```js
const c = new Color(30, 144, 255)
console.log(c[fnName]()); // 动态方法名为：fn275
console.log(c.toString()); // 重写的原型方法：rgb(30, 144, 255)
console.log(c.rgb); // rgb(30, 144, 255)
console.log(Color.fromCss(255, 255, 255)); // Color {r: 255, g: 255, b: 255}
```

以上两段代码可能有一些复杂，如果大家之前没有接触过类的话，我建议大家最好是在这里暂停视频，把上面的两段代码写一下，以加强对类的理解。



### 类继承

继承在编程语言中是一个非常常见的概念，在 `ES6` 之前想要完成继承，那么多数情况下需要使用 **原型继承** 的方式。而原型继承有很多种，比如：**组合式继承、原型式继承、寄生式继承、寄生式组合继承 ......** 很多种方式。

但是在实际开发中，如果我们直接使用类语法的话，那么想要实现继承就非常容易了。只需要使用到一个关键字 `extends`

```js
class SubColor extends Color {}
```



### super 关键字

而除了 `extends` 之外，类继承的时候还有另外一个关键字 `super`。 `super` 关键字可以用来 **处理与父类相关的事情**。

它的使用场景主要有两个：

#### 作为函数使用

`super` 关键字可以直接作为函数进行使用。比如：在构造函数中使用时，`super` 可以直接调用父类的构造函数，在通常情况下 **这是一个必须的操作**

```js
class SubColor extends Color {
  constructor(r = 0, g = 0, b = 0, a = 1) {
    // 触发父类的构造函数
    super(r, g, b)
    this.a = a
  }
}
```



#### 作为属性查询使用

`super` 关键字可以用来 **访问一个对象字面或类的 [[Prototype]] 的方法和属性**。比如：我们可以在静态方法中利用 `super` 访问父类的静态方法

```js
  class SubColor extends Color {
    static fromCss(r, g, b, a = 1) {
      // 通过 super 调用父类的静态方法
      const result = super.fromCss(r, g, b)
      //  code....
      return new this(r, g, b, a)
    }
  }
  // 子类重写的 formCss。result = {color: red} + {fontSize: 20px}
  console.log(Color.fromCss(255, 255, 255));
  console.log(SubColor.fromCss(255, 255, 255, 1)); // SubColor {r: 255, g: 255, b: 255, a: 1}
```



### new.target

对于类而言，最后一个需要大家关注的概念就是 `new.target`。

**`new.target`** 属性允许你 **检测函数或构造方法是否是通过 new 运算符被调用的，并且可以返回一个指向构造方法或函数的引用**。

我们可以利用它来判断 **当前触发构造函数时是通过哪个类来触发的** ，这在 **多层继承判断来源时会非常有用**

```js
  class Color {
    constructor() {
      console.log(`new.target.name: ${new.target.name}`);
    }
  }

  class SubColor extends Color {
    constructor() {
      super()
    }
  }

  new Color() // new.target: 指向 Color

  new SubColor() // new.target: 指向 SubColor
```



### 旧习换新

这里的旧习换新环节，就比较简单了，只有一点： **实际开发中，通过 `class` 来完成类的构建和继承。**



## 第五章：对象的新特性

接下来我们来看对象在 `ES6` 之后的新特性。

对象在我们日常开发中使用的场景是非常多的，所以这一章中的很多新特性大家或多或少的应该都有一些了解。我挑选了几个日常开发中最常用的语法，来给大家进行下分享。

首先是  **可计算的属性名**。

有些时候，我们可能希望 **对象的 `key` 是一个不确定的唯一值。** 比如：世界上每一个人都是唯一的，所以 `person` 对象应该具备一个唯一的 `“特性”` ，那么我们就可以通过这种方式来进行表示

```js
const key = Symbol('key')
const person = {
  name: '张三',
  // 可计算的属性名
  [key]: key
}
console.log(person); // {name: '张三', Symbol(key): Symbol(key)}
```

在这段代码中，我们利用 `Symbol` 构建了一个 `key`，然后利用 `[key]` 作为 `person` 的`唯一 key 名`。

同时，为了方便对象字面量的编写，`ES6` 之后提供了 **属性简写** 的语法： **当 key 和 value 拥有同样的变量名时，那么可以进行简写**

```js
const name = '张三'
const person = {
  // name: name
  name
}
```

**属性简写** 是我们在日常开发中非常常用的一种方式。

除了属性简写之后，还有另外一个新特性也是我们在日常开发中非常常见的，那就是 **展开运算符**。

展开运算符以 `...` 的形式进行表示，可以用在对象的展开和合并的多个场景中：

```js
const names = ['张三', '李四', '王五']

// 展开
console.log(...names); // 张三 李四 王五

// 合并
console.log(['赵六', ...names]); //['赵六', '张三', '李四', '王五']
```

除此之外，在 `ES6` 之中还提供了很多的新增方法，这些方法咱们就不一个一个说了。大家如果对哪个方法不熟悉的话，可以到 `MDN` 上进行对应的查询。



### 旧习换新

最后是对象的旧习换新环节，这个环节的内容比较多，主要有 5 个：

1. 当你需要一个动态的 `key` 时，可以通过可计算的属性名直接创建该对象
2. 多使用属性的简写，以此来简化对象构建的过程
3. 是 `Object.assign` 方法，这是一个 `ES6` 新增的方法。可以 **将一个对象的可枚举属性复制到另一个对象上** 。但是要注意，这是一个浅拷贝的
4. `Symbol` 可以构建一个唯一值。 使用 `Symbol` 作为 `key` 名，可以避免属性名冲突
5. 最后是关于实例的原型，之前访问实例的原型时多通过 `__proto__` 访问。现在可以通过 `Object.setPrototypeOf、Object.getPrototypeOf` 来直接访问原型



## 第六章：可迭代对象、迭代器、生成器

从这一章的名字就可以看出来，这一章中主要讲了三个东西 `可迭代对象、迭代器、生成器`。本章的内容在我们日常的业务项目开发中其实用的不是特别多，并且很多时候有更习惯的替代方案。但是在面试中，确有可能经常被问到，所以不妨一听。



### 可迭代对象、迭代器

首先咱们先来看可迭代对象、迭代器。想要了解这两个东西，咱们需要先搞清楚他们的概念：

> 迭代器：所谓迭代器指的是 **一个具有 next 方法的对象**。也就是说，从 **理论上**，只要一个对象具备 `next` 方法，那么它就是迭代器。这里大家注意：**迭代器可以应用在数组中，却 不可以 应用在普通对象中**
>
> 可迭代对象：而可迭代对象指的是 **可以通过标准方法获取迭代器，以遍历其内容的对象**。
>
> 所以说 **可迭代对象、迭代器** 通常是配合来进行说明的。

而对于迭代器而言，分为 **隐式迭代器 和 显示迭代器** 两种。

咱们先来看隐式迭代器 `for of`，它拥有 **隐式** 的 `next` 方法：

```js
const names = ['张三', '李四', '王五']
for (const iterator of names) {
  console.log(iterator); // 张三、李四、王五
}

const person = {
  name: '张三',
  age: 30
}
// Uncaught TypeError: person is not iterable
// 普通对象默认不可迭代
for (const iterator of person) {
  console.log(iterator);
}
```

而显示迭代器被叫做 `Symbol.iterator`，每个数组都包含一个 `Symbol.iterator` 的属性，可以利用该属性获取显示迭代器，它拥有 **显示** 的 `next` 方法：

```js
  const names = ['张三', '李四', '王五']
  const it = names[Symbol.iterator]()
  console.log(it); // Array Iterator {}
  console.log(it.next()); // {value: '张三', done: false}
  console.log(it.next()); // {value: '李四', done: false}
  console.log(it.next()); // {value: '王五', done: false}
  console.log(it.next()); // {value: undefined, done: true}

  // const person = {
  //   name: '张三',
  //   age: 30
  // }
  // // Uncaught TypeError: person is not iterable
  // // 普通对象默认不可迭代
  // for (const iterator of person) {
  //   console.log(iterator);
  // }
```

而针对于对象而言，咱们也说过 **普通对象默认不可迭代**。不可迭代的原因其实是因为 **缺少 Symbol.iterator 属性**。所以如果我们希望让普通对象可迭代的话，那么可以通过以下两步来完成：

- 为对象添加 `Symbol.iterator` 属性，返回 `iterator` 迭代器对象
- `iterator` 迭代器对象中包含 `next` 方法

因为在实际开发中使用场景不多，所以其中具体的代码咱们就不在这里说了。



### 生成器

虽然迭代器是一个有用的工具，但由于需要显式地维护其内部状态，因此需要谨慎地创建。生成器函数提供了一个强大的选择：**它允许你定义一个包含自有迭代算法的函数，同时它可以自动维护自己的状态**。所以我们可以 **利用生成器得到一个迭代器对象（`Generator` 符合 [可迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议) 和 [迭代器协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)），同时该迭代器对象同样会拥有 `next` 方法**。

那么咱们搞明白 **生成器与迭代器** 的关系之后，下面咱们来看下 **生成器** 的语法。

想要创建并使用生成器的话，一共分为三步：

1. 生成器被称为 **生成器函数**，所以想要构建一个生成器，那么必须要构建一个函数：

   ```js
   // 通过在 function 后面增加一个 * 来标记当前函数为生成器函数
   function* simple() {
   }
   ```

2. 生成器内部包含 **暂停迭代** 的功能，这个暂停是配合 `next` 方法进行使用的

   ```js
   function* simple() {
     for (let i = 0; i < 3; i++) {
       // 使用 yield 控制暂停迭代
       yield console.log(i);
     }
   }
   ```

3. 调用生成器函数，可以得到一个迭代器对象，通过 `next` 方法控制 **迭代过程**

   ```js
   const s = simple()
   s.next() // 0
   s.next() // 1
   s.next() // 2
   ```

同时对于生成器而言，它还可以 **传递参数（消费值）**，咱们来看这个例子：

```js
function* add() {
  console.log('开始');
  // yield 后面的内容被叫做 value，并且 yield 包含返回值
  const value1 = yield "请输入第一次的值"
  console.log(`第一次的值为：${value1}`);

  const value2 = yield "请输入第二次的值"
  console.log(`第二次的值为：${value2}`);

  return value1 + value2
}

let result
const gen = add()
// 开始
result = gen.next()
console.log(result);
// 第一次输入值
result = gen.next(35)
console.log(result);
// 第二次输入值
result = gen.next(7)
console.log(result);
```

最终打印结果为：

<img src="%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E7%8E%B0%E4%BB%A3%20JavaScript.assets/image-20230220113925323.png" alt="image-20230220113925323" style="zoom:33%;" />



### 旧习换新

就像我们开始所说的一样，在实际企业开发中生成器与自定义迭代器其实使用率并不高，所以这里的旧习换新只有一个：

- **利用 DOM 的可迭代特性，通过 for....of... 进行循环**。比如在通过 `querySelectAll` 获取 `DOM` 的伪数组之后，伪数组虽然没有办法直接 `forEach`，但是可以利用隐式迭代器 `for of` 完成循环操作



## 第七章：解构

关于对象相关的最后一部分就是 **解构** 了。解构应该是日常开发中非常常用的语法。其目的是为了 **从数据结构中快速提取对应的内容**

解构分为两部分：对象解构 和 数组解构。

当对对象进行解构时，需要 **配合 大括号 完成，大括号中放入需要提取的字段名，同时该字段名会作为新的变量名被创建**

```js
const person = {
  name: '张三',
  age: 30
}

// 以大括号的形式来结构对象
// 以 key 的形式，获取指定属性
const { name } = person // const name = person.name
console.log(name); // 张三
```

而对于数组的解构，需要 **配合 中括号 完成，**中括号中 **按照下标的顺序，依次写入新的变量名**

```js
const arr = ['a', 'b', 'c']

// 以中括号的形式来结构对象
// 中括号定义变量名
const [v1, v2, v3] = arr // const v1 = arr[0], v2 = arr[1], v3 = arr[2]
console.log(v1, v2, v3); // 'a', 'b', 'c'
```

同时，对于数组解构而言，也可以通过 `“rest” 语法` 直接获取 **剩余元素，剩余元素会被赋值给新的数组**

```js
const arr = ['a', 'b', 'c']

// 以中括号的形式来结构对象
// 中括号定义变量名
// “rest” 语法... 表示剩余所有组成新数组
const [v1, ...v2] = arr // const v1 = arr[0], v2 = [arr[1], arr[2]]
console.log(v1, v2); // 'a',  ['b', 'c']
```

而当 **对象呈嵌套形式时**，同样可以利用 **嵌套解构** 的形式进行结构：

```js
const person = {
  name: '曹操',
  age: 58,
  children: [
    {
      name: '曹丕',
      age: 35
    },
    {
      name: '曹植',
      age: 28
    }
  ]
}

// { children } 表示获取 person 的 children
// { children: [caoPi] } 表示从 children 中获取第一个元素，命名为 caoPi
const { children: [caoPi] } = person
console.log(caoPi); // {name: '曹丕', age: 35}
```

 

### 旧习换新

解构是日常开发中常用的语法，但是本身比较简单，所以我们过得比较快。只要大家在以后的开发中多使用解构语法，就会发现它本质上是一个非常简单的东西。



## 第八章：Promise

接下来咱们来看第八章、第九章关于异步处理的部分。

说道异步，肯定有很多小伙伴直接想到的就是 `Promise`。 没有 `Promise` 是 `ES6` 之后专门用来处理异步的解决方案。但是大家要注意 `Promise` **本身并不执行任何操作，它只是一种观察异步操作结果的方案**。

在 `Promise` 内部对整个异步的操作分为 **三种状态**，对应 **三种结果**。而语法分为 **定义** 和 **使用** 两部分。其中三种状态发生在定义阶段，三种结果发生在使用阶段。

```js
function reload(b) {
  // 创建 promise 实例
  return new Promise((resolve, reject) => {
    console.log('代码进入 pending 状态');
    setTimeout(() => {
      if (b) {
        resolve('代码进入 已成功 状态')
      } else {
        reject('代码进入 已拒绝 状态')
      }
    }, 500);
  })
}

const p1 = reload(true)
p1.then((data) => {
  console.log(data); // 代码进入 已成功 状态
}).finally(() => {
  console.log('p1 已敲定');
})

const p2 = reload(false)
p2.then((data) => {
  console.log(data); // 代码进入 已拒绝 状态
}).finally(() => {
  console.log('p2已敲定');
})
```

同时，对于 `Promise` 而言，它支持链式调用的方式。只要在 `.then` 中 `return` 了内容，那么 `renturn` 的内容就会被封装为 `Promise.resolve` ，从而可以继续 `.then`:

```js
const p1 = reload(true)
p1.then((data) => {
  console.log(data); // 代码进入 已成功 状态
  return '进入第二次 Promise'
}).then(data => {
  console.log(data);
  return '进入第三次 Promise'
}).then(data => {
  console.log(data);
  console.log('三次结束');
})
```



### 旧习换新

对于 `Promise` 来说，现在在开发中的使用已经非常普遍了。所以当大家以后遇到异步问题时，应该首先考虑 `Promise`



## 第九章：异步函数、迭代器、生成器

`Promise` 可以帮助我们处理异步操作，但是从上面的代码我们可以看出，在 `Promise` 的 **使用** 阶段，代码的复杂度其实并不低。

所以在 `ES7` 之后，`TC39` 推出了 **异步函数** 的概念，以解决 `Promise` 使用的复杂度问题。

想要定义异步函数，那么需要通过 `async` 关键字来进行定义，在异步函数中，可以通过 `await` 关键字来 **让异步操作，变为同步的写法**

```js
function reload1() {
  // 创建 promise 实例
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('reload1 进入 已成功 状态')
    }, 500);
  })
}

function reload2() {
  // 创建 promise 实例
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('reload2 进入 已成功 状态')
    }, 500);
  })
}

function reload3() {
  // 创建 promise 实例
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('reload3 进入 已成功 状态')
    }, 500);
  })
}


// async 和 await 必须同时出现
// async 标记指定方法为《异步方法》,该方法会返回一个 Promise
// await 只能在《异步方法》中使用
async function start() {
  // 该操作同样为异步操作，只不过拥有了同步的写法
  const result1 = await reload1()
  console.log(result1);
  const result2 = await reload2()
  console.log(result2);
  const result3 = await reload3()
  console.log(result3);

  return 'start 返回值'
}

const p = start()
console.log(p); // promise
```

在使用 `async/await` 时，默认情况下返回值是 `.then` 的内容，如果想要捕获异常，那么需要通过 `try...catch...` 来完成。

同时对于异步函数来说，也可以配合生成器进行使用，得到 **异步生成器函数**。这种异步生成器，在需要 **手动控制多个异步请求的顺序以及结果的时候，会有些用处**，如果大家没有这方面的需求，只需要有个印象就可以了。

```js
// async 函数必然返回 promise
async function* fetchInSeries([...urls]) {
  for (const url of urls) {
    const res = await fetch(url)
    // g.next().value 得到 res.json()
    yield res.json()
  }
}

async function getData() {
  const g = fetchInSeries(['1.json', '2.json', '3.json'])
  /*
    let result = await g.next()
    while (!result.done) {
      console.log(result.value);
      result = await g.next()
    }
  */
  let result
  while (!(result = await g.next()).done) {
    console.log(result.value);
  }
}

getData()
```

在以上代码的 `getData()` 方法中，我们通过 `fetchInSeries` 方法得到了一个迭代器 `g` ，然后利用 `while` 循环的方式进行了迭代。

而整个迭代的过程可以进一步的简写，利用 `for await of` 语法，会更加轻松

```js
async function getData() {
  // for await of：利用迭代器的特性配合 await 解析生成器
  for await (const value of fetchInSeries(['1.json', '2.json', '3.json'])) {
    console.log(value);
  }
}
```



### 旧习换新

使用 `async、await` 配合 `promise` 处理异步请求，是在当前阶段开发中非常常见的一种场景。当大家遇到异步请求时，那么首先应该想到的就是 `Promise + async\await`。



## 第十章：模板字面量、标签函数和新的字符串特性

从第十章开始，到第十四章为止，这五个章节主要是对传统技术的升级。

以第十章为例，传统技术下，想要拼接字符串与变量，那么一般需要通过 **+ 运算符** 进行隐式转换。而 `ES6` 之后，提供了 **模板字符串** 的概念：

```js
const msg = 'world'
console.log(`hello ${msg}`); // hello world
```

处理之外，还提供了一些新的字符串方法。

以及通过 `for of` 隐式迭代器对字符串进行迭代操作。



###  旧习换新

这一章的内容中，对我们日常开发和面试有用的内容其实比较少，里面还包含一些对我们没有什么用处的东西，比如 `Unicode 的改进`，这些我就略过了，如果大家对 `Unicode` 感兴趣的话，可以去看一下书中的内容。



## 第十一章：新数组特性、类型化数组

对于第十一章来说，和第十章其实非常的类似。第十一章主要讲解的是 `Array 数组的改进`。内容主要就是两部分。

第一部分是对于 `Array` 数组的新增方法。

第二部分是 **类型化数组**。

对于很多小伙伴来说，类型化数组的概念大家可能是第一次听到。但是大家应该知道 **JavaScript 中传统的 “数组” 并不是真正的数组，而是一个对象。** 所以在 `ES6` 之后，`TC39` 提出了一个新的概念就是 **类型化数组**，不同的类型化数组可以存储不同的值，但是在日常的使用中，我们可能很少会主动使用这个东西。



### 旧习换新

数组的新增方法，在日常开发中是非常有用的。所以以上我们所列举出来的方法大家一定去 `MDN` 上看一下，至少做到有个印象。



## 第十二章：Map 和 Set

上面两章的内容相对都比较简单。但是接下来的 `Map` 和 `Set` 可能对于很多小伙伴来说是 **“盲区”**。

这一章一共讲到了 `4个` 新的接口：`Map、Set、WeakMap、WeakSet`。

咱么先来看 `Map`。`Map` 是 **以 键\值对 的形式存储数据的对象，其中键值对可以是任何值**。乍一看可能和 **普通对象** 没有什么区别，但是大家需要注意的是 **普通对象的 key 只能是 字符串**。 而 **Map 对象的 key 可以是任意值**。

也就是说虽然存储方式相同，但是可存储的内容确实大大不同的。

除此之外，在 `API` 上，`Map` 和 `{}` 也有较大的区别。我们可以来看下关于 `Map` 对象的基本语法：

```js
// 创建
const m = new Map()
// 增
m.set('name', '张三')
m.set('age', '30')
// 改
m.set('name', '李四')
// 查
m.get('name')
// 删
m.delete('name')
// 获取长度
console.log(m.size);
// 迭代
for (const [key, value] of m) {
  console.log(key, value);
}
```

而对于 `Set` 而言，它与数组有些类似，但是不同的地方在于 **`Set` 存储唯一值，也就是元素不可以重复。**

同样它的语法和传统的 `Array` 也有较大的区别：

```js
// 创建
const s = new Set()
// 增
s.add('张三').add('李四')
// 是否包含
s.has('张三')
// 删
s.delete('张三')
// 清空
s.clear()
// 获取长度
console.log(s.size);
// 迭代
for (const value of s) {
  console.log(value);
}
```

而对于 `Map` 和 `Set` 来说，都提供了一个 `Weak` 版，叫做 `WeakMap` 和 `WeakSet`。

 `WeakMap` 和 `WeakSet`与 `Map` 和 `Set` 的区别主要体现在三个地方：

- 首先第一个地方是 **值为弱引用** ，这意味着它并不会影响垃圾回收。
- 同时因为是弱引用，所以 **值不会保存在内存中**，这个就比较好理解了。
- 最后就是 **不可迭代**。



### 旧习换新

最后就是旧习换新。

- 首先：如果你要以键值对的形式保存数据，同时 `Key` 非字符串，那么此时可以考虑使用 `Map`
- 其次：`Set` 对象可以存储唯一值，这在数组去重的场景下会非常有用
- 最后：如果你希望 `key` 跟随变量的销毁而被回收时，那么可以使用 `WeakMap` 或 `WeakSet`



## 第十三章：模块

第十三章主要讲解的就是模块化的概念。任何的模块化都会被分成两部分 **导入** 和 **导出**。

而目前在前端领域，主要的模块化方式有两个 `ESM` 和 `CJS` 。

所以说咱们在这一章中要学习的就是：

- `ESM` 的导入、导出
- `CJS` 的导入、导出

一个四个环节。

那么首先我们先来看 `ESM`。所谓 `ESM` 指的是 **ES2015 之后新增的标准模块化方案 `ES Module`**。它相对复杂一点，分为 **直接导出**、**按需导出**、**直接导入**、**按需导入** 一共四部分。[直达链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)。

除了这标准的四部分之后，有时候在 `EMS` 中可能还会涉及到 **导入同时导出** 的场景，如果想要导入并导出，那么可以通过 `export {xx} from './xx'` 的方式进行。

第二个是 `CJS`。`CJS` 的逻辑与 `ESM` 相同，甚至更加简单。只是语法上会稍有不同。`CJS` 不存在按需的概念，所以只有导入和导出两部分。[文档直达链接](https://nodejs.org/docs/latest/api/modules.html)

除了 `CJS` 和 `EMS` 之外，还有一些其他的模块化方案，比如 `UMD`，`AMD`、`CMD` 等等。这些模块化方案在应用层开发中很少见，所以咱们不做讨论。



### 旧习换新

最后就是旧习换新环节。

其实对于模块化的问题，在现在的企业开发中已经是非常常见的了。无论是 `EMS` 还是 `CJS` 都已经得到了广泛的应用。所以这一章的内容，对于大多数小伙伴来说，应该都没有太大的难度才对。



## 第十四章：反射和代理

看完模块化之后，下面咱们来看下反射和代理的概念。其中反射代表的是 `Reflect`，代理代表的是 `Proxy`。我第一次接触它们两个是在 `Vue 3` 中接触到的。

这两个 `API` 多数情况下应该是配合使用的，任意一个单独拿出来，在复杂场景中都意义不大。

所以说我们在介绍这两个 `API` 的时候会先介绍它们两个的作用，然后再把它们两个合起来去说。

那么咱们先来看 `反射对象（Reflect）` 。它 **提供了《对象基本操作的各种方法，比如：获取和设置属性值、获取和设置对象的原型、从对象中删除属性...》** 等等......

比如，咱们来看这段代码

```js
const person = {
  name: '张三'
}

console.log(person.name) // 张三
console.log(Reflect.get(person, 'name')) // 张三
```

在这段代码中，我们可以利用 `Reflect.get(person, 'name')` 方法，获取到 `person` 对象下 `name` 属性的值。

但是肯定有很多小伙伴看到这就说了 **这有啥用啊？** 我们完全可以通过 `person.name` 来获取啊。

所以 `Reflect` 的真正有意义的使用，就需要配合 `Proxy` 进行了。

`Porxy` 被称为 **代理对象**。作用是 **拦截目标对象的基本对象操作，并且拥有目标对象所有的属性和方法** （在 `vue3` 中就是通过 `Proxy` 来完成的数据代理 ）。那么具体怎么用呢？我们来看这段代码：

```js
const person = {
	name: '张三',
	age: 30
}

const p = new Proxy(person, {
	/**
	 * 代理 person 的 setter 行为
	 * @param {*} target person 被代理对象
	 * @param {*} key 修改时的 key
	 * @param {*} value 修改的 value
	 * @param {*} receiver proxy 实例 p，被代理对象
	 */
	set(target, key, value, receiver) {
		console.log(target, key, value, receiver)
		// 修改被代理对象
		target[key] = value
		// 标记修改成功
		return true
	},

	/**
	 * 代理 person 的 getter 行为
	 * @param {*} target person 被代理对象
	 * @param {*} key 修改时的 key
	 * @param {*} receiver proxy 实例 p，被代理对象
	 * @returns
	 */
	get(target, key, receiver) {
		return target[key]
	}
})

p.name = '李四' // 触发 set。注意：只有修改 proxy 实例才会触发 set

console.log(p.name) // 触发 get。注意：只有通过 proxy 实例才会触发 get
```

代码有点长，并且有点复杂，大家可以暂停看一下。

在这段代码中，我们通过 `Proxy` 代理了 `person` 的 `getter` 行为和 `setter` 行为。从而可以监听到 `person` 的赋值操作和输出操作。

那么下面我们来看 `Proxy` 配合 `Reflect` 的场景，这个场景可能稍微有一些复杂，需要大家在搞明白 `Proxy` 和 `Reflect` 之后再查看：

```js
const person = {
	lastName: '张',
	firstName: '三',
	// 通过 get 标识符标记，可以让方法的调用像属性的调用一样
	get fullName() {
		return this.lastName + this.firstName
	}
}

const proxy = new Proxy(person, {
	get(target, key, receiver) {
		console.log('触发了 getter')
		// getter 行为本应触发三次，但是只触发了一次。这是因为 fullName 中的 this 指向了 target（person），而不是 proxy 实例
		// return target[key]

		// 正常触发三次
		return Reflect.get(target, key, receiver)
	}
})

console.log(proxy.fullName)
```

在上面的这段代码中，我们为 `person` 提供了一个 `get fullName() ` 的属性方法，当 `fullName` 被触发时，它应该存在 **三次 `getter` 行为**，即： **fullName、lastName、firstName**。

但是如果我们在 `get` 监听中，使用 `target[key]` 的方式，那么这三次的 `getter` 行为只会被监听一次。原因是因为 `fullName` 中的 `this` 指向 `person`，而不会指向 `proxy 实例`。

所以我们需要通过 `Reflect.get` 来完成这个行为。 `Reflect.get` 的第三个参数可以控制 `fullName` 的 `this` 指向，使其指向 `receiver`，也就是  `proxy 实例`。



### 旧习换新

如果大家从事业务开发，那么 `Proxy` 和 `Reflect` 使用的场景应该并不多。而如果有一天，你需要监听某个对象的 `getter` 或者 `setter` 动作了，那么可以直接通过 `Proxy` 来完成。



## 第十五章：正则表达式

基本上每一本 `JavaScript` 的书籍都会包含一个 **正则表达式** 的环节，但是讲道理在日常的开发中 **正则表达式** 的使用不足以让我们花费大量的时间，同时书中的那些内容也不足以支撑复杂场景的 **正则表达式** 使用。

在本书的第十五章中，我摘抄出了 **3 个新增的正则标记符**，为大家提供参考。



## 第十六章：共享内存

作者在书中说道： **绝大多数的开发者并不需要在线程之间共享内存。**  作者说的很对，所以我们这里不会花费篇章来说这个问题。如果你需要，那么可以看下书中讲解的内容。



## 第十七章：其他特性

第十七章的其他特性，主要呈现了一些单一、不成系统的特性。这些特性虽然大多都比较简单，但是有些在日常开发中还是比较有用的。

我从中抽出来了对我们日常开发有价值的新特性，咱们一起来看一下：

- **BigInt**：`BigInt` 主要用来处理大数字问题：

  ```js
  // BigInt：处理大数字（大于 2^53 - 1 的整数）问题
  const bigNum = 900719925474099596
  console.log(bigNum); // 9867273627366328000  数值错误
  
  // const bigIntObj = BigInt(900719925474099596n)
  const bigIntObj = 900719925474099596n // 加上 n 表示 bigint
  console.log(bigIntObj.toString()); // 900719925474099596
  ```

- **新的整数字面量语法（二进制、八进制）**：主要针对二进制、八进制

  ```js
  // 二进制 0b 开头
  console.log(0b1000); // 8
  // 八进制 0o 开头
  console.log(0o17); // 15
  ```

- **省略 catch 绑定的异常**

  ```js
  // 省略 catch 绑定的异常
  try {
    JSON.parse('abc')
  } catch {
    console.log('不需要为 catch(err) {...}');
  }
  ```

- **新的 Math 方法**
  <img src="%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E7%8E%B0%E4%BB%A3%20JavaScript.assets/image-20230220191342331.png" alt="image-20230220191342331" style="zoom:33%;" />

- **取幂运算符**

  ```js
  // 取幂运算符 **
  console.log(2 ** 3); // 2 * 2 * 2 = 8
  ```

- **空值合并**

  ```js
  // 空值合并 ??
  const num = 0 // 0 是一个正常的数值，但是在 JavaScript 中 0 参与逻辑运算会被当做 “假”
  // 利用逻辑或的逻辑中断特性
  console.log(num || 300); // 300
  
  // 但是在程序中，有些时候 0 会被作为一个有意义的值，所以上面案例，我们去期望得到的是 0
  // 利用空值合并：?? 前面的值只有为 null 或者 undefined 才会被认为 “假”
  console.log(num ?? 300); // 0
  ```

- **可选链**

  ```js
  // 可选链 xx?.xx  
  const person = {
    name: '张三'
  }
  // console.log(person.child.name); // child 为 undefined，所以报错 Cannot read properties of undefined (reading 'name')
  
  // 利用可选链，如果 ? 前面为 null 或者 undefined ，则逻辑短路
  console.log(person.child?.name); // undefined
  ```



## 第十八章：即将推出的类特性

## 第十九章：展望未来

最后的十八和十九章，对我们现在而言意义就不大了。里面很多的特性现在并不支持，在实际开发中使用的场景也非常有限。

如果你对这些东西比较感兴趣的话，那么可以看一下。否则意义不大。



## 总结

`OK`，那么到这里整个 **深入理解现代 JavaScript** 的重点内容，咱们就已经全部说完了。

有些小伙伴可能会拿 **JavaScript高级程序设计（红宝书）** 与它作对比。

对于红宝书来说它是前端的一本经典书籍，是非常指的一读的。但是在现在看来里面的很多内容会有一些落后。如果在 《深入理解现代 JavaScript》 和  《红宝书》之间二选一的话，那么我个人建议选择 《深入理解现代 JavaScript》 。

我是 `Sunday`， 关注我，不迷路。和大家一起 **读书**，一起 **分享技术知识**。
