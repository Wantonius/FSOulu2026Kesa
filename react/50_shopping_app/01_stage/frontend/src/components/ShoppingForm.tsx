import React,{useState} from 'react';
import ShoppingItem from '../models/ShoppingItem';

interface Props {
	add(item:ShoppingItem):void;
}

interface State {
	type:string;
	count:number;
	price:number;
}

const ShoppingForm = (props:Props) => {

	const [state,setState] = useState<State>({
		type:"",
		count:0,
		price:0
	})
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onSubmit = (event:React.SyntheticEvent) => {
		event.preventDefault();
		const item = new ShoppingItem(state.type,state.count,state.price,0);
		props.add(item);
		setState({
			type:"",
			count:0,
			price:0
		})
	}
}

export default ShoppingForm;