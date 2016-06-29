import 'normalize.css';
import './index.css';

if (process.env.NODE_ENV !== 'production') {
  require('../index.html');
}

export default function hello() {
  return 'hello';
}
