var app = app || { };

app.Reservation = Backbone.Model.extend({
	defaults: {
		reservationId: 0, // �\��ԍ�
		startDate: '',     // �����^���J�n����
		endDate : '',      // �����^���I������
		reservedCar : {} // �\�񂵂���
	}
});
