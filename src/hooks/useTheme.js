import { useContext } from 'react';

import ThemeContext from '@/context/theme/context';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
