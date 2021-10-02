import { Menu, Logo, SearchBox } from './';

import { faCode, faCloud } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = (props) => {
    return (
        <div className={'Header'}>
            <Logo logoTitle={'Just Blog'} logoURL={"/"} />
            <SearchBox placeholder={'Search Blog'}></SearchBox>
            <Menu items={[
                { label: "Programming", url: "#", icon: faCode },
                { label: "Cloud", url: "#", icon: faCloud }
            ]}></Menu>
        </div>
    );

}

export default Header;