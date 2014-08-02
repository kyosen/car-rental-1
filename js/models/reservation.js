var app = app || { };

app.Reservation = Backbone.Model.extend({
	defaults: {
		reservationId: 0, // 予約番号
		startDate: '',     // レンタル開始日時
		endDate : '',      // レンタル終了日時
		reservedCar : {} // 予約した車
	}
});
