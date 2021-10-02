import { SearchBoxProps } from "../types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox: React.FC<SearchBoxProps> = (props) => {
    const { children, ...rest } = props;
    return (
        <div className={'SearchBox'}>
            <div className={'SearchBoxIcon'}>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <input type="text" className={'SearchBoxInput'} placeholder={rest.placeholder} />
        </div>
    );

}

export default SearchBox;