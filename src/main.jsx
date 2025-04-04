
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import AppRouter from './routes/AppRouter.jsx'
import './index.css'
import { Provider } from './components/ui/provider.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter >
    <Provider>
    <AppRouter />
    </Provider>
  </HashRouter>
)
