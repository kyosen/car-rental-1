car-rental-1
============
* �ȉ��� underscore-min.js �̃G���[�������悭�킩��Ȃ������B

```
Uncaught TypeError: Cannot read property 'replace' of undefined underscore-min.js:5
j.template underscore-min.js:5
(anonymous function) car.js:6
```

* html ��ŁA�e���v���[�g�^�O���L�q����ꏊ���ԈႢ�A_.template �֐��Ɉ����n����DOM���܂��ǂݍ��܂�Ă��Ȃ��������߁B
```
// views/car.js

app.CarView = Backbone.View.extend({
	tagName: 'div',
	className: 'carContainer',
	template: _.template($('#carTemplate').html()), // �������G���[
```
	
* ���Ђ̃T���v���Ɠ��l�ɁAviews ���� models ���ŁA�Ή����� javascript �t�@�C�����𓯂��ɂ������AChrome �� Console �Ńf�o�b�O����ۂɃt�@�C���������o�Ȃ��̂ŁA�ǂ̃t�@�C�����̔��ʂ����ɂ��������B

* Collection �̃T�u�N���X���� "Collection"���܂߂����A�悩�����̂��낤���H�A���`�p�^�[���H
