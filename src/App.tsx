import React, { useState } from "react";
import "./app.scss";

export default function App() {
	const [currentNumber, setCurrentNumber] = useState<number>(0);
	const [storedNumber, setStoredNumber] = useState<number>(0);
	const [currentOperation, setCurrentOperation] = useState<string>("");

	function numberButtonHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
		if (currentNumber <= 999999999999) {
			const newNumber: string = (event.target as HTMLInputElement).value;
			const oldNumber: string = currentNumber.toString();
			const result: number = parseInt(oldNumber + newNumber);

			setCurrentNumber(result);
		}
	}

	function clearEverythingButtonHandler(): void {
		setStoredNumber(0);
		setCurrentNumber(0);
		setCurrentOperation("");
	}

	function clearButtonHandler(): void {
		setCurrentNumber(0);
	}

	function operationButtonHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
		const operation: string = (event.target as HTMLInputElement).value;

		if (currentOperation !== "") {
			setCurrentOperation(operation);
			return;
		}

		setStoredNumber(currentNumber);
		setCurrentNumber(0);
		setCurrentOperation(operation);
	}

	function enterButtonHandler(): void {
		switch (currentOperation) {
			case "":
				break;
			case "+":
				setStoredNumber(storedNumber + currentNumber);
				setCurrentNumber(0);
				break;
			case "-":
				setStoredNumber(storedNumber - currentNumber);
				setCurrentNumber(0);
				break;
			case "×":
				setStoredNumber(storedNumber * currentNumber);
				setCurrentNumber(0);
				break;
			case "÷":
				if (currentNumber === 0) {
					setStoredNumber(0);
					setCurrentNumber(0);
					return;
				}

				setStoredNumber(storedNumber / currentNumber);
				setCurrentNumber(0);
				break;
		}
	}

	return (
		<main>
			<h1>Typescript Simple Calculator</h1>
			<div>
				<section className="display">
					<div className="storedNumber">{storedNumber}</div>
					<div className="currentNumber">
						<span>{currentOperation}</span>
						{currentNumber}
					</div>
				</section>
				<section className="buttons">
					<button onClick={clearEverythingButtonHandler}>CE</button>
					<button onClick={clearButtonHandler}>C</button>
					<button onClick={operationButtonHandler} value="÷">
						÷
					</button>
					<button onClick={operationButtonHandler} value="×">
						×
					</button>
					<button onClick={numberButtonHandler} value="7">
						7
					</button>
					<button onClick={numberButtonHandler} value="8">
						8
					</button>
					<button onClick={numberButtonHandler} value="9">
						9
					</button>
					<button onClick={operationButtonHandler} value="-">
						-
					</button>
					<button onClick={numberButtonHandler} value="4">
						4
					</button>
					<button onClick={numberButtonHandler} value="5">
						5
					</button>
					<button onClick={numberButtonHandler} value="6">
						6
					</button>
					<button onClick={numberButtonHandler} value="1">
						1
					</button>
					<button onClick={numberButtonHandler} value="2">
						2
					</button>
					<button onClick={numberButtonHandler} value="3">
						3
					</button>
					<button className="position-plus" onClick={operationButtonHandler} value="+">
						+
					</button>
					<button onClick={numberButtonHandler} value="0">
						0
					</button>
					<button>.</button>
					<button className="position-enter" onClick={enterButtonHandler}>
						Enter
					</button>
				</section>
			</div>
		</main>
	);
}
