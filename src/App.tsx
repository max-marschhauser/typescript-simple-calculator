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

	function keyPressed(event: React.KeyboardEvent<HTMLElement>): void {
		const key = event.key;

		console.log(key);
		switch (key) {
			case "+": {
				if (currentOperation !== "") {
					setCurrentOperation("+");
					return;
				}

				setStoredNumber(currentNumber);
				setCurrentNumber(0);
				setCurrentOperation("+");

				break;
			}
			case "-": {
				if (currentOperation !== "") {
					setCurrentOperation("-");
					return;
				}

				setStoredNumber(currentNumber);
				setCurrentNumber(0);
				setCurrentOperation("-");

				break;
			}
			case "*": {
				if (currentOperation !== "") {
					setCurrentOperation("×");
					return;
				}

				setStoredNumber(currentNumber);
				setCurrentNumber(0);
				setCurrentOperation("×");

				break;
			}
			case "/": {
				if (currentOperation !== "") {
					setCurrentOperation("÷");
					return;
				}

				setStoredNumber(currentNumber);
				setCurrentNumber(0);
				setCurrentOperation("÷");

				break;
			}
			case "Backspace": {
				setCurrentNumber(0);
				setCurrentOperation("");
				break;
			}
			case "Delete": {
				setStoredNumber(0);
				setCurrentNumber(0);
				setCurrentOperation("");
				break;
			}
			case "1": {
				if (currentNumber <= 999999999999) {
					const newNumber: string = "1";
					const oldNumber: string = currentNumber.toString();
					const result: number = parseInt(oldNumber + newNumber);

					setCurrentNumber(result);

					break;
				}
			}
			case "2": {
				if (currentNumber <= 999999999999) {
					const newNumber: string = "2";
					const oldNumber: string = currentNumber.toString();
					const result: number = parseInt(oldNumber + newNumber);

					setCurrentNumber(result);

					break;
				}
			}
			case "3": {
				if (currentNumber <= 999999999999) {
					const newNumber: string = "3";
					const oldNumber: string = currentNumber.toString();
					const result: number = parseInt(oldNumber + newNumber);

					setCurrentNumber(result);

					break;
				}
			}
			case "4": {
				if (currentNumber <= 999999999999) {
					const newNumber: string = "4";
					const oldNumber: string = currentNumber.toString();
					const result: number = parseInt(oldNumber + newNumber);

					setCurrentNumber(result);

					break;
				}
			}
			case "5": {
				if (currentNumber <= 999999999999) {
					const newNumber: string = "5";
					const oldNumber: string = currentNumber.toString();
					const result: number = parseInt(oldNumber + newNumber);

					setCurrentNumber(result);

					break;
				}
			}
			case "6": {
				if (currentNumber <= 999999999999) {
					const newNumber: string = "6";
					const oldNumber: string = currentNumber.toString();
					const result: number = parseInt(oldNumber + newNumber);

					setCurrentNumber(result);

					break;
				}
			}
			case "7": {
				if (currentNumber <= 999999999999) {
					const newNumber: string = "7";
					const oldNumber: string = currentNumber.toString();
					const result: number = parseInt(oldNumber + newNumber);

					setCurrentNumber(result);

					break;
				}
			}
			case "8": {
				if (currentNumber <= 999999999999) {
					const newNumber: string = "8";
					const oldNumber: string = currentNumber.toString();
					const result: number = parseInt(oldNumber + newNumber);

					setCurrentNumber(result);

					break;
				}
			}
			case "9": {
				if (currentNumber <= 999999999999) {
					const newNumber: string = "9";
					const oldNumber: string = currentNumber.toString();
					const result: number = parseInt(oldNumber + newNumber);

					setCurrentNumber(result);

					break;
				}
			}
			case "0": {
				if (currentNumber <= 999999999999) {
					const newNumber: string = "0";
					const oldNumber: string = currentNumber.toString();
					const result: number = parseInt(oldNumber + newNumber);

					setCurrentNumber(result);

					break;
				}
			}
		}
	}

	return (
		<main onKeyDown={keyPressed}>
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
					<button className="position-zero" onClick={numberButtonHandler} value="0">
						0
					</button>

					<button autoFocus className="position-equals" onClick={enterButtonHandler}>
						=
					</button>
				</section>
			</div>
		</main>
	);
}
