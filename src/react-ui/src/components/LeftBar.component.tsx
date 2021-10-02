import { LeftBarProps } from "../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LeftBar: React.FC<LeftBarProps> = (props) => {
    const { children, ...rest } = props;

    return (
        <div className={'LeftBar'}>
            <div className={'LeftBarHeader'}>
                {rest.title}
            </div>
            <div className={'LeftBarContent'}>
                {rest.items.map((item, index) => {
                    return (
                        <a key={index} href={item.url} className={'LeftBarItem'}>
                            <FontAwesomeIcon icon={item.icon} className={'LeftBarIcon'} />
                            {item.label}
                        </a>
                    )
                })}
            </div>
        </div>
    );

}

export default LeftBar;