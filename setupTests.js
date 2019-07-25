import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

process.env.PUBLIC_URL = '';
configure({adapter: new Adapter()});
