import { ModalByType, Tree } from './components';

import { baseUrl, treeName } from './constants';
import { useFetch, useModalContext } from './hooks';
import { Node } from './types';

function App() {
    const { data, sendRequest } = useFetch<Node>(baseUrl + 'api.user.tree.get?treeName=' + treeName);
    const { modalType } = useModalContext();

    return (
        <div className="tree-app">
            {data && <Tree data={data} level={0} />}
            {modalType && <ModalByType onSuccess={sendRequest} type={modalType} />}
        </div>
    );
}

export default App;
