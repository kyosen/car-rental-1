var app = app || { };

app.Reservation = Backbone.Model.extend({
	defaults: {
		reservationId: 0, // �\��ԍ�
		startYear: '',     // �����^���J�n����
		startMonth: '',     // �����^���J�n����
		startDay: '',     // �����^���J�n����
		endYear : '',      // �����^���I������
		endMonth : '',      // �����^���I������
		endDay : '',      // �����^���I������
		reservedCar : {} // �\�񂵂���
	}
});
