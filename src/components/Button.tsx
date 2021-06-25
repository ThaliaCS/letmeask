import { ButtonHTMLAttributes} from 'react';
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};


export default function Button({isOutlined = false, ...props}: ButtonProps) {
    return (      
        //pega todas as props que o botão recebe e passa pro botão html
        <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props}/>
    )
}
