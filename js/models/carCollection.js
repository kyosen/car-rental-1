var app = app || {};
app.CarCollection = Backbone.Collection.extend({
	model: app.Car,
	
	localStorage: new Backbone.LocalStorage('cars-backbone')
});

