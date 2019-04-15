let tax = 0.08;
let numElem = document.getElementById('value');
let taxElem = document.getElementById('taxRate');
let btn = document.getElementById('btn');
let errorMsg = document.getElementById('errorText');


// インプットテキストにオートフォーカス
value.focus();


// ボタンクリックでイベント発火
btn.addEventListener('click',function(){
//エラーメッセージを空白にする
	errorMsg.innerHTML = ''; 

// 10進数の整数を返す
	let parseNum = parseInt(numElem.value,10);

//数字と文字を混ぜて入力された際のエラー対応
	if(isNaN(numElem.value)){
		errorMsg.innerHTML = '正しく入力してください';
		numElem.value = '';
		value.focus();
		return false;
	}

// 数値である
	if(!isNaN(parseNum)){
		let result = addTax(parseNum,tax);
		console.log(result);
// HTMLに出力する
		let resultElem = document.getElementById('calcResult');
		let inputElem = document.getElementById('noCalc');
		resultElem.innerHTML = `${result}円`;
		inputElem.innerHTML = `${parseNum}円`;
		numElem.value = '';
		value.focus();

	}else{
		errorMsg.innerHTML = '数値を入力してください';
		numElem.value = '';
		value.focus();
		return false;
	}
	

});


// 計算用関数
function addTax(parseNum,tax){
	console.log(`税率：${tax}%`);
	return Math.floor(parseNum + parseNum*tax);
}

