var app = app || {};

$(function() {
	var cars = {
		{carSpec: '���ʂ̎��Ɨp��', maxNum: 4, charge: 10000},
		{carSpec: '���ʂ̃o�X', maxNum: 20, charge: 30000}
	};
	new app.carCollectionView(cars);
};)
