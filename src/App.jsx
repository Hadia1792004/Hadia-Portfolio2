import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'
import { Route, Routes } from 'react-router'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LazyMotion>
    </MotionConfig>
  )
}

export default App
