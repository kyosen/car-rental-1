var app = app || {};

$(function() {
	var cars = {
		{carSpec: '普通の自家用車', maxNum: 4, charge: 10000},
		{carSpec: '普通のバス', maxNum: 20, charge: 30000}
	};
	new app.carCollectionView(cars);
};)
