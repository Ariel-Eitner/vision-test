import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import {CameraAppByArielEitner} from './src/components/camera/Camera';

export default function App() {
  return (
    <Provider store={store}>
      <CameraAppByArielEitner />
    </Provider>
  );
}
