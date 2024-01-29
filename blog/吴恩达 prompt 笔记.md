---
slug: wuenda-prompt-note
title: 吴恩达prompt课程学习笔记
tags: [ai, prompt]
---

> 本课程主要介绍 ChatGPT 提示工程，由 Isa Fulford 教授和作者共同授课。课程将关注指令调整的大型语言模型（LLM）及其最佳实践，强调指令调整?的 LLM 更适合实际应用，具有更高的安全性和协调性。作者提醒，当使用指令调整 LLM 时，应将其视为一个聪明但不了解任务细节的人，给出明确、具体的指令。内容总结于 https://github.com/datawhalechina/prompt-engineering-for-developers 。

<!--truncate-->

## 简介

> 本课程主要介绍 ChatGPT 提示工程，由 Isa Fulford 教授和作者共同授课。课程将关注指令调整的大型语言模型（LLM）及其最佳实践，强调指令调整的 LLM 更适合实际应用，具有更高的安全性和协调性。作者提醒，当使用指令调整 LLM 时，应将其视为一个聪明但不了解任务细节的人，给出明确、具体的指令。在下一章中，将讨论如何创建更清晰的提示和给 LLM 时间去思考的重要原则。

Notes: 内容总结于 https://github.com/datawhalechina/prompt-engineering-for-developers


## 两个 prompt 基本原则

### 原则1 - 编写清晰、具体的指令

- 指令prompt应清晰，具体
- 指令清晰不意味着指令简短，在大多情况下，清晰意味着要提供更多的上下文

#### 策略一 ：使用分隔符清晰地表示输入的不同部分
> `提示注入`是指如果用户将某些输入添加到提示中，则可能会向模型提供与您想要执行的操作相冲突的指令，从而使其遵循冲突的指令而不是执行您想要的操作。换句话说，机器有的时候无法很好的区分**你的要求**和 **你的待处理文本**，因此需要一个手段清晰的告诉机器。

**使用分隔符是一个不错的策略。**
- 分隔符可以是 \```text\``` """text""" ###text###
- 可以使用任何明显的标点符号将特定的文本部分与提示的其余部分分开

以下是一个例子
> 注意，原文中是三个反括号前的 `\`， 是为了防止markdown语法解析为代码块，这里改为#，也印证了上面所说 **分隔符可以标点符号**

```
prompt:

把用三个#字符括起来的文本总结成一句话。
###
你应该提供尽可能清晰、具体的指示，以表达你希望模型执行的任务。
这将引导模型朝向所需的输出，并降低收到无关或不正确响应的可能性。
不要将写清晰的提示与写简短的提示混淆。
在许多情况下，更长的提示可以为模型提供更多的清晰度和上下文信息，从而导致更详细和相关的输出。
###

chatGPT - 3.5 回答
为了使模型执行任务更准确，应提供具体、清晰的指示，不要混淆简短和清晰，长的提示能提供更多的清晰度和上下文信息。
```

#### 策略二：要求一个结构化的输出

- 要求生成一个结构化的输出，这可以使模型的输出更容易被我们解析
- 可以是 Json、HTML 等格式

```
prompt:

请生成包括书名、作者和类别的三本虚构书籍清单
并以 JSON 格式提供，其中包含以下键:book_id、title、author、genre

chatGPT - 3.5 回答
以下是三本虚构书籍的清单，包括书名、作者、类别和唯一标识符 `book_id`，并以 JSON 格式提供:
[
  {
    "book_id": 1,
    "title": "The Time Traveler's Wife",
    "author": "Audrey Niffenegger",
    "genre": "Science Fiction"
  },
  {
    "book_id": 2,
    "title": "The Hunger Games",
    "author": "Suzanne Collins",
    "genre": "Young Adult Dystopian"
  },
  {
    "book_id": 3,
    "title": "The Shadow of the Wind",
    "author": "Carlos Ruiz Zafón",
    "genre": "Mystery"
  }
]

```

#### 策略三：要求模型检查是否满足条件

在如下示例中，我们将分别给模型两段文本，分别是制作茶的步骤以及一段没有明确步骤的文本。我们将要求模型判断其是否包含一系列指令，如果包含则按照给定格式重新编写指令，不包含则回答未提供步骤。

```
prompt:

您将获得由三个#括起来的文本。
如果它包含一系列的指令，则需要按照以下格式重新编写这些指令：

第一步 - ...
第二步 - …
…
第N步 - …

如果文本中不包含一系列的指令，则直接写“未提供步骤”。"
###
泡一杯茶很容易。首先，需要把水烧开。
在等待期间，拿一个杯子并把茶包放进去。
一旦水足够热，就把它倒在茶包上。
等待一会儿，让茶叶浸泡。几分钟后，取出茶包。
如果你愿意，可以加一些糖或牛奶调味。
就这样，你可以享受一杯美味的茶了。
###

chatGPT - 3.5 回答

以下是泡茶的步骤：
第一步 - 把水烧开。
第二步 - 在等待期间，拿一个杯子并把茶包放进去。
第三步 - 一旦水足够热，就把它倒在茶包上。
第四步 - 等待一会儿，让茶叶浸泡。
第五步 - 几分钟后，取出茶包。
第六步 - 如果你愿意，可以加一些糖或牛奶调味。
就这样，你可以享受一杯美味的茶了。
```


```
prompt:

您将获得由三个#括起来的文本。
如果它包含一系列的指令，则需要按照以下格式重新编写这些指令：

第一步 - ...
第二步 - …
…
第N步 - …

如果文本中不包含一系列的指令，则直接写“未提供步骤”。"
###
今天阳光明媚，鸟儿在歌唱。
这是一个去公园散步的美好日子。
鲜花盛开，树枝在微风中轻轻摇曳。
人们外出享受着这美好的天气，有些人在野餐，有些人在玩游戏或者在草地上放松。
这是一个完美的日子，可以在户外度过并欣赏大自然的美景。
###

chatGPT - 3.5 回答

未提供步骤。
```


#### 策略四：提供少量示例
古人有言 抛砖引玉 讲的即是如此

```
prompt:

你的任务是以一致的风格回答问题。 
<孩子>: 教我耐心。
<祖父母>: 挖出最深峡谷的河流源于一处不起眼的泉眼；最宏伟的交响乐从单一的音符开始；最复杂的挂毯以一根孤独的线开始编织。
<孩子>: 教我韧性。

chatGPT - 3.5 回答
对于孩子来说，学会韧性是非常重要的。韧性可以帮助你克服困难并继续追求自己的目标。要建立韧性，你可以尝试以下方法：

1.  培养积极的心态：积极的思维方式可以帮助你面对挑战时更有信心和耐心。试着看到每个挑战都是一个机会来学习和成长。
    
2.  坚持不懈：当你面临困难时，不要轻易放弃。相反，试着找到解决问题的方法，不断尝试直到成功为止。
    
3.  寻求支持：寻求来自家人和朋友的支持是非常重要的。他们可以帮助你鼓励你，提供建议和支持。
    
4.  学习放松的技巧：学会放松和减轻压力的技巧，例如冥想或深呼吸，可以帮助你在面对挑战时保持镇定和耐心。
    

总之，学会韧性需要时间和努力，但这是一项非常有价值的技能。通过培养积极的心态、坚持不懈、寻求支持和学习放松的技巧，你可以建立自己的韧性，应对生活中的挑战并实现自己的目标。
```

呕吼 翻车了
不过没关系，利用前面所学，将prompt优化一下

```
prompt:

你的任务是以一致的风格回答问题。
三个#包裹的是一个示例 
###
<孩子>: 教我耐心。
<祖父母>: 挖出最深峡谷的河流源于一处不起眼的泉眼；最宏伟的交响乐从单一的音符开始；最复杂的挂毯以一根孤独的线开始编织。
### 
<孩子>: 教我韧性。 
<祖父母>: xxx
请输出xxx的内容

chatGPT - 3.5 回答
<祖父母>回答道：“韧性来自于克服困难和挫折的能力，这需要持续的努力和坚韧不拔的精神。就像一棵强壮的树需要扎根于土壤深处才能经受住风雨的考验一样，你也需要建立内心的坚定和自信，不断地成长和学习，才能拥有真正的韧性。”
```
也一般，但是在没有很离谱。

### 原则2 - 给模型时间去思考
如果您让某人在没有时间计算出答案的情况下完成复杂的数学问题，他们也可能会犯错误。
机器也一样。
如果您给模型一个在短时间或用少量文字无法完成的任务，它可能会猜测错误。
因此，在这些情况下，您可以指示模型花更多时间思考问题，这意味着它在任务上花费了更多的计算资源。

心急吃不了热豆腐，一步步来。


#### 策略一：指定完成任务所需的步骤

```
prompt:

执行以下操作：
1-用一句话概括下面用三个#括起来的文本。
2-将摘要翻译成法语。
3-在法语摘要中列出每个人名。
4-输出一个 JSON 对象，其中包含以下键：French_summary，num_names。

###
在一个迷人的村庄里，兄妹杰克和吉尔出发去一个山顶井里打水。\
他们一边唱着欢乐的歌，一边往上爬，\
然而不幸降临——杰克绊了一块石头，从山上滚了下来，吉尔紧随其后。\
虽然略有些摔伤，但他们还是回到了温馨的家中。\
尽管出了这样的意外，他们的冒险精神依然没有减弱，继续充满愉悦地探索。
###

chatGPT - 3.5 回答
1- 兄妹在山顶井冒险打水，意外跌倒后回家继续探索。
2- Dans un charmant village, les frère et soeur Jack et Jill partent chercher de l'eau dans un puits au sommet d'une montagne. En chantant joyeusement, ils montent, mais malheureusement, Jack trébuche sur une pierre et tombe de la montagne, suivi de près par Jill. Bien qu'ils aient été légèrement blessés, ils sont retournés chez eux. Malgré cet accident, leur esprit d'aventure n'a pas diminué et ils continuent d'explorer avec plaisir.
3- Personnages: Jack, Jill.
4- {
     "French_summary": "Dans un charmant village, les frère et soeur Jack et Jill partent chercher de l'eau dans un puits au sommet d'une montagne. En chantant joyeusement, ils montent, mais malheureusement, Jack trébuche sur une pierre et tombe de la montagne, suivi de près par Jill. Bien qu'ils aient été légèrement blessés, ils sont retournés chez eux. Malgré cet accident, leur esprit d'aventure n'a pas diminué et ils continuent d'explorer avec plaisir.",
     "num_names": 2
   }
```

虽然1234列的很清楚，但回答的并不是很好，优化一下

```
prompt:

1-用一句话概括下面用###括起来的文本。
2-将摘要翻译成英语。
3-在英语摘要中列出每个名称。
4-输出一个 JSON 对象，其中包含以下键：English_summary，num_names。

请使用以下格式：
文本：<要总结的文本>
摘要：<摘要>
翻译：<摘要的翻译>
名称：<英语摘要中的名称列表>
输出 JSON：<带有 English_summary 和 num_names 的 JSON>

###
在一个迷人的村庄里，兄妹杰克和吉尔出发去一个山顶井里打水。\
他们一边唱着欢乐的歌，一边往上爬，\
然而不幸降临——杰克绊了一块石头，从山上滚了下来，吉尔紧随其后。\
虽然略有些摔伤，但他们还是回到了温馨的家中。\
尽管出了这样的意外，他们的冒险精神依然没有减弱，继续充满愉悦地探索。
###

chatGPT - 3.5 回答
文本：在一个迷人的村庄里，兄妹杰克和吉尔出发去一个山顶井里打水，不幸摔伤后回家继续探索。
摘要：杰克和吉尔在村庄里的冒险
翻译：Jack and Jill set out to fetch water from a mountaintop well in a charming village, but unfortunately they fall and get slightly injured. Despite the accident, they continue to explore with joy back at home.
名称：Jack, Jill
输出 JSON：{
    "English_summary": "Jack and Jill set out to fetch water from a mountaintop well in a charming village, but unfortunately they fall and get slightly injured. Despite the accident, they continue to explore with joy back at home.",
    "num_names": 2
}
```

优化后的prompt结合了 步骤 + 模板 的感觉，给出的答案较前者更清晰。


#### 策略二：指导模型在下结论之前找出一个自己的解法

```
prompt:

判断学生的解决方案是否正确。
问题:
我正在建造一个太阳能发电站，需要帮助计算财务。
    土地费用为 100美元/平方英尺
    我可以以 250美元/平方英尺的价格购买太阳能电池板
    我已经谈判好了维护合同，每年需要支付固定的10万美元，并额外支付每平方英尺10美元
    作为平方英尺数的函数，首年运营的总费用是多少。
学生的解决方案：
设x为发电站的大小，单位为平方英尺。
费用：
    土地费用：100x
    太阳能电池板费用：250x
    维护费用：100,000美元+100x
    总费用：100x+250x+100,000美元+100x=450x+100,000美元

chatGPT - 3.5 回答
学生的解决方案看起来是正确的。通过计算每个成本项并将它们相加，可以得出总费用的表达式，其中包括土地费用、太阳能电池板费用和维护费用。

在这个方案中，学生正确地将每个成本项与发电站的大小（平方英尺）相关联，并正确地使用了相应的价格和费率。他们最后得出了一个总费用的表达式，其中包括了所有的成本项。

因此，学生的解决方案是正确的。
```


但是注意，学生的解决方案实际上是错误的。

我们可以通过指导模型先自行找出一个解法来解决这个问题。

在接下来这个 Prompt 中，我们要求模型先自行解决这个问题，再根据自己的解法与学生的解法进行对比，从而判断学生的解法是否正确。同时，我们给定了输出的格式要求。通过明确步骤，让模型有更多时间思考，有时可以获得更准确的结果。在这个例子中，学生的答案是错误的，但如果我们没有先让模型自己计算，那么可能会被误导以为学生是正确的。

```
prompt:

请判断学生的解决方案是否正确，请通过如下步骤解决这个问题：

步骤：
    首先，自己解决问题。
    然后将你的解决方案与学生的解决方案进行比较，并评估学生的解决方案是否正确。在自己完成问题之前，请勿决定学生的解决方案是否正确。

使用以下格式：
    问题：问题文本
    学生的解决方案：学生的解决方案文本
    实际解决方案和步骤：实际解决方案和步骤文本
    学生的解决方案和实际解决方案是否相同：是或否
    学生的成绩：正确或不正确

问题：
    我正在建造一个太阳能发电站，需要帮助计算财务。 
    - 土地费用为每平方英尺100美元
    - 我可以以每平方英尺250美元的价格购买太阳能电池板
    - 我已经谈判好了维护合同，每年需要支付固定的10万美元，并额外支付每平方英尺10美元
    作为平方英尺数的函数，首年运营的总费用是多少。

学生的解决方案：
    设x为发电站的大小，单位为平方英尺。
    费用：
    1. 土地费用：100x
    2. 太阳能电池板费用：250x
    3. 维护费用：100,000+100x
    总费用：100x+250x+100,000+100x=450x+100,000

实际解决方案和步骤：

chatGPT - 3.5 回答
我们可以按照以下步骤来解决这个问题：
1. 计算土地费用：每平方英尺100美元，所以土地费用为100x美元。
2. 计算太阳能电池板费用：每平方英尺250美元，所以太阳能电池板费用为250x美元。
3. 计算维护费用：固定的10万美元加上每平方英尺10美元，所以维护费用为100,000+10x美元。
4. 计算总费用：将所有成本项相加，得到总费用：100x+250x+100,000+10x=360x+100,000美元。
因此，首年运营的总费用为360x+100,000美元。
学生的解决方案和实际解决方案是否相同：不相同
学生的成绩：不正确
```

### llm目前的局限性 - 幻觉
**虚假知识**：模型偶尔会生成一些看似真实实则编造的知识

如果模型在训练过程中接触了大量的知识，它并没有完全记住所见的信息，因此它并不很清楚自己知识的边界。这意味着它可能会尝试回答有关晦涩主题的问题，并编造听起来合理但实际上并不正确的答案。我们称这些编造的想法为**幻觉**。

例如在如下示例中，我们要求告诉我们 Boie 公司生产的 AeroGlide UltraSlim Smart Toothbrush 产品的信息，事实上，这个公司是真实存在的，但产品是编造的，模型则会一本正经地告诉我们编造的知识。

```
prompt:

Tell me about AeroGlide UltraSlim Smart Toothbrush by Boie

chatGPT - 3.5 回答
AeroGlide UltraSlim Smart Toothbrush by Boie is an electric toothbrush designed for effective and efficient oral hygiene. It features an advanced bristle technology that helps to gently and effectively clean the teeth and gums, promoting good oral health.

One of the key features of the AeroGlide UltraSlim Smart Toothbrush is its ultra-slim design, which makes it easy to maneuver and reach all areas of the mouth, including the back teeth. The toothbrush is also equipped with a rechargeable battery and a long battery life, making it convenient and eco-friendly.

The toothbrush also comes with smart features such as Bluetooth connectivity, which allows you to track your brushing progress and receive reminders when it's time to replace the brush head. It also comes with a two-minute timer that ensures you brush your teeth for the recommended time.

The AeroGlide UltraSlim Smart Toothbrush is made by Boie, a company based in the United States that produces personal care products using innovative and sustainable materials. The toothbrush is made with BPA-free, hypoallergenic, and antimicrobial materials, making it safe and gentle on the teeth and gums.

Overall, the AeroGlide UltraSlim Smart Toothbrush by Boie is a high-quality electric toothbrush that provides an efficient and effective oral hygiene experience with its advanced technology, slim design, and smart features.
```

模型会输出看上去非常真实的编造知识，这有时会很危险。因此，请确保使用我们在本节中介绍的一些技巧，以尝试在构建自己的应用程序时避免这种情况。这是模型已知的一个弱点，也是我们正在积极努力解决的问题。在你希望模型根据文本生成答案的情况下，另一种减少幻觉的策略是先要求模型找到文本中的任何相关引用，然后要求它使用这些引用来回答问题，这种追溯源文档的方法通常对减少幻觉非常有帮助。
