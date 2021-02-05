import { SetStateAction } from 'react';

export interface InputParams {
	type: string;
	setValue: any;
	placeHolder: string;
	value: string;
}
export interface InputProps {
	({ placeHolder, setValue, type, value }: InputParams): Element;
}
