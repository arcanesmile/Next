
import type { NextPage } from 'next'
import HeroSection from '../components/HeroSection'
import ServiceTabs from '../components/ServiceTabs'
import RecordSection from '../components/RecordSection'
import Services from '../components/Services'
import WorkProcess from '../components/WorkProcess'
import Request from '../components/Request'



const Home: NextPage = () => {
  return (
      <main>
        <HeroSection />
        <ServiceTabs />
        <RecordSection />
        <Services />
        <Request />
        <WorkProcess />
      </main>
  )
}

export default Home