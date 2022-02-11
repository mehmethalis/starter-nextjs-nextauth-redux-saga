// Do not remove start line
import '../plugins';
import interceptors from "../utils/axiosInterceptors";
import '../styles/style.scss';
import type {AppProps} from 'next/app';
import {Provider} from "react-redux";
import store from "../redux/store";
const App = ({Component, pageProps}: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
export default App
