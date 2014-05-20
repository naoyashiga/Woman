var mainCtrl = function($scope){
	$scope.makiYokos = [
	{"url":"http://s.okmusic.jp/news_images/images/40787/original.jpg?1369655519","score":10}
	];
	/*
	$scope.makiYokos = [
	{"url":"http://s.okmusic.jp/news_images/images/40787/original.jpg?1369655519","score":10},
	{"url":"http://27.media.tumblr.com/tumblr_kwp4gqAlAg1qaqtc9o1_400.jpg","score":5},
	{"url":"http://blogimg.goo.ne.jp/user_image/23/41/425cb1b4e0878f4b8faba08bb453aa64.jpg","score":3},
	{"url":"http://cdn-ak.f.st-hatena.com/images/fotolife/g/gamella/20081116/20081116215438.jpg","score":3},
	{"url":"http://3.bp.blogspot.com/_KKNyXy942PA/TVHroeBbqvI/AAAAAAAAD-I/mlNu6_Rzw1o/s1600/audrey-hepburn-mark-shaw-3.jpg","score":3},
	{"url":"http://kojika-hiroko.up.d.seesaa.net/kojika-hiroko/image/E382AAE383BCE38389E383AAE383BCE38398E38383E38397E38390E383BCE383B3E3808CE383ADE383BCE3839EE381AEE4BC91E697A5E3808D.jpg?d=a0","score":3},
	{"url":"http://4.bp.blogspot.com/-GooNQtuEoK4/ThxHAtDKExI/AAAAAAAAANY/vHfyyRYJS44/s640/audrey+hepburn.jpg","score":3},
	];
	*/
}

var makiYokoItemCtrl = function($scope){
	$scope.increment = function(){
		$scope.makiYoko.score++;
	}
}
