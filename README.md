car-rental-1
============
* 以下の underscore-min.js のエラー原因がよくわからなかった。

```
Uncaught TypeError: Cannot read property 'replace' of undefined underscore-min.js:5
j.template underscore-min.js:5
(anonymous function) car.js:6
```

* html 上で、テンプレートタグを記述する場所を間違い、_.template 関数に引き渡したDOMがまだ読み込まれていなかったため。
```
// views/car.js

app.CarView = Backbone.View.extend({
	tagName: 'div',
	className: 'carContainer',
	template: _.template($('#carTemplate').html()), // ここがエラー
```
	
* 書籍のサンプルと同様に、views 下と models 下で、対応する javascript ファイル名を同じにしたが、Chrome の Console でデバッグする際にファイル名しか出ないので、どのファイルかの判別がしにくかった。

* Collection のサブクラス名に "Collection"を含めたが、よかったのだろうか？アンチパターン？
