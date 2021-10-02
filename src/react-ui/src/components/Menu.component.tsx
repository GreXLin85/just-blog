import { MenuProps } from "../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Menu : React.FC<MenuProps> = (props) =>{
    const { children, ...rest } = props;
    console.log(rest);
    
    return (
        <div className={'Menu'}>
            {rest.items.map((item, index) => {
                return (
                    <a key={index} href={item.url} className={'MenuItem'}>
                        <FontAwesomeIcon icon={item.icon} className={'MenuItemIcon'} />
                        {item.label}
                    </a>
                )
            })}
        </div>
    );

}

export default Menu;