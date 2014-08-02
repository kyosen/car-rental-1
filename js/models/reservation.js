var app = app || { };

app.Reservation = Backbone.Model.extend({
	defaults: {
		reservationId: 0, // 予約番号
		startYear: '',     // レンタル開始日時
		startMonth: '',     // レンタル開始日時
		startDay: '',     // レンタル開始日時
		endYear : '',      // レンタル終了日時
		endMonth : '',      // レンタル終了日時
		endDay : '',      // レンタル終了日時
		reservedCar : {} // 予約した車
	}
});
