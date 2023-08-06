import { ErrorBoundary } from 'react-error-boundary';
import Home from '.';
import Custom404 from './404Error';

const Error404Page = () => {
    return (
        <ErrorBoundary FallbackComponent={Custom404}>
            <Custom404 />
        </ErrorBoundary>
    );
};

export default Error404Page;