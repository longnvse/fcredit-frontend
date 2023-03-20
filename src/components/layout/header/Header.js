import React from "react";
import {Layout} from "antd";
import {useSelector} from "react-redux";
import {useToken} from "antd/es/theme/internal";

const {Header} = Layout;

function CommonHeader(props) {
    const {title} = useSelector(state => state.commonReducer);
    // const [searchParams] = useSearchParams();
    // let navigate = useNavigate();
    // const {pathname} = useLocation();
    // const inputRef = useRef();
    // const onChangeSearch = (e) => {
    //     const {value} = e.target;
    //     searchBounce(value);
    // }
    //
    // const searchBounce = useCallback(debounce((nextValue) => {
    //     if (!nextValue) {
    //         searchParams.delete("keyword");
    //     } else {
    //         searchParams.set("keyword", nextValue);
    //     }
    //     navigate(`${pathname}?${searchParams.toString()}`)
    // }, 500), [pathname]);
    const [token] = useToken();

    return (<Header
        className={"flex flex-row justify-between items-center"}
        style={{
            background: "#DF5173", padding: 0, borderLeft: "1px solid inherit",
        }}
    >
        <div className="flex items-center justify-between w-full">
            <div className={"text__header pl-4"}>{title}</div>
            <div className="mr-2">
                <div className="flex items-center">
                    {/*<ProfileIcon/>*/}
                </div>
            </div>
        </div>
    </Header>);
}

export default CommonHeader;
