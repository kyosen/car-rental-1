var app = app || {};
app.ReservationCollection = Backbone.Collection.extend({
	model: app.Reservation,
	
	localStorage: new Backbone.LocalStorage('reservations-backbone')
});

