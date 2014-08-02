var app = app || {};

app.CarCollectionView = Backbone.View.extend({
	el: '#cars',
	
	initialize: function(){
		this.collection = new app.CarCollection();
		this.collection.fetch();
		this.listenTo(this.collection, 'add', this.renderCar);
		this.render();
	},
	render: function(){
		this.collection.each(function(item){
			this.renderCar(item);
		}, this);
	},
	renderCar: function(item){
		var carView = new app.CarView({
			model:item
		});
		this.$el.append(carView.render().el);
	},

	renderReserve: function(){
		console.log('‚â‚×');
		var reservationView = new app.ReservationView({
			model : new app.Reservation()
		});
		this.$el.append(reservationView.render().el);
	},
	
	events: {
		'click #add': 'addCar',
		'click #cars': 'render',
		'click .carContainer ul li .reserve': 'renderReserve',
	},
	
	addCar: function(e) {
		e.preventDefault();
		
		var formData = {};
		
		$('#addCar div').children('input').each(function(i, el){
			if($(el).val() != ''){
				formData[el.id] = $(el).val();
			}
		});
		
		this.collection.create(new app.Car(formData));
	},
});
