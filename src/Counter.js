import { useState } from "react";
function Counter() {
	const [count, setCount] = useState(0);
	function increment() {
		setCount(count + 1);
	}
	function decrement() {
		const count_result = (count === 0) ? 0 : count - 1;
		setCount(count_result);
	}
	function reset() {
		setCount(0);
	}
	return (
		<div className="counter">
			<input type="button" value="カウントを増やす" onClick={increment} />
			<input type="button" value="カウントを減らす" onClick={decrement} />
			<input type="button" value="カウントをリセットする" onClick={reset} />
			<p>{count}回</p>
		</div>
	);
}
export default Counter;