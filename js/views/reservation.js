var app = app || {};

app.ReservationView = Backbone.View.extend({
	tagName: 'div',
	className: 'ReservationContainer',
	template: _.template($('#reservationTemplate').html()),

	events: {
		'click .completeReservation': 'reserveCar'
	},
	
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	reserveCar: function(){
		console.log("—\–ñ“o˜^Š®—¹");
		// this.model.destroy();
		
		// this.remove();
	}

});

