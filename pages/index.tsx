import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="main-container">
      <Head>
        <title>Social Gadget Lab</title>
        <meta name="description" content="We are a non-profit organization focused on the development of social technology for the public good." />
      </Head>

      <main>
        <b>
          Social Gadget Lab | <Link href="/fund">Social Gadget Fund</Link>
        </b>
        <p>
            We are a non-profit organization focused on the development of social technology for the public good.
        </p>
        <b>
          Areas of interest
        </b>
        <ul>
          <li>Efficient general-purpose verifiable computing</li>
          <li>Content-addressable web</li>
          <li>Online forums, collective intelligence, and democracy</li>
          <li>Human-in-the-loop judgments</li>
          <li>Inclusive finance</li>
          <li>Improving social productivity of financial instruments and markets</li>
        </ul>
        <b>
          Fundraising
        </b>
        <p>
          We’re looking for an endowment of $2.5m.
          This will provide a runway of approximately 18 months for 5 full-time FTE research partners.
        </p>
        <b>
          Contact
        </b>
        <p>
          <a href="https://twitter.com/SocialGadgetLab" target="_blank" rel="noreferrer">@SocialGadgetLab</a> |{' '}
          <a href="mailto:labmember001@socialgadgetlab.org" target="_blank" rel="noreferrer">labmember001@socialgadgetlab.org</a>
        </p>
      </main>
    </div>
  )
}

export default Home
