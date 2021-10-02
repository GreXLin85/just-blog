import { LogoProps } from "../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Logo: React.FC<LogoProps> = (props) => {
    const { children, ...rest } = props;
    return (
        <div className={'Logo'}>
            <div className={'LogoIcon'}>
                <FontAwesomeIcon icon={faCoffee} />
            </div>
            <div className={'LogoText'}>
                {rest.logoTitle}
            </div>
        </div>
    );

}

export default Logo;