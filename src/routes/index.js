import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Events from '../pages/events'
import Talents from '../pages/talents'
import Categories from '../pages/categories'
import Signin from '../pages/signin'
import Layout from '../components/Layout'
import Orders from '../pages/orders'

function MainRoute() {
  return (
    <Routes>
        <Route path='/' element={<Signin />} />

        <Route element={<Layout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/events' element={<Events />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/talents' element={<Talents />} />
            <Route path='/orders' element={<Orders />} />
        </Route>
    </Routes>
  )
}

export default MainRoute